# 📄 Resume Builder (MERN Stack)

A full-stack Resume Builder web application built using the MERN stack (MongoDB, Express.js, React, Node.js).  
This app allows users to create structured, ATS-friendly resumes by entering their personal, educational, and professional details.  
It provides multiple templates, real-time preview, and download functionality for generating professional resumes.

---

## 🚀 Features

- User-friendly interface for resume creation  
- Dynamic form handling for personal, education, and work details  
- Multiple pre-designed resume templates  
- Real-time resume preview while editing  
- CRUD operations for resume data management  
- Download resumes in a ready-to-use format  

---

## 🛠️ Tech Stack

- Frontend: React.js, CSS, Axios  
- Backend: Node.js, Express.js  
- Database: MongoDB (Mongoose ORM)  
- Others: REST API, JavaScript (ES6), Git & GitHub  

---

## ⚙️ Installation & Setup (Run Locally)

1. Clone the repository:  
`git clone https://github.com/sujalchilai123/resume-builder.git`  
`cd resume-builder`

2. Install dependencies:  
- Backend (inside `server` folder):  
`cd server`  
`npm install`  
- Frontend (inside `client` folder):  
`cd ../client`  
`npm install`

3. Configure environment variables:  
- Backend (`server/.env`):  
`MONGO_URI=your_mongodb_connection_string`  
`JWT_SECRET=your_jwt_secret`  
- Frontend (`client/.env` for local backend):  
`VITE_BASE_URL=http://localhost:5000`

4. Start development servers:  
- Backend: `cd server` → `npm start`  
- Frontend: `cd ../client` → `npm start`

5. Open in browser:  
`http://localhost:5173`

---

## 🌐 Using Deployed Backend / Live Site

- Frontend environment (`client/.env`) for deployed backend:  
`VITE_BASE_URL=https://resumeexpert-backend.onrender.com`

- Access live site:  
`https://resumeexpert-frontend.onrender.com`  

All API calls will automatically use the deployed backend URL.

---



