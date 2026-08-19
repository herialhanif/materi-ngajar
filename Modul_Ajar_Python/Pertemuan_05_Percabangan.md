# Pertemuan 5: Percabangan (Membuat Keputusan) 🚦

Sampai minggu lalu, program kita sifatnya "lurus aja" dari baris 1 sampai baris terakhir, semuanya dieksekusi tanpa terkecuali. 
Nah, di kehidupan nyata, kadang kita harus mengambil keputusan berdasarkan kondisi. 
*Misal: "Kalau hujan, bawa payung. Kalau cerah, pakai kacamata hitam."*

Di Python, kita bisa membuat program "berpikir" dan mengambil keputusan seperti itu menggunakan **Percabangan (IF-ELSE)**.

## 🎯 Tujuan Hari Ini
1. Memahami konsep percabangan (Kondisi Logika).
2. Menggunakan statement `if`, `else`, dan `elif`.
3. Menulis program yang jalurnya bisa berbeda-beda!

---

## 🚦 1. Statement `if` (Jika...)
Ini bentuk paling dasar. "JIKA kondisinya benar (True), MAKA lakukan perintah di bawah ini".

```python
nilai = 80

if nilai >= 75:
    print("Selamat, kamu LULUS!")
```

**⚠️ PERHATIAN SANGAT PENTING (AWAS INDENTASI!)**
Lihat tulisan `print` di atas? Tulisannya **menjorok ke kanan** (menggunakan tombol *Tab* atau 4 *Spasi*). 
Di Python, *Indentasi* (menjorok ke dalam) itu **WAJIB**! Ini menandakan bahwa perintah `print` tersebut adalah bagian (anak) dari si `if`. Kalau sejajar, Python bakal marah dan ngeluarin *IndentationError*!

---

## 🔀 2. Statement `else` (Kalau Nggak...)
Kalau kondisi `if` tidak terpenuhi, kita butuh `else` (jika tidak).

```python
umur = 15

if umur >= 17:
    print("Boleh bikin KTP!")
else:
    print("Tunggu cukup umur ya dek!")
```
Karena `umur` (15) tidak lebih besar/sama dengan 17, kondisi `if` dianggap *False*. Maka Python akan langsung melompat mengeksekusi apa yang ada di dalam kotak `else`.

---

## 🛣️ 3. Statement `elif` (Cabang Lebih dari Dua)
Gimana kalau pilihannya ada banyak? *Misalnya: Nilai 90 dapet A, nilai 80 dapet B, sisanya dapet C.*
Kita pakai `elif` (singkatan dari *else if*).

```python
nilai_ujian = 85

if nilai_ujian >= 90:
    print("Grade A")
elif nilai_ujian >= 80:
    print("Grade B")
elif nilai_ujian >= 70:
    print("Grade C")
else:
    print("Silakan mengulang tahun depan!")
```

**Aturan Main:**
1. `if` harus selalu ada di paling atas.
2. `elif` bisa ada sebanyak apa pun yang kamu mau di tengah-tengah.
3. `else` (opsional) ditaruh di paling bawah untuk menangkap sisanya.

---

## 🕵️ 4. Operator Logika (Menggabungkan Kondisi)
Kadang syaratnya ada dua! *Misal: "Ganteng DAN Kaya" atau "Pintar ATAU Rajin".*
Di Python, kita pakai:
- `and` ➡️ Dua-duanya WAJIB benar (True).
- `or` ➡️ Minimal salah satu benar (True).
- `not` ➡️ Kebalikannya (Yang True jadi False).

Contoh `and`:
```python
uang = 100000
lapar = True

if uang >= 50000 and lapar == True:
    print("Gas beli steak!")
else:
    print("Makan mi instan aja.")
```

---

## 🛠️ Latihan Praktikum: Sistem Login Sederhana
Buatlah program yang meminta `username` dan `password` dari user!
1. Jika username = `"admin"` **dan** password = `"rahasia123"`, tampilkan: `"Login Berhasil! Selamat Datang Bos."`
2. Jika password salah, tampilkan: `"Login Gagal! Cek kembali username dan password Anda."`

*(Tips: Gunakan `input()` untuk meminta data, lalu gunakan `if-else` dan `and` untuk mengecek kondisinya!)* 🚀
