# Konsep Dasar Bagian 2: Algoritma, Resep Rahasia Teknologi

Selamat datang di bagian kedua! Setelah di bagian pertama kita banyak bahas soal wujud mesinnya (komputer) dan gimana mesin itu nerjemahin kode kita, sekarang kita bakal masuk ke "roh" atau nyawa dari dunia *programming*. Nyawa itu bernama **Algoritma**. 

Tanpa algoritma, secanggih apa pun laptop *gaming* yang kalian punya, sekencang apa pun prosesor M-series dari Apple yang nempel di *MacBook* kalian, benda-benda itu cuma bakal jadi logam mahal penyedot listrik yang *nggak* bisa ngapa-ngapain.

## 1. Apa Itu Algoritma? (Bukan Sekadar *Coding*)

Banyak orang awam, bahkan mahasiswa IT baru, sering salah kaprah. Mereka mengira belajar algoritma itu sama dengan belajar ngetik *coding*. *Big no!* 

Kalau **Algoritma** itu adalah urutan ide, logika, atau langkah-langkah solusinya (ibarat *resep masakan*), maka **Pemrograman** adalah proses menerjemahkan ide/resep tersebut ke dalam bahasa yang dimengerti komputer seperti Python, Java, atau C++ (ibarat proses memasak di dapurnya). Jadi, algoritma itu murni soal "gimana cara kita mikir", bukan "gimana cara ngetiknya".

> **Fun fact sejarah:** Kata "Algoritma" ini lumayan bersejarah dan punya akar peradaban yang dalam lho! Namanya diambil dari seorang ilmuwan matematika dan astronomi jenius dari Persia bernama **Muhammad ibn Mūsā al-Khwārizmī** (hidup sekitar tahun 780–850 Masehi). Dari nama "al-Khwārizmī" (dibaca: Al-Khowarizmi), lidah orang barat zaman dulu sering nyebutnya jadi *Algorismus*, lalu seiring berjalannya waktu, kata itu berevolusi lagi menjadi *Algorithm* dalam bahasa Inggris, atau Algoritma dalam bahasa Indonesia.

Secara formal di dunia akademis, algoritma didefinisikan sebagai **urutan langkah logis, terstruktur, dan terbatas untuk memecahkan suatu masalah atau mencapai tujuan tertentu**. 

Jadi, ini bukan cuma urusan *software*. Kalau kalian bikin jadwal harian dari bangun tidur sampai tidur lagi secara terurut, itu juga udah bentuk algoritma kehidupan. Atau saat ibu kalian ngasih instruksi cara bikin rendang daging sapi dari nyiapin bumbu sampai dagingnya empuk, itu juga algoritma!

## 2. Syarat Mutlak Algoritma yang *Good Looking* (Ideal)

Sama kayak bikin kue, nggak semua urutan langkah bisa disebut algoritma yang "enak" alias valid di dunia komputer. Seorang legenda ilmu komputer bernama Donald Knuth pernah merumuskan bahwa sebuah algoritma, biar bisa diakui kevalidannya dan dieksekusi dengan baik oleh komputer, wajib hukumnya punya 5 sifat (*properties*) ini:

1. **Input (Masukan):** Algoritma yang baik bisa jadi nggak punya *input* sama sekali (sudah ditentukan dari awal), atau punya banyak *input*. *Input* ini ibarat bahan mentah yang mau diproses. Kalau mau bikin jus, masukannya adalah buah dan gula.
2. **Output (Keluaran):** Harus ada hasilnya dong! Apa gunanya kita ngerjain langkah-langkah panjang kalau nggak ada hasilnya? Sebuah algoritma wajib menghasilkan minimal satu *output* atau solusi akhir.
3. **Definiteness (Pasti/Jelas dan Tidak Ambigu):** Tiap langkah nggak boleh multi-tafsir alias bikin bingung. Contoh instruksi ambigu: *"Rebus mi instan sebentar aja ya"*. Sebentar itu berapa lama? Satu menit? Tiga menit? Komputer *sangat membenci* keambiguan. Instruksi yang benar adalah: *"Rebus mi instan dalam air mendidih selama persis 180 detik"*.
4. **Finiteness (Ada Batasnya/Harus Tamat):** Algoritma itu harus bisa tamat atau selesai di satu titik. Seberapa pun panjangnya, dia nggak boleh *looping* atau muter-muter tanpa henti (istilah kerennya *infinite loop*). Harus ada titik penyelesaiannya.
5. **Effectiveness (Efektif dan Masuk Akal):** Langkah-langkahnya harus bisa dikerjakan secara logis dengan sumber daya yang ada. Jangan bikin langkah yang di luar nalar atau mustahil buat dieksekusi sama komputer. Misalnya kalian bikin instruksi: *"Tebak isi hati user"*. Gimana caranya komputer tau? Nggak masuk akal!

