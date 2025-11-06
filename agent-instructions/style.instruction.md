# 🎨 Style & Design Guidelines

## 🎯 Tujuan Desain

Membuat **portofolio pribadi yang minimalis, elegan, dan profesional**, menampilkan sisi ganda sebagai **Front-End Developer** dan **Back-End Developer**.  
Tampilan harus fokus pada kesederhanaan, tipografi kuat, dan keseimbangan visual antara estetika antarmuka dan logika sistem.

---

## 🧭 Konsep Utama

- **Tema:** "Dual Expertise" – Front-End vs Back-End.
- **Mood:** Calm, modern, confident.
- **Vibe:** Profesional, teknikal, tapi tetap manusiawi.
- **Style:** Bersih, dengan kombinasi visual dan elemen kode yang lembut.

---

## 🎨 Warna

Gunakan palet yang netral dan profesional:

| Elemen         | Warna                 | Keterangan                                           |
| -------------- | --------------------- | ---------------------------------------------------- |
| Background     | #FFFFFF               | Putih bersih untuk kesan minimal                     |
| Text utama     | #1F1F1F               | Abu tua untuk kontras tinggi                         |
| Aksen 1        | #007ACC               | Biru lembut (melambangkan teknologi dan kepercayaan) |
| Aksen 2        | #F5F5F5               | Abu muda untuk background elemen                     |
| Aksen tambahan | #00BFA6 (teal lembut) | Highlight sisi back-end                              |

**Implementasi Tailwind:**

```typescript
// tailwind.config.ts - extend colors
colors: {
  primary: '#007ACC',
  secondary: '#00BFA6',
  background: '#FFFFFF',
  text: '#1F1F1F',
  muted: '#F5F5F5',
}
```

---

## 🖋️ Tipografi

- **Font utama:** Inter atau Poppins — modern dan mudah dibaca
- **Font sekunder:** Roboto Mono — untuk elemen kode dan bagian back-end

### Ukuran dan Gaya:

- **Judul besar:** 48–60px (`text-5xl` atau `text-6xl`), bold (`font-bold`)
- **Subjudul:** 24–28px (`text-2xl`), medium (`font-medium`)
- **Paragraf:** 16–18px (`text-base` atau `text-lg`), regular (`font-normal`)
- **Line-height:** longgar (`leading-relaxed` atau `leading-loose`) untuk kesan lapang

### Font Implementation:

```typescript
// app/layout.tsx
import { Inter, Roboto_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const robotoMono = Roboto_Mono({ subsets: ["latin"], variable: "--font-mono" });
```

---

## 🧑‍💻 Struktur Hero Section

Posisikan **foto me.png di tengah**, membagi dua sisi:

| Sisi      | Konten                                                                                                                                                                          | Gaya                                                             |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| **Kiri**  | **Front-End** – fokus pada antarmuka, interaksi, dan pengalaman pengguna. Tambahkan sedikit warna biru dan ikon UI/React/HTML di latar belakang lembut.                         | Tulisan tebal, modern sans-serif (Inter/Poppins)                 |
| **Kanan** | **Back-End** – fokus pada logika, API, database, dan performa. Tambahkan elemen kode semitransparan seperti potongan express(), fetch('/api'), atau { prisma.user.findMany() }. | Gunakan monospaced font (Roboto Mono) dan tone gelap keabu-abuan |

### Deskripsi Singkat:

- **Front-End:** "Membangun antarmuka yang interaktif dan estetis."
- **Back-End:** "Mengelola logika sistem dan arsitektur data yang efisien."

### Layout Hero:

- Grid 3 kolom: `grid grid-cols-3 gap-8`
- Foto tengah: kolom 2, ukuran 300-400px
- Konten kiri & kanan: vertikal center align

---

## ✨ Animasi & Interaksi

### Hover Effects:

- Transisi lembut: `transition-all duration-300 ease-in-out`
- Scale pada hover: `hover:scale-105`
- Opacity fade: `hover:opacity-80`

### Scroll Animations:

- Fade-up ringan pada section menggunakan Framer Motion
- Gunakan variant `fadeUpVariant` dari `motion-instruction.md`

### Hero Effects:

- Foto tengah: efek parallax halus atau garis pembatas vertikal
- Garis pembatas: `border-l` dan `border-r` dengan warna `border-zinc-200`

---

## 🧩 Layout

### Container:

- Max-width: `max-w-7xl` (1280px) atau `max-w-6xl` (1152px)
- Centered: `mx-auto`
- Padding horizontal: `px-6` atau `px-8`

### Spacing:

- White space cukup lebar: `gap-16` atau `gap-24` untuk section
- Margin dan padding seimbang: `py-20` untuk section, `mb-12` untuk headings

### Responsiveness:

```typescript
// Mobile-first approach
className = "flex flex-col md:flex-row lg:grid lg:grid-cols-3";
```

---

## 🔧 Mode Switching (Bonus Feature)

Tambahkan tombol **"Switch Mode"** untuk berpindah antara:

### 🎨 Front-End Mode:

- Primary color: `#007ACC` (biru lembut)
- Background: terang (`#FFFFFF`)
- Highlight: elemen UI/UX

### ⚙️ Back-End Mode:

- Primary color: `#00BFA6` (teal)
- Background: abu gelap (`#1F1F1F` atau `#0A0A0A`)
- Highlight: elemen kode/data

### Implementation:

```typescript
// Gunakan context atau state management
const [mode, setMode] = useState<'frontend' | 'backend'>('frontend');

// Apply conditional styling
className={mode === 'frontend' ? 'bg-white text-primary' : 'bg-zinc-900 text-secondary'}
```

---

## 🎨 Component Styling Guidelines

### Cards:

```typescript
className =
  "rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow";
```

### Buttons:

```typescript
// Primary
className =
  "rounded-full bg-primary px-6 py-3 text-white font-medium hover:bg-primary/90 transition-colors";

// Secondary
className =
  "rounded-full border border-zinc-200 px-6 py-3 text-zinc-900 hover:bg-zinc-50 transition-colors";
```

### Sections:

```typescript
className = "py-20 px-6 max-w-7xl mx-auto";
```

---

## 📐 Spacing System

Gunakan konsisten spacing scale dari Tailwind:

- **xs:** `gap-2` / `p-2` (8px)
- **sm:** `gap-4` / `p-4` (16px)
- **md:** `gap-6` / `p-6` (24px)
- **lg:** `gap-8` / `p-8` (32px)
- **xl:** `gap-12` / `p-12` (48px)
- **2xl:** `gap-16` / `p-16` (64px)
- **3xl:** `gap-24` / `p-24` (96px)

---

## 🌈 Gradient Usage (Optional)

Untuk aksen visual lembut (Tailwind v4 syntax):

```typescript
// Front-End gradient
className = "bg-linear-to-r from-blue-50 to-transparent";

// Back-End gradient
className = "bg-linear-to-r from-teal-50 to-transparent";
```

---

## 🔤 Text Styling Examples

```typescript
// Hero title
className = "text-5xl md:text-6xl font-bold text-zinc-900 leading-tight";

// Section heading
className = "text-3xl font-semibold text-zinc-900 mb-4";

// Body text
className = "text-base text-zinc-600 leading-relaxed";

// Code text (Backend)
className = "font-mono text-sm text-zinc-700 bg-zinc-100 px-2 py-1 rounded";
```
