# LensAura Studio

LensAura Studio is a polished photography studio booking website built with React, Vite, Express, and MongoDB Atlas.

## Features
- Responsive landing page for a photography studio
- Interactive booking form with validation and feedback
- Express REST API for booking requests
- MongoDB Atlas integration for storing bookings
- Production-ready structure for frontend and backend deployment

---

## Local Development

### Prerequisites
- Node.js 18+
- npm

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
cp .env.example .env   # Edit .env with your MongoDB URI
node index.js
```

---

## 🚀 Deployment Guide

### Architecture
```
[Vercel]  ──→  [Render]  ──→  [MongoDB Atlas]
 Frontend       Backend         Database
```

---

### Step 1: Set Up MongoDB Atlas (Free Tier)

1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas) and create a free account
2. Create a new **Shared Cluster** (M0 Free Tier)
3. In **Database Access**, create a database user with a password
4. In **Network Access**, add `0.0.0.0/0` to allow access from anywhere (required for Render)
5. Click **Connect** → **Connect your application** → copy the connection string
6. Replace `<password>` in the connection string with your actual password
7. Your URI should look like:
   ```
   mongodb+srv://youruser:yourpass@cluster0.xxxxx.mongodb.net/lensaura?retryWrites=true&w=majority
   ```

---

### Step 2: Deploy Backend to Render

1. Push your code to a **GitHub repository**
2. Go to [render.com](https://render.com) and sign in with GitHub
3. Click **New → Web Service**
4. Connect your GitHub repo
5. Configure:
   | Setting | Value |
   |---|---|
   | **Name** | `lensaura-backend` |
   | **Root Directory** | `backend` |
   | **Runtime** | Node |
   | **Build Command** | `npm install` |
   | **Start Command** | `node index.js` |
   | **Plan** | Free |
6. Add **Environment Variables**:
   | Key | Value |
   |---|---|
   | `MONGODB_URI` | Your MongoDB Atlas connection string |
   | `NODE_ENV` | `production` |
   | `FRONTEND_URL` | *(Leave blank for now, fill after Vercel deploy)* |
7. Click **Deploy**
8. Once live, copy the Render URL (e.g., `https://lensaura-backend.onrender.com`)

---

### Step 3: Deploy Frontend to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New → Project**
3. Import your GitHub repo
4. Configure:
   | Setting | Value |
   |---|---|
   | **Root Directory** | `frontend` |
   | **Framework Preset** | Vite |
   | **Build Command** | `npm run build` |
   | **Output Directory** | `dist` |
5. Add **Environment Variable**:
   | Key | Value |
   |---|---|
   | `VITE_API_URL` | Your Render backend URL (e.g., `https://lensaura-backend.onrender.com`) |
6. Click **Deploy**

---

### Step 4: Connect Everything

1. Go back to **Render Dashboard** → your backend service → **Environment**
2. Set `FRONTEND_URL` to your Vercel URL (e.g., `https://lensaura-studio.vercel.app`)
3. **Redeploy** the backend for the CORS change to take effect

---

### Step 5: Verify

1. Visit your Vercel URL — the site should load
2. Submit a test booking through the form
3. Check MongoDB Atlas → **Browse Collections** → confirm the booking was saved

---

## Environment Variables Reference

### Backend (Render)
| Variable | Description |
|---|---|
| `PORT` | Server port (Render sets this automatically) |
| `MONGODB_URI` | MongoDB Atlas connection string |
| `FRONTEND_URL` | Vercel frontend URL (for CORS) |
| `NODE_ENV` | `production` |

### Frontend (Vercel)
| Variable | Description |
|---|---|
| `VITE_API_URL` | Render backend URL |

---

## Tech Stack
- **Frontend**: React 19, Vite 8
- **Backend**: Express 5, Mongoose 9
- **Database**: MongoDB Atlas
- **Hosting**: Vercel (frontend) + Render (backend)

## License
MIT

