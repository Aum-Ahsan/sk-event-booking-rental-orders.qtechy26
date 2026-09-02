import cors from "cors";
import express from "express";
import helmet from "helmet";
import { bookingRouter } from "./routes/bookingRoutes.js";
import { enquiryRouter } from "./routes/enquiryRoutes.js";
import { productRouter } from "./routes/productRoutes.js";
import { errorHandler, notFoundHandler } from "./middleware/errorHandler.js";

export const app = express();
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_ORIGIN, credentials: true }));
app.use(express.json({ limit: "1mb" }));
app.get("/api/v1/health", (req, res) => res.json({ status: "ok" }));
app.use("/api/v1/products", productRouter);
app.use("/api/v1/bookings", bookingRouter);
app.use("/api/v1/enquiries", enquiryRouter);
app.use(notFoundHandler);
app.use(errorHandler);
