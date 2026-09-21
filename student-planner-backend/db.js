// db.js — bu fayl JSON faylni "database" sifatida ishlatishga yordam beradi.
// Biz hali haqiqiy database (MongoDB, PostgreSQL) o'rganmaganimiz uchun,
// ma'lumotlarni oddiy data/db.json faylida saqlaymiz.

const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, "data", "db.json");

// Faylni o'qib, JavaScript obyektiga aylantiradi
function readDB() {
  const rawData = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(rawData);
}

// JavaScript obyektini qaytadan faylga yozadi
function writeDB(data) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

module.exports = { readDB, writeDB };
