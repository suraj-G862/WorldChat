import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import path from 'path';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

import connectToMongoDB from './db/connectToMongoDB.js';
import {app,server} from './socket/socket.js';
import {dotenv} from './config/dotenv.js';

const PORT = process.env.PORT || 5000;

// deployment
// const __dirname = path.resolve();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);






//deployment
// app.use(express.static(path.join(__dirname,'/frontend/dist')));
// app.get('*',(req,res)=>{
//       res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
// })
// server.listen(PORT,()=>{ 
//       connectToMongoDB();
//       console.log(`Server is running on port ${PORT}`); 
// })


//development
app.listen(PORT,()=>{ 
      connectToMongoDB();
      console.log(`Server is running on port ${PORT}`); 
})