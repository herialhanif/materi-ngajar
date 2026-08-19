# Pertemuan 14: Studi Kasus Project (Bikin Aplikasi Beneran!) 🚀🛠️

Selamat! Kalian telah menguasai semua "jurus" dasar Python: dari Variabel, Tipe Data, IF, FOR/WHILE, Fungsi, Array, sampai Error Handling. 

Teori tanpa praktek nyata itu hambar. Hari ini, kita masuk ke **Project Based Learning**. Kalian akan memadukan semua ilmu yang sudah didapat untuk membangun sebuah aplikasi *Mini Project* utuh dari nol!

## 🎯 Tujuan Hari Ini
1. Merangkai berbagai konsep dasar menjadi satu kesatuan program.
2. Berpikir kritis memecahkan masalah (*Problem Solving*).
3. Terbiasa menulis kode yang modular dan rapi.

---

## 💡 Konsep Aplikasi: "Aplikasi Manajemen Buku Perpustakaan" 📚

**Cerita Singkat:**
Seorang penjaga perpustakaan masih mencatat daftar buku di buku tulis. Sering kali ia lupa buku apa saja yang dipinjam dan buku apa yang tersedia. Ia meminta bantuanmu, sang programmer handal, untuk dibuatkan sistem digital berbasis Teks (Terminal/Console) pakai Python!

---

## 📝 Persyaratan Sistem (System Requirements)
Aplikasi yang kamu buat harus punya kemampuan (Menu) berikut ini:

1. **Lihat Daftar Buku**
   - Menampilkan semua judul buku beserta statusnya (Tersedia / Sedang Dipinjam).
2. **Tambah Buku Baru**
   - Penjaga bisa menginput judul buku baru yang masuk ke perpus.
3. **Pinjam Buku**
   - Meminta user mengetik judul buku yang mau dipinjam.
   - Jika ada, statusnya diubah jadi "Dipinjam".
   - Jika sedang dipinjam orang, tampilkan pesan peringatan.
4. **Kembalikan Buku**
   - Meminta judul buku, lalu mengubah statusnya kembali ke "Tersedia".
5. **Keluar Aplikasi**
   - Menutup program dengan sopan.

---

## 🗺️ Petunjuk Algoritma & Tools yang Dipakai
- **Penyimpanan (Database Darurat):** Gunakan **List** untuk menyimpan daftar judul buku (Pertemuan 9). 
- **Menu Utama:** Gunakan perulangan **WHILE** supaya menunya selalu berulang dan nggak langsung mati setelah satu kali klik (Pertemuan 6).
- **Pilihan Menu:** Gunakan **IF - ELIF - ELSE** untuk membaca input (1, 2, 3, 4, atau 5) (Pertemuan 5).
- **Input User:** Gunakan `input()` dan perhatikan tipe datanya (Pertemuan 4).
- **Kerapian:** Sebisa mungkin pecah aksi-aksi di atas menjadi **Fungsi** (`def lihat_buku()`, `def pinjam_buku()`) agar blok While utamamu tidak terlalu panjang dan pusing dilihat (Pertemuan 7).

---

## 🛠️ Tugas Praktikum: Mulai Ngoding!
Ini adalah tugas berbasis proyek. Kalian dipersilakan berdiskusi, membuka kembali catatan materi sebelumnya, atau mencari bantuan dari pesan Error.

**Langkah Pertama yang disarankan:**
Buat *skeleton* atau kerangkanya dulu!
```python
# Database awal
buku = ["Laskar Pelangi", "Bumi Manusia", "Python untuk Pemula"]
# Tips: Kalian juga bisa pakai List 2 dimensi! [["Judul", "Tersedia"], ...]

def tampilkan_menu():
    print("--- MENU PERPUS ---")
    print("1. Lihat Buku")
    print("5. Keluar")

while True:
    tampilkan_menu()
    pilihan = input("Pilih menu (1-5): ")

    if pilihan == "1":
        # Kode lihat buku
        pass 
    elif pilihan == "5":
        print("Sampai jumpa!")
        break
    else:
        print("Menu tidak ada!")
```

Semangat merangkai kodenya! 💻🔥
