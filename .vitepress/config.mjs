import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Materi Ngajar",
  description: "Dokumentasi Modul Ajar dan Referensi",
  themeConfig: {},
  locales: {
    root: {
      label: 'Indonesia',
      lang: 'id',
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
              {
                text: 'Pertemuan 01 - Konsep Dasar',
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
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'Algorithm and Programming Module', link: '/en/Modul_Ajar_Python/00_Biodata_dan_Kontrak_Kuliah' }
        ],
        sidebar: [
          {
            text: 'Algorithm and Programming Module',
            items: [
              { text: 'Biodata & Course Contract', link: '/en/Modul_Ajar_Python/00_Biodata_dan_Kontrak_Kuliah' },
              {
                text: 'Meeting 01 - Basic Concepts',
                collapsed: false,
                items: [
                  { text: 'The Nature of Computers', link: '/en/Modul_Ajar_Python/01_Konsep_Dasar_Bagian_1_Hakikat_Komputer' },
                  { text: 'Algorithms & Efficiency', link: '/en/Modul_Ajar_Python/01_Konsep_Dasar_Bagian_2_Algoritma' },
                  { text: 'Problem Solving', link: '/en/Modul_Ajar_Python/01_Konsep_Dasar_Bagian_3_Problem_Solving' }
                ]
              }
            ]
          }
        ]
      }
    }
  }
})
