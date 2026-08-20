# Konsep Dasar Bagian 3: Logika Pemrograman & Problem Solving

Selamat! Kalian sudah berhasil melewati dua babak sebelumnya yang membahas tentang sejarah komputer dan apa itu algoritma. Di bagian terakhir untuk Pertemuan 1 ini, kita bakal masuk ke tahap implementasi alias praktik berpikir. Gimana sih caranya punya otak yang jalan se-kritis dan se-sistematis *programmer* profesional kelas dunia? Jawabannya ada pada satu *skill* bernama **Computational Thinking**.

## 1. *Computational Thinking*: Menginstal *Mindset Programmer*

*Computational Thinking* (Berpikir Komputasional) bukanlah ilmu tentang cara merakit komputer, dan bukan juga ilmu gaib. Ini adalah sebuah cara berpikir (*mindset*). Intinya, ini adalah kemampuan otak kita untuk mengambil suatu masalah yang gede, ruwet, dan kompleks, lalu memecahnya menjadi masalah-masalah kecil yang jauh lebih gampang untuk diselesaikan (*decomposition*) [2][4].

**Analisis Bikin Kopi: Orang Awam vs Programmer**

Buat memahami *mindset* ini, coba perhatikan perbedaan cara berpikir orang awam dengan seorang *programmer* ketika disuruh bikin secangkir kopi hitam:

- **Cara Berpikir Orang Awam:** 
  *"Saya mau ngopi. Tinggal ambil gelas, tuang air panas, kasih bubuk kopi, aduk, kelar deh."* (Selesai dalam 1 detik).
- **Cara Berpikir Programmer (Computational Thinking):** 
  Harus pakai logika berlapis dan memperhitungkan semua kemungkinan *error*.
  - *Langkah 1:* Cek dulu, apakah cangkirnya bersih? (Kalau kotor, cuci dulu. Kalau bersih, lanjut).
  - *Langkah 2:* Cek stok dapur. Ada stok kopi nggak? (Kalau habis, pergi ke warung. Kalau ada, lanjut).
  - *Langkah 3:* Ambil persis 1,5 sendok teh kopi dan masukkan ke cangkir.
  - *Langkah 4:* Panaskan air di teko sampai suhu persis $100^{\circ}C$ (mendidih).
  - *Langkah 5:* Tuang air panas sebanyak 150ml ke dalam cangkir secara perlahan.
  - *Langkah 6:* Aduk campuran kopi dan air panas sebanyak 10 putaran ke arah kanan.
  - *Langkah 7:* Selesai. Kopi siap disajikan!

Kelihatan kan bedanya? *Programmer* memikirkan semua skenario buruk (cangkir kotor, kopi habis) dan memberikan instruksi yang sangat spesifik (suhu air, takaran sendok). Itulah inti dari *Computational Thinking*!

## 2. Empat Langkah Sakti *Problem Solving*

Ketika nanti kalian dapat tugas besar atau kerjaan dari klien, jangan pernah langsung buka laptop dan buru-buru ngetik kode! Itu adalah kebiasaan buruk yang sering dilakukan oleh *programmer* amatir pemula. 

Seorang *programmer* profesional (atau anak IT elit) biasanya menghabiskan 80% waktunya untuk mikir dan merancang, dan cuma 20% waktunya buat ngetik kode. Biasakan untuk selalu menggunakan siklus sakti ini:

1. **Analyze (Analisis):** Ini tahap investigasi. Pahami dulu akar masalahnya. Kalian harus bisa menjawab pertanyaan: *"Data apa yang bakal aku terima (Input)? Kondisinya seperti apa? Dan hasil akhir kayak apa yang dimau oleh klien/user (Output)?"*
2. **Design (Desain):** Di tahap ini, singkirkan laptop kalian. Ambil kertas dan pulpen. Rancang logikanya (algoritma) di atas kertas! Kalian bisa mencoret-coret menggunakan gaya *Pseudocode* atau menggambar *Flowchart*. Pastikan urutan logikanya sempurna dan bebas dari lubang-lubang kelemahan.
3. **Implement (Koding/Implementasi):** Setelah draf di atas kertas sempurna, barulah kalian buka laptop, pilih bahasa pemrograman yang sesuai (misalnya Python atau C++), dan terjemahkan draf kalian tadi menjadi baris-baris kode sungguhan.
4. **Test & Debug (Uji Coba & Perbaikan):** Jangan senang dulu kalau kode sudah selesai diketik. Jalankan programnya berulang-ulang pakai berbagai macam skenario! Uji dengan data yang aneh-aneh. Kalau ternyata programnya *crash* atau *error*, saatnya kalian melakukan perburuan serangga (*debugging*) untuk mencari baris kode mana yang bikin rusak, lalu perbaiki.

Oh ya, buat yang nanya, *"Penting banget ya Pak belajar teori algoritma ini? Kenapa nggak langsung ngoding bikin aplikasi aja?"* 
Jawabannya: **IYA BANGET!** Dari buku legendaris *Introduction to Algorithms* [5], sangat ditekankan bahwa menguasai algoritma dari dasar itu bakal bikin kode kalian super efisien, nggak lemot, dan melatih otak analitis kalian. Inilah modal utama yang membedakan "kuli ketik kode" biasa dengan *Top 10% Programmer* di dunia yang gajinya puluhan juta!

## 3. Belajar dari Sejarah: Tragedi Bug Y2K (Millennium Bug)

Untuk membuktikan betapa krusialnya *problem solving* dan desain algoritma sejak awal, mari kita lihat sejarah kelam di dunia IT yang bikin seluruh dunia panik pada tahun 1999, yang dikenal sebagai **Y2K Bug** atau *Millennium Bug*.

