import { Router } from "express";
import { createEnquiry } from "../controllers/enquiryController.js";

export const enquiryRouter = Router();
enquiryRouter.post("/", createEnquiry);
