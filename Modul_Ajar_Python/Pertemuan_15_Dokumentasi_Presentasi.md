# Pertemuan 15: Dokumentasi, Laporan, dan Keterampilan Presentasi 📝🎤

Wah, program buatan kalian sudah jadi dan berjalan lancar. Hebat! 
Tapi, tugas seorang programmer belum selesai sampai di situ. Kode yang bagus tapi nggak ada penjelasan (dokumentasinya), sama aja kayak beli obat tanpa kertas petunjuk pakai. 

Hari ini kita akan belajar membungkus hasil kerja keras kita agar terlihat profesional dan siap dipamerkan!

## 🎯 Tujuan Hari Ini
1. Paham cara memberikan komentar yang baik pada kode (*Docstrings*).
2. Tahu format penulisan laporan akhir project (*ReadMe*).
3. Mendapat tips jitu untuk mempresentasikan hasil karya (UAS).

---

## 📝 1. *Docstrings*: Catatan Harian untuk Kodingan
Kalian sudah tahu pakai simbol pagar `#` untuk komentar. Tapi untuk fungsi atau program besar, profesional biasanya menggunakan *Docstrings* (Teks Dokumentasi yang diapit tiga kutip `"""`).

*Docstrings* ditaruh tepat di bawah nama fungsi untuk menjelaskan: Apa guna fungsi ini? Apa parameternya? Apa hasil return-nya?

```python
def hitung_luas_segitiga(alas, tinggi):
    """
    Fungsi untuk menghitung luas segitiga.
    
    Parameter:
    - alas (int/float): Panjang alas segitiga
    - tinggi (int/float): Tinggi segitiga
    
    Return:
    - (float): Hasil perhitungan luas
    """
    return 0.5 * alas * tinggi
```
Kerennya, kalau temanmu (atau kamu 6 bulan ke depan) lupa fungsi ini buat apa, tinggal cek *Docstrings*-nya saja!

---

## 📘 2. Menyusun Laporan Proyek (README)
Kalau kalian membuat aplikasi, biasanya disisipkan satu file teks bernama `README.md` (Baca Aku). Ini adalah "Brosur" dari aplikasimu.

Format Standar sebuah README / Laporan Mini Project:
1. **Nama Aplikasi & Pembuat:** (Misal: *PerpusConsole - by Kelompok 1*)
2. **Deskripsi Singkat:** Aplikasi ini buat apa dan masalah apa yang diselesaikan?
3. **Fitur Utama:** Sebutkan menu-menu unggulannya (Tambah Buku, Pinjam Buku, dll).
4. **Cara Menjalankan:** Panduan cara nge-run kodenya (Misal: ketik `python perpus.py` di terminal).

Jangan bikin laporan yang panjang bertele-tele seperti skripsi (kecuali diminta dosen ✌️). Cukup buat yang padat dan jelas.

---

## 🎤 3. Tips Presentasi (Show Off Time!)
Di UAS nanti, kalian kemungkinan harus mempresentasikan program kalian (Demo). 
Berikut tips agar nilaimu maksimal dan kelihatan seperti *Programmer Pro*:

- **Jangan Baca Kode Baris-per-Baris!**
  *Audiens bakal ngantuk kalau kamu jelasin "Ini ada if, ini ada print".*
  Fokus pada Alur (*Flow*). Jelaskan cara kerjanya secara umum.
- **Tunjukkan Hasil (Demo First!)**
  Langsung jalankan programnya! Kasih lihat betapa kerennya aplikasimu bekerja, baru setelah itu jelaskan "Dapur" alias kodenya.
- **Berani Akui Kekurangan**
  Kalau programmu masih punya *bug* (error kecil), sampaikan saja dengan jujur. "Aplikasi ini sudah berjalan, namun masih ada kendala jika user memasukkan angka negatif". Dosen sangat menghargai kejujuran dan analisamu.

---

## 🛠️ Latihan Praktikum: Simulasi Pitching
1. Ambil kode *Mini Project* (Perpustakaan) yang kalian buat di pertemuan 14.
2. Tambahkan *Docstrings* yang rapi pada setiap fungsi yang kalian buat.
3. Siapkan naskah presentasi 3 menit. Silakan berlatih presentasi dengan teman di sebelahmu (Satu jadi presenter, satu pura-pura jadi Dosen/Klien). 🚀
