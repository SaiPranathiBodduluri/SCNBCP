# Deployment TODO List

## Preparation Done
- [x] Code committed and pushed to GitHub repository: https://github.com/SaiPranathiBodduluri/SCNBCP.git
- [x] Deployment configurations ready (vercel.json for client, render.yaml for server)

## Backend Deployment (Render)
- [ ] Go to https://render.com and sign in
- [ ] Click "New" > "Web Service"
- [ ] Connect your GitHub repository: SaiPranathiBodduluri/SCNBCP
- [ ] Set the root directory to `server`
- [ ] Render will auto-detect the render.yaml configuration
- [ ] Set environment variables in Render dashboard:
  - MONGO_URI: Your MongoDB connection string
  - JWT_SECRET: A secure JWT secret (generate a random string)
  - CLIENT_ORIGIN: https://scnbcp-client.vercel.app (after frontend deployment)
  - SENDGRID_API_KEY: Your SendGrid API key
  - TWILIO_ACCOUNT_SID: Your Twilio SID
  - TWILIO_AUTH_TOKEN: Your Twilio auth token
  - TWILIO_PHONE_NUMBER: Your Twilio phone number
- [ ] Deploy the service
- [ ] Note the deployed backend URL (e.g., https://scnbcp-backend.onrender.com)

## Frontend Deployment (Vercel)
- [ ] Go to https://vercel.com and sign in
- [ ] Click "New Project"
- [ ] Import your GitHub repository: SaiPranathiBodduluri/SCNBCP
- [ ] Set the root directory to `client`
- [ ] Vercel will auto-detect the vercel.json configuration
- [ ] Set environment variables in Vercel dashboard:
  - REACT_APP_API_BASE_URL: Backend URL from Render (e.g., https://scnbcp-backend.onrender.com)
  - REACT_APP_SOCKET_URL: Backend URL from Render (e.g., https://scnbcp-backend.onrender.com)
- [ ] Deploy the project
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
- If you need help with any step, let me know!
