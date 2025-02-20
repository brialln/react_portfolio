import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

app.post("/send-email", async (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email, // Sender (user who filled out the form)
        to: process.env.EMAIL_USER, // Your email to receive messages
        subject: `New Message from ${name}`,
        text: `From: ${name} (${email})\n\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to send email", error });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded" : "Not Loaded");