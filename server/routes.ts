import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactSchema.parse(req.body);

      // TODO: Integrate with email service (Resend)
      // For now, just log the contact form submission
      console.log("Contact form submission:", data);

      // Simulate email sending
      // In production, this would use Resend or another email service
      res.json({ 
        success: true, 
        message: "Message received! (Note: Email integration pending)" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: error.errors });
      } else {
        res.status(500).json({ error: "Failed to process contact form" });
      }
    }
  });

  return httpServer;
}
