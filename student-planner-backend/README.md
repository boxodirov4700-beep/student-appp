# Student To-Do & Study Planner — o'rnatish yo'riqnomasi

Bu arxivda ikki qism bor:
- `student-planner-backend/` — Express backend (yangi papka, alohida loyiha)
- `frontend-files/src/` — sizning mavjud `student-planner` loyihangizning `src/` papkasi ustiga qo'yiladigan fayllar

## 1) BACKEND'ni ishga tushirish

1. `student-planner-backend` papkasini kompyuteringizga oching (masalan Desktop'ga).
2. Terminalda shu papka ichiga kiring:
   ```
   cd student-planner-backend
   npm install
   npm start
   ```
3. Terminalda shunday yozuv chiqishi kerak:
   ```
   Server 5000-portda ishlamoqda: http://localhost:5000
   ```
4. Brauzerda `http://localhost:5000` ochsangiz "Student Planner backend ishlayapti ✅" degan matn chiqadi — demak backend ishlayapti.

Backendni har safar ishlatishdan oldin shu papkada `npm start` yozing va uni ochiq qoldiring.

## 2) FRONTEND fayllarini joylashtirish

1-bosqichda yaratgan `student-planner` loyihangizni oching.

`frontend-files/src/` papkasi ichidagi hamma narsani sizning `student-planner/src/` papkasiga ko'chiring (ustidan yozib qo'ying — `App.jsx`, `App.css`, `main.jsx` almashtiriladi, `pages/`, `components/`, `utils/` papkalari qo'shiladi).

Keyin `student-planner` papkasida terminalda:

```
cd student-planner
npm install react-router-dom
npm run dev
```

Brauzerda `http://localhost:5173` ochiladi.

## 3) Sinab ko'rish tartibi

1. Backend ishga tushirilgan bo'lishi kerak (1-qadam), frontend ham (2-qadam).
2. Brauzerda avval `/register` sahifasiga o'tib yangi akkaunt yarating.
3. `/login` orqali kiring.
4. Dashboard, Tasks, Schedule, Subjects, Exams, Notes, Statistics, Profile sahifalarini sinab ko'ring.

## Eslatma

- Ma'lumotlar `student-planner-backend/data/db.json` faylida saqlanadi — buni ochib, ma'lumotlar qanday saqlanayotganini ko'rishingiz mumkin.
- Bu sodda o'quv loyihasi: parol shifrlanmagan, JWT ishlatilmagan. Real (production) loyihada bular kerak bo'ladi, lekin hozircha React + Express + REST API asoslarini tushunish maqsad.
