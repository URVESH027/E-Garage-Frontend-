import React from "react";
import {
  FaCalendarCheck,
  FaChartLine,
  FaCog,
  FaTachometerAlt,
  FaTools,
  FaUsers
} from "react-icons/fa";

export const menuItems = [
  { name: "Dashboard", icon: <FaTachometerAlt /> },
  { name: "Manage Services", icon: <FaTools /> },
  { name: "Bookings", icon: <FaCalendarCheck /> },
  { name: "Customers", icon: <FaUsers /> },
  { name: "Reports", icon: <FaChartLine /> },
  { name: "Settings", icon: <FaCog /> },
];
