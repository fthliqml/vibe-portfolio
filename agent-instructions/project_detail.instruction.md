## 🎨 style.md

### 🎯 Tujuan Desain

Membuat **portofolio pribadi yang minimalis, elegan, dan profesional**, menampilkan sisi ganda sebagai **Front-End Developer** dan **Back-End Developer**.  
Tampilan harus fokus pada kesederhanaan, tipografi kuat, dan keseimbangan visual antara estetika antarmuka dan logika sistem.

---

### 🧭 Konsep Utama

- **Tema:** “Dual Expertise” – Front-End vs Back-End.
- **Mood:** Calm, modern, confident.
- **Vibe:** Profesional, teknikal, tapi tetap manusiawi.
- **Style:** Bersih, dengan kombinasi visual dan elemen kode yang lembut.

---

### 🎨 Warna

Gunakan palet yang netral dan profesional:

| Elemen         | Warna                 | Keterangan                                           |
| -------------- | --------------------- | ---------------------------------------------------- |
| Background     | #FFFFFF               | Putih bersih untuk kesan minimal                     |
| Text utama     | #1F1F1F               | Abu tua untuk kontras tinggi                         |
| Aksen 1        | #007ACC               | Biru lembut (melambangkan teknologi dan kepercayaan) |
| Aksen 2        | #F5F5F5               | Abu muda untuk background elemen                     |
| Aksen tambahan | #00BFA6 (teal lembut) | Highlight sisi back-end                              |

---

### 🖋️ Tipografi

- **Font utama:** Inter atau Poppins — modern dan mudah dibaca
- **Font sekunder:** Roboto Mono — untuk elemen kode dan bagian back-end

Ukuran dan gaya:

- Judul besar: 48–60px, bold
- Subjudul: 24–28px, medium
- Paragraf: 16–18px, regular
- Line-height longgar untuk kesan lapang

---

### 🧑‍💻 Struktur Hero Section

Posisikan **foto me.png di tengah**, membagi dua sisi:

| Sisi      | Konten                                                                                                                                                                          | Gaya                                               |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| **Kiri**  | **Front-End** – fokus pada antarmuka, interaksi, dan pengalaman pengguna. Tambahkan sedikit warna biru dan ikon UI/React/HTML di latar belakang lembut.                         | Tulisan tebal, modern sans-serif                   |
| **Kanan** | **Back-End** – fokus pada logika, API, database, dan performa. Tambahkan elemen kode semitransparan seperti potongan express(), fetch('/api'), atau { prisma.user.findMany() }. | Gunakan monospaced font dan tone gelap keabu-abuan |

Deskripsi singkat:

- **Front-End:** “Membangun antarmuka yang interaktif dan estetis.”
- **Back-End:** “Mengelola logika sistem dan arsitektur data yang efisien.”

---

### 📦 Section Tambahan

#### 🧍 About

Deskripsi singkat mengenai dirimu sebagai developer fullstack — tekankan keseimbangan antara logika dan estetika.  
Gunakan layout dua kolom: teks di kiri, ilustrasi atau mini portrait di kanan.

#### 💼 Portfolio

Tampilkan beberapa proyek dalam card minimalis (3 kolom grid), masing-masing dengan:

- Screenshot
- Judul proyek
- Role (Front-End / Back-End / Fullstack)
- Link demo & repo

#### 💬 Contact

Sertakan ikon sosial (LinkedIn, GitHub, Email) dengan efek hover lembut (fade-in / scale).  
**Gunakan icon dari `lucide-react`:** contoh `Linkedin`, `Github`, `Mail`, `Twitter`

---

### 🌐 Footer

Sederhana, tengah halaman, font kecil:

```
© 2025 [Nama Kamu]. All rights reserved.
```

---

### ✨ Animasi & Interaksi

- Hover lembut dengan transisi 0.3s ease-in-out
- Scroll animasi fade-up ringan pada section
- Foto tengah efek parallax halus atau garis pembatas vertikal antara Front-End dan Back-End

---

### 🧩 Layout

- Gunakan Flexbox atau CSS Grid dengan max-width: 1200px
- White space cukup lebar, margin dan padding seimbang
- Responsif di semua device (foto tengah tetap fokus utama)

---

### 🔧 Bonus Idea

Tambahkan tombol **“Switch Mode”** untuk berpindah antara:

