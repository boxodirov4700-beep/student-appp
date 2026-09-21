// server.js — backendning "boshlanish nuqtasi"
// Bu fayl serverni yaratadi va barcha routelarni ulaydi

const express = require("express");
const cors = require("cors");

const usersRoutes = require("./routes/users");
const tasksRoutes = require("./routes/tasks");
const subjectsRoutes = require("./routes/subjects");
const schedulesRoutes = require("./routes/schedules");
const examsRoutes = require("./routes/exams");
const notesRoutes = require("./routes/notes");

const app = express();
const PORT = 5000;

// Middleware'lar:
app.use(cors()); // frontend (masalan localhost:5173) backendga so'rov yubora olishi uchun
app.use(express.json()); // req.body ichida JSON ma'lumotni o'qiy olish uchun

// Routelarni ulaymiz. Masalan "/api/users" + "/register" = "/api/users/register"
app.use("/api/users", usersRoutes);
app.use("/api/tasks", tasksRoutes);
app.use("/api/subjects", subjectsRoutes);
app.use("/api/schedules", schedulesRoutes);
app.use("/api/exams", examsRoutes);
app.use("/api/notes", notesRoutes);

// Sinov uchun oddiy route
app.get("/", (req, res) => {
  res.send("Student Planner backend ishlayapti ✅");
});

app.listen(PORT, () => {
  console.log(`Server ${PORT}-portda ishlamoqda: http://localhost:${PORT}`);
});