## 3. Analogi Sederhana: Tutorial Masak Mi Instan buat Alien 👽

Supaya konsep *Definiteness* (kepastian) makin nempel di kepala kalian, mari kita main imajinasi. Coba bayangin kalian lagi diculik alien, dan demi bertahan hidup, kalian dikasih misi untuk ngajarin si alien ini cara masak mi instan goreng. 

Alien ini cerdas, tapi dia nggak tau apa-apa soal kebiasaan manusia. Kalau kalian cuma ngasih instruksi, *"Eh bro alien, masak aja mi-nya sampai matang, bumbuin, terus tuang ke piring!"*, si alien pasti nge-*blank* dan gagal. 

Kalian harus merancang **algoritma** langkah demi langkah yang *definite* (sangat rinci dan nggak bisa disalahartikan):
1. Buka lemari dapur, ambil satu bungkus mi instan.
2. Siapkan panci kosong.
3. Tuang air jernih sebanyak 400 ml ke dalam panci.
4. Taruh panci di atas tungku kompor.
5. Putar kenop kompor untuk menyalakan api sedang.
6. Tunggu air sampai mendidih (indikator: muncul gelembung udara naik ke atas).
7. Sobek bungkus mi, keluarkan isinya (mi dan bumbu).
8. Masukkan kepingan mi kering ke dalam air mendidih tersebut.
9. Tunggu selama persis 3 menit.
10. Sembari menunggu, buka saset bumbu dan tuangkan isinya ke piring kosong.
11. Setelah 3 menit berlalu, matikan api kompor.
12. Tiriskan air dari panci hingga habis, biarkan mi-nya tersisa.
13. Tuang mi matang ke piring yang sudah berisi bumbu.
14. Aduk merata pakai garpu sebanyak 20 kali putaran.
15. Mi siap dihidangkan!

Kelihatan kan bedanya? Komputer itu sifatnya persis kayak alien di atas. Dia nggak punya intuisi. Dia nggak bisa nebak maksud tersirat kalian. Kalian harus suapin dia instruksi yang detail dari A sampai Z.

## 4. Bahaya *Logic Error*: Saat Instruksi Bikin Bencana

Karena komputer itu super penurut, urutan langkah dalam algoritma adalah segalanya. Gimana jadinya kalau urutannya ngaco? Mari kita pakai contoh mi instan di atas, tapi kita acak urutan langkahnya:

1. Buka saset bumbu dan masukkan ke panci kosong.
2. Rebus panci berisi bumbu tersebut selama 3 menit.
3. Matikan api kompor dan buang airnya (loh, air dari mana?).
4. Baru masukkan kepingan mi mentah ke dalam panci yang panas dan gosong.

Nah lho! Kalau kalian suruh manusia ngelakuin ini, manusianya pasti bakal marah dan bilang, *"Lu gila ya? Gosong dong pancinya!"* 

Tapi ingat, komputer itu polos dan "bodoh". Kalau kalian nulis aplikasi dengan urutan logika yang *ngaco* kayak di atas, komputer **nggak bakal nolak**. Dia bakal dengan senang hati mengeksekusi instruksi konyol ini dengan kecepatan kilat! Tapi tentu saja, hasil akhirnya adalah bencana besar (program *crash* atau *output* berantakan).

Kondisi inilah yang di dunia IT dikenal luas dengan istilah **Logic Error** (Kesalahan Logika). Ini adalah jenis *error* yang paling horor. Kenapa horor? Karena program kalian berhasil jalan (*nggak* ada peringatan *error* warna merah), tapi hasil perhitungannya salah total! Makanya, belajar *problem solving* dan algoritma itu jauh lebih susah dan krusial daripada sekadar ngehafal *syntax* bahasa pemrograman.

## 5. Efisiensi Algoritma: Nggak Semua Jalan Pintas Itu Sama!

