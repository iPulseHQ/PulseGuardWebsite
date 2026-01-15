import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validatie
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Alle velden zijn verplicht" },
        { status: 400 }
      );
    }

    // Email naar info@ipulse.one
    await resend.emails.send({
      from: "iPulse Contactformulier <formulier@contact.ipulse.one>",
      to: "info@ipulse.one",
      replyTo: email,
      subject: `Nieuw contactformulier bericht van ${name}`,
      html: `
        <h2>Nieuw contactformulier bericht</h2>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Bericht:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // Email naar de afzender (bevestiging)
    await resend.emails.send({
      from: "iPulse Contactformulier <formulier@contact.ipulse.one>",
      to: email,
      subject: "Bedankt voor je bericht - iPulse",
      html: `
        <h2>Bedankt voor je bericht, ${name}!</h2>
        <p>We hebben je bericht ontvangen en zullen zo spoedig mogelijk contact met je opnemen.</p>
        <p>Je bericht:</p>
        <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${message.replace(/\n/g, "<br>")}</p>
        <p>Met vriendelijke groet,<br>Het iPulse team</p>
      `,
    });

    return NextResponse.json(
      { message: "Email succesvol verzonden" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Er is een fout opgetreden bij het verzenden van de email" },
      { status: 500 }
    );
  }
}
