// app/api/sendEmail/route.ts
import { NextResponse } from "next/server";
import connectDB from "@/lib/dbConnect";
import Contact from "@/models/Contact";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import PropertyInquiryEmail from "@/components/email/PropertyInquiryEmail";
import React from "react";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name = "",
      email = "",
      phone,
      configuration = "",
    } = body;

    // ===== Validation =====
    if (!phone) {
      return NextResponse.json(
        { success: false, error: "Phone number is required." },
        { status: 400 }
      );
    }

    if (!/^\d{10}$/.test(String(phone).trim())) {
      return NextResponse.json(
        { success: false, error: "Enter a valid 10-digit phone number." },
        { status: 400 }
      );
    }

    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Name must be at least 2 characters." },
        { status: 400 }
      );
    }

    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // ===== Step 1: Save to MongoDB =====
    await connectDB();

    const newContact = new Contact({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: String(phone).trim(),
    });

    await newContact.save();
    console.log("Contact saved:", newContact._id);

    // ===== Step 2: Send Notification Email =====
    try {
      // const transporter = nodemailer.createTransport({
      //   host: process.env.SMTP_HOST,
      //   port: Number(process.env.SMTP_PORT),
      //   secure: true,
      //   auth: {
      //     user: process.env.SMTP_USER,
      //     pass: process.env.SMTP_PASS,
      //   },
      // });

      if (
        !process.env.SMTP_HOST ||
        !process.env.SMTP_USER ||
        !process.env.SMTP_PASS ||
        !process.env.CLIENT_EMAIL
      ) {
        throw new Error("SMTP configuration is incomplete.");
      }

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 465),
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const emailHtml = await render(
        React.createElement(PropertyInquiryEmail, {
          name,
          email,
          phone,
          otherFields: configuration ? { Configuration: configuration } : undefined,
        })
      );

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.CLIENT_EMAIL, // where notification goes
        // bcc: process.env.MYBCCEMAIL, // optional bcc
        subject: `New Inquiry - ${name}`,
        html: emailHtml,
      });

      console.log("Notification Email Sent");
    } catch (emailError) {
      console.error("Email sending failed:", emailError);
      return NextResponse.json(
        { success: false, error: "Unable to send your enquiry right now." },
        { status: 502 }
      );
    }

    // ===== Step 3: Return Success Response =====
    return NextResponse.json({
      success: true,
      message: "Thank you! We will contact you shortly.",
      data: {
        mongodbId: newContact._id,
      },
    });
  } catch (error: any) {
    console.error("API Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Try again later.",
        details:
          process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