Sekarang mari kita masuk ke topik yang sedikit lebih dalam. Mengutip dari berbagai buku referensi *computer science*, satu masalah komputasi itu bisa diselesaikan pakai berbagai macam pilihan algoritma. Sama kayak mau pergi dari Jakarta ke Bandung; bisa naik mobil lewat tol, naik kereta cepat, naik pesawat, atau bahkan jalan kaki. Semuanya "benar" karena pada akhirnya kalian sampai di Bandung. Tapi, waktunya beda jauh!

Di dunia pemrograman, ada algoritma yang kodenya cuma sedikit tapi jalannya *lambat banget*. Ada yang kodenya panjang tapi larinya kayak kilat. 

**Contoh Kasus: Nyari Kata "Zebra" di Kamus Setebal 1000 Halaman.**

- **Algoritma A (*Sequential Search*):** 
  Kalian buka halaman 1, cek satu-satu dari awal... halaman 2... halaman 3... sampai halaman 1000. Apakah algoritma ini benar? Ya, pasti akhirnya ketemu solusi (syarat *finiteness* terpenuhi). Tapi ini *super duper lambat* dan membuang-buang waktu serta sumber daya CPU komputer. 
- **Algoritma B (*Binary Search*):** 
  Kalian buka kamus persis di tengah (halaman 500). Kalian lihat huruf awalnya. Oh, ternyata masih di huruf 'M'. Karena "Z" pasti letaknya sesudah 'M' dan ada di bagian belakang buku, maka sisa 500 halaman di bagian depan langsung kalian buang (abaikan). Terus sisa 500 halaman di belakang itu kalian belah tengah lagi (ke halaman 750), gitu terus sampai ketemu. Cara ini *jauh lebih cerdas*, elegan, dan selesai dalam hitungan detik!

Inti dari contoh di atas adalah: **Algoritma yang baik bukan cuma sekadar bisa nyelesaiin masalah (bisa jalan), tapi juga harus se-efisien mungkin!** Programmer kelas atas selalu memikirkan algoritma mana yang paling hemat waktu (*Time Complexity*) dan hemat memori (*Space Complexity*).

## 6. Format Penulisan Algoritma

Menurut literatur ilmu komputer, algoritma itu ibarat "draf" atau "kerangka" bangunan sebelum diketik jadi bahasa pemrograman sungguhan (seperti C++, Java, atau Python). Biar algoritma ini gampang dibaca, dipahami, dan didiskusikan bareng rekan satu tim *programmer* lain tanpa terkendala bahasa pemrograman tertentu, biasanya algoritma ditulis menggunakan dua format populer:

1. **Pseudocode (Kode Semu):** 
   Ini adalah cara menulis draf langkah-langkah logika pakai campuran gaya bahasa manusia sehari-hari (biasanya bahasa Inggris) dan *syntax* dasar dari bahasa pemrograman. Nggak ada aturan baku, kaku, atau tanda baca yang ketat di sini. Tujuannya cuma satu: biar strukturnya kelihatan.
   *Contoh Pseudocode sederhana:*
   ```text
   Mulai
   Minta user memasukkan UMUR
   JIKA UMUR > 17 MAKA
       Tampilkan "Boleh bikin SIM"
   SEBALIKNYA
       Tampilkan "Belum cukup umur, naik sepeda aja"
   Selesai
   ```
2. **Flowchart (Diagram Alir):** 
   Kalau *pseudocode* berbasis teks, maka *flowchart* adalah kebalikannya. *Flowchart* itu menggambarkan draf logika menggunakan bentuk-bentuk visual geometris (bangun datar) yang dihubungkan dengan tanda panah. Bentuk oval biasanya dipakai buat nentuin titik *Start/End*, bentuk kotak (persegi panjang) buat proses hitung-hitungan, dan belah ketupat (*diamond*) dipakai buat percabangan/pengambilan keputusan (*If-Else*). Format ini sangat cocok dan disukai oleh orang-orang yang punya tipe belajar visual!

Gimana? Udah mulai kerasa kan "seru"-nya mikirin alur logika? Di bab selanjutnya, kita bakal bahas gimana caranya melatih otak kita biar bisa mikir se-sistematis komputer, yang biasa disebut dengan istilah *Computational Thinking*. Sampai ketemu di sub-bab berikutnya!
