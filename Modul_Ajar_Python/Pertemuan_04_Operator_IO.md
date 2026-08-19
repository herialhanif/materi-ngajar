# Pertemuan 4: Operator dan Input/Output (I/O) 🧮

Minggu lalu kita sudah belajar bikin variabel. Tapi kalau variabelnya cuma diem aja (disimpan tapi nggak diapa-apain), ya buat apa? 
Hari ini kita akan belajar memanipulasi variabel tersebut menggunakan **Operator** (hitung-hitungan) dan membuat program lebih interaktif dengan meminta **Input** dari user!

## 🎯 Tujuan Hari Ini
1. Paham cara menerima masukan dari pengguna (`input`).
2. Bisa menggunakan Operator Aritmatika dan Logika.
3. Menulis program kalkulator super sederhana!

---

## 🎤 1. Ngobrol Interaktif: Fungsi `input()`
Kalau `print()` dipakai buat nampilin teks, nah `input()` dipakai buat **minta data dari user**. Program yang baik itu kayak pelayan restoran, nanya dulu ke pelanggannya mau pesen apa.

Coba tulis kode ini:
```python
nama = input("Halo! Siapa namamu? ")
print("Oh, halo", nama, "salam kenal ya!")
```
Pas dijalankan, program bakal *berhenti sementara*, nunggu kamu ngetik nama dan tekan tombol `Enter`. Asik kan?

**⚠️ PERINGATAN KERAS!**
Fungsi `input()` itu selalu menghasilkan tipe data **String (teks)**. Walaupun kamu ngetik angka `10`, Python akan menyimpannya sebagai teks `"10"`. 

Kalau kamu mau minta angka buat dihitung, kamu harus mengubah (kasting) tipe datanya dulu jadi Integer atau Float:
```python
umur = int(input("Umurmu berapa? "))  # Diubah paksa jadi Integer
berat = float(input("Berat badanmu? ")) # Diubah paksa jadi Float
```

---

## 🧮 2. Operator Aritmatika (Belajar MTK Dikit)
Nah, kalau data angkanya sudah dapet, mari kita hitung! Simbol-simbol hitungan ini disebut **Operator Aritmatika**. 

- `+` (Tambah)
- `-` (Kurang)
- `*` (Kali) ➡️ *Ingat, pakai bintang, bukan huruf x!*
- `/` (Bagi) ➡️ *Hasilnya pasti Float (desimal).*
- `//` (Bagi Bulat) ➡️ *Cuma ngambil angka utuhnya, sisa komanya dibuang. (Misal: 10 // 3 hasilnya 3).*
- `%` (Sisa Bagi / Modulo) ➡️ *Ngambil sisanya. (Misal: 10 % 3 hasilnya 1, karena 10 dibagi 3 sisa 1).*
- `**` (Pangkat) ➡️ *Misal: 2 ** 3 artinya 2 pangkat 3 (hasilnya 8).*

**Contoh:**
```python
a = 10
b = 3
print("Hasil tambah:", a + b)
print("Sisa bagi:", a % b)
```

---

## ⚖️ 3. Operator Perbandingan (Siapa yang Lebih Hebat?)
Selain ngitung, kita juga bisa membandingkan dua nilai. Hasil dari perbandingan ini PASTI berupa **Boolean** (`True` atau `False`).

- `==` (Sama dengan) ➡️ *Ingat! Sama dengannya HARUS DUA KALI! Kalau cuma satu `=` itu buat ngisi variabel.*
- `!=` (Tidak sama dengan)
- `>` (Lebih besar)
- `<` (Lebih kecil)
- `>=` (Lebih besar atau sama dengan)
- `<=` (Lebih kecil atau sama dengan)

**Contoh Cepat:**
```python
print(10 == 10)  # True
print(5 > 9)     # False
print(10 != 5)   # True
```

---

## 🛠️ Latihan Praktikum: Kalkulator Anak Kos
Buatlah sebuah program Python yang menghitung total patungan makan anak kos!
1. Program minta input: `Harga Total Makanan` (dalam Rupiah).
2. Program minta input: `Jumlah Orang` yang ikut makan.
3. Program menghitung: Harga per orang = Harga Total / Jumlah Orang.
4. Tampilkan (Print): "Masing-masing orang harus bayar Rp [Hasil]"

*Tantangan:* Pastikan program tidak error kalau harga yang dimasukkan ada pecahannya (gunakan tipe data yang tepat)! 🚀
