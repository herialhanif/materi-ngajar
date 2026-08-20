import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Materi Ngajar",
  description: "Dokumentasi Modul Ajar dan Referensi",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Modul Algoritma dan Pemrograman', link: '/Modul_Ajar_Python/Pertemuan_01_Konsep_Dasar' }
    ],

    sidebar: [
      {
        text: 'Modul Algoritma dan Pemrograman',
        items: [
          { text: 'Biodata & Kontrak Kuliah', link: '/Modul_Ajar_Python/00_Biodata_dan_Kontrak_Kuliah' },
          { text: 'Pertemuan 01: Konsep Dasar', link: '/Modul_Ajar_Python/Pertemuan_01_Konsep_Dasar' }
        ]
      }
    ]
  }
})
