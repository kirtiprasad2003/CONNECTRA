import express from 'express';
import { createServer } from 'node:http';

import {Server} from "socket.io";

import mongoose from 'mongoose';
import { connectToSocket } from "./controllers/socketManager.js";

import cors from 'cors';
import userRoutes from './routes/users.routes.js';

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 8000)

app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({limit: "40kb", extended: true}));

app.use("/api/v1/users", userRoutes);

const start = async() => {
    try {
        const connectionDb = await mongoose.connect("mongodb+srv://kirtikprasad2003:WQitb64bg8VM1P9K@cluster0.vaspby5.mongodb.net/yourDatabase?retryWrites=true&w=majority");
        console.log(`Connected to DB Host: ${connectionDb.connection.host}`);
        server.listen(app.get('port'), () => {
            console.log('LISTENING ON PORT 8000');
        });
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
};

start();
