# Knowledge: Basics of Programming and Algorithms

Dokumen ini berisi rangkuman intisari pengetahuan dari buku referensi *"Basics of Programming and Algorithms, Principles and Applications"* karya Roberto Mantaci dan Jean-Baptiste Yunès. Pengetahuan ini digunakan sebagai pedoman gaya, struktur, dan materi dalam pembuatan modul ajar Algoritma dan Pemrograman.

## 1. Pendekatan Pemrograman (Python)
- **Paradigma:** Buku ini berfokus pada paradigma imperatif, di mana program merupakan urutan instruksi langkah demi langkah.
- **Tipe Data & Variabel:** Menekankan bahwa variabel di Python adalah "nama yang merujuk pada objek", bukan sekadar kotak memori seperti di C/C++. Menjelaskan betapa berbahayanya operasi pada `float` karena masalah presisi.
- **Control Flow:** Menggunakan ilustrasi *Flowchart* untuk menjelaskan struktur runtunan (sequence), percabangan (`if`, `elif`, `else`), dan perulangan (`for`, `while`). Menyoroti penggunaan `break` dan `continue` untuk *early exits*.
- **Fungsi & Rekursi:** Fungsi digunakan untuk modularisasi. Membahas *parameter passing*, *local/global scope*, dan *exception handling* (`try-except`). Rekursi ditekankan sebagai alat *problem solving* yang kuat (contoh: faktorial, deret Fibonacci) namun harus waspada terhadap *Stack Overflow*.

## 2. Struktur Data
- **Linear:** Membedakan antara *Tuple* (immutable) dan *List* (mutable). Mengajarkan operasi dasar seperti `append`, `pop`, *slicing*, dan *comprehension list*. Memperkenalkan *Stack* (LIFO) dan *Queue* (FIFO).
- **Dictionary & Object:** Pengenalan struktur data berbasis *Key-Value* (Dictionary/Hashmap) dan sedikit sentuhan PBO (Pemrograman Berorientasi Objek) menggunakan `class` untuk membangun tipe data abstrak.
- **Trees (Pohon):** Menjelaskan struktur data hirarkis non-linear. Terutama:
  - *Binary Search Trees (BST):* Struktur untuk *search*, *insert*, dan *delete* yang efisien.
  - *AVL Trees:* BST yang melakukan *self-balancing* (rotasi) agar kedalaman (height) tetap optimal $O(\log n)$.
  - *Binary Heaps:* Pohon yang memprioritaskan nilai terkecil/terbesar di *root*, sangat berguna untuk *Priority Queue*.

## 3. Algoritma dan Kompleksitas
- **Asymptotic Notations:** Menggunakan notasi Big-O ($O$), Big-Theta ($\Theta$), dan Big-Omega ($\Omega$) untuk mengukur *Time Complexity* (Waktu eksekusi) dan *Space Complexity* (Penggunaan memori).
- **Sorting Algorithms:**
  - *Elementary:* Selection Sort dan Insertion Sort (kompleksitas rata-rata $O(n^2)$). Insertion Sort unggul pada data yang hampir terurut.
  - *Divide & Conquer:* Merge Sort dan Quick Sort (kompleksitas $O(n \log n)$).
  - *Linear Time Sorting:* Counting Sort, Radix Sort, dan Bucket Sort (tidak berbasis perbandingan).
- **Hashing:** Teknik memetakan data (*Key*) ke nilai *Hash* untuk pencarian $O(1)$. Membahas penanganan bentrokan (*collision handling*) menggunakan *Separate Chaining* (Linked List) dan *Open Addressing* (Linear Probing).

## 4. Pedoman Penyusunan Materi Ajar
Dalam menyusun materi untuk mahasiswa berdasarkan pengetahuan di atas, *agent* harus:
1. **Gaya Bahasa:** Tetap santai, menyenangkan (*fun*), dan mudah dimengerti. Hindari bahasa yang terlalu kaku atau akademis kecuali jika mendefinisikan istilah resmi.
2. **Analogi:** Gunakan analogi kehidupan nyata (seperti resep masakan untuk algoritma, mesin blender untuk fungsi, loker kereta untuk *array/list*) agar konsep abstrak lebih mudah dibayangkan.
3. **Praktek Langsung:** Selalu berikan blok kode Python (*code snippets*) yang bisa langsung dicoba oleh mahasiswa, beserta output yang diharapkan.
4. **Hands-on & Latihan:** Tutup setiap modul dengan sebuah latihan/proyek mini yang merangkum semua materi pada bab tersebut.
5. **Terjemahan (Bilingual):** Setiap kali membuat atau memodifikasi materi Bahasa Indonesia (`Modul_Ajar_Python/`), wajib secara otomatis membuat/menyesuaikan versi Bahasa Inggrisnya di direktori `en/Modul_Ajar_Python/`. Gaya bahasa terjemahan wajib dijaga agar tetap *casual*, *fun*, dan *engaging* (tidak kaku seperti *textbook*).
