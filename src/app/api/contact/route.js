
import { NextResponse } from "next/server";
import { mailOptions, transporter } from "../config/nodemailer";



export async function POST(req,) {
  if (req.method === "POST") {
    const data = await req.json();
    console.log("data recieve in form handler", data);
    
    try {
        console.log("processing in try case")
        await transporter.sendMail({
          ...mailOptions,
          subject: data.subject,
          html: `
          <div style="max-width: 600px; margin: auto; font-family: Arial, sans-serif; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
          <div style="background-color: #1d4ed8; color: #fff; padding: 20px; text-align: center;">
          <h2 style="font-size: 24px; margin: 0;">New Contact Form Submission</h2>
          </div>
              <div style="padding: 20px; background-color: #f9fafb;">
                <p style="font-size: 18px; font-weight: 500; color: #111827; margin: 0 0 10px;">You have received a new message from your contact form:</p>
                <div style="margin-top: 20px;">
                  <p style="font-size: 16px; color: #1f2937;"><span style="font-weight: 600;">Email:</span> ${data.email}</p>
                  <p style="font-size: 16px; color: #1f2937;"><span style="font-weight: 600;">subject:</span> ${data.subject}</p>
                  <p style="font-size: 16px; color: #1f2937;"><span style="font-weight: 600;">Message:</span></p>
                  <div style="margin-top: 10px; padding: 10px; background-color: #e5e7eb; border-radius: 6px;">
                    <p style="font-size: 16px; color: #111827; line-height: 1.5;">${data.message}</p>
                  </div>
                </div>
              </div>
              <div style="background-color: #1d4ed8; color: #fff; text-align: center; padding: 10px; font-size: 14px;">
              <p style="margin: 0;">Contact Form | Your portfolio  Website</p>
              </div>
              </div>
              `,
            });
            

        return NextResponse.json({ message: "form submited successfully" }, { status: 200 });
      }
      catch (error) {
        console.log("Error sending mail:", error);
        return NextResponse.json({ message: "error while form processing" }, { status: 500 });
      }
    // return NextResponse.json({ message: "Data   received" }, { status: 200 });


  } else {

    return NextResponse.json({ message: "Data  not received" }, { status: 404 });
  }
}
