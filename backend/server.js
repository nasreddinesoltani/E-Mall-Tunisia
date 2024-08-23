import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import userRoutes from "./Routes/userRoutes.js";
import productRoutes from "./Routes/productRoutes.js";
import cartRoutes from "./Routes/cartRoutes.js";
import orderRoutes from "./Routes/orderRoutes.js";

import { errorHandler, notFound } from "./Middlewares/errorMiddleware.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
dotenv.config();
connectDB();
const PORT = process.env.PORT || 4000;
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
