# Pertemuan 1: Konsep Dasar Komputasi, Algoritma, dan Pemrograman 🚀


Selamat datang di kelas Algoritma dan Pemrograman! 🎉
Mungkin nama matkul ini kedengarannya berat dan *nerd* banget ("Wah, bakal banyak matematika rumit nih!"). *Eits*, tunggu dulu! Di sini kita justru bakal belajar gimana caranya bikin komputer mau kerja keras buat kita dengan cara yang asik dan seru.


**Semuanya Berawal dari Algoritma!**
Coba sebutkan aplikasi favorit kalian. Instagram? TikTok? Mobile Legends? Atau Gojek? Tahukah kalian kalau di balik semua aplikasi canggih itu, ada satu "resep rahasia" yang sama? Ya, **Algoritma**. Tanpa algoritma, *smartphone* mahalmu cuma balok kaca dan logam yang nggak bisa ngapa-ngapain. Hari ini, kita bakal bongkar rahasia dari semua teknologi itu!

---

## Apa Itu Komputer & Komputasi?

**Terminologi Dasar: Program, Software, dan Programmer**
Sebelum melangkah lebih jauh, mari kita pahami beberapa istilah penting di dunia komputasi:
- **Program:** Kumpulan instruksi atau aturan spesifik yang harus diikuti oleh komputer untuk mencapai suatu tujuan atau menyelesaikan masalah tertentu.
- **Software (Perangkat Lunak):** Istilah umum (tidak dapat dihitung/uncountable) yang merujuk pada sekumpulan program. Secara garis besar terbagi menjadi dua:
  - *System Software (OS)*: Melayani semua pengguna dan menyediakan fungsionalitas dasar (contoh: Windows, macOS, Linux).
  - *Application Software*: Melayani kebutuhan spesifik pengguna (contoh: Microsoft Office, Web Browser, Media Player).
- **Programmer:** Seseorang yang membuat program, memberikan instruksi logis agar komputer bekerja sesuai keinginan.

**Hubungan 3P (Programmer, Program, Programming Language)**
Hubungan ketiganya sangat erat: **Programmer** menulis **Program** menggunakan **Programming Language** (Bahasa Pemrograman). 
Komputer bisa diibaratkan seperti makhluk asing (*creatures from outer space*) yang hanya mengerti bahasa mesin (biner 0 dan 1). Programmer mempelajari bahasa pemrograman (seperti C, Python, Java) agar bisa berkomunikasi dan memberitahu komputer apa yang harus dilakukan, yang nantinya akan diterjemahkan oleh *Compiler* atau *Interpreter* menjadi bahasa mesin.

**Analogi: Komputer itu "Asisten yang Sangat Cepat Tapi Polos"**
Banyak yang mikir komputer itu cerdas banget. Fakta sebenarnya: komputer itu **super cepat, tapi super polos (alias bodoh)**. 
Dia nggak bisa inisiatif ngelakuin apa-apa kalau nggak kita suruh. Tapi kehebatannya, kalau kamu kasih instruksi yang jelas, dia sanggup mengeksekusi jutaan perintah dalam sedetik tanpa ngeluh, tanpa minta naik gaji, dan tanpa *coffee break*!

Nah, sebagai *Programmer*, peran kita adalah jadi "Bos" yang super detail dalam memberikan instruksi ke si asisten polos ini.

**Konsep Dasar Komputasi: Input $\rightarrow$ Process $\rightarrow$ Output**
Pada dasarnya, cara kerja komputer (atau komputasi) itu sesimpel ini:
- **Input:** Data mentah atau kondisi awal yang kita berikan ke komputer.
- **Process:** Langkah-langkah perhitungan dan logika (algoritma) yang dieksekusi komputer berdasarkan instruksi kita.
- **Output:** Hasil atau solusi akhir yang disajikan kepada kita.

---

## 🍜 Algoritma: Resep Rahasia Teknologi

**Konsep Dasar Algoritma & Pemrograman**
Kalau **Algoritma** adalah urutan ide atau langkah-langkah logisnya (resepnya), maka **Pemrograman** adalah proses menerjemahkan resep itu ke bahasa yang komputer ngerti (bahasa mesin atau bahasa pemrograman seperti Python, Java, dll).

> *Fun fact*: Kata "Algoritma" diambil dari nama ilmuwan jenius Persia, **Muhammad ibn Mūsā al-Khwārizmī** (sekitar tahun 800 Masehi). 

Secara formal, Algoritma adalah urutan langkah logis untuk memecahkan masalah. Biar algoritma bisa dibilang *good algorithm*, ada beberapa syarat mutlak:
- **Definiteness (Pasti):** Nggak boleh ambigu. "Rebus 3 menit" itu pasti. "Rebus bentar ya" itu ambigu.
- **Finiteness (Ada Batasnya):** Harus punya titik akhir. Jangan sampai program *looping* tanpa henti!
- **Input & Output:** Punya bahan baku untuk diproses dan menghasilkan solusi nyata.
- **Effectiveness:** Langkah-langkahnya simpel, logis, dan masuk akal buat dikerjain.

