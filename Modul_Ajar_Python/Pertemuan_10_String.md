# Pertemuan 10: String (Trik Asik Mengolah Teks) ✂️

Minggu lalu kita ngobrolin Array/List (Kumpulan data). Nah, tahukah kamu kalau **String (Teks)** itu sebenarnya adalah *List dari Karakter*?

Kata `"PYTHON"` itu sebenarnya adalah kumpulan huruf `P`, `Y`, `T`, `H`, `O`, dan `N` yang digabung jadi satu. Karena dia mirip List, kita bisa memperlakukannya seperti kereta api ber-gerbong!

## 🎯 Tujuan Hari Ini
1. Paham bahwa String punya Index (nomor urut karakter).
2. Bisa memotong teks (Slicing).
3. Mengenal berbagai jurus manipulasi teks bawaan Python (Method String).

---

## 🚂 1. Indexing pada String
Ingat, perhitungan indeks selalu dimulai dari **0**.

```python
pesan = "KODING"

print(pesan[0])  # Output: K
print(pesan[3])  # Output: I
```

Menariknya, Python punya indeks negatif! Kalau kamu panggil indeks `-1`, dia akan ngambil huruf dari **paling belakang**.
```python
print(pesan[-1]) # Output: G
print(pesan[-2]) # Output: N
```

---

## 🔪 2. Slicing String (Memotong Teks)
Gimana kalau mau ngambil lebih dari satu huruf? *Misal mau ngambil "KOD" aja dari "KODING".*
Gunakan teknik memotong teks *(Slicing)*: `[awal : akhir]`

```python
teks = "BELAJAR PYTHON"

print(teks[0:7])   # Ambil dari index 0 sampai 6 -> "BELAJAR"
print(teks[8:])    # Ambil dari index 8 sampai habis -> "PYTHON"
print(teks[:4])    # Ambil dari depan sampai index 3 -> "BELA"
```
*(Ingat aturan lama: batas akhir nggak diikutkan! Jadi `0:7` berarti ambil dari 0 sampai 6).*

---

## 🛠️ 3. Method String (Jurus-jurus Bawaan Python)
Python sudah menyiapkan alat-alat ajaib untuk ngotak-ngatik teks. Cukup panggil nama jurusnya di belakang nama variabel pakai tanda titik (`.`).

**A. Jurus Kapital & Huruf Kecil**
```python
kalimat = "ini HURUF acaKaCAkan"
print(kalimat.upper())   # Jadi BESAR SEMUA
print(kalimat.lower())   # Jadi kecil semua
print(kalimat.title())   # Jadi Huruf Besar Di Awal Kata
```

**B. Jurus Hapus Spasi Pengganggu (`strip`)**
Kalau user iseng masukin password tapi depannya dispasiin, kita bersihin pakai `strip()`.
```python
nama = "    Spiderman    "
bersih = nama.strip() 
print(bersih)  # Output: "Spiderman"
```

**C. Jurus Ganti Kata (`replace`)**
```python
mantan = "Aku benci banget sama kamu"
move_on = mantan.replace("benci", "sayang")
print(move_on) # Output: "Aku sayang banget sama kamu"
```

**D. Jurus Memecah Kalimat Jadi List (`split`)**
Memecah satu kalimat panjang jadi List per kata (dipisah spasi).
```python
curhat = "Hari ini aku pusing ngoding"
pecah = curhat.split()
print(pecah) # Output: ['Hari', 'ini', 'aku', 'pusing', 'ngoding']
```

---

## 🧩 4. F-String (Gabung Teks dan Variabel Paling Gampang)
Dulu pas kita nyetak teks campur variabel, kita pakai koma: `print("Halo", nama, "umur", umur)`.
Sekarang kita punya cara yang lebih estetik dan *modern*! Namanya **f-string**.
Cukup taruh huruf `f` di depan kutip, dan masukin variabel ke dalam kurung kurawal `{ }`.

```python
nama = "Andi"
uang = 50000

print(f"Halo namaku {nama}, dan aku punya uang Rp {uang}")
```

---

## 🛠️ Latihan Praktikum: Sensor Kata Kasar!
Buatlah sebuah program chat sederhana:
1. Program meminta user menginput komentar (`input`).
2. Kalau user pakai kata "bodoh" atau "jelek", secara otomatis kata itu di-`replace` jadi tanda bintang `***`.
3. Tampilkan kembali kalimat yang sudah disensor!
4. *(Bonus)* Buat agar aplikasinya jadi Case-Insensitive (Nggak peduli user nulisnya huruf besar atau kecil, tetap tersensor). 🚀
