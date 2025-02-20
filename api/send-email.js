import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method === "OPTIONS") {
        // Handle CORS preflight request
        res.setHeader("Access-Control-Allow-Origin", "https://briallnportfolio.vercel.app");
        res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        res.status(200).end();
        return;
    }

    res.setHeader("Access-Control-Allow-Origin", "https://briallnportfolio.vercel.app");
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `New Message from ${name}`,
        text: `From: ${name} (${email})\n\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to send email", error });
    }
}