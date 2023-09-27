import express from "express";
import "dotenv"
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js"
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
const port =process.env.PORT || 5000;

connectDB()
const app=express();

app.get("/",(req,res)=>{
res.send("API running")
});

app.use("/api/products",productRoutes)




app.listen(port,console.log(`sever running  .... on port ${port}`));

