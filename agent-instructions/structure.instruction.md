# 🌍 Structure & Navigation

## Single Page Application (SPA)

Website ini dibangun sebagai **Single Page Application (SPA)** dengan transisi yang halus antar halaman tanpa reload penuh, menjaga pengalaman pengguna tetap cepat dan mulus.

---

## 🗂️ Halaman Utama (`/`)

### Sections (urutan dari atas ke bawah):

1. **Hero Section**

   - Menampilkan dualitas Front-End & Back-End
   - Foto utama (`me.png`) di tengah
   - Grid 3 kolom: Front-End | Photo | Back-End

2. **Latest Projects** (3-4 project cards)

   - Daftar ringkas proyek terbaru
   - Tampilan kartu (project card)
   - Button "View All Projects" → link ke `/projects`

3. **About Preview** (optional)

   - Ringkasan singkat tentang dirimu
   - CTA button "Learn More" → link ke `/about`

4. **Contact CTA**
   - Highlight singkat untuk menghubungi
   - Button "Get in Touch" → link ke `/contact`

---

## 📄 Halaman `/about`

### Layout:

- **Header:** Judul besar "About Me" dengan subtitle
- **Content Grid:** Dua kolom pada desktop
  - **Kolom Kiri:** Teks bio dan deskripsi lengkap
  - **Kolom Kanan:** Ilustrasi atau mini portrait (bisa gunakan `me.png` atau ilustrasi lain)

### Sections:

1. **Introduction**

   - Latar belakang sebagai developer fullstack
   - Keseimbangan antara logika dan estetika

2. **Skills**

   - Grid atau list skill Frontend & Backend
   - Gunakan icon dari `lucide-react`
   - Level indicator (Advanced/Intermediate)

3. **Experience** (optional)
   - Timeline atau list singkat pengalaman kerja
   - Fokus pada pencapaian utama

### Styling:

- Konsisten dengan palet utama
- Minimal dan bersih
- Responsive: stack kolom pada mobile

---

## 💼 Halaman `/projects`

### Layout:

- **Header:** Judul "Projects" dengan filter/kategori (optional)
- **Grid:** 3 kolom pada desktop, 1 kolom pada mobile
- **Filter Buttons:** All / Front-End / Back-End / Fullstack

### Project Card Components:

```typescript
- Thumbnail image (project.jpg)
- Category badge (Fullstack/Front-End/Back-End)
- Title
- Short description (1-2 kalimat)
- Tech stack tags
- Links: Demo & Repository
```

### Interaction:

- Hover effect: lift card with shadow
- Click card → navigate to `/projects/[id]`

---

## 🔍 Halaman Detail Proyek (`/projects/[id]`)

### Structure:

1. **Header Section**

   - Back button (← Projects)
   - Judul besar
   - Category badge
   - Year

2. **Hero Image**

   - Large preview image
   - Could be gallery if multiple images

3. **Overview Grid** (2 kolom)

   - **Kolom Kiri:**

     - Long description (detailed story)
     - Role & responsibilities
     - Challenges & solutions

   - **Kolom Kanan:**
     - Tech stack (dengan icon)
     - Project links (Demo, Repo)
     - Year & duration
     - Key features list

4. **Gallery / Screenshots** (optional)

   - Grid of additional screenshots
   - Lightbox pada click

5. **Navigation**
   - Previous / Next project buttons
   - Back to all projects

### Animation:

- Fade-in saat load
- Smooth transitions dari `/projects`

---

## 💬 Halaman `/contact`

### Layout:

- **Header:** Judul "Get in Touch"
- **Content:** Center-aligned, max-width 600px

### Sections:

1. **Contact Form** (simple)

   ```typescript
   Fields:
   - Name (required)
   - Email (required)
   - Message (required, textarea)
   - Submit button
   ```

2. **Social Links**

   - Grid horizontal icon buttons
   - LinkedIn, GitHub, Twitter, Email
   - Menggunakan icon dari `lucide-react`
   - Hover effect: scale + color change

3. **Additional Info** (optional)
   - Email address (clickable mailto:)
   - Location
   - Availability status

### Styling:

- Clean form with subtle borders
- Focus states dengan outline biru
- Submit button prominent dengan primary color

---

## 🧭 Navigation Component

### Header/Navbar:

```typescript
Position: Fixed top
Layout: Logo/Name (kiri) | Nav Links (kanan)

Links:
- Home
- Projects
- About
- Contact

Mobile: Hamburger menu
Desktop: Horizontal nav
```

### Styling:

```typescript
// Desktop
className =
  "fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-zinc-200 z-50";

// Nav links
className = "flex gap-8 text-sm font-medium text-zinc-600 hover:text-zinc-900";
```

### Active State:

- Underline atau background highlight untuk halaman aktif
- Smooth transition antar halaman

---

## 🌐 Footer Component

### Layout:

- Center-aligned
- Single row atau 2-3 kolom pada desktop

### Content:

```typescript
- Copyright: © 2025 M. Fatihul Iqmal. All rights reserved.
- Social icons (kecil)
- Quick links (optional): Projects, About, Contact
```

### Styling:

```typescript
className =
  "py-12 px-6 border-t border-zinc-200 text-center text-sm text-zinc-500";
```

---

## 🎬 Page Transitions

### Using Framer Motion:

```typescript
// app/layout.tsx or page wrapper
import { AnimatePresence, motion } from "framer-motion";

const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

<AnimatePresence mode="wait">
  <motion.div
    key={pathname}
    variants={pageVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
    {children}
  </motion.div>
</AnimatePresence>;
```

---

## 📱 Responsive Breakpoints

### Tailwind Breakpoints:

- **sm:** 640px (mobile landscape)
- **md:** 768px (tablet)
- **lg:** 1024px (desktop)
- **xl:** 1280px (large desktop)

### Guidelines:

- Mobile-first approach
- Stack layouts pada mobile
- Grid 3 kolom → 1 kolom pada mobile
- Hide/show elemen dengan `hidden md:block`

---

## 🔗 Routing

### Next.js App Router Structure:

```
app/
├── page.tsx           // Home (/)
├── about/
│   └── page.tsx       // About (/about)
├── projects/
│   ├── page.tsx       // Projects List (/projects)
│   └── [id]/
│       └── page.tsx   // Project Detail (/projects/[id])
└── contact/
    └── page.tsx       // Contact (/contact)
```

### Link Usage:

```typescript
import Link from "next/link";

<Link href="/projects" className="...">
  View All Projects
</Link>;
```

---

## 🎯 SEO & Metadata

### Per-page Metadata:

```typescript
// app/projects/page.tsx
export const metadata = {
  title: "Projects | M. Fatihul Iqmal",
  description: "Explore my portfolio of full-stack development projects",
};
```

### Dynamic Metadata (Project Detail):

```typescript
// app/projects/[id]/page.tsx
export async function generateMetadata({ params }) {
  const project = getProjectById(params.id);
  return {
    title: `${project.title} | M. Fatihul Iqmal`,
    description: project.description,
  };
}
```
