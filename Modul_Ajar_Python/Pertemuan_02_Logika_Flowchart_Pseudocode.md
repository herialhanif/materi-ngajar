# Pertemuan 2: Logika, Flowchart, dan Pseudocode 🗺️

Halo lagi! Di pertemuan pertama kita sudah tahu bahwa algoritma adalah urutan langkah (seperti resep) untuk memecahkan masalah. 
Sekarang, pertanyaannya adalah: **Gimana cara nulis resepnya biar nggak bingung pas udah mulai ngoding?**

Bayangkan kamu mau bangun rumah. Kamu pasti butuh **blueprint (denah)** dulu kan sebelum beli batu bata? Nah, *Flowchart* dan *Pseudocode* adalah "denah" kita sebelum menulis kode di Python.

## 🎯 Tujuan Hari Ini
1. Paham cara mendesain algoritma sebelum coding.
2. Bisa membaca dan membuat *Pseudocode*.
3. Bisa menggambar *Flowchart* sederhana.

---

## 📝 1. Apa Itu Pseudocode? (Kode Bohong-Bohongan)
*Pseudo* artinya semu/palsu, dan *Code* artinya kode. Jadi, *Pseudocode* itu kode palsu! 
Maksudnya, ini adalah cara nulis algoritma yang bahasanya mirip dengan bahasa pemrograman sungguhan, tapi bebas aturan baku. Kamu bisa campur bahasa Inggris, Indonesia, atau alien (eh jangan), asalkan logis!

**Contoh Kasus:** Kita mau bikin program untuk menentukan apakah seorang mahasiswa "LULUS" atau "TIDAK LULUS" berdasarkan nilai ujian (minimal nilai 70).

**Algoritma Bahasa Sehari-hari:**
1. Minta user masukin nilainya.
2. Kalau nilainya lebih besar atau sama dengan 70, tampilkan "LULUS".
3. Kalau nggak, tampilkan "TIDAK LULUS".

**Pseudocode-nya:**
```text
INPUT nilai
IF nilai >= 70 THEN
    PRINT "LULUS"
ELSE
    PRINT "TIDAK LULUS"
ENDIF
```
Gimana? Kelihatan lebih rapi dan "keren" layaknya hacker, kan? 😎

---

## 🎨 2. Apa Itu Flowchart? (Bagan Alir)
Kalau kamu tipe orang visual (lebih suka lihat gambar daripada teks), kamu pasti suka *Flowchart*. 
*Flowchart* adalah representasi visual dari algoritma menggunakan simbol-simbol khusus. 

Berikut adalah simbol-simbol *magic* yang paling sering dipakai:
- 💊 **Oval (Terminal):** Buat mulai (START) dan selesai (END).
- ⬜ **Persegi Panjang (Proses):** Buat ngitung, misalnya `Luas = panjang * lebar`.
- 🔷 **Belah Ketupat (Keputusan):** Buat nanya "Ya/Tidak?". Contoh: `Apakah nilai >= 70?`.
- 📎 **Jajar Genjang (Input/Output):** Buat minta data atau nampilin hasil. Contoh: `Input nilai` atau `Print Lulus`.
- ⬇️ **Tanda Panah (Flow):** Nunjukin arah jalannya program.

**Contoh Flowchart Lulus/Tidak Lulus:**
*(Coba bayangkan atau gambar di catatanmu)*
1. **[Oval]** START ⬇️
2. **[Jajar Genjang]** INPUT nilai ⬇️
3. **[Belah Ketupat]** Apakah nilai >= 70?
   - Jika **YES** ➡️ **[Jajar Genjang]** PRINT "LULUS" ⬇️
   - Jika **NO**  ➡️ **[Jajar Genjang]** PRINT "TIDAK LULUS" ⬇️
4. Keduanya menuju **[Oval]** END.

---

## 🚀 Kenapa Repot-repot Bikin Beginian?
Mungkin sekarang kamu mikir, *"Ah, ribet. Langsung coding aja lah!"* 
Eits, jangan salah. Untuk program yang cuma 10 baris, mungkin bisa langsung coding. Tapi coba bayangkan kamu bikin program aplikasi sekelas Gojek atau Instagram yang kodenya jutaan baris? Tanpa "denah" ini, kamu bakal pusing sendiri di tengah jalan. 

Biasakan desain dulu, baru eksekusi!

---

## 🛠️ Latihan Praktikum
**Misi:** Buatlah *Pseudocode* dan gambarkan *Flowchart* untuk kasus berikut!

*Kasus: Program menghitung Luas Persegi Panjang.*
1. Program harus meminta (input) `panjang` dan `lebar` dari user.
2. Program menghitung luas dengan rumus: `Luas = panjang * lebar`.
3. Program menampilkan hasil perhitungan luasnya.

Selamat mencoba di kertas corat-coretmu! Minggu depan, kita akan mulai *coding* beneran pakai Python! 🐍🔥
