import express from "express"
import { studentsRouter } from "./Routers/students.js";
import dotenv from "dotenv"
import { userRouter } from "./Routers/users.js";
import { isAuthenticated } from "./Authentication/auth.js";
import cors from "cors";

dotenv.config()
const PORT=process.env.PORT
const app=express();
app.use(express.json())
app.use(cors());


app.use("/students",isAuthenticated,studentsRouter)
app.use("/users",userRouter)

app.listen(PORT,()=>console.log(`server started in localhost:${PORT}`))