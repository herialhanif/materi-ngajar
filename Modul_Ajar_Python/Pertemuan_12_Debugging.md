# Pertemuan 12: Debugging & Error Handling (Berdamai dengan Error) 🐛🔨

Sebagai programmer pemula, layar merah berisi pesan *Error* adalah hal yang bikin jantungan. Seolah-olah komputernya marah dan meneriaki kita.

Tapi tenang! Error itu wajar. Programmer kelas dunia pun sering ngadepin error setiap hari. Yang penting bukan **"gimana caranya supaya nggak pernah error"**, tapi **"gimana caranya menemukan dan menangani error itu dengan anggun"**.

## 🎯 Tujuan Hari Ini
1. Mengenal jenis-jenis Error (Syntax vs Logic).
2. Tahu cara pakai alat pelindung: `try` dan `except`.
3. Tahu trik mencari kutu (Debugging).

---

## 🚨 1. Macam-Macam Error
- **Syntax Error (Salah Ketik):** Python itu *grammar nazi*. Lupa kasih titik dua `:`, salah spasi (indentasi), atau lupa tutup kurung, dia bakal mogok jalan. 
  *(Solusi: Baca pesan errornya, dia kasih tahu di baris (line) ke berapa salahnya).*
- **Runtime Error (Error Pas Jalan):** Programnya bisa jalan, eh di tengah-tengah meledak! Misal karena masukin kata ke dalam rumus hitungan, atau membagi angka dengan nol.
- **Logic Error (Error Nalar):** Ini paling parah! Program jalan lancar, nggak ada peringatan merah, tapi hasil hitungannya **salah total**. Misal: niat ngurangin diskon malah nambahin harga.

---

## 🛡️ 2. Alat Pelindung: `try-except` (Error Handling)
Gimana supaya kalau ada Runtime Error, programnya nggak langsung meledak dan mati, tapi ngasih pesan yang sopan ke user? 
Gunakan *Try and Catch* (Di Python namanya `try` dan `except`).

**Kasus:** Kita minta user masukin umur (angka). Tapi user usil malah masukin kata "Sepuluh". Kalau pakai `int(input())` biasa, program langsung *Crash*!

**Solusinya:**
```python
try:
    umur = int(input("Masukkan umurmu (angka saja): "))
    print(f"Tahun depan umurmu jadi {umur + 1}")

except ValueError:
    print("Oops! Kamu masukin huruf ya? Tolong masukkan angka saja!")

print("Program selesai dengan damai.")
```
Di blok `try`, Python mencoba menjalankan kodenya. Kalau gagal (error `ValueError`), dia langsung lompat ke blok `except` tanpa mematikan sisa program.

---

## 🕵️ 3. Teknik Debugging Ala Detektif
*Debugging* adalah seni mencari sumber kutu (Bug) di kodemu.

**Trik paling klasik: `print()` di mana-mana**
Kalau nilai akhirnya salah (Logic Error), kamu bisa selipkan fungsi `print()` di tengah-tengah untuk mengintip nilai variabelnya berubah jadi apa.

```python
# Misalnya ada program hitung total tapi salah
harga = 10000
diskon = 2000
total = harga + diskon # OPS! Harusnya dikurang!

print("DEBUG Cek harga:", harga)
print("DEBUG Cek total:", total) # Nah loh kok jadi 12000? Baru ketahuan salahnya.
```
Kalau programmu error panjang, coba periksa **Pesan Paling Bawah** dari teks merahnya. Biasanya jawabannya ada di situ!

---

## 🛠️ Latihan Praktikum: Kalkulator Anti-Meledak
Buatlah Kalkulator Pembagian:
1. Minta user masukin "Angka Pertama" dan "Angka Kedua".
2. Tampilkan hasil baginya.
3. Gunakan blok `try-except` untuk menangani **dua jenis usil user**:
   - Jika user memasukkan teks (bukan angka), beri pesan *"Masukkan angka woi!"* (`ValueError`).
   - Jika user mencoba membagi dengan angka **Nol** (0), beri pesan *"Gak bisa dibagi nol ya!"* (`ZeroDivisionError`). 🚀
