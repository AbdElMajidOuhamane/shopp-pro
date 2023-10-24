import express from "express";
import "dotenv"
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import cors from "cors"
// import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
const port =process.env.PORT || 5000;

connectDB()
const app=express();
app.use(express.json());

app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use(cookieParser())
app.get("/",(req,res)=>{
res.send("API running")
});

app.use("/api/products",productRoutes)
app.use("/api/users",userRoutes)




app.listen(port,console.log(`sever running  .... on port ${port}`));

