"use server";
import { Resend } from 'resend';
import { render } from '@react-email/render'; // Import the renderer
import { MintrixDispatchEmail } from '@/components/emails/MintrixDispatchEmail';
import React from 'react';

const resend = new Resend('re_Vm8TkB7o_Pb4HznnXjibSWYr8F2TMBdwb');

export async function submitInquiry(formData: FormData) {
  const data = {
    fullName: formData.get("fullName") as string,
    contactNumber: formData.get("contactNumber") as string,
    location: formData.get("location") as string,
    service: formData.get("service") as string,
    description: formData.get("description") as string,
  };

  try {
    // Manually render the component to an HTML string
    const emailHtml = await render(
      React.createElement(MintrixDispatchEmail, { ...data })
    );

    const { data: resendData, error } = await resend.emails.send({
      from: 'Mintrix Dispatch <onboarding@resend.dev>',
      to: ['zayanali2003@gmail.com'],
      subject: `🚨 Priority Dispatch: ${data.location} // ${data.service}`,
      html: emailHtml, // Use 'html' instead of 'react'
    });

    if (error) {
      console.error("RESEND_ERROR:", error);
      return { error: error.message };
    }

    console.log("Dispatch Sent:", resendData);
    return { success: true };
  } catch (err) {
    console.error("SYSTEM_ERROR:", err);
    return { error: "Technical Handshake Failed. See terminal." };
  }
}