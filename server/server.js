// server/server.js
import "dotenv/config";

import "./src/utils/redis.js";
import app from "./src/app.js";   // login related
import staff from "./src/staff.js";
import finance from "./src/finance.js";
import student from "./src/student.js";

const PORT = process.env.PORT || 5000;

app.use(staff);
app.use(student);
app.use(finance);  // finance handles its own route prefixes internally

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});