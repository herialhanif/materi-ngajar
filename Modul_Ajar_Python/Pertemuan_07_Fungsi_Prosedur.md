# Pertemuan 7: Fungsi dan Prosedur (Biar Nggak Nulis Kode yang Sama Berkali-kali) 📦

Saat programmu semakin besar (sampai ratusan baris), kamu pasti bakal menemukan bagian kode yang sama diulang berkali-kali di tempat yang berbeda. 
Menulis kode yang sama berulang kali itu capek dan rentan error! Ingat prinsip Programmer malas tapi cerdas: **DRY (Don't Repeat Yourself)**.

Solusinya? Bungkus kode tersebut jadi sebuah **Fungsi (Function)**!

## 🎯 Tujuan Hari Ini
1. Paham konsep modularitas pakai Fungsi.
2. Bisa membuat Fungsi (def) di Python.
3. Tahu cara kirim data (parameter) dan mengembalikan hasil (return).

---

## 🛠️ 1. Apa Itu Fungsi? (Analogi Mesin Blender)
Bayangkan sebuah Fungsi itu seperti Mesin Blender di dapur:
1. Kamu masukkan buah (Input/Parameter).
2. Mesin muter mencampur buah (Proses Kode).
3. Keluar jus segar (Output/Return).

Kalau kita nggak pakai fungsi, setiap mau bikin jus kita harus ngulek manual terus. Dengan punya mesin blender (fungsi), kita tinggal pakai mesin itu berkali-kali!

---

## 🐍 2. Bikin Fungsi di Python (`def`)
Di Python, kita bikin fungsi pakai kata kunci `def` (Define).

**Contoh 1: Fungsi paling sederhana (Tanpa buah, tanpa jus)**
```python
# Ini baru bikin mesinnya
def sapa_dunia():
    print("Halo Dunia!")
    print("Selamat belajar Python!")

# Cara pakai mesinnya (Memanggil fungsi)
sapa_dunia()
sapa_dunia() 
```
*Kalau kamu jalankan, tulisan halo-halo tadi bakal muncul dua kali!* 

---

## 🍎 3. Fungsi dengan Parameter (Masukin Buah ke Blender)
Fungsi di atas membosankan karena sapaannya gitu-gitu aja. Mari kita bikin fungsi yang bisa menerima "buah" (data dari luar). Data ini disebut **Parameter**.

```python
# nama_orang adalah parameter
def sapa_nama(nama_orang):
    print("Halo bos", nama_orang, "!")

# Panggil fungsi dan kirim datanya (argumen)
sapa_nama("Budi")
sapa_nama("Siti")
```
Satu mesin, hasil bisa beda-beda tergantung bahan (data) yang dimasukkan. Keren kan?

---

## 🍹 4. Fungsi yang Mengembalikan Nilai (`return`)
Fungsi `print()` cuma *nampilin* ke layar, tapi datanya nggak bisa kita simpan. Kalau kita mau hasilnya bisa disimpan ke variabel lain (seperti jus yang dituang ke gelas), kita wajib pakai `return`.

```python
# Fungsi menghitung luas
def hitung_luas(panjang, lebar):
    luas = panjang * lebar
    return luas  # ⬅️ Ini kuncinya! Mengembalikan nilai

# Kita panggil fungsinya, lalu simpan hasilnya ke variabel 'hasil'
hasil = hitung_luas(5, 10)
print("Luasnya adalah:", hasil)
```

**Beda Fungsi dan Prosedur:**
- **Prosedur:** Fungsi yang *TIDAK* punya `return` (kayak contoh `sapa_dunia` di atas).
- **Fungsi:** Punya `return` (menghasilkan nilai yang bisa diproses lagi).

---

## 🛠️ Latihan Praktikum: Robot Penghitung Suhu
Buatlah sebuah fungsi bernama `celcius_ke_fahrenheit(suhu_c)`.
1. Fungsi ini menerima 1 parameter (angka derajat Celcius).
2. Di dalam fungsi, hitung rumus: `F = (suhu_c * 9/5) + 32`.
3. Fungsi harus `return` hasil fahrenheit-nya.
4. Minta input dari user untuk suhu celcius, panggil fungsi tersebut, lalu print hasilnya! 🚀
