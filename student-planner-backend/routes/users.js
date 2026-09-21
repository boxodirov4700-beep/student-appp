// routes/users.js — ro'yxatdan o'tish va login uchun routelar
// Diqqat: bu juda sodda auth. Parol shifrlanmaydi, JWT ishlatilmaydi.
// Bu faqat o'rganish uchun — real loyihada parolni hech qachon ochiq saqlamang.

const express = require("express");
const router = express.Router();
const { readDB, writeDB } = require("../db");

// POST /api/users/register — yangi user yaratadi
router.post("/register", (req, res) => {
  const { name, username, password } = req.body;

  if (!name || !username || !password) {
    return res.status(400).json({ message: "Barcha maydonlarni to'ldiring" });
  }

  const db = readDB();

  // username band emasligini tekshiramiz
  const existingUser = db.users.find((u) => u.username === username);
  if (existingUser) {
    return res.status(400).json({ message: "Bu username band" });
  }

  const newUser = {
    id: Date.now(), // sodda unique id — hozircha shu yetarli
    name,
    username,
    password, // eslatma: real loyihada bu shifrlanishi kerak
  };

  db.users.push(newUser);
  writeDB(db);

  res.status(201).json({ message: "Ro'yxatdan o'tish muvaffaqiyatli", user: newUser });
});

// POST /api/users/login — user va parolni tekshiradi
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const db = readDB();
  const user = db.users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Username yoki parol noto'g'ri" });
  }

  res.json({ message: "Login muvaffaqiyatli", user });
});

module.exports = router;
