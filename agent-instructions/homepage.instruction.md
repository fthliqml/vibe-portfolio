# Panduan Struktur Komponen Homepage (HOMEPAGE_STRUCTURE.md)

Dokumen ini menguraikan struktur hierarkis dan alur konten dari homepage. Tujuannya adalah untuk memberikan panduan yang jelas bagi pengembang (atau agen AI) tentang bagaimana komponen-komponen React utama disusun untuk membangun halaman, apa peran masing-masing, dan bagaimana mereka saling berhubungan.

---

### **Struktur Tingkat Tinggi (Sesuai `App.tsx`)**

Halaman utama disusun secara linear dari atas ke bawah dengan komponen-komponen berikut:

1.  **`<Header />`** - Bilah Navigasi Utama
2.  **`<Hero />`** - Bagian Pengenalan & Keahlian Inti
3.  **`<TechStack />`** - Tampilan Tumpukan Teknologi
4.  **`<Portfolio />`** - Pameran Proyek
5.  **`<Contact />`** - Ajakan Bertindak (Call-to-Action)
6.  **`<Footer />`** - Kaki Halaman & Tautan Tambahan

---

### **Rincian Komponen Detail**

#### 1. `<Header />`

- **File**: `components/Header.tsx`
- **Tujuan**: Menyediakan navigasi utama yang konsisten dan akses cepat ke profil sosial.
- **Perilaku**: `sticky top-0 z-50`. Tetap terlihat di bagian atas layar saat pengguna menggulir.
- **Elemen Kunci**:
  - **Logo**: `<LogoIcon />` di sebelah kiri.
  - **Tautan Navigasi**: "About", "Projects", "Contact".
  - **Ikon Sosial**: Tautan ke Twitter, LinkedIn, Facebook, dan Instagram.
- **Dependensi Ikon**: `LogoIcon`, `TwitterIcon`, `LinkedInIcon`, `FacebookIcon`, `InstagramIcon`.

#### 2. `<Hero />`

- **File**: `components/Hero.tsx`
- **Tujuan**: Bagian "di atas lipatan" yang paling penting. Ini adalah kesan pertama yang memperkenalkan identitas profesional ("Full-Stack Developer") dan memecah keahlian menjadi dua pilar: Front End dan Back End.
- **Struktur Tata Letak**: Menggunakan grid 12 kolom (`lg:grid-cols-12`) pada layar besar.
  - **Kolom Kiri (`lg:col-span-4`)**: Didedikasikan untuk **Front End**. Berisi judul dan **`<CodeCard />`** untuk React.
  - **Kolom Tengah (`lg:col-span-4`)**: Pusat perhatian. Berisi nama (`Muhammad Fatihul Iqmal`), jabatan (`Full-Stack Developer`), dan deskripsi pribadi.
  - **Kolom Kanan (`lg:col-span-4`)**: Didedikasikan untuk **Back End**. Berisi judul dan **`<CodeCard />`** untuk Express.
- **Sub-Komponen Kunci**:
  - **`<CodeCard />`**: Komponen internal yang dapat digunakan kembali untuk menampilkan cuplikan kode. Dirancang agar terlihat seperti jendela terminal/editor kode (dengan kontrol jendela berwarna) dan menggunakan penyorotan sintaksis berbasis warna.

#### 3. `<TechStack />`

- **File**: `components/TechStack.tsx`
- **Tujuan**: Menampilkan secara visual teknologi yang dikuasai dengan cara yang dinamis dan menarik.
- **Perilaku Kunci**:
  - **Animasi Marquee**: Menggunakan animasi CSS `@keyframes marquee` untuk membuat logo bergulir secara horizontal tanpa henti. Konten diduplikasi untuk menciptakan ilusi tak terbatas.
  - **Interaktivitas Hover**: Logo ditampilkan dalam skala abu-abu (`grayscale`) dan menjadi berwarna (`hover:grayscale-0`) saat kursor diarahkan ke atasnya, disertai dengan sedikit pembesaran (`hover:scale-110`).
  - **Efek Fade Tepi**: Gradien di sisi kiri dan kanan menyembunyikan logo saat masuk dan keluar dari area pandang, menciptakan efek yang mulus.
- **Elemen Kunci**:
  - Judul bagian: "Technologies I Work With".
  - Daftar logo teknologi yang digulir.

#### 4. `<Portfolio />`

- **File**: `components/Portfolio.tsx`
- **Tujuan**: Menampilkan proyek-proyek unggulan dalam format visual yang mudah dicerna.
- **Struktur Tata Letak**: Menggunakan grid responsif (`md:grid-cols-2 lg:grid-cols-3`) untuk menampilkan kartu proyek.
- **Sub-Komponen Kunci**:
  - **`<PortfolioCard />`**: Komponen kartu standar untuk setiap item portofolio. Memiliki struktur internal yang jelas: area konten visual di atas dan area teks (judul, kategori) di bawah dengan latar belakang abu-abu muda.
- **Elemen Kunci**:
  - Judul bagian: "Some of my latest work".
  - Tiga (atau lebih) instance dari `<PortfolioCard />`, masing-masing menampilkan proyek yang berbeda.
- **Dependensi Ikon**: `RugbyIcon`, `HeartIcon`, `CommentIcon`, `MapPinIcon`.

#### 5. `<Contact />`

- **File**: `components/Contact.tsx`
- **Tujuan**: Ajakan bertindak (CTA) yang jelas dan langsung untuk mendorong pengunjung agar memulai percakapan atau kolaborasi.
- **Elemen Kunci**:
  - Judul utama: "Let's Work Together".
  - Paragraf deskriptif singkat.
  - Tombol "Get in Touch" yang menonjol yang tertaut ke `mailto:`.

#### 6. `<Footer />`

- **File**: `components/Footer.tsx`
- **Tujuan**: Menutup halaman dengan informasi hak cipta, akses kembali ke tautan sosial, dan navigasi sekunder.
- **Struktur Tata Letak**: Menggunakan `flexbox` untuk mengatur elemen secara horizontal dan memastikan responsivitas.
- **Elemen Kunci**:
  - Logo Kaki Halaman: `<FooterLogoIcon />`.
  - Teks Hak Cipta: "© 2024 Muhammad Fatihul Iqmal...".
  - Ikon Sosial: Tautan ke YouTube, LinkedIn, Twitter, dan Email.
  - Tautan Navigasi: "Projects", "About", "Contact".
- **Dependensi Ikon**: `YoutubeIcon`, `LinkedInIcon`, `TwitterIcon`, `MailIcon`, `FooterLogoIcon`.
