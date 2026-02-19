// server/src/staff.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import studentsRoutes from "./staffRoutes/studentsRoutes.js";
import teachersRoutes from "./staffRoutes/teachersRoutes.js";
import schoolRoutes from "./superAdmin/routes/school.Routes.js";
import schoolAdminRoutes from "./superAdmin/routes/schoolAdmin.Routes.js";
import userRoutes from "./superAdmin/routes/users.Routes.js";               // ← ADD
import analyticsRouter from "./superAdmin/routes/analytics.Routes.js";

dotenv.config();

const staff = express(); // rename app → staff (better clarity)

// Middlewares
staff.use(
  cors({
    origin: process.env.CLIENT_ORIGIN,
    credentials: true,
  }),
);

staff.use(express.json());
//super admin
staff.use("/api/schools", schoolRoutes);
staff.use("/api/school-admins", schoolAdminRoutes);
staff.use("/api/users",         userRoutes);           // ← ADD
staff.use("/api/superadmin/analytics", analyticsRouter);


// Routes
staff.use("/api/students", studentsRoutes);
staff.use("/api/teachers", teachersRoutes);

export default staff;
