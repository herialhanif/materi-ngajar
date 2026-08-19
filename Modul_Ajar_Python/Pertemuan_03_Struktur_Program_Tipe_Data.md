# Pertemuan 3: Struktur Program, Variabel, dan Tipe Data 📦

Hari yang ditunggu-tunggu tiba! Kita akan mulai menulis mantra ajaib kita menggunakan **Python** 🐍.
Siapkan kopimu, buka laptopmu, mari kita "berbicara" dengan komputer!

## 🎯 Tujuan Hari Ini
1. Paham cara menggunakan Variabel (si "kotak penyimpan data").
2. Kenal dengan Tipe Data dasar di Python.
3. Menulis program Python pertamamu!

---

## 🌍 1. Halo Dunia!
Tradisi wajib setiap kali belajar bahasa pemrograman baru adalah membuat program yang menampilkan teks "Hello, World!". Di Python, ini semudah bernapas.

Tulis ini di editor kodemu dan jalankan:
```python
print("Halo, Dunia!")
print("Saya siap jadi Programmer Python yang handal!")
```
Selamat! Kamu baru saja menyuruh komputer berbicara! Fungsi `print()` digunakan untuk menampilkan (mencetak) sesuatu ke layar. Gampang banget kan?

---

## 📦 2. Variabel: Kotak Ajaib Penyimpan Data
Bayangkan kamu punya kardus. Kardus itu kamu tempeli label "Nama Barang", lalu di dalamnya kamu masukin sepatu. 
Di pemrograman, **kardus berlabel** itu disebut **Variabel**. Gunanya untuk menyimpan data sementara.

Contoh di Python:
```python
nama = "Budi"
umur = 19
print("Halo, nama saya", nama, "dan umur saya", umur, "tahun.")
```

**Aturan Penamaan Variabel yang Baik:**
- Gunakan nama yang jelas. (Pakai `harga_buku`, jangan `x` atau `hb`).
- Pakai *snake_case* (huruf kecil semua dipisah garis bawah). Contoh: `nama_depan`, `uang_jajan`.
- Nggak boleh diawali angka! `1nama` itu dilarang, `nama1` itu boleh.

---

## 🧬 3. Tipe Data Dasar (Wujud Asli Data)
Setiap data yang kita simpan di variabel punya wujud (tipe). Sama seperti di dunia nyata ada benda padat, cair, atau gas. Di Python, ada tipe data ini:

1. **Integer (`int`)**: Angka bulat (nggak pakai koma). 
   - Contoh: `umur = 19`, `jumlah_kucing = 5`.
2. **Float (`float`)**: Angka pecahan / desimal (ingat, pakai titik `.`, bukan koma `,`).
   - Contoh: `berat_badan = 65.5`, `phi = 3.14`.
3. **String (`str`)**: Teks atau kata-kata. Selalu diapit tanda kutip `"..."` atau `'...'`.
   - Contoh: `nama = "Andi"`, `prodi = 'Sistem Informasi'`.
   - *Catatan: Angka kalau dikurung tanda kutip jadi teks loh! `"100"` itu String, bukan Integer!*
4. **Boolean (`bool`)**: Tipe data anak pramuka, cuma punya dua nilai: **Benar** (`True`) atau **Salah** (`False`). 
   - Huruf depan wajib kapital! 
   - Contoh: `sudah_makan = True`, `punya_pacar = False`. (Ups!) 😅

---

## 🔍 Cek Tipe Data (Biar Gak Ketipu)
Kadang kita bingung, ini variabel isinya angka atau teks ya? Kita bisa nanya Python pakai fungsi `type()`.

```python
angka_rahasia = 100
teks_rahasia = "100"

print(type(angka_rahasia))  # Hasilnya: <class 'int'>
print(type(teks_rahasia))   # Hasilnya: <class 'str'>
```

---

## 🛠️ Latihan Praktikum
Coba buat program Python baru:
1. Buat variabel `nama_mahasiswa`, isi dengan nama lengkapmu.
2. Buat variabel `NIM`, isi dengan nomor indukmu.
3. Buat variabel `ipk_harapan`, isi dengan target IPK-mu (misal: `3.99`).
4. Tampilkan (Print) semua variabel tersebut dalam satu kalimat yang nyambung!

*Clue:*
```python
print("Perkenalkan saya", nama_mahasiswa, "dengan NIM", NIM)
# Lanjutkan sendiri ya!
```
Semangat ngoding! 💻🔥
