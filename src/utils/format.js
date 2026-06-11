export const formatDate = (value) => {
  if (!value) return "-";
  try {
    return new Date(value).toISOString().split("T")[0];
  } catch (e) {
    return "-";
  }
};

export const mapBackendBooking = (booking) => ({
  id: booking._id,
  customerName: booking.UserId
    ? `${booking.UserId.firstName || ""} ${booking.UserId.lastName || ""}`.trim()
    : "User",
  vehicle: booking.VehicleId?.VehicleName || "Vehicle",
  service: booking.ServiceId?.ServiceName || "Service",
  date: booking.BookingDate ? booking.BookingDate.split("T")[0] : "",
  status: booking.BookingStatus || "Pending",
  paymentStatus: booking.PaymentStatus || "Pending",
});
