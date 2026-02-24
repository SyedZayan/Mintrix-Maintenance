"use server";
import { Resend } from 'resend';
import { render } from '@react-email/render';
import { MintrixDispatchEmail } from '@/components/emails/MintrixDispatchEmail';
import React from 'react';

// SECURE: Pulls the key from your .env.local (which is now hidden by .gitignore)
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitInquiry(formData: FormData) {
  // 1. Guard against missing configuration
  if (!process.env.RESEND_API_KEY) {
    console.error("CRITICAL: RESEND_API_KEY is not defined in environment variables.");
    return { error: "Technical configuration error. Please contact support via phone." };
  }

  const data = {
    fullName: formData.get("fullName") as string,
    contactNumber: formData.get("contactNumber") as string,
    location: formData.get("location") as string,
    service: formData.get("service") as string,
    description: formData.get("description") as string,
  };

  try {
    // 2. Render the component to a secure HTML string
    const emailHtml = await render(
      React.createElement(MintrixDispatchEmail, { ...data })
    );

    // 3. Dispatch the email
    const { data: resendData, error } = await resend.emails.send({
      from: 'Mintrix Dispatch <onboarding@resend.dev>',
      to: ['zayanali2003@gmail.com'],
      subject: `🚨 Priority Dispatch: ${data.location} // ${data.service}`,
      html: emailHtml,
    });

    if (error) {
      console.error("RESEND_API_ERROR:", error);
      return { error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error("SYSTEM_DISPATCH_FAILURE:", err);
    return { error: "System mobilized but notification failed. Please try again." };
  }
}