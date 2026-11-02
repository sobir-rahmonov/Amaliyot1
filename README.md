# CUser — React foydalanuvchilar ro'yxati

React (Vite) yordamida yozilgan oddiy, lekin to'liq ishlaydigan loyiha. Foydalanuvchilarni qo'shish va o'chirish mumkin, ma'lumotlar `useState` orqali boshqariladi.

Bu mening React bo'yicha birinchi amaliy loyiham.

## Imkoniyatlar

- Yangi foydalanuvchi qo'shish (modal oynadagi forma orqali)
- Foydalanuvchini o'chirish (Delete tugmasi)
- Navbar'da foydalanuvchilar sonini ko'rsatish
- Ro'yxat bo'sh bo'lsa "No User" yozuvini chiqarish
- Modalni `Esc` tugmasi yoki fonga bosish orqali yopish
- Kartalar ustiga kursor olib borilganda animatsiya (hover effekti)
- Mobil va kompyuter ekranlariga moslashgan dizayn (grid va media query)

## Ishlatilgan texnologiyalar

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [uuid](https://www.npmjs.com/package/uuid) — har bir foydalanuvchiga noyob `id` berish uchun
- CSS (Grid, Flexbox, transition)

## Loyihada o'rganilgan mavzular

- Komponentlar yaratish va ularni bir-biriga ulash
- `useState` hooki bilan state boshqarish
- Props orqali ma'lumot va funksiyalarni uzatish (`users`, `deleteUser`, `addUser`)
- Massivni `map()` bilan ekranga chiqarish va `key` ishlatish
- Massivdan `filter()` bilan element o'chirish
- Controlled input'lar va forma bilan ishlash (`onChange`, `onSubmit`)
- Shartli renderlash (`&&`)

## Loyiha tuzilishi

```
src/
├── components/
│   ├── footer/
│   ├── navbar/
│   ├── newuser/
│   │   ├── NewUserForm.jsx
│   │   └── NewUserForm.css
│   └── userList/
│       ├── UserList.jsx
│       └── UserList.css
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Ishga tushirish

1. Loyihani yuklab oling:

```bash
git clone https://github.com/USERNAME/amaliyot_react.git
cd amaliyot_react
```

2. Kerakli paketlarni o'rnating:

```bash
npm install
```

3. Dev serverni ishga tushiring:

```bash
npm run dev
```

4. Brauzerda [http://localhost:5173](http://localhost:5173) manzilini oching.

## Ishlatish

1. Pastdagi **Create User** tugmasini bosing.
2. Formani to'ldiring: rasm URL, ism, familiya, yosh, shahar, kasb va jins.
3. **Submit** tugmasini bosing — foydalanuvchi kartasi ro'yxatga qo'shiladi.
4. Kartadagi **Delete** tugmasi foydalanuvchini o'chiradi.

## Kelajakdagi rejalar

- [ ] Ma'lumotlarni `localStorage` da saqlash
- [ ] Foydalanuvchini tahrirlash imkoniyati
- [ ] Qidiruv va filtr
- [ ] Forma uchun validatsiyani yaxshilash

## Muallif

**Ismingiz** — [GitHub](https://github.com/sobir-rahmonov)

## Litsenziya

Bu loyiha o'quv maqsadida yaratilgan.