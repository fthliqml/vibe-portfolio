# Panduan Gaya Desain & Komponen (style.md)

Dokumen ini adalah sumber kebenaran tunggal untuk semua aspek visual dan fungsional dari aplikasi portofolio. Semua pengembangan di masa depan harus mengacu pada panduan ini untuk menjaga konsistensi dan kualitas.

---

### **1. Prinsip Umum**

- **Teknologi Utama**: React (dengan TypeScript), komponen fungsional, dan Hooks.
- **Styling**: **Tailwind CSS** secara eksklusif. CSS kustom hanya diizinkan untuk animasi `@keyframes` yang kompleks di `index.html`.
- **Filosofi Desain**: Bersih, modern, dan minimalis dengan fokus pada kontras tinggi (hitam, putih, abu-abu) dan tipografi yang kuat.
- **Struktur**: Aplikasi berbasis komponen. Setiap bagian logis dari halaman (`Header`, `Hero`, `Portfolio`) adalah komponennya sendiri di direktori `components/`.
- **Responsivitas**: Desain _mobile-first_ adalah prioritas. Semua komponen harus terlihat bagus di semua ukuran layar, menggunakan breakpoint standar Tailwind (`sm`, `md`, `lg`, `xl`).

---

### **2. Skema Warna (Color Palette)**

Palet warna sengaja dibatasi untuk mempertahankan tampilan yang profesional dan fokus.

#### **Warna Latar Belakang**

- **Utama (Terang)**: `bg-white` (`#FFFFFF`) - Digunakan untuk sebagian besar bagian konten seperti Hero, Tech Stack, dan Kontak.
- **Sekunder (Terang)**: `bg-gray-100` (`#F3F4F6`) - Digunakan untuk memisahkan bagian secara visual, seperti bagian Portfolio.
- **Utama (Gelap)**: `bg-black` (`#000000`) - Digunakan secara eksklusif untuk `Header` dan `Footer` untuk menciptakan bingkai yang kuat.

#### **Warna Teks**

- **Teks Primer (di Latar Terang)**: `text-gray-900` atau `text-black`.
- **Teks Sekunder (di Latar Terang)**: `text-gray-500` atau `text-gray-600` - Untuk subjudul, deskripsi, dan paragraf.
- **Teks Primer (di Latar Gelap)**: `text-white`.
- **Teks Sekunder (di Latar Gelap)**: `text-gray-300` atau `text-gray-400` - Untuk tautan navigasi dan teks hak cipta.

#### **Warna Aksen & UI**

- **Batas (Border)**: `border-gray-200` untuk pemisah halus pada latar belakang terang.
- **Kontrol Jendela `CodeCard`**:
  - `bg-red-500`
  - `bg-yellow-500`
  - `bg-green-500`
- **Ikon Peta**: `text-red-500` pada komponen `PortfolioCard` peta.

#### **Warna Sorotan Sintaksis (Syntax Highlighting)**

Warna-warna ini digunakan secara khusus di dalam komponen `CodeCard`.

- **Keywords (`import`, `from`, `return`)**: `text-purple-400`
- **Strings**: `text-green-300`
- **Variables (`const`)**: `text-blue-400`
- **Functions/Components**: `text-yellow-300`
- **Numbers/Parameters**: `text-orange-400`

---

### **3. Tipografi (Typography)**

- **Font Utama**: `font-sans` (Sans-Serif standar browser).
- **Font Kode**: `font-mono` (Monospace standar browser).

#### **Gaya Judul**

- **Judul Hero Utama (`front end`, `back end`)**:
  - `text-5xl md:text-6xl font-black tracking-tight text-black`
- **Nama Utama (`Muhammad Fatihul Iqmal`)**:
  - `text-6xl font-extrabold text-gray-900 tracking-tight`
- **Subjudul Utama (`Full-Stack Developer`)**:
  - `text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl`
- **Judul Bagian (Pola Kunci!)**:
  - **Gaya Wajib**: `text-sm font-bold uppercase tracking-widest text-gray-500`
  - Digunakan untuk "Some of my latest work" dan "Technologies I Work With". Harus direplikasi persis untuk judul bagian baru.
- **Judul Kontak (`Let's Work Together`)**:
  - `text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight`

#### **Gaya Teks Tubuh**

