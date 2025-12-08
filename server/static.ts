import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }
 // 1️⃣ Serve resume explicitly
  app.use("/resume.pdf", (req, res) => {
    const filePath = path.resolve(distPath,"public","resume.pdf");
    res.download(filePath, "Sharvani_Resume.pdf", (err) => {
      if (err) {
        console.error("Error downloading resume:", err);
        res.status(500).send("Error downloading resume");
      }
    });
  });
  // 2️⃣ Serve all other static files
  // app.use(express.static(distPath));
  app.use(express.static(path.resolve(__dirname, "public")));
  // 3️⃣ Catch-all for React routing
  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    // res.sendFile(path.resolve(distPath, "index.html"));
     res.sendFile(path.resolve(__dirname, "public", "index.html"));
  });
}
