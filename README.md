# TMDB Favorite - QA Project

## Gambaran Umum

Proyek ini merupakan simulasi pengujian Quality Assurance pada sebuah aplikasi web dengan fitur autentikasi pengguna dan manajemen daftar favorit.

## 🎯 Ruang Lingkup (User Stories)

- **US-01:** Pengguna dapat login untuk mengakses fitur favorit
- **US-02:** Pengguna dapat menandai item sebagai favorit
- **US-03:** Item yang difavoritkan muncul pada halaman Favorite List
- **US-04:** Pengguna dapat menghapus item dari Favorite List
- **US-05:** Status favorit sinkron dan konsisten di seluruh halaman

## Test Environment

- Application: TMDB
- URL: https://www.themoviedb.org/
- Browser: Chrome (latest version)
- OS: macOS
- Test Type: Manual + Automation
- Date Tested: 27 februari 2026

## Manual Testing
Manual test case tersedia di sini:
📂 [Test Cases](./test-cases)

Testing evidence (screenshots):
📂 [Evidence](./evidence)

## 🤖 Automation Testing

Automation testing dilakukan menggunakan pendekatan API-based testing untuk memverifikasi alur utama fitur Favorite.

### 🎯 Automation Coverage (3 Main Flows)

Project ini meng-cover 3 skenario utama:

1. **TC-01 – Login (Create Session)**
   - Validasi user dapat membuat session melalui API login
   - Memastikan response status sukses
   - Memastikan session ID berhasil dibuat

2. **TC-02 – Mark as Favorite Movie**
   - Mengirim request untuk menandai movie sebagai favorite
   - Memastikan response success
   - Memastikan status favorite tersimpan

3. **TC-03 – Validate Movie Muncul di Favorites**
   - Mengambil daftar favorite melalui API
   - Memvalidasi movie yang difavoritkan muncul di response
   - Memastikan data sesuai dengan yang dikirim sebelumnya

---

### 📂 Automation Folder
Project location:
📂 [Automation Folder](./automation)
---

### ▶ Cara Menjalankan Automation

```bash
cd automation
npm install
npx cypress open
