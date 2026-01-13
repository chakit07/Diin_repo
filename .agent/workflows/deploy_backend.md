---
description: How to deploy the backend to Render
---
# Deploy Backend to Render

1.  **Push to GitHub**: Ensure your latest code, including the `backend/render.yaml` file, is pushed to your GitHub repository.
    ```bash
    git add .
    git commit -m "Prepare for Render deployment"
    git push origin main
    ```

2.  **Create Service on Render**:
    *   Go to [dashboard.render.com](https://dashboard.render.com).
    *   Click **New +** and select **Blueprints**.
    *   Connect your GitHub account and select your repository (`Diin_repo`).
    *   Render will automatically detect the `backend/render.yaml` file.

3.  **Configure Environment Variables**:
    *   Render will prompt you for the environment variables defined in `render.yaml` (`sync: false` ones).
    *   **STRIPE_SECRET_KEY**: Copy this from your local `.env` or Stripe Dashboard.
    *   **MONGO_URI**: Copy your production MongoDB connection string (e.g., from MongoDB Atlas).
    *   **CLIENT_URL**: Set this to your frontend URL (you might need to deploy the frontend first or update this later. For now, you can use `http://localhost:5173` for testing if strictly necessary, but for production it should be your deployed frontend URL).

4.  **Deploy**:
    *   Click **Apply**. Render will start building and deploying your backend.

5.  **Verify**:
    *   Once deployed, Render will give you a URL (e.g., `https://diin-backend.onrender.com`).
    *   Update your **Frontend** `.env` file with this new URL:
        ```
        VITE_API_URL=https://diin-backend.onrender.com
        ```
