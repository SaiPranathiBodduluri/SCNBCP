# Deployment TODO List

## Backend Deployment (Render)
- [ ] Create a new repository on GitHub for the backend
- [ ] Push the server code to GitHub
- [ ] Deploy to Render using the render.yaml configuration
- [ ] Set environment variables in Render:
  - MONGO_URI: Your MongoDB connection string
  - JWT_SECRET: A secure JWT secret
  - CLIENT_ORIGIN: https://scnbcp-client.vercel.app (after frontend deployment)
  - SENDGRID_API_KEY: Your SendGrid API key
  - TWILIO_ACCOUNT_SID: Your Twilio SID
  - TWILIO_AUTH_TOKEN: Your Twilio auth token
  - TWILIO_PHONE_NUMBER: Your Twilio phone number
- [ ] Note the deployed backend URL (e.g., https://scnbcp-backend.onrender.com)

## Frontend Deployment (Vercel)
- [ ] Create a new repository on GitHub for the frontend
- [ ] Push the client code to GitHub
- [ ] Deploy to Vercel using the vercel.json configuration
- [ ] Set environment variables in Vercel:
  - REACT_APP_API_BASE_URL: Backend URL from Render (e.g., https://scnbcp-backend.onrender.com)
  - REACT_APP_SOCKET_URL: Backend URL from Render (e.g., https://scnbcp-backend.onrender.com)
- [ ] Note the deployed frontend URL (e.g., https://scnbcp-client.vercel.app)

## Post-Deployment
- [ ] Update CLIENT_ORIGIN in Render backend with the actual Vercel frontend URL
- [ ] Test the deployed application:
  - Frontend loads correctly
  - API calls work (login, notices, etc.)
  - Socket connections work for real-time notifications
  - File uploads work
- [ ] Verify all features are functional in production

## Notes
- Backend URL: To be determined after Render deployment
- Frontend URL: To be determined after Vercel deployment
- Ensure CORS is properly configured for production URLs
- Test email and SMS services in production environment
