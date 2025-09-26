# MindNest

MindNest is a simple note/knowledge management app for capturing ideas, snippets, and project notes so you can remember and act on them later.

## Features
- Create, edit, and organize notes and links
- Sync with a MongoDB backend
- JWT-based authentication
- Share your brain with others

## Tech stack
- Frontend: Vite + React
- Backend: Node.js + Express
- Database: MongoDB
- Auth: JSON Web Tokens (JWT)

## Getting started (development)
1. Clone the repo and `cd` into the project root.
2. Copy environment files:
   - In `/server`: rename `.env.example` → `.env`
   - In `/client`: rename `.env.example` → `.env`
3. Edit the server `.env` file and set the following values:
   - `MONGO_URL` — your MongoDB connection string
   - `JWT_SECRET` — a secure secret used to sign auth tokens
4. Open two terminal windows/tabs:
   - Terminal A (server):
     ```bash
     cd server
     npm install
     npm run dev
     ```
   - Terminal B (client):
     ```bash
     cd client
     npm install
     npm run dev
     ```
5. When both server and client are running, open the app in your browser:
   - `http://localhost:5173`

## License
MIT

