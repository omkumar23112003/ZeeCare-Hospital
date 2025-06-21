# 🏥 ZeeCare Hospital Management System

A modern, full-stack Hospital Management System built to streamline healthcare operations like patient registration, appointment scheduling, admin dashboards, and medical record management.

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=vercel)](https://zee-care-hospital.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repo-black?style=for-the-badge&logo=github)](https://github.com/yourusername/zeecare-hospital)

---

## 📌 Table of Contents

- [Tech Stack](#-tech-stack)
- [Deployment](#-deployment)
- [Project Structure](#-project-structure)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Setup Instructions](#-setup-instructions)
- [Folder Highlights](#-folder-highlights)
- [License](#-license)
- [Connect With Me](#-connect-with-me)

---

## 🧰 Tech Stack

### 💻 Frontend
- ⚛️ React.js (Vite)
- 🎨 Tailwind CSS *(if used)*
- 🔀 React Router

### 🖥 Backend
- 🟢 Node.js
- ⚙️ Express.js
- 🍃 MongoDB *(or any preferred DB)*
- 🔐 JWT *(for authentication and route protection)*

---

## ☁️ Deployment

- **Frontend**: Deployed on [Vercel](https://vercel.com/)
- **Backend**: Can be deployed on [Render](https://render.com/), [Heroku](https://heroku.com/), or run locally

---

## 📁 Project Structure
ZeeCare-Hospital/
├── Backend/
│ ├── controller/ # Business logic
│ ├── database/ # DB connection config
│ ├── middlewares/ # Auth and error middlewares
│ ├── models/ # Mongoose models
│ ├── router/ # Route definitions
│ ├── utils/ # Helper functions
│ ├── app.js # Express app
│ └── server.js # Entry point
├── Frontend/
│ ├── public/
│ ├── src/
│ ├── index.html
│ └── vite.config.js

---

## 🔐 Features

- ✅ Secure Admin Authentication (JWT-based)
- 📋 Patient Registration & Appointment Booking
- 📆 Admin Dashboard for Appointment Management
- 🔐 Route Protection with Middleware
- 📁 Modular MVC Project Structure
- 🌐 Environment-specific configurations using `.env`

---

---

## 💻 Setup Instructions

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/zeecare-hospital.git
cd zeecare-hospital
cd Backend
npm install

Step 2: Setup Backend

# Create a `.env` file and add the following:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
npm run dev


Step 3: Setup Frontend
bash
Copy code
cd ../Frontend
npm install
npm run dev
📍 Local URLs

Frontend: http://localhost:5173
Backend API: http://localhost:5000

📦 Folder Highlights
Folder	Description
controller/	Contains route logic
models/	Mongoose schema models
middlewares/	Auth & error handling middleware
router/	Route definitions using Express
utils/	Utility functions

📜 License
This project is licensed under the MIT License. Feel free to use and modify it.

🌐 Connect With Me
🔗 GitHub

💼 LinkedIn

💻 CodeChef

















