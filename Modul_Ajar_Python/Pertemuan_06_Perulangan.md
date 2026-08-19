# Pertemuan 6: Perulangan (Mengerjakan Tugas Berulang Tanpa Capek!) 🔄

Bayangkan dosenmu menghukummu: *"Tulis kalimat 'Saya tidak akan telat lagi' sebanyak 100 kali di kertas!"*. Wah, pasti tangan pegal! 
Tapi kalau kamu seorang programmer, kamu cukup nulis 3 baris kode, dan komputer yang akan nulis kalimat itu 100 kali (bahkan 1 juta kali) dalam sedetik. 

Inilah kehebatan **Perulangan (Looping)**!

## 🎯 Tujuan Hari Ini
1. Paham bedanya perulangan `for` dan `while`.
2. Bisa menggunakan `for` untuk menghitung urutan (range).
3. Bisa membuat program yang mengulang tugas otomatis.

---

## 🔁 1. Perulangan `for` (Ulang Sebanyak N Kali)
Kalau kamu **SUDAH TAHU** berapa kali kamu ingin mengulang sesuatu, gunakan `for` dan teman baiknya: `range()`.

```python
# Mencetak angka 0 sampai 4
for angka in range(5):
    print("Ini perulangan ke-", angka)
```
*Note:* Python itu hitungnya selalu mulai dari **NOL**. Jadi kalau `range(5)`, yang keluar adalah 0, 1, 2, 3, 4. (Totalnya tetap 5 buah angka!).

**Gimana kalau mau mulai dari angka 1?**
Kamu bisa kasih batas awal dan batas akhir di dalam `range(awal, akhir)`:
```python
for angka in range(1, 6):
    print("Angka", angka)
```
Outputnya: 1, 2, 3, 4, 5. *(Ingat, batas akhirnya (6) tidak pernah diikutkan!)*

---

## 🎡 2. Perulangan `while` (Ulang Selama Syarat Terpenuhi)
Kalau `for` itu ngulang pakai *batasan jumlah*, nah `while` ini ngulang berdasarkan **Kondisi / Syarat**. 
Mirip kayak `if`, tapi dia bakal ngejalanin kodenya terus menerus *selama* syaratnya masih bernilai `True`.

```python
bensin = 3

while bensin > 0:
    print("Mobil jalan... Wushhh!")
    bensin = bensin - 1  # Bensin berkurang 1 setiap putaran

print("Yah, bensin habis!")
```

**⚠️ Hati-hati "Infinite Loop"!**
Di contoh atas, nilai `bensin` kita kurangi terus supaya lama-lama jadi 0 dan perulangan berhenti. Kalau kamu lupa ngurangin, perulangan nggak akan pernah berhenti (Infinite Loop), dan laptopmu bisa nge-hang! 

---

## 🛑 3. Rem Darurat: `break` dan `continue`
Di tengah-tengah perulangan, kadang kita mau langsung berhenti atau skip 1 putaran.

- **`break`:** Menghentikan (menghancurkan) perulangan total saat itu juga.
- **`continue`:** Skip sisa kode di putaran ini, dan langsung lanjut ke putaran berikutnya.

Contoh `break`:
```python
for i in range(1, 10):
    if i == 5:
        print("Ketemu angka 5, langsung kabur!")
        break
    print("Lagi cek angka", i)
```
Outputnya cuma dari 1 sampai 4, pas di 5 dia langsung keluar!

---

## 🛠️ Latihan Praktikum: Kalkulator Perkalian
Pernah lihat tabel perkalian anak SD kan? Ayo kita buat pakai Python!
Buatlah program yang meminta user memasukkan angka, lalu tampilkan tabel perkalian 1 sampai 10 dari angka tersebut!

**Contoh Output jika user masukin angka 7:**
```
1 x 7 = 7
2 x 7 = 14
...
10 x 7 = 70
```

*Clue:* Gunakan `for i in range(1, 11):` dan tampilkan hasil kali `i` dengan angka yang diinput user! Selamat mencoba! 🚀
