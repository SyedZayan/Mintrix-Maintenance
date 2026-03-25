"use server";
import { Resend } from 'resend';
import { render } from '@react-email/render';
import { MintrixDispatchEmail } from '@/components/emails/MintrixDispatchEmail';
import { services } from '@/lib/services-data'; 
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = 'info@mintrixmaintenance.com';

// ============================================================================
// 1. GENERAL INQUIRY HANDLER (From Contact Page)
// ============================================================================
export async function submitInquiry(formData: FormData) {
  if (!process.env.RESEND_API_KEY) {
    return { error: "Technical configuration error. Please contact support." };
  }

  const data = {
    fullName: formData.get("fullName") as string,
    contactNumber: formData.get("contactNumber") as string,
    email: formData.get("email") as string,
    description: formData.get("description") as string,
  };

  try {
    // 1A. ALERT TO MINTRIX TEAM
    const { error: adminError } = await resend.emails.send({
      // THE FIX: Put the customer's name in the From field so it's obvious who sent it,
      // but keep your email so Namecheap doesn't block it.
    from: `${data.fullName} (via Mintrix) <dispatch@mintrixmaintenance.com>`,     
    to: [ADMIN_EMAIL],
      replyTo: data.email,
      subject: `📩 General Inquiry // ${data.fullName}`,
      html: `
        <div style="font-family: sans-serif; padding: 30px; border: 1px solid #D1AB43; background-color: #1A1A1A; color: #E8E6D9;">
          <h2 style="color: #D1AB43; text-transform: uppercase; font-style: italic;">General Inquiry Received</h2>
          <hr style="border-color: #333; margin-bottom: 20px;" />
          <h3 style="color: #999;">Client Details</h3>
          <p><strong>Name:</strong> ${data.fullName}</p>
          <p><strong>Phone:</strong> ${data.contactNumber}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}" style="color: #D1AB43;">${data.email}</a></p>
          <br/>
          <h3 style="color: #999;">Message / Query</h3>
          <p style="background: #222; padding: 15px; border-left: 3px solid #D1AB43; white-space: pre-wrap; line-height: 1.6;">${data.description}</p>
        </div>
      `,
    });

    if (adminError) console.error("RESEND_ADMIN_ERROR:", adminError);

    // 1B. AUTOMATED CONFIRMATION TO USER
    if (data.email) {
      const { error: userError } = await resend.emails.send({
        from: 'Mintrix Maintenance <info@mintrixmaintenance.com>', 
        to: [data.email],
        reply_to: ADMIN_EMAIL, 
        subject: 'Inquiry Received // Mintrix Maintenance Dubai',
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #D1AB43; background-color: #1A1A1A; color: #E8E6D9; padding: 40px;">
            <h1 style="color: #D1AB43; text-transform: uppercase; font-style: italic;">Message Received.</h1>
            <p style="font-size: 16px; line-height: 1.6;">Hello ${data.fullName},</p>
            <p style="font-size: 16px; line-height: 1.6;">Thank you for reaching out to Mintrix Maintenance. We have successfully logged your inquiry into our system.</p>
            
            <div style="background: #222; padding: 20px; border-left: 4px solid #D1AB43; margin: 25px 0;">
              <p style="margin: 0; font-weight: bold; color: #D1AB43; text-transform: uppercase; font-size: 12px;">Next Steps:</p>
              <p style="margin: 10px 0 0 0; font-size: 15px;">A technical coordinator is currently reviewing your message and will contact you shortly to assist you further.</p>
            </div>
            
            <hr style="border: 0; border-top: 1px solid #333; margin: 30px 0;" />
            <p style="font-size: 12px; color: #666; text-align: center; text-transform: uppercase; letter-spacing: 2px;">
              Mintrix Maintenance Dubai // 24/7 Rapid Response
            </p>
          </div>
        `,
      });
      if (userError) console.error("RESEND_USER_ERROR:", userError);
    }

    return { success: true };
  } catch (err) {
    console.error("INQUIRY_FAILURE:", err);
    return { error: "Inquiry logged but email notification failed." };
  }
}

// ============================================================================
// 2. ENHANCED BOOKING HANDLER (Multi-Service & Packages)
// ============================================================================
export async function submitBooking(formData: FormData) {
  if (!process.env.RESEND_API_KEY) {
    return { error: "Technical configuration error. Please contact support." };
  }

  const bookingType = formData.get("bookingType") as string;
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const urgency = formData.get("urgency") as string; 
  const date = formData.get("date") as string || "N/A";
  const time = formData.get("time") as string || "N/A";

  let subjectStr = "";
  let protocolHtml = "";

  if (bookingType === 'package') {
    const packageName = formData.get("packageName") as string;
    subjectStr = `🚨 Package Booking: ${packageName} // ${name}`;
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
    // 2A. DISPATCH ALERT TO TEAM
    const { error: adminError } = await resend.emails.send({
      // THE FIX: Put the customer's name in the From field
      from: `${name} (Booking) <info@mintrixmaintenance.com>`,
      to: [ADMIN_EMAIL],
      // THE FIX: Ensure reply_to is the customer's email
      reply_to: email, 
      subject: subjectStr,
      html: `
        <div style="font-family: sans-serif; padding: 30px; border: 1px solid #D1AB43; background-color: #1A1A1A; color: #E8E6D9;">
          <h2 style="color: #D1AB43; text-transform: uppercase; font-style: italic;">Dispatch Authorization Received</h2>
          <hr style="border-color: #333; margin-bottom: 20px;" />
          <h3 style="color: #999;">Client Credentials</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Contact Line:</strong> ${phone}</p>
          <p><strong>Email Identity:</strong> <a href="mailto:${email}" style="color: #D1AB43;">${email}</a></p>
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

    if (adminError) {
      console.error("RESEND_API_ERROR (Admin):", adminError);
      return { error: adminError.message };
    }

    // 2B. AUTOMATED CONFIRMATION TO USER
    if (email) {
      const { error: userError } = await resend.emails.send({
        from: 'Mintrix Maintenance <info@mintrixmaintenance.com>', 
        to: [email],
        reply_to: ADMIN_EMAIL,
        subject: 'Booking Authenticated // Mintrix Maintenance Dubai',
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #D1AB43; background-color: #1A1A1A; color: #E8E6D9; padding: 40px;">
            <h1 style="color: #D1AB43; text-transform: uppercase; font-style: italic;">Protocol Initiated.</h1>
            <p style="font-size: 16px; line-height: 1.6;">Hello ${name},</p>
            <p style="font-size: 16px; line-height: 1.6;">Your request for <strong>${bookingType === 'package' ? 'Maintenance Package' : 'Technical Services'}</strong> has been successfully received and added to our active dispatch queue.</p>
            
            <div style="background: #222; padding: 20px; border-left: 4px solid #D1AB43; margin: 25px 0;">
              <p style="margin: 0; font-weight: bold; color: #D1AB43; text-transform: uppercase; font-size: 12px;">Next Steps:</p>
              <p style="margin: 10px 0 0 0; font-size: 15px;">Our technical coordinator is currently assigning a team to your location. <strong>Expect a call within the next few minutes</strong> to confirm the exact arrival time of our engineers.</p>
            </div>

            <p style="font-size: 14px; color: #999;">For urgent updates, please reference your contact number: ${phone}</p>
            
            <hr style="border: 0; border-top: 1px solid #333; margin: 30px 0;" />
            <p style="font-size: 12px; color: #666; text-align: center; text-transform: uppercase; letter-spacing: 2px;">
              Mintrix Maintenance Dubai // 24/7 Rapid Response
            </p>
          </div>
        `,
      });
      if (userError) console.error("RESEND_API_ERROR (User):", userError);
    }

    return { success: true };
  } catch (err) {
    console.error("BOOKING_FAILURE:", err);
    return { error: "Booking logged but email notification failed." };
  }
}