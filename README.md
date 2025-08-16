# 🎵 LYRICAL DOWNLODER

A minimal terminal-style site for searching YouTube (via YouTube Data API v3) and downloading MP3/MP4 through a backend proxy.

## 🚀 Features
- YouTube search (Data API v3)
- MP3 & MP4 downloads
- API key hidden in backend
- Frontend styled with Tailwind + monospace fonts

## 📂 Structure
- `backend/` → Node.js + Express proxy (hides API key)
- `frontend/` → static HTML/JS site

## ⚡ Setup
1. Clone repo
2. Install backend deps:
   ```bash
   cd backend
   npm install
   echo \"YT_API_KEY=your_api_key_here\" > .env
   npm start
