import express from "express";
import {
  createOrder,
  //   getOrder,
  //   getAllOrders,
  //   deleteOrder,
} from "../Controllers/orderController.js";
import { protect } from "../Middlewares/authMiddleware.js";

const router = express.Router();
router.post("/", protect, createOrder);
// router.get("/:createdBy", protect, getOrder);
// router.get("/", protect, getAllOrders);
// router.put("/:id", protect, updateOrder);
// router.delete("/:id", protect, deleteOrder);

export default router;