- 🎨 **Front-End Mode:** warna biru lembut, background terang
- ⚙️ **Back-End Mode:** warna teal/gelap, background abu gelap

Perubahan mode bisa mengubah warna, highlight, bahkan sedikit gaya font untuk memperkuat tema dualitas.

---

### 🌍 Struktur Halaman & Navigasi (SPA)

Website ini dibangun sebagai **Single Page Application (SPA)** dengan transisi yang halus antar halaman tanpa reload penuh, menjaga pengalaman pengguna tetap cepat dan mulus.

#### 🗂️ Halaman Utama

- **Hero Section:** menampilkan dualitas Front-End & Back-End serta foto utama (`me.png`).
- **Latest Projects:** daftar ringkas proyek dengan tampilan kartu (project card).
- **CTA atau highlight singkat** ke halaman About atau Contact.

#### 📄 Halaman Tambahan

- **/about:** berisi penjelasan singkat tentang latar belakang, keahlian, dan pengalaman kerja. Desain tetap minimalis dan konsisten dengan palet utama.
- **/projects:** menampilkan seluruh proyek dalam grid modern dengan kategori atau filter sederhana.
- **/contact:** form kontak sederhana dengan sosial media di bawahnya.

#### 🧭 Halaman Detail Proyek

Ketika pengguna mengklik **project card**, akan diarahkan ke **halaman detail proyek** dengan struktur berikut:

- **Header proyek:** judul besar dan kategori (Front-End / Back-End / Fullstack)
- **Deskripsi:** cerita singkat tentang proses pembuatan, teknologi yang digunakan, dan peran pribadi.
- **Gallery / Preview:** tangkapan layar atau tampilan live demo.
- **Navigasi kembali** ke halaman utama / daftar proyek dengan transisi halus.

> Semua halaman mengikuti gaya yang **konsisten, elegan, dan seimbang**, dengan ruang putih yang luas, tipografi bersih, dan efek transisi lembut untuk menjaga pengalaman visual yang harmonis.

---

## 📊 Data & Assets

### 🖼️ Assets

- **Foto profil:** `public/images/me.png` — digunakan di Hero Section (tengah halaman)
- **Project placeholder:** `public/images/project.jpg` — digunakan untuk semua thumbnail project sampai ada gambar asli
- **Struktur folder images:** `public/images/` untuk semua aset visual

### 📝 Data Placeholder (Gunakan Sementara)

#### Personal Info

```typescript
const personalInfo = {
  name: "M. Fatihul Iqmal",
  title: "Full-Stack Developer",
  tagline: "Building seamless experiences from UI to database",
  bio: "Passionate full-stack developer with expertise in creating elegant user interfaces and robust backend systems. I bridge the gap between design and logic, ensuring every application is both beautiful and performant.",
  email: "fatihul.dev@example.com",
  location: "Indonesia",
  socials: {
    github: "https://github.com/fthliqml",
    linkedin: "https://linkedin.com/in/fthliqml",
    twitter: "https://twitter.com/fthliqml",
  },
};
```

#### Skills

**Catatan:** Gunakan icon library seperti `lucide-react` atau `react-icons` untuk semua icon.

```typescript
// Install: npm install lucide-react
// Import contoh: import { Code2, Database, Sparkles } from "lucide-react";

const skills = {
  frontend: [
    { name: "React", level: "Advanced", icon: "Code2" }, // dari lucide-react
    { name: "Next.js", level: "Advanced", icon: "Triangle" },
    { name: "TypeScript", level: "Advanced", icon: "FileCode2" },
    { name: "Tailwind CSS", level: "Advanced", icon: "Paintbrush" },
    { name: "Framer Motion", level: "Intermediate", icon: "Sparkles" },
  ],
  backend: [
    { name: "Node.js", level: "Advanced", icon: "Server" },
    { name: "Express", level: "Advanced", icon: "Zap" },
    { name: "Prisma", level: "Intermediate", icon: "Database" },
    { name: "PostgreSQL", level: "Intermediate", icon: "Database" },
    { name: "REST API", level: "Advanced", icon: "Plug" },
  ],
};
```

#### Projects (Minimum 6 untuk grid)

