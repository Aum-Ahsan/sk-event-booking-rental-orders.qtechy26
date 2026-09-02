import { Router } from "express";
import { createBooking, getBooking } from "../controllers/bookingController.js";

export const bookingRouter = Router();
bookingRouter.post("/", createBooking);
bookingRouter.get("/:reference", getBooking);
