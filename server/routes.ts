import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, organization, projectType, message } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }
      
      const contactData = {
        to: "info@creation-pro.com",
        from: email,
        name,
        organization: organization || "",
        projectType: projectType || "",
        message,
        timestamp: new Date().toISOString(),
      };
      
      console.log("Contact form submission:", JSON.stringify(contactData, null, 2));
      
      res.json({ success: true, message: "Message received successfully" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ error: "Failed to process contact form" });
    }
  });

  return httpServer;
}
