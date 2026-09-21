// routes/tasks.js — Task (vazifa) uchun CRUD routelar

const express = require("express");
const router = express.Router();
const { readDB, writeDB } = require("../db");

// GET /api/tasks/user/:userId — shu userga tegishli barcha tasklarni qaytaradi
router.get("/user/:userId", (req, res) => {
  const db = readDB();
  const userId = Number(req.params.userId);

  const userTasks = db.tasks.filter((task) => task.userId === userId);
  res.json(userTasks);
});

// POST /api/tasks — yangi task qo'shadi
router.post("/", (req, res) => {
  const { title, subject, date, priority, userId } = req.body;

  if (!title || !userId) {
    return res.status(400).json({ message: "title va userId majburiy" });
  }

  const db = readDB();

  const newTask = {
    id: Date.now(),
    title,
    subject: subject || "",
    date: date || "",
    priority: priority || "Medium",
    completed: false,
    userId,
  };

  db.tasks.push(newTask);
  writeDB(db);

  res.status(201).json(newTask);
});

// PUT /api/tasks/:id — taskni yangilaydi (masalan completed holatini o'zgartirish)
router.put("/:id", (req, res) => {
  const db = readDB();
  const taskId = Number(req.params.id);

  const task = db.tasks.find((t) => t.id === taskId);
  if (!task) {
    return res.status(404).json({ message: "Task topilmadi" });
  }

  // req.body ichida kelgan qiymatlar bilan taskni yangilaymiz
  Object.assign(task, req.body);

  writeDB(db);
  res.json(task);
});

// DELETE /api/tasks/:id — taskni o'chiradi
router.delete("/:id", (req, res) => {
  const db = readDB();
  const taskId = Number(req.params.id);

  db.tasks = db.tasks.filter((t) => t.id !== taskId);
  writeDB(db);

  res.json({ message: "Task o'chirildi" });
});

module.exports = router;
