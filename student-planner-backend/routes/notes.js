// routes/notes.js — Eslatmalar (Notes) uchun routelar

const express = require("express");
const router = express.Router();
const { readDB, writeDB } = require("../db");

// GET /api/notes/user/:userId
router.get("/user/:userId", (req, res) => {
  const db = readDB();
  const userId = Number(req.params.userId);
  const userNotes = db.notes.filter((n) => n.userId === userId);
  res.json(userNotes);
});

// POST /api/notes
router.post("/", (req, res) => {
  const { title, text, userId } = req.body;
  if (!title || !userId) {
    return res.status(400).json({ message: "title va userId majburiy" });
  }

  const db = readDB();
  const newNote = { id: Date.now(), title, text: text || "", userId };
  db.notes.push(newNote);
  writeDB(db);

  res.status(201).json(newNote);
});

// DELETE /api/notes/:id
router.delete("/:id", (req, res) => {
  const db = readDB();
  const id = Number(req.params.id);
  db.notes = db.notes.filter((n) => n.id !== id);
  writeDB(db);
  res.json({ message: "Note o'chirildi" });
});

module.exports = router;
