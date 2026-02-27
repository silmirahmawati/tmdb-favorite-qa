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
| TC-FLIST-001 | 27 Feb 2026 |  |  |  |  |
| TC-FLIST-002 | 27 Feb 2026 |  |  |  |  |
| TC-FLIST-003 | 27 Feb 2026 |  |  |  |  |
| TC-FLIST-NEG-001 | 27 Feb 2026 |  |  |  |  |
| TC-FLIST-NEG-002 | 27 Feb 2026 |  |  |  |  |

---

## 🔹 US-04 – Remove Favorite

| TC ID | Execution Date | Actual Result | Status | Bug ID | Evidence |
|-------|---------------|--------------|--------|--------|----------|
| TC-REM-001 | 27 Feb 2026 |  |  |  |  |
| TC-REM-002 | 27 Feb 2026 |  |  |  |  |
| TC-REM-003 | 27 Feb 2026 |  |  |  |  |
| TC-REM-NEG-001 | 27 Feb 2026 |  |  |  |  |
| TC-REM-NEG-002 | 27 Feb 2026 |  |  |  |  |

---

## 🔹 US-05 – Sinkronisasi Favorite

| TC ID | Execution Date | Actual Result | Status | Bug ID | Evidence |
|-------|---------------|--------------|--------|--------|----------|
| TC-SYNC-001 | 27 Feb 2026 |  |  |  |  |
| TC-SYNC-002 | 27 Feb 2026 |  |  |  |  |
| TC-SYNC-003 | 27 Feb 2026 |  |  |  |  |
| TC-SYNC-NEG-001 | 27 Feb 2026 |  |  |  |  |
| TC-SYNC-NEG-002 | 27 Feb 2026 |  |  |  |  |

