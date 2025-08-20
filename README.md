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

Follow these steps to run the project locally on your machine:

1. Clone the repository  
   git clone https://github.com/sujalchilai123/resume-builder.git  
   cd resume-builder  

2. Install dependencies  
   - For backend (inside `server` folder):  
     cd server  
     npm install  

   - For frontend (inside `client` folder):  
     cd ../client  
     npm install  

3. Configure environment variables  
   Inside the `server` folder, create a `.env` file and add:  
   MONGO_URI=your_mongodb_connection_string  
   JWT_SECRET=you_jwt_secret 

   (Replace `your_mongodb_connection_string` with your actual MongoDB connection string from MongoDB Atlas or local setup.)

5. Start the development servers  
   - Start backend:  
     cd server  
     npm start  

   - Start frontend:  
     cd ../client  
     npm start  

6. Open in browser  
   Once both servers are running, open:  
   http://localhost:5173  





