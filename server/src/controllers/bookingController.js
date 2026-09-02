import { bookingService } from "../services/bookingService.js";

export async function createBooking(req, res, next) {
  try {
    const booking = await bookingService.create(req.body);
    res.status(201).json({ data: booking });
  } catch (error) {
    next(error);
  }
}

export async function getBooking(req, res, next) {
  try {
    const booking = await bookingService.getByReference(req.params.reference);
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    return res.status(200).json({ data: booking });
  } catch (error) {
    return next(error);
  }
}
