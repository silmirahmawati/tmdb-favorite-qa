# 🎬 TMDB Favorite Automation (Cypress)

## 📌 Deskripsi Project

Project ini merupakan automation testing menggunakan **Cypress** untuk menguji fitur **Favorite Movie** pada website **The Movie Database (TMDB)**.

Automation dibuat menggunakan pendekatan **API-based testing** agar:
- Eksekusi lebih cepat
- Tidak bergantung pada UI
- Lebih stabil untuk regression test

---

## 🎯 Scope Pengujian (3 Flow)

### ✅ TC-01 – Login (Create Session)

**Tujuan:**  
Memastikan user berhasil membuat session menggunakan TMDB API.

**Validasi:**
- Request token berhasil dibuat
- Token tervalidasi dengan username & password
- Session ID berhasil dibuat

---

### ✅ TC-02 – Mark as Favorite Movie

**Tujuan:**  
Memastikan user dapat menandai sebuah movie sebagai favorite.

**Validasi:**
- API response success
- Status favorite berhasil di-set

**Movie yang digunakan dalam pengujian:**  
Interstellar (Movie ID: 157336)

---

### ✅ TC-03 – Validate Movie Muncul di Favorites

**Tujuan:**  
Memastikan movie yang telah difavoritkan benar-benar muncul di daftar favorites user.

**Validasi:**
- Response API menampilkan movie dengan ID yang sesuai
- Data tersimpan dengan benar di account TMDB

---

## 🛠 Teknologi yang Digunakan

- Cypress v15
- Node.js
- JavaScript
- TMDB API (v3 authentication)

---

## 📂 Struktur Folder

```bash
automation/
│
├── cypress/
│   ├── e2e/
│   │   └── tmdb-favorites.cy.js
│   └── support/
│       ├── commands.js
│       └── e2e.js
│
├── cypress.config.js
├── cypress.env.json (tidak di-commit)
└── README.md
```

---

## 🔐 Konfigurasi Environment

Buat file berikut di root folder `automation/`:

`cypress.env.json`

```json
{
  "USERNAME": "username_tmdb",
  "PASSWORD": "password_tmdb",
  "API_KEY": "api_key_tmdb"
}
```

⚠️ File ini tidak di-commit ke repository karena berisi credential.

---

## ▶️ Cara Menjalankan Automation

1. Install dependencies:

```bash
npm install
```

2. Jalankan Cypress:

```bash
npx cypress open
```

3. Pilih file:

```
tmdb-favorites.cy.js
```

---

## 📊 Hasil Eksekusi

- ✅ TC-01 – Login berhasil
- ✅ TC-02 – Mark as favorite berhasil
- ✅ TC-03 – Validasi favorite berhasil

---

## 📎 Catatan

- Automation menggunakan pendekatan API-based untuk meningkatkan stabilitas dan kecepatan eksekusi.
- Tidak menggunakan validasi UI karena fokus pada integrasi API dan logic backend.
- Cocok untuk regression test berbasis endpoint.