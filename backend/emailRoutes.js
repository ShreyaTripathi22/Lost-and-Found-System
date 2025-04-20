// backend/emailRoutes.js
import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

router.post("/send-claim-email", async (req, res) => {
  const { finderEmail, itemName,claimerName, claimerEmail  } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailContent = `
      Hi there,

      Good news! Someone has expressed interest in claiming your found item, **${itemName}**.

      Here are the details of the person who would like to claim it:

      - **Name:** ${claimerName}
      - **Email:** ${claimerEmail}

      Please get back to them as soon as possible to arrange for the item pickup or further communication. If you need any assistance or have any questions, feel free to reach out!

      Thank you for helping with the Lost & Found community.

      Best regards,
      The FoundIt Team
    `;

    await transporter.sendMail({
      from: `"FoundIt App" <${process.env.EMAIL_USER}>`,
      to: finderEmail,
      subject: `Claim Request for Your Found Item: ${itemName}`,
      text: emailContent,
    });

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
});

export default router;

