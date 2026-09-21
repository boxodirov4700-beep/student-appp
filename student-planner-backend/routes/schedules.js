// routes/schedules.js — Dars jadvali uchun routelar

const express = require("express");
const router = express.Router();
const { readDB, writeDB } = require("../db");

// GET /api/schedules/user/:userId
router.get("/user/:userId", (req, res) => {
  const db = readDB();
  const userId = Number(req.params.userId);
  const userSchedules = db.schedules.filter((s) => s.userId === userId);
  res.json(userSchedules);
});

// POST /api/schedules
router.post("/", (req, res) => {
  const { subject, day, time, userId } = req.body;
  if (!subject || !day || !time || !userId) {
    return res.status(400).json({ message: "subject, day, time, userId majburiy" });
  }

  const db = readDB();
  const newSchedule = { id: Date.now(), subject, day, time, userId };
  db.schedules.push(newSchedule);
  writeDB(db);

  res.status(201).json(newSchedule);
});

// DELETE /api/schedules/:id
router.delete("/:id", (req, res) => {
  const db = readDB();
  const id = Number(req.params.id);
  db.schedules = db.schedules.filter((s) => s.id !== id);
  writeDB(db);
  res.json({ message: "Dars o'chirildi" });
});

module.exports = router;
