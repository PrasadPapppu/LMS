📚 Learning Management System (LMS)

A full-stack Learning Management System built using Node.js, Express, MongoDB, and a JavaScript frontend.

🔗 Live URL

https://lms-backend-iota-swart.vercel.app/

🚀 Features

User authentication (JWT)

Student & Instructor roles

Create / Update / Delete courses

Enroll in courses

View course content

Track learning progress

Fully deployed on Vercel

📦 Folder Structure
LMS/
│
├── client/     # Frontend
└── server/     # Backend

🛠️ Installation
1. Clone the repo
git clone https://github.com/PrasadPapppu/LMS.git
cd LMS

2. Backend Setup
cd server
npm install


Create a .env file:

PORT=5000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key


Start backend:

npm start

3. Frontend Setup
cd ../client
npm install
npm run dev

🌐 Deployment (Vercel)
Frontend Deployment

Import repo to Vercel

Select client folder

Deploy

Backend Deployment

Deploy separately (Render / Railway)
OR

Convert Express API into Vercel serverless functions

📡 API Endpoints
Auth
POST /api/auth/register
POST /api/auth/login

Courses
GET    /api/courses
POST   /api/courses
GET    /api/courses/:id
PUT    /api/courses/:id
DELETE /api/courses/:id
