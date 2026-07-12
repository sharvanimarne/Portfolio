import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactSchema.parse(req.body);

      if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL) {
        console.error("Missing RESEND_API_KEY or CONTACT_EMAIL environment variable");
        return res.status(500).json({ error: "Email service is not configured" });
      }

      const { error } = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: process.env.CONTACT_EMAIL,
        replyTo: data.email,
        subject: `[Portfolio] ${data.subject}`,
        text: `From: ${data.name} (${data.email})\n\n${data.message}`,
      });

      if (error) {
        console.error("Resend error:", error);
        return res.status(500).json({ error: "Failed to send message" });
      }

      res.json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: error.errors });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ error: "Failed to process contact form" });
      }
    }
  });

  return httpServer;
}