- **Paragraf & Deskripsi Umum**:
  - `text-lg text-gray-500` atau `text-gray-600`
- **Teks Kode**:
  - `text-sm` dengan warna dasar `text-gray-300` di dalam `<pre>`.

---

### **4. Tata Letak & Spasi (Layout & Spacing)**

- **Kontainer Utama**: `container mx-auto px-6` digunakan di setiap bagian tingkat atas untuk memusatkan konten dan memberikan padding horizontal yang konsisten.
- **Spasi Vertikal Antar Bagian**: Gunakan `py-16`, `py-20`, atau `py-32` untuk memberikan ruang bernapas yang cukup antar bagian.
- **Grid**: Gunakan `grid` dari Tailwind untuk tata letak yang kompleks.
  - **Portfolio**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
  - **Hero**: `grid-cols-1 lg:grid-cols-12 gap-12`
- **Flexbox**: Gunakan untuk alignment di dalam komponen yang lebih kecil (misalnya, `Header`, `Footer`, item di dalam kartu).

---

### **5. Komponen & Pola UI**

#### **`Header` & `Footer`**

- **Latar Belakang**: `bg-black` untuk konsistensi.
- **Posisi Header**: `sticky top-0 z-50` agar selalu terlihat.
- **Tautan Navigasi**: `text-gray-300` dengan efek `hover:text-white`.
- **Ikon Sosial**: `text-gray-400` dengan efek `hover:text-white`.

#### **`CodeCard`**

- **Struktur**: Komponen dengan `title` dan `children` props.
- **Latar Belakang**: `bg-[#282c34]` untuk tampilan editor kode.
- **Header Kartu**: `bg-gray-700` dengan tiga titik berwarna untuk estetika jendela macOS.
- **Konten Kode**: Harus dibungkus dalam tag `<pre><code class="font-mono">...</code></pre>` untuk format yang benar.
- **Interaksi**: `transform hover:scale-105 transition-transform duration-300`.

#### **`PortfolioCard`**

- **Tampilan**: `bg-white rounded-lg shadow-md border border-gray-200`.
- **Struktur**: Terdiri dari dua bagian: area konten utama dan footer kartu (`bg-gray-50`) yang berisi judul dan kategori.
- **Interaksi**: `transition-all duration-300 hover:shadow-xl hover:-translate-y-1`.

#### **Tombol Utama (Call-to-Action)**

- **Contoh**: Tombol "Get in Touch" di bagian Kontak.
- **Gaya**: `bg-gray-900 text-white font-semibold px-8 py-3 rounded-md`.
- **Interaksi**: `hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105`.

---

### **6. Ikonografi**

- **Sumber**: Semua ikon adalah komponen SVG React yang didefinisikan secara internal di `components/Icons.tsx`. Ini memastikan pemuatan yang cepat dan styling yang konsisten.
- **Penggunaan**: Impor ikon yang diperlukan dari `Icons.tsx` dan gunakan sebagai komponen (misalnya, `<TwitterIcon className="..." />`). Jangan gunakan tag `<img>` atau URL eksternal untuk ikon.
- **Penambahan Ikon Baru**: Ikon baru harus ditambahkan sebagai komponen React baru di dalam `components/Icons.tsx` dengan mengikuti pola `React.FC<IconProps>`.

---

### **7. Animasi & Interaktivitas**

- **Transisi Standar**: Semua efek hover harus menggunakan transisi yang mulus.
  - **Pola**: `transition-all` atau `transition-colors` dengan `duration-300`.
- **Efek Hover Umum**:
  - Perubahan Warna: `hover:text-white`, `hover:bg-gray-800`.
  - Transformasi: `hover:scale-105` (sedikit membesar), `hover:-translate-y-1` (sedikit terangkat).
  - Bayangan: `hover:shadow-xl`.
  - Filter: `hover:grayscale-0` (pada logo Tech Stack).
- **Animasi Marquee**:
  - Didefinisikan dengan `@keyframes marquee` di `index.html`.
  - Diterapkan dengan kelas `animate-marquee`.
  - Membutuhkan duplikasi konten untuk menciptakan ilusi tak terbatas.
  - Efek _fade_ di tepi dicapai dengan gradien absolut (`bg-gradient-to-r from-white`).