**Gimana Ceritanya?**
Pada tahun 1960-an sampai 1980-an, ruang penyimpanan memori komputer (*hard disk*) itu suuuuper mahal dan kapasitasnya sangat kecil (ukurannya cuma sebesar Megabyte, tapi harganya ratusan juta). Demi menghemat kapasitas memori, para *programmer* zaman itu membuat algoritma yang memotong format penyimpanan tahun. 

Jadi, daripada nyimpen 4 digit tahun secara utuh seperti "1998", algoritma mereka dirancang cuma menyimpan 2 digit terakhirnya saja, yaitu "98". Secara efisiensi memori, ini sangat hemat dan brilian di masa itu!

**Tragedi Dimulai:**
Masalahnya, para *programmer* itu kurang punya visi jauh ke depan (*flawed problem solving*). Mereka nggak kepikiran apa yang bakal terjadi saat kalender berubah dari tanggal 31 Desember 1999 menjadi 1 Januari 2000!

Karena algoritma komputer cuma membaca 2 digit belakang, tahun "2000" dibaca oleh komputer sebagai "00". Alhasil, sistem komputer berasumsi bahwa tahun saat itu malah mundur kembali ke tahun "1900", bukan tahun 2000! 

**Efek Dominonya:**
Kekacauan logika ini nyaris bikin kiamat digital! Bank-bank di seluruh dunia salah menghitung bunga deposito (karena sistem mengira uangnya sudah ditarik 100 tahun lalu). Sistem pembangkit listrik mati, jadwal penerbangan maskapai hancur lebur, dan pemerintah seluruh dunia sampai harus mengeluarkan dana lebih dari **300 Miliar Dolar AS** cuma buat nyewa *programmer* demi nulis ulang barisan *coding* tersebut!

Pelajaran berharga dari Y2K: Kalau kalian mendesain algoritma dan solusi masalah asal-asalan tanpa mikirin efek jangka panjang, *"logic error"* yang terjadi bisa merugikan uang miliaran dolar!

## 4. Mini Quiz & Diskusi (Saatnya Asah Otak!)

Nah, setelah puas belajar teori yang berat-berat dan dengerin sejarah kelam IT, sekarang saatnya kita melenturkan otot-otot otak lewat sebuah permainan teka-teki logika yang sangat klasik. Siapkan kertas oret-oretan kalian!

**Permainan Teka-Teki: Menyeberangkan Serigala, Kambing, dan Kubis** 🐺🐐🥬

**Kasus:**
Ada seorang petani yang kebingungan di tepi sebuah sungai besar. Ia harus menyeberangi sungai tersebut dan membawa serta seluruh harta berharganya: seekor **Serigala**, seekor **Kambing**, dan sekeranjang sayur **Kubis**. 

Masalahnya, perahu kecil yang ada di tepi sungai itu ukurannya sangat sempit. Perahu itu cuma muat untuk dinaiki oleh si petani dan **HANYA SATU** bawaan lainnya di setiap kali jalan. Artinya, petani harus bolak-balik menyeberang sungai berkali-kali untuk memindahkan ketiganya.

**Syarat dan Aturan (Constraints):**
1. Petani adalah satu-satunya entitas yang bisa menyetir perahu.
2. Awas! Kalau si petani lagi menyeberang dan meninggalkan Serigala dan Kambing berduaan di salah satu tepi sungai, **Serigala pasti akan langsung memakan si Kambing!**
3. Awas! Kalau si petani meninggalkan Kambing dan Kubis berduaan di salah satu tepi sungai, **Kambing pasti akan langsung memakan habis si Kubis!**
4. Serigala nggak doyan makan kubis, jadi mereka berdua aman kalau ditinggal bareng-bareng.

![Ilustrasi Teka-teki Menyeberang](./assets/images/teka-teki-01.png)

**Tugas Diskusi Kalian:** 
Gunakan ilmu *Computational Thinking* kalian. Rumuskan **"Algoritma Menyeberang"** langkah demi langkah yang terstruktur. Tulis logikanya dari langkah 1 sampai selesai, supaya si petani, serigala, kambing, dan kubis—semuanya—bisa selamat tiba di seberang sungai utuh tanpa ada yang dimakan! (Nanti kita bahas jawabannya di kelas ya).

---

## 5. Penutup - Kesimpulan & Info Minggu Depan

Wah, panjang juga ya perjalanan kita di Pertemuan 1 ini! Mari kita tarik napas sebentar dan mengingat kembali *highlight* penting dari materi konsep dasar hari ini:

1. **Komputer Itu Asisten Polos:** Dia adalah mesin yang super cepat tapi sama sekali nggak punya inisiatif. Dia butuh instruksi logis, pasti, dan super rinci (algoritma) dari kita selaku majikannya.
2. **Perbedaan Fundamental:** Algoritma adalah urutan langkah pemecahan masalah (ide logisnya), sedangkan pemrograman adalah tindakan menerjemahkan ide tersebut pakai bahasa yang ngerti (Python, Java, dll). Ingat 5 sifat wajib algoritma: *Input, Output, Definiteness, Finiteness, Effectiveness*.
3. **Problem Solving Terstruktur:** Jangan buru-buru koding! Pahami dulu masalahnya, tulis draf *pseudocode* atau *flowchart*-nya, baru sentuh *keyboard* laptop kalian. Waspadai *logic error*!

**Kisi-kisi Minggu Depan (*Spoiler Alert!*):**
Di minggu depan (Pertemuan 2), siap-siap bawa catatan yang rapi! Kita bakal mulai masuk ke hal teknis: belajar merancang dan menggambar alur logika pakai **Diagram Flowchart**, serta mulai menulis "bahasa draf" alias **Pseudocode**. Sampai jumpa di minggu depan dan tetap semangat mengasah logika! 🚀
