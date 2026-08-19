# Pertemuan 9: Array (List) - Loker Penyimpan Banyak Barang 📦📦📦

Selamat datang di paruh kedua perkuliahan! Kalau sebelumnya variabel ibarat "satu kotak kardus" yang cuma bisa menyimpan SATU barang (satu data), bayangkan kalau kamu punya 100 data nama mahasiswa. Masa mau bikin variabel `nama1`, `nama2`, sampai `nama100`? Pegal!

Solusinya: Kita pakai **Array**! Di Python, struktur data yang paling mirip dengan Array dan paling sering dipakai disebut **List**.

## 🎯 Tujuan Hari Ini
1. Memahami konsep Array / List (Kumpulan data berurutan).
2. Bisa menambah, menghapus, dan mengubah data dalam List.
3. Memadukan List dengan Perulangan (`for`).

---

## 🚂 1. Apa Itu List? (Kereta Api Data)
Bayangkan List itu seperti gerbong kereta api. Satu kereta bisa punya banyak gerbong, dan tiap gerbong ditandai dengan **Nomor Urut (Index)**.

Di Python, List dibuat dengan kurung siku `[ ]`.

```python
# List kosong
tas_belanja = []

# List isi nama-nama buah
keranjang_buah = ["Apel", "Jeruk", "Mangga", "Pisang"]
```

**⚠️ Aturan Nomor Gerbong (Index):**
Di dunia komputer, kita **selalu mulai berhitung dari 0**.
- `"Apel"` ada di index 0.
- `"Jeruk"` ada di index 1.
- `"Mangga"` ada di index 2.
- `"Pisang"` ada di index 3.

Cara ngambil datanya:
```python
print(keranjang_buah[0])  # Output: Apel
print(keranjang_buah[2])  # Output: Mangga
```

---

## 🛠️ 2. Main-Main dengan List (Tambah, Hapus, Ubah)

List itu fleksibel, isi gerbongnya bisa kita gonta-ganti kapan aja!

**A. Nambah Data ke Belakang (Append)**
```python
keranjang_buah.append("Durian")
# Sekarang Durian ada di index 4
```

**B. Ubah Isi Data (Replace)**
```python
# Jeruk (index 1) kita ganti jadi Anggur
keranjang_buah[1] = "Anggur"
```

**C. Hapus Data (Remove/Pop)**
```python
keranjang_buah.remove("Pisang")  # Hapus berdasarkan nama buahnya
buah_dibuang = keranjang_buah.pop(0) # Hapus berdasarkan index (0 = Apel)
```

---

## 🔄 3. Menggabungkan List dengan Perulangan
List dan Perulangan `for` itu *bestie* sejati. Kalau mau nampilin seluruh isi list satu-satu, kita cukup ngomong ke Python: *"Tolong loop dong untuk setiap isi di dalam list ini"*.

```python
absen_kelas = ["Budi", "Siti", "Andi", "Tono"]

for nama in absen_kelas:
    print("Hadir:", nama)
```
Gampang banget kan? Nggak perlu lagi nulis index 0, 1, 2 secara manual!

---

## 🧊 4. List 2 Dimensi (List di Dalam List)
Gimana kalau kita mau bikin papan catur atau data matriks Excel? Kita bisa masukin List ke dalam List!

```python
matriks_angka = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Cara panggilnya: matriks_angka[baris][kolom]
print(matriks_angka[0][1])  # Baris 0, Kolom 1 => Output: 2
```

---

## 🛠️ Latihan Praktikum: Aplikasi To-Do List!
Buatlah sebuah program Python sederhana yang berjalan terus (pakai `while`) dengan menu:
1. Tambah Tugas Baru.
2. Lihat Semua Tugas.
3. Keluar dari Program.

*Clue:* Siapkan satu variabel `todo_list = []` kosong di awal program. Kalau pilih nomor 1, minta input user dan `.append()` ke list. Kalau nomor 2, tampilkan isinya pakai `for`! 🚀
