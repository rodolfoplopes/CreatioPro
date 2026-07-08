import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { generateOGMetaTags, getSEOForPath } from "./seoConfig";

export function serveStatic(app: Express) {
  const distPath = path.resolve(process.cwd(), "dist", "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath, {
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('.mp4')) {
        res.setHeader('Content-Type', 'video/mp4');
      }
    }
  }));

  const publicPath = path.resolve(process.cwd(), "public");
  if (fs.existsSync(publicPath)) {
    app.use(express.static(publicPath, {
      setHeaders: (res, filePath) => {
        if (filePath.endsWith('.mp4')) {
          res.setHeader('Content-Type', 'video/mp4');
        }
      }
    }));
  }

  app.use("*", (req, res) => {
    const indexPath = path.resolve(distPath, "index.html");
    let html = fs.readFileSync(indexPath, "utf-8");
    
    const url = req.originalUrl;
    const { lang } = getSEOForPath(url);
    html = html.replace('<html lang="en">', `<html lang="${lang}">`);
    
    const ogTags = generateOGMetaTags(url);
    html = html.replace('<!-- OG_META_TAGS_PLACEHOLDER -->', ogTags);
    
    res.setHeader('Content-Type', 'text/html');
    res.send(html);
  });
}