**Analogi Bikin Mie Instan**
Coba bayangin kamu harus ngajarin alien cara masak Indomie goreng. Kalau kamu cuma bilang, *"Masak aja sampai matang!"*, si alien bakal bingung. Kamu harus kasih **algoritma** langkah demi langkah:
1. Siapkan panci.
2. Isi air 400 ml.
3. Taruh panci di atas kompor, lalu nyalakan api.
4. Tunggu air mendidih.
5. Masukkan mi, tunggu 3 menit... dan seterusnya.

**Bahaya *Logic Error***
Gimana kalau urutannya ngaco? Misalnya: *Masukkan bumbu ke panci, rebus 3 menit, buang airnya, baru masukkan mi mentah*. Nah lho! Ini namanya **Logic Error**. Komputer akan dengan senang hati mengeksekusi instruksi konyol ini dengan sangat cepat, tapi hasilnya malah jadi bencana. Itulah kenapa urutan dan logika itu segalanya!

---

## 🧠 Logika Pemrograman & Problem Solving

***Computational Thinking***
Ini adalah cara berpikir ala ilmuwan komputer (*mindset*). Intinya adalah gimana kita memecah masalah yang gede dan ruwet menjadi masalah-masalah kecil yang lebih gampang diselesaikan (*decomposition*).

**Analisis Bikin Kopi (Orang Awam vs Programmer)**
- **Orang Awam:** *"Saya mau ngopi. Tuang air panas, aduk, kelar."*
- **Programmer:** Harus pakai logika berlapis. *"Apakah cangkirnya bersih? Ada stok kopi nggak? Ambil kopi 1 sendok. Tuang ke cangkir. Panaskan air sampai $100^{\circ}C$. Tuang 150ml air ke cangkir. Aduk 10 putaran ke kanan."*

**4 Langkah Sakti *Problem Solving***
Jangan langsung buru-buru ngetik kode! Biasakan gunakan siklus ini:
1. **Analyze (Analisis):** Cari tahu apa masalahnya, apa *input*-nya, dan apa *output* yang dimau.
2. **Design (Desain):** Rancang logikanya (bisa corat-coret pakai *Flowchart* atau *Pseudocode*).
3. **Implement (Ngoding):** Terjemahkan logikamu ke bahasa pemrograman (nanti kita akan pakai Python).
4. **Test (Uji Coba):** Jalankan programnya, cari *error* atau *bug*, lalu perbaiki (*debugging*).

*(Oh ya, buat yang nanya "Penting banget ya belajar teori algoritma?". Jawabannya: IYA BANGET! Dari buku "Programming Algorithms" dijelaskan bahwa menguasai algoritma bikin kode kamu super cepat, efisien, melatih otak analitismu, dan jadi modal utama buat masuk ke jajaran *Top 10% Programmer* di dunia!)*

---

## 🧩 Mini Quiz & Diskusi (Asah Otak!)

**Permainan Teka-Teki: Menyeberangkan Serigala, Kambing, dan Kubis** 🐺🐐🥬
*Kasus:* Seorang petani harus menyeberangi sungai bawa serigala, kambing, dan sekeranjang kubis. Perahunya cuma muat buat si petani dan SATU bawaan lainnya. 
- Awas! Kalau ditinggal berdua, serigala bakal makan si kambing.
- Kalau ditinggal berdua, kambing bakal makan si kubis.

![Teka-teki Pertanian 🐺🐐🥬]

*Tugas Diskusi:* 
Mari kita asah otak! Rumuskan **"Algoritma Menyeberang"** bareng-bareng langkah demi langkah supaya semuanya selamat sampai di seberang. 

![Ilustrasi Teka-teki Menyeberang](./assets/images/teka-teki-01.png)

---

## 🏁 Penutup (15 Menit) - Kesimpulan & Info Minggu Depan

**Review Singkat 3 Poin Utama Hari Ini:**
1. Komputer itu asisten yang polos; dia butuh instruksi logis dan detail (algoritma) dari kita.
2. Algoritma adalah urutan langkah logis penyelesaian masalah, dan pemrograman adalah cara kita ngomong ke komputer.
3. Selalu lakukan *problem solving* secara terstruktur: pahami masalahnya, rancang logikanya, baru *coding*!

**Kisi-kisi Minggu Depan (*Spoiler Alert!*):**
Siap-siap! Minggu depan kita bakal mulai belajar nulis "bahasa alien" bernama **Pseudocode** dan menggambar logika pakai diagram **Flowchart**. Sampai jumpa! 🚀
