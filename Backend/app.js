import dotenv from 'dotenv';
dotenv.config(); 

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { dbConnection } from "./database/dbConnection.js";
import messageRouter from "./router/messageRouter.js";
import { errorMiddleware } from './middlewares/errorMiddleware.js';
import userRouter from "./router/userRouter.js";
import { v2 as cloudinary } from "cloudinary";
import appointmentRouter from "./router/appointmentRouter.js";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

const app = express();
app.use(cookieParser());

const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174', 'https://zeecare-medicare.vercel.app', 'https://zeecare-admin.vercel.app',];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true); 
    } else {
      callback(new Error('Not allowed by CORS')); 
    }
  },
  credentials: true 
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    })
);

app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);

dbConnection();

app.use(errorMiddleware);

export default app;