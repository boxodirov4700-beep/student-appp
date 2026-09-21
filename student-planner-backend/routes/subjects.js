// routes/subjects.js — Fanlar uchun routelar

const express = require("express");
const router = express.Router();
const { readDB, writeDB } = require("../db");

// GET /api/subjects/user/:userId
router.get("/user/:userId", (req, res) => {
  const db = readDB();
  const userId = Number(req.params.userId);
  const userSubjects = db.subjects.filter((s) => s.userId === userId);
  res.json(userSubjects);
});

// POST /api/subjects
router.post("/", (req, res) => {
  const { name, userId } = req.body;
  if (!name || !userId) {
    return res.status(400).json({ message: "name va userId majburiy" });
  }

  const db = readDB();
  const newSubject = { id: Date.now(), name, userId };
  db.subjects.push(newSubject);
  writeDB(db);

  res.status(201).json(newSubject);
});

// DELETE /api/subjects/:id
router.delete("/:id", (req, res) => {
  const db = readDB();
  const id = Number(req.params.id);
  db.subjects = db.subjects.filter((s) => s.id !== id);
  writeDB(db);
  res.json({ message: "Fan o'chirildi" });
});

module.exports = router;
