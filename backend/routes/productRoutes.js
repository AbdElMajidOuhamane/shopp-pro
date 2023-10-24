import express from "express";
import { getProductById, getProducts } from "../controllers/productController.js";
import { errorHandler, notFound } from "../middleware/errorMiddleware.js";

const router=express.Router();


router.route("/").get(getProducts);

router.route("/:id").get(getProductById);
// router.use(notFound);
// router.use(errorHandler);

export default router