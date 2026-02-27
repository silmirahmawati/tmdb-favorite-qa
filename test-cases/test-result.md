# 🧪 Test Execution Report – Favorite Feature

---

## 🔹 US-01 – Login

| TC ID | Execution Date | Actual Result | Status | Bug ID | Evidence |
|-------|---------------|--------------|--------|--------|----------|
| TC-LGN-001 | 2026-02-27 | Pengguna berhasil login dan diarahkan ke halaman dashboard/profil | PASS | - | [View](../evidence/login/TC-LGN-001-login.png) |
| TC-LGN-002 | 2026-02-27 | Setelah halaman di-refresh, status login tetap aktif dan pengguna masih berada dalam sesi yang sama | PASS | - | [View](../evidence/login/TC-LGN-002-login.png) |
| TC-LGN-003 | 2026-02-27 | Setelah browser ditutup dan dibuka kembali, sesi login tetap tersimpan sesuai mekanisme persistensi | PASS | - | [View](../evidence/login/TC-LGN-003-login.png) |
| TC-LGN-NEG-001 | 2026-02-27 | Sistem menolak login dengan password salah dan menampilkan pesan error, pengguna tetap berada di halaman login | PASS | - | [View](../evidence/login/TC-LGN-NEG-001-login.png) |
| TC-LGN-NEG-002 | 2026-02-27 | Sistem menolak login dengan username tidak terdaftar dan menampilkan pesan error yang sesuai | PASS | - | [View](../evidence/login/TC-LGN-NEG-002-login.png) |
| TC-LGN-NEG-003 | 2026-02-27 | Sistem menampilkan validasi pada field wajib yang kosong dan tidak memproses login | PASS | - | [View](../evidence/login/TC-LGN-NEG-003-login.png) |

---

## 🔹 US-02 – Mark Favorite dari Daftar Item

| TC ID | Execution Date | Actual Result | Status | Bug ID | Evidence |
|-------|---------------|--------------|--------|--------|----------|
| TC-FAV-001 | 2026-02-27 | Ikon Favorite berhasil diubah menjadi status aktif setelah diklik | PASS | - | [View](../evidence/favorite/TC-FAV-001.png) |
| TC-FAV-002 | 2026-02-27 | Setelah halaman di-refresh, status Favorite tetap tersimpan dan konsisten | PASS | - | [View](../evidence/favorite/TC-FAV-002.png) |
| TC-FAV-003 | 2026-02-27 | Beberapa item berhasil ditandai sebagai Favorite dan masing-masing ikon berubah sesuai statusnya | PASS | - | [View](../evidence/favorite/TC-FAV-003.png) |
| TC-FAV-NEG-001 | 2026-02-27 | Pengguna yang belum login diarahkan ke halaman login saat mencoba menekan tombol Favorite | PASS | - | [View](../evidence/favorite/TC-FAV-NEG-001.png) |
| TC-FAV-NEG-002 | 2026-02-27 | Klik berulang pada tombol Favorite tidak menyebabkan duplikasi dan status akhir tetap konsisten | PASS | - | [View](../evidence/favorite/TC-FAV-NEG-002.png) |
| TC-FAV-NEG-003 | 2026-02-27 | Saat terjadi kegagalan API, sistem menampilkan pesan error dan status UI kembali ke kondisi semula | PASS | - | [View](../evidence/favorite/TC-FAV-NEG-003.png) |

---

## 🔹 US-03 – Favorite List

| TC ID | Execution Date | Actual Result | Status | Bug ID | Evidence |
|-------|---------------|--------------|--------|--------|----------|
| TC-FLIST-001 | 2026-02-27 | Item yang difavoritkan berhasil tampil pada halaman Favorite List | PASS | - | [View](../evidence/favorite-list/TC-FLIST-001.png) |
| TC-FLIST-002 | 2026-02-27 | Item yang difavoritkan dari halaman list muncul secara sinkron di Favorite List | PASS | - | [View](../evidence/favorite-list/TC-FLIST-002.png) |
| TC-FLIST-003 | 2026-02-27 | Item yang difavoritkan dari halaman detail berhasil ditampilkan di Favorite List | PASS | - | [View](../evidence/favorite-list/TC-FLIST-003.png) |
| TC-FLIST-NEG-001 | 2026-02-27 | Saat tidak ada item favorit, sistem menampilkan empty state yang sesuai | PASS | - | [View](../evidence/favorite-list/TC-FLIST-NEG-001.png) |
| TC-FLIST-NEG-002 | 2026-02-27 | Saat terjadi kegagalan API, sistem menampilkan error state dan opsi retry sesuai requirement | PASS | - | [View](../evidence/favorite-list/TC-FLIST-NEG-002.png) |

---

## 🔹 US-04 – Remove Favorite

| TC ID | Execution Date | Actual Result | Status | Bug ID | Evidence |
|-------|---------------|--------------|--------|--------|----------|
| TC-REM-001 | 2026-02-27 | Item berhasil dihapus dari Favorite List dan langsung hilang dari daftar | PASS | - | [View](../evidence/remove/TC-REM-001.png) |
| TC-REM-002 | 2026-02-27 | Setelah halaman di-refresh, item yang telah dihapus tetap tidak muncul (persist) | PASS | - | [View](../evidence/remove/TC-REM-002.png) |
| TC-REM-003 | 2026-02-27 | Hanya item yang dipilih yang terhapus, item favorit lainnya tetap tampil | PASS | - | [View](../evidence/remove/TC-REM-003.png) |
| TC-REM-NEG-001 | 2026-02-27 | Saat terjadi kegagalan API, item tetap tampil sebagai favorit dan sistem menampilkan pesan error | PASS | - | [View](../evidence/remove/TC-REM-NEG-001.png) |
| TC-REM-NEG-002 | 2026-02-27 | Klik remove berulang tidak menyebabkan inkonsistensi, status akhir tetap sesuai | PASS | - | [View](../evidence/remove/TC-REM-NEG-002.png) |

---

## 🔹 US-05 – Sinkronisasi Favorite

| TC ID | Execution Date | Actual Result | Status | Bug ID | Evidence |
|-------|---------------|--------------|--------|--------|----------|
| TC-SYNC-001 | 2026-02-27 | Status favorit pada halaman detail sesuai dengan status di halaman list | PASS | - | [View](../evidence/sync/TC-SYNC-001.png) |
| TC-SYNC-002 | 2026-02-27 | Setelah item dihapus dari Favorite List, ikon pada halaman list kembali ke status non-favorit | PASS | - | [View](../evidence/sync/TC-SYNC-002.png) |
| TC-SYNC-003 | 2026-02-27 | Setelah logout dan login kembali, status favorit tetap tersimpan dan konsisten | PASS | - | [View](../evidence/sync/TC-SYNC-003.png) |
| TC-SYNC-NEG-001 | 2026-02-27 | Saat koneksi lambat, sistem menampilkan indikator loading dan hasil akhir tetap konsisten | PASS | - | [View](../evidence/sync/TC-SYNC-NEG-001.png) |
| TC-SYNC-NEG-002 | 2026-02-27 | Perubahan status favorit pada satu tab tercermin setelah tab lain di-refresh | PASS | - | [View](../evidence/sync/TC-SYNC-NEG-002.png) |

