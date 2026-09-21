// routes/exams.js — Imtihonlar uchun routelar

const express = require("express");
const router = express.Router();
const { readDB, writeDB } = require("../db");

// GET /api/exams/user/:userId
router.get("/user/:userId", (req, res) => {
  const db = readDB();
  const userId = Number(req.params.userId);
  const userExams = db.exams.filter((e) => e.userId === userId);
  res.json(userExams);
});

// POST /api/exams
router.post("/", (req, res) => {
  const { subject, date, time, userId } = req.body;
  if (!subject || !date || !userId) {
    return res.status(400).json({ message: "subject, date, userId majburiy" });
  }

  const db = readDB();
  const newExam = { id: Date.now(), subject, date, time: time || "", userId };
  db.exams.push(newExam);
  writeDB(db);

  res.status(201).json(newExam);
});

// DELETE /api/exams/:id
router.delete("/:id", (req, res) => {
  const db = readDB();
  const id = Number(req.params.id);
  db.exams = db.exams.filter((e) => e.id !== id);
  writeDB(db);
  res.json({ message: "Imtihon o'chirildi" });
});

module.exports = router;
