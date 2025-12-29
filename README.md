# Men Parfume - Landing Page

Website berbasis ReactJS dengan Vite untuk brand parfum "Men Parfume" yang menggunakan teknik AIDA copywriting dan terintegrasi dengan Contentful CMS.

## Fitur Utama

### 🎯 Teknik AIDA (Attention, Interest, Desire, Action)
- **Attention**: Hero section yang menarik dengan visual parfum dan headline kuat
- **Interest**: Section "Why" yang menjelaskan keunggulan produk
- **Desire**: Product list dari Contentful CMS dengan testimonial dan social proof
- **Action**: CTA terintegrasi WhatsApp untuk pembelian langsung

### 🎨 Desain & UI/UX
- **Flat Design**: Desain minimalis dan modern
- **Color Palette**: Dominan coklat dan turunannya (#8B4513, #A0522D, #D2B48C, dll)
- **FontAwesome Icons**: Tidak menggunakan emoji, hanya icon dari FontAwesome
- **Responsive Design**: Optimal untuk desktop dan mobile

### 🛍️ Integrasi E-commerce
- **Contentful CMS**: Mengelola produk parfum secara dinamis
- **WhatsApp Integration**: CTA langsung ke WhatsApp dengan prefill text
- **Product Categorization**: Filter produk berdasarkan kategori

## Struktur Halaman

1. **Hero Section** - Perkenalan brand dengan visual menarik
2. **Why Section** - Alasan memilih Men Parfume
3. **Product List** - Katalog produk dari Contentful
4. **CTA Section** - Call-to-action utama untuk WhatsApp
5. **Social Proof** - Testimonial dan statistik kepercayaan
6. **Footer** - Informasi kontak dan link penting

## Teknologi yang Digunakan

- **React 19.2.0** - Frontend framework
- **Vite 4.5.0** - Build tool dan dev server
- **Contentful** - Headless CMS untuk manajemen produk
- **FontAwesome** - Icon library
- **CSS Modules** - Styling components

## Setup & Installation

1. **Clone atau extract project**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Jalankan development server:**
   ```bash
   npm run dev
   ```
4. **Build untuk production:**
   ```bash
   npm run build
   ```

### Field yang digunakan:
- `name` - Nama produk
- `description` - Deskripsi produk
- `price` - Harga (number)
- `category` - Kategori produk
- `image` - Gambar produk
- `featured` - Status produk unggulan (boolean)

## WhatsApp Integration

CTA button mengarah ke WhatsApp dengan nomor **087778086123** dan pesan yang sudah di-prefill sesuai dengan produk yang dipilih.

## Browser Support

Website ini mendukung browser modern termasuk:
- Chrome 80+
- Firefox 74+
- Safari 13+
- Edge 80+

## Performance & SEO

- **Optimized Images**: Lazy loading dan responsive images
- **SEO Friendly**: Meta tags yang lengkap
- **Fast Loading**: Vite build optimization
- **Mobile First**: Responsive design approach

---

**Men Parfume** - Parfum Premium untuk Pria Berkarakter
