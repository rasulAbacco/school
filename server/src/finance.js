// server/src/finance.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import studentFinanceRoutes from "./Financepages/Routes/studentFinance.routes.js";
import expenseRoutes from "./Financepages/Routes/expenseRoutes.js";
import groupBRoutes from "./Financepages/Routes/groupBRoutes.js";
import groupCRoutes from "./Financepages/Routes/groupCRoutes.js";
import groupDRoutes from "./Financepages/Routes/groupDRoutes.js";
import teacherRoutes from "./Financepages/Routes/teacherRoutes.js";

dotenv.config();

const finance = express();

// Middlewares
finance.use(
  cors({
    origin: process.env.CLIENT_ORIGIN,
    credentials: true,
  })
);

finance.use(express.json());

// Routes

// → GET  /api/finance/list
// → POST /api/finance/add
finance.use("/api/finance", expenseRoutes);

// → GET  /api/finance/getStudentFinance
// → POST /api/finance/addStudentFinance
// → etc.
finance.use("/api/finance", studentFinanceRoutes);

// → GET  /api/groupb/salary/list/all  etc.
finance.use("/api/groupb/salary", groupBRoutes);

// → GET  /api/groupc/salary/list/all  etc.
finance.use("/api/groupc/salary", groupCRoutes);

// → GET  /api/groupd/salary/list/all  etc.
finance.use("/api/groupd/salary", groupDRoutes);

// → GET  /api/teachers/salary/list/:schoolId  etc.
finance.use("/api/teachers", teacherRoutes);

export default finance;