import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Materi Ngajar",
  description: "Dokumentasi Modul Ajar dan Referensi",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Modul Algoritma dan Pemrograman', link: '/Modul_Ajar_Python/00_Biodata_dan_Kontrak_Kuliah' }
    ],

    sidebar: [
      {
        text: 'Modul Algoritma dan Pemrograman',
        items: [
          { text: 'Biodata & Kontrak Kuliah', link: '/Modul_Ajar_Python/00_Biodata_dan_Kontrak_Kuliah' },
          // { text: 'Pertemuan 01: Konsep Dasar (Versi Asli)', link: '/Modul_Ajar_Python/Pertemuan_01_Konsep_Dasar' },
          {
            text: '01 - Konsep Dasar',
            collapsed: false,
            items: [
              { text: 'Hakikat Komputer', link: '/Modul_Ajar_Python/01_Konsep_Dasar_Bagian_1_Hakikat_Komputer' },
              { text: 'Algoritma & Efisiensi', link: '/Modul_Ajar_Python/01_Konsep_Dasar_Bagian_2_Algoritma' },
              { text: 'Problem Solving', link: '/Modul_Ajar_Python/01_Konsep_Dasar_Bagian_3_Problem_Solving' }
            ]
          }
        ]
      }
    ]
  }
})
