import { enquiryService } from "../services/enquiryService.js";

export async function createEnquiry(req, res, next) {
  try {
    const enquiry = await enquiryService.create(req.body);
    res.status(201).json({ data: enquiry });
  } catch (error) {
    next(error);
  }
}
