import express from "express"
import { studentsRouter } from "./Routers/students.js";
import dotenv from "dotenv"

dotenv.config()
const PORT=process.env.PORT
const app=express();
app.use(express.json())


app.use("/students",studentsRouter)
app.listen(PORT,()=>console.log(`server started in localhost:${PORT}`))