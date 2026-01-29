import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { companyName, email, requirements } = body;

    // Validatie
    if (!companyName || !email || !requirements) {
      return NextResponse.json(
        { error: "Alle verplichte velden moeten ingevuld zijn" },
        { status: 400 }
      );
    }

    // Email naar info@ipulse.one
    await resend.emails.send({
      from: "iPulse Offerte Aanvraag <formulier@contact.ipulse.one>",
      to: "info@ipulse.one",
      replyTo: email,
      subject: `Nieuwe offerte aanvraag van ${companyName}`,
      html: `
        <h2>Nieuwe Offerte Aanvraag</h2>
        <p><strong>Bedrijfsnaam:</strong> ${companyName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Wat heeft de klant nodig:</h3>
        <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${requirements.replace(/\n/g, "<br>")}</p>
      `,
    });

    // Bevestigingsmail naar de klant
    await resend.emails.send({
      from: "iPulse <formulier@contact.ipulse.one>",
      to: email,
      subject: "Uw offerte aanvraag is ontvangen - iPulse",
      html: `
        <h2>Bedankt voor uw offerte aanvraag, ${companyName}!</h2>
        <p>Wij hebben uw aanvraag ontvangen en zullen binnen 24 uur contact met u opnemen met een persoonlijke offerte.</p>
        <h3>Uw aanvraag:</h3>
        <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${requirements.replace(/\n/g, "<br>")}</p>
        <p>Met vriendelijke groet,<br>Het iPulse team</p>
      `,
    });

    return NextResponse.json(
      { message: "Offerte aanvraag succesvol verzonden" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending quote request email:", error);
    return NextResponse.json(
      { error: "Er is een fout opgetreden bij het verzenden van de aanvraag" },
      { status: 500 }
    );
  }
}
