import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Materi Ngajar",
  description: "Dokumentasi Modul Ajar dan Referensi",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Modul Python', link: '/Modul_Ajar_Python/Pertemuan_01_Konsep_Dasar' }
    ],

    sidebar: [
      {
        text: 'Modul Ajar Python',
        items: [
          { text: 'Pertemuan 01: Konsep Dasar', link: '/Modul_Ajar_Python/Pertemuan_01_Konsep_Dasar' }
        ]
      }
    ]
  }
})
