import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());

const YT_API_KEY = process.env.YT_API_KEY;

// YouTube Search Proxy
app.get("/api/search", async (req, res) => {
  try {
    const q = req.query.q;
    if (!q) return res.status(400).json({ error: "Missing query" });

    const base = "https://www.googleapis.com/youtube/v3/search";
    const params = new URLSearchParams({
      part: "snippet",
      q,
      maxResults: "10",
      type: "video",
      key: YT_API_KEY
    });

    const response = await fetch(`${base}?${params}`);
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: "Search failed", details: e.message });
  }
});

// MP3 Proxy
app.get("/api/mp3", async (req, res) => {
  try {
    const url = req.query.url;
    if (!url) return res.status(400).json({ error: "Missing YouTube URL" });

    const api = `https://apis.davidcyriltech.my.id/youtube/mp3?url=${encodeURIComponent(url)}`;
    const response = await fetch(api);
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: "MP3 fetch failed", details: e.message });
  }
});

// MP4 Proxy
app.get("/api/mp4", async (req, res) => {
  try {
    const url = req.query.url;
    if (!url) return res.status(400).json({ error: "Missing YouTube URL" });

    const api = `https://apis.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(url)}`;
    const response = await fetch(api);
    const data = await response.json();
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: "MP4 fetch failed", details: e.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));
