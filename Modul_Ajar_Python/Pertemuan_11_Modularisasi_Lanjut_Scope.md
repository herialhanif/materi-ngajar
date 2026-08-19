# Pertemuan 11: Scope (Ruang Lingkup) dan Import Modul 🌍

Pernah nggak kamu naruh kunci motor di dalam kamar kos, lalu kamu cari-cari di garasi? Pasti nggak ketemu kan? Karena "ruang lingkup" tempat kunci itu berada adalah di *kamar*, bukan di ruang publik.

Sama dengan pemrograman! Variabel yang kita buat juga punya **Scope** atau jangkauan. Variabel yang dibuat di dalam sebuah fungsi belum tentu bisa dipanggil dari luar fungsi tersebut.

## 🎯 Tujuan Hari Ini
1. Memahami perbedaan Variabel Global dan Lokal.
2. Bisa menyusun program ke dalam modul-modul kecil (Importing).

---

## 🔒 1. Variabel Lokal (Rahasia Dalam Fungsi)
Variabel yang kamu bikin di dalam blok `def` (fungsi), itu sifatnya **Lokal**. Dia cuma hidup dan bisa diakses di dalam blok fungsi itu aja. Keluar dari blok itu, dia lenyap!

```python
def sapa():
    pesan_rahasia = "Halo dari dalam!" # Ini variabel lokal
    print(pesan_rahasia)

sapa() # Berjalan normal, tampil "Halo dari dalam!"

# Tapi kalau kita paksa panggil pesan_rahasia dari luar...
# print(pesan_rahasia)  ⬅️ ERROR! Python nggak kenal variabel ini.
```

---

## 🌎 2. Variabel Global (Milik Bersama)
Sebaliknya, kalau kamu bikin variabel di **luar** fungsi mana pun, sifatnya jadi **Global**. Semua fungsi bebas melihat dan memakainya.

```python
nama_dosen = "Pak Heri"  # Ini Variabel Global

def sapa_pagi():
    print(f"Selamat pagi, {nama_dosen}")

def sapa_sore():
    print(f"Selamat sore, {nama_dosen}")

sapa_pagi()
sapa_sore()
```
Lihat kan? `nama_dosen` bisa dipakai oleh kedua fungsi tersebut.

**⚠️ Warning:** Mengubah nilai variabel global dari dalam fungsi itu sedikit *tricky*. Kamu harus mendeklarasikan `global nama_dosen` di dalam fungsi tersebut. Tapi saran terbaik: **Hindari terlalu banyak pakai variabel global** biar kodemu nggak gampang *nge-bug*!

---

## 📦 3. Import Modul (Pinjem Alat Orang Lain)
Kadang kita butuh fungsi yang kompleks, misalnya untuk ngitung akar kuadrat, atau nyari angka acak (random). Daripada kita bikin algoritmanya dari nol dan pusing sendiri, mending kita "pinjam" yang udah dibikin orang lain/bawaan Python!

Namanya adalah **Module**. Cara manggilnya pakai perintah `import`.

**Contoh: Bikin angka acak (Random)**
```python
import random

# Pilih satu angka acak dari 1 sampai 10
angka_dadu = random.randint(1, 10)
print(f"Kamu dapat angka: {angka_dadu}")
```

**Contoh: Fungsi Matematika Rumit (Math)**
```python
import math

akar_kuadrat = math.sqrt(25)  # sqrt itu Square Root (Akar)
print(f"Akar dari 25 adalah {akar_kuadrat}")
```

Kita juga bisa meng-*import* file Python buatan kita sendiri lho! Caranya persis sama. Inilah yang bikin kode program yang ribuan baris bisa dibagi-bagi ke file yang rapi.

---

## 🛠️ Latihan Praktikum: Game Tebak Angka
Mari kita buat game seru!
1. Import library `random` dan suruh komputer milih angka rahasia dari 1 sampai 10 (jangan di-print!).
2. Gunakan perulangan `while` untuk meminta user menebak.
3. Beri petunjuk apakah tebakannya "Kekecilan" atau "Kegedean".
4. Kalau tebakannya sama persis, *break* dari perulangan dan print "Selamat! Tebakanmu benar!". 🚀
