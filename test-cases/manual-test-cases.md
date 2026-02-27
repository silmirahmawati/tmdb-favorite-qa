
### Scope Fungsional
Pengujian ini mencakup alur utama fitur Favorite, yaitu:
1. Autentikasi pengguna (Login)
2. Menambahkan film ke Favorite
3. Melihat daftar Favorite
4. Menghapus film dari Favorite
5. Konsistensi status Favorite di berbagai halaman (List View, Detail View, dan Favorite List)

## A. Mapping User Story
# US-01 – Login
### User Story
Sebagai pengguna, saya ingin melakukan login agar dapat mengakses fitur Favorite.
---
### Acceptance Criteria

- AC1: Pengguna dapat login menggunakan kredensial yang valid.
- AC2: Sistem menampilkan pesan error apabila kredensial tidak valid.
- AC3: Sesi login tersimpan (pengguna tetap login setelah refresh atau membuka ulang browser, sesuai kebutuhan sistem).
- AC4: Pengguna dapat melakukan logout (jika tersedia fitur logout).
---
## Daftar Test Case
### Positive Scenario
1. **TC-LGN-001**  
   Login menggunakan email/username valid dan password valid → pengguna berhasil masuk ke halaman utama.
2. **TC-LGN-002**  
   Setelah login berhasil, pengguna melakukan refresh halaman → status login tetap aktif (sesuai AC3).
3. **TC-LGN-003**  
   Pengguna menutup dan membuka kembali browser/aplikasi → tetap dalam keadaan login (jika menggunakan token persisten / remember me).
---
### Negative Scenario
1. **TC-LGN-NEG-001**  
   Login dengan password salah → sistem menampilkan pesan error dan pengguna tetap berada di halaman login.
2. **TC-LGN-NEG-002**  
   Login dengan email/username yang tidak terdaftar → sistem menampilkan pesan error sesuai AC2.
3. **TC-LGN-NEG-003**  
   Field wajib (email/password) dikosongkan → sistem menampilkan validasi dan tidak memproses login.
# US-02 – Mark Favorite dari Daftar Item

## User Story
Sebagai pengguna, saya ingin menandai item sebagai favorit agar mudah ditemukan kembali.

## Acceptance Criteria

- AC1: Ikon/tombol Favorite dapat ditekan pada setiap item.
- AC2: Setelah ditekan, status Favorite berubah (ikon berubah secara visual).
- AC3: Status Favorite tersimpan (persist) dan tetap konsisten setelah halaman di-refresh.
- AC4: Fitur Favorite hanya dapat digunakan setelah login (jika belum login, pengguna diarahkan atau diminta login).

## Daftar Test Case

### Positive Scenario

- **TC-FAV-001**  
  Pada daftar item, klik ikon Favorite pada item A → ikon berubah menjadi status “favorited”.

- **TC-FAV-002**  
  Favoritkan item A → refresh halaman → item A tetap berstatus favorit (persist).

- **TC-FAV-003**  
  Favoritkan beberapa item (A, B, C) → masing-masing ikon berubah sesuai statusnya.

### Negative Scenario

- **TC-FAV-NEG-001**  
  Pengguna belum login, klik Favorite → diarahkan ke login atau muncul prompt login sesuai AC4.

- **TC-FAV-NEG-002**  
  Klik tombol Favorite berulang secara cepat (spam click) → hasil akhir konsisten, tidak terjadi duplikasi atau status tidak sinkron.

- **TC-FAV-NEG-003**  
  Simulasikan kegagalan API (500/timeout) saat proses favorit → sistem menampilkan error/toast dan status UI kembali konsisten.

---

# US-03 – Item Favorit Muncul di Favorite List

## User Story
Sebagai pengguna, saya ingin melihat daftar favorit agar dapat mengakses item favorit dengan cepat.

## Acceptance Criteria

- AC1: Favorite List menampilkan seluruh item yang telah difavoritkan.
- AC2: Item yang baru difavoritkan muncul di Favorite List tanpa perlu logout/login ulang (real-time atau setelah reload, sesuai requirement).
- AC3: Jika tidak ada item favorit, sistem menampilkan empty state yang sesuai.

## Daftar Test Case

### Positive Scenario

- **TC-FLIST-001**  
  Favoritkan item A → buka Favorite List → item A tampil di daftar.

- **TC-FLIST-002**  
  Favoritkan item A dari halaman list → pindah ke Favorite List → item A muncul (sinkron).

- **TC-FLIST-003**  
  Favoritkan item dari halaman detail → Favorite List menampilkan item tersebut.

### Negative Scenario

- **TC-FLIST-NEG-001**  
  Tidak ada item favorit → buka Favorite List → tampil empty state sesuai AC3.

- **TC-FLIST-NEG-002**  
  Simulasikan API Favorite List gagal (500/timeout) → sistem menampilkan error state dan opsi retry (jika disyaratkan).

---

# US-04 – Remove Favorite dari Favorite List

## User Story
Sebagai pengguna, saya ingin menghapus item dari favorit agar daftar favorit tetap relevan.

## Acceptance Criteria

- AC1: Pengguna dapat menghapus item dari Favorite List.
- AC2: Setelah dihapus, item langsung hilang dari Favorite List.
- AC3: Status Favorite pada tampilan lain ikut berubah (sinkron).

## Daftar Test Case

### Positive Scenario

- **TC-REM-001**  
  Di Favorite List, remove item A → item A hilang dari daftar.

- **TC-REM-002**  
  Remove item A → refresh Favorite List → item A tetap tidak muncul (persist).

- **TC-REM-003**  
  Remove salah satu dari beberapa item favorit → hanya item tersebut yang hilang, item lain tetap ada.

### Negative Scenario

- **TC-REM-NEG-001**  
  Simulasikan API remove gagal (500/timeout) → item tetap tampil sebagai favorit dan muncul pesan error.

- **TC-REM-NEG-002**  
  Klik remove berulang secara cepat → hasil akhir konsisten dan tidak terjadi error ganda atau inkonsistensi state.

---

# US-05 – Sinkronisasi Status Favorite di Seluruh Tampilan

## User Story
Sebagai pengguna, saya ingin status favorit konsisten di semua halaman agar tidak membingungkan.

## Acceptance Criteria

- AC1: Jika item sudah favorit, ikon di halaman list dan detail menampilkan status favorit.
- AC2: Jika item dihapus dari favorit, ikon pada list/detail kembali ke status non-favorit.
- AC3: Status tetap sinkron setelah navigasi bolak-balik dan setelah refresh.

## Daftar Test Case

### Positive Scenario

- **TC-SYNC-001**  
  Favoritkan item A di halaman list → buka detail item A → ikon favorit di detail sudah aktif.

- **TC-SYNC-002**  
  Remove item A di Favorite List → kembali ke halaman list → ikon item A kembali non-favorit.

- **TC-SYNC-003**  
  Favoritkan item A → logout/login ulang → status favorit tetap benar.

### Negative Scenario

- **TC-SYNC-NEG-001**  
  Favoritkan item saat koneksi lambat → UI menampilkan loading/disabled state dan hasil akhir tetap konsisten.

- **TC-SYNC-NEG-002**  
  Gunakan dua tab browser: tab 1 remove favorit, tab 2 refresh → status mengikuti perubahan terbaru (jika requirement sinkron lintas tab tersedia).