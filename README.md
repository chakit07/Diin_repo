# Diin Repo

This repository contains the source code for the Diin Technologies application.

## Project Structure

- `frontend/`: React application (Vite + Tailwind CSS)
- `backend/`: Express.js server (Node.js)

## Getting Started

### Prerequisites

- Node.js installed

### Setup

1. **Install Dependencies**

   Root directory does not have a package.json, so install separately:

   ```bash
   # Frontend
   cd frontend
   npm install

   # Backend
   cd backend
   npm install
   ```

2. **Environment Variables**

   Ensure you have `.env` files in both directories.

   **Backend (.env)**:
   ```env
   PORT=5000
   STRIPE_SECRET_KEY=sk_test_...
   CLIENT_URL=http://localhost:5173
   ```

   **Frontend (.env)**:
   ```env
   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
   ```

3. **Running the Application**

   Open two terminals:

   **Terminal 1 (Backend)**:
   ```bash
   cd backend
   npm run dev
   ```

   **Terminal 2 (Frontend)**:
   ```bash
   cd frontend
   npm run dev
   ```

   The frontend will be available at `http://localhost:5173`.
