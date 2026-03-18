"use server";
import { Resend } from 'resend';
import { render } from '@react-email/render';
import { MintrixDispatchEmail } from '@/components/emails/MintrixDispatchEmail';
import { services } from '@/lib/services-data'; 
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

// --- 1. EXISTING INQUIRY HANDLER (From Contact Page) ---
export async function submitInquiry(formData: FormData) {
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
    const emailHtml = await render(
      React.createElement(MintrixDispatchEmail, { ...data })
    );

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

// --- 2. ENHANCED BOOKING HANDLER (Multi-Service & No-Schedule Packages) ---
export async function submitBooking(formData: FormData) {
  if (!process.env.RESEND_API_KEY) {
    return { error: "Technical configuration error. Please contact support." };
  }

  const bookingType = formData.get("bookingType") as string;
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const urgency = formData.get("urgency") as string; 
  
  // Date/Time (Only applies to specific targeted service schedules now)
  const date = formData.get("date") as string || "N/A";
  const time = formData.get("time") as string || "N/A";

  let subjectStr = "";
  let protocolHtml = "";

  if (bookingType === 'package') {
    const packageName = formData.get("packageName") as string;
    subjectStr = `🚨 Package Booking: ${packageName} // ${name}`;
    
    // Note: No date/time shown for packages in the email now
    protocolHtml = `
      <p><strong>Booking Type:</strong> Full Package Protocol</p>
      <p><strong>Selected Package:</strong> <span style="color: #D1AB43; font-weight: bold; font-size: 16px;">${packageName}</span></p>
      <br/>
      <div style="background: #222; padding: 15px; border-left: 3px solid #D1AB43;">
        <p style="margin: 0; color: #D1AB43; font-weight: bold;">ACTION REQUIRED:</p>
        <p style="margin: 5px 0 0 0; font-size: 14px; color: #CCC;">Please contact the client immediately to coordinate scheduling for this package.</p>
      </div>
    `;
  } else {
    const servicesPayloadString = formData.get("servicesPayload") as string;
    let servicesListHtml = "";
    
    try {
      const parsedServices = JSON.parse(servicesPayloadString);
      parsedServices.forEach((srv: any, index: number) => {
        const serviceData = services.find(s => s.slug === srv.slug);
        const title = serviceData ? serviceData.title : srv.slug;
        const subReqs = srv.subServices.length > 0 ? srv.subServices.join(", ") : "No specific requirements selected";

        servicesListHtml += `
          <div style="margin-bottom: 15px; padding: 10px; border-left: 3px solid #D1AB43; background: #222;">
            <p style="margin: 0 0 5px 0;"><strong>Service ${index + 1}:</strong> <span style="color: #D1AB43;">${title}</span></p>
            <p style="margin: 0; font-size: 14px; color: #CCC;"><strong>Requirements:</strong> ${subReqs}</p>
          </div>
        `;
      });
    } catch (e) {
      servicesListHtml = "<p>Error parsing service list.</p>";
    }

    subjectStr = `🔧 Multi-Service Dispatch // ${name}`;
    
    let schedulingHtml = "";
    if (urgency === '90-min') {
      schedulingHtml = `<p><strong>Urgency:</strong> <span style="color: #FF4444; font-weight: bold; font-size: 16px;">EMERGENCY (Within 90 Mins)</span></p>`;
    } else if (urgency === '24-hours') {
      schedulingHtml = `<p><strong>Urgency:</strong> PRIORITY (Within 24 Hours) - <em style="color: #D1AB43;">Team must call to confirm exact time.</em></p>`;
    } else {
      schedulingHtml = `
        <p><strong>Urgency:</strong> SCHEDULED</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
      `;
    }

    protocolHtml = `
      <p><strong>Booking Type:</strong> Targeted Service(s)</p>
      <h4 style="color: #D1AB43; border-bottom: 1px solid #333; padding-bottom: 5px;">Requested Services:</h4>
      ${servicesListHtml}
      <br/>
      <h4 style="color: #D1AB43; border-bottom: 1px solid #333; padding-bottom: 5px;">Scheduling:</h4>
      ${schedulingHtml}
    `;
  }

  try {
    const { data: resendData, error } = await resend.emails.send({
      from: 'Mintrix Booking <onboarding@resend.dev>',
      to: ['zayanali2003@gmail.com'],
      subject: subjectStr,
      html: `
        <div style="font-family: sans-serif; padding: 30px; border: 1px solid #D1AB43; background-color: #1A1A1A; color: #E8E6D9;">
          <h2 style="color: #D1AB43; text-transform: uppercase; font-style: italic;">Dispatch Authorization Received</h2>
          <hr style="border-color: #333; margin-bottom: 20px;" />
          
          <h3 style="color: #999;">Client Credentials</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Contact Line:</strong> ${phone}</p>
          <p><strong>Email Identity:</strong> ${email}</p>
          <br/>
          
          <h3 style="color: #999;">Operational Directive</h3>
          ${protocolHtml}
          
          <hr style="border-color: #333; margin-top: 30px; margin-bottom: 20px;" />
          <p style="font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 1px;">
            Note: No payment was collected online. Pricing authentication and payment collection must occur on-site.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("RESEND_API_ERROR:", error);
      return { error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error("SYSTEM_DISPATCH_FAILURE:", err);
    return { error: "Booking logged but email notification failed." };
  }
}