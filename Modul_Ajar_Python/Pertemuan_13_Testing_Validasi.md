# Pertemuan 13: Testing (Pengujian) dan Validasi Hasil 🧪✅

Minggu lalu kita belajar tentang `try-except` buat menangkap error dari user yang usil. Tapi gimana kalau yang error adalah logika yang kita tulis sendiri?
Sebelum menyerahkan aplikasi ke Pak Dosen (atau ke client), kita sebagai programmer WAJIB mencoba (*Testing*) memastikan program kita nggak malu-maluin.

## 🎯 Tujuan Hari Ini
1. Paham mengapa kita harus melakukan Testing.
2. Tahu cara memvalidasi hasil dari sebuah fungsi (menggunakan skenario uji).
3. Mengenal sintaks `assert` secara sederhana.

---

## 🧪 1. Apa Itu Testing? (Bukan Sekadar Run Program)
Testing bukan berarti cuma pencet tombol `Run` sekali, lalu kalau nggak ada warna merah = AMAN.
Testing berarti kamu secara sengaja memasukkan **berbagai skenario nyeleneh** untuk melihat respon programmu.

Bayangkan kamu bikin fungsi diskon umur:
```python
def hitung_diskon(umur):
    if umur >= 60:
        return "Diskon 50%!"
    else:
        return "Harga Normal"
```
Kamu coba pakai `umur = 65`, hasilnya "Diskon 50%!". Mantap, jalan!
Eits, jangan senang dulu. Gimana kalau diisi `umur = -5`? Atau `umur = 1000`? Kalau nggak diuji, celah ini bakal merusak sistem.

---

## 📝 2. Membuat Skenario Pengujian (Test Case)
Seorang programmer yang baik biasanya membuat daftar *Test Case* (kasus uji) di atas kertas sebelum mencoba fungsinya.

Untuk fungsi `hitung_diskon(umur)` di atas, skenarionya:
- **Kasus Normal (Positive Case):** Masukin angka wajar misal 25 (Harapan: Normal). Masukin 65 (Harapan: Diskon 50%).
- **Kasus Ujung (Boundary Case):** Masukin pas angka batas. Misal 60. Apakah dapet diskon?
- **Kasus Aneh (Negative Case):** Masukin angka minus (-10) atau angka sangat besar (999). 

Ternyata pas dimasukin -10, dia bilang "Harga Normal". Padahal harusnya bilang "Umur tidak valid!". (Disinilah validasi ditambahkan).

---

## 🛡️ 3. Validasi dengan `assert` (Meyakinkan Diri Sendiri)
Python punya cara instan untuk ngetes fungsi secara otomatis. Namanya `assert`.
`assert` bertugas memastikan klaim kita itu benar. Kalau benar, dia diam saja (program lanjut). Kalau salah, dia langsung *ngamuk* (muncul `AssertionError`).

```python
# Fungsi matematika
def tambah(a, b):
    return a + b

# Mari kita Uji!
assert tambah(2, 3) == 5, "Coba hitung lagi!"
assert tambah(-1, 1) == 0, "Masa -1 tambah 1 salah?"
# assert tambah(5, 5) == 11 # KALAU DIHAPUS PAGARNYA, PASTI ERROR!
```
Kalau program dijalankan dan diam saja, berarti tes lolos semua! Keren, kan? 

---

## 🛠️ Latihan Praktikum: Agen Penguji (QA Tester)
Diberikan sebuah kode fungsi kalkulator nilai IPK yang dibuat temanmu:
```python
def tentukan_predikat(ipk):
    if ipk > 3.5:
        return "Cum Laude"
    elif ipk > 3.0:
        return "Sangat Memuaskan"
    else:
        return "Memuaskan"
```
**Tugasmu:** 
1. Buat 5 *Test Case* menggunakan `assert` untuk menguji fungsi temanmu itu.
2. Cari celah / bug dari logika kode di atas! (Apa yang terjadi kalau IPK-nya 4.5? Atau IPK-nya -1.2?)
3. Perbaiki kode temanmu dengan menambahkan validasi, supaya jika IPK di atas 4.0 atau di bawah 0.0, fungsinya mereturn `"Nilai tidak valid!"`. 🚀