```typescript
const projects = [
  {
    id: "p1",
    title: "E-Commerce Dashboard",
    category: "Fullstack",
    role: "Fullstack Developer",
    description:
      "Modern admin dashboard for e-commerce platform with real-time analytics, inventory management, and order tracking.",
    longDescription:
      "Built a comprehensive admin dashboard using Next.js 14 and Prisma ORM. Implemented real-time data updates with WebSocket, integrated Stripe for payment processing, and created custom analytics visualizations. The system handles thousands of products and orders with optimized database queries.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    image: "/images/project.jpg",
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com/fthliqml/ecommerce-dashboard",
    year: 2024,
  },
  {
    id: "p2",
    title: "Portfolio Builder",
    category: "Front-End",
    role: "Front-End Developer",
    description:
      "Drag-and-drop portfolio builder with live preview and customizable themes.",
    longDescription:
      "Created an intuitive portfolio builder that allows users to create professional portfolios without coding. Features include drag-and-drop components, real-time preview, theme customization, and export to static HTML. Built with React DnD and Framer Motion for smooth interactions.",
    tech: ["React", "Framer Motion", "Tailwind CSS", "React DnD"],
    image: "/images/project.jpg",
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com/fthliqml/portfolio-builder",
    year: 2024,
  },
  {
    id: "p3",
    title: "Task Management API",
    category: "Back-End",
    role: "Back-End Developer",
    description:
      "RESTful API for team task management with authentication and real-time notifications.",
    longDescription:
      "Developed a scalable REST API for task management systems. Implemented JWT authentication, role-based access control, and WebSocket notifications. Optimized database queries with proper indexing and caching strategies using Redis. API documentation created with Swagger.",
    tech: ["Node.js", "Express", "Prisma", "PostgreSQL", "Redis"],
    image: "/images/project.jpg",
    demoUrl: null,
    repoUrl: "https://github.com/fthliqml/task-api",
    year: 2023,
  },
  {
    id: "p4",
    title: "Social Media Analytics",
    category: "Fullstack",
    role: "Fullstack Developer",
    description:
      "Analytics platform for social media metrics with interactive dashboards and automated reports.",
    longDescription:
      "Built a comprehensive analytics platform that aggregates data from multiple social media APIs. Features include custom dashboard creation, scheduled reports, data visualization with Chart.js, and export functionality. Implemented background jobs for data fetching and processing.",
    tech: ["Next.js", "TypeScript", "Prisma", "Chart.js", "Bull Queue"],
    image: "/images/project.jpg",
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com/fthliqml/social-analytics",
    year: 2024,
  },
  {
    id: "p5",
    title: "Component Library",
    category: "Front-End",
    role: "Front-End Developer",
    description:
      "Reusable React component library with TypeScript and comprehensive documentation.",
    longDescription:
      "Created a production-ready component library with 50+ accessible components. Built with TypeScript for type safety, documented with Storybook, and published to npm. Includes theming system, dark mode support, and follows WCAG accessibility guidelines.",
    tech: ["React", "TypeScript", "Storybook", "Tailwind CSS"],
    image: "/images/project.jpg",
    demoUrl: "https://storybook.example.com",
    repoUrl: "https://github.com/fthliqml/ui-components",
    year: 2023,
  },
  {
    id: "p6",
    title: "Real-Time Chat Platform",
    category: "Fullstack",
    role: "Fullstack Developer",
    description:
      "WebSocket-based chat application with group messaging, file sharing, and typing indicators.",
    longDescription:
      "Developed a real-time chat platform using Socket.io for instant messaging. Features include private and group chats, file uploads with preview, typing indicators, read receipts, and message search. Implemented message encryption and data compression for performance.",
    tech: ["Next.js", "Socket.io", "Prisma", "PostgreSQL", "AWS S3"],
    image: "/images/project.jpg",
    demoUrl: "https://demo.example.com",
    repoUrl: "https://github.com/fthliqml/chat-platform",
    year: 2024,
  },
];
```

### 🎯 Catatan untuk Agent

1. **Semua data di atas adalah placeholder** — nanti bisa diganti dengan data asli
2. **Gunakan TypeScript** untuk type safety pada semua data
3. **Buat file terpisah** untuk data (e.g., `src/data/projects.ts`, `src/data/personal.ts`)
4. **Image optimization:** gunakan Next.js `<Image>` component dengan `fill` atau ukuran spesifik
5. **Responsive images:** pastikan `project.jpg` dan `me.png` tampil baik di semua ukuran layar
6. **Alt text:** selalu sediakan alt text deskriptif untuk accessibility
7. **Icon library:** gunakan `lucide-react` untuk semua icon (install: `npm install lucide-react`)

---
