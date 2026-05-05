<p align="center">
  <img src="public/favicon.svg" alt="IndiGlam Logo" width="80" />
</p>

<h1 align="center">✨ IndiGlam — Premium Jewellery E-Commerce Platform</h1>

<p align="center">
  <strong>A luxury jewellery shopping experience built with modern web technologies.</strong><br/>
  <em>React · TypeScript · Tailwind CSS · GSAP · Node.js · Prisma · PostgreSQL</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.2-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/GSAP-3.15-88CE02?logo=greensock&logoColor=white" alt="GSAP" />
  <img src="https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma&logoColor=white" alt="Prisma" />
  <img src="https://img.shields.io/badge/PostgreSQL-Database-336791?logo=postgresql&logoColor=white" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License" />
</p>

---

## 🎬 Live Walkthrough

> _Full interactive walkthrough of the IndiGlam platform — desktop navigation, shop, blog, contact & more._

<p align="center">
  <img src="docs/screenshots/walkthrough-demo.webp" alt="IndiGlam Full Walkthrough" width="100%" />
</p>

---

## 📸 Screenshots

### 🏠 Homepage — Hero Section
> Immersive hero layout with curated product photography, dynamic GSAP scroll animations, and the signature dark-gold aesthetic.

![Homepage Hero](docs/screenshots/hero-desktop.png)

### 🛍️ New Jewellery Collection
> Premium product cards with hover effects, wishlist toggles, and quick-add-to-cart actions inside a stunning blue-tinted collection showcase.

![Collections](docs/screenshots/collections-desktop.png)

### 🛒 Shop — Product Catalog
> Full-featured shop with category marquee, advanced filters (type, weight, price range, tags), paginated product grid (36+ products), and sorting controls.

![Shop Page](docs/screenshots/shop-desktop.png)

### 📝 Blog
> Beautifully designed blog page with dark-themed hero banner, two-column article grid, and article cards with hover zoom effects.

![Blog Page](docs/screenshots/blog-desktop.png)

### 📞 Contact Us
> Contact form with working hours, embedded Google Maps (SRM Nagar, Chennai), and the gradient-accented dark layout.

![Contact Page](docs/screenshots/contact-desktop.png)

### 📱 Mobile — Onboarding
> Elegant onboarding experience with swipe-ready screens, animated transitions, and a mobile-first splash flow.

![Mobile Onboarding](docs/screenshots/onboarding-mobile.png)

---

## 🚀 Features

### 🎨 Design & UX
| Feature | Description |
|---|---|
| **Dark Luxury Aesthetic** | Signature `#0A0A0A` / `#E6D0AC` palette throughout every page |
| **GSAP Animations** | Smooth entrance animations, scroll-triggered reveals, and micro-interactions |
| **Responsive Design** | Fully adaptive — dedicated desktop and mobile component variants |
| **Infinite Marquee** | Seamless category scrolling banner on the shop page |
| **Interactive Hover Effects** | Product zoom, card lift effects, and button micro-animations |

### 🛒 E-Commerce
| Feature | Description |
|---|---|
| **Product Catalog** | 36+ curated products with ratings, prices, and imagery |
| **Paginated Shop** | Dynamic pagination (9 items/page) with smooth page transitions |
| **Advanced Filters** | Filter by product type, weight, tags, and price range |
| **Product Details** | Detailed specs — metal purity, weight, brand, and sizing |
| **Cart & Wishlist** | Full cart management with quantity controls |
| **Checkout Flow** | Multi-step checkout with address entry and payment selection |
| **Order Tracking** | Real-time order status timeline (Placed → Delivered) |

### 📱 Mobile Experience
| Feature | Description |
|---|---|
| **Splash & Onboarding** | Premium onboarding with swipeable slides |
| **Google OAuth Login** | Secure authentication with Google sign-in |
| **Profile Dashboard** | Order history, wishlist, offers, and track order — all accessible |
| **Contact & Map** | Working Google Maps integration centered on SRM Nagar, Chennai |

### 🖥️ Desktop Pages
| Page | Key Highlights |
|---|---|
| **Home** | Hero section, feature cards, product collections, testimonials, Instagram grid |
| **Page** | Category showcases, brand stories, aesthetic jewellery section |
| **Shop** | Sidebar filters, 4-page paginated product grid, sorting |
| **Blog** | Hero banner, 6-article grid with date stamps |
| **Contact Us** | Feedback form, working hours, Google Maps embed |
| **Checkout** | Payment method selection, order summary with coupon support |
| **Order Details** | Order timeline tracker with 5-step delivery status |

---

## 🏗️ Architecture

```
jewwllery-front-end/
├── public/
│   └── assets/              # Product images, model photos, backgrounds
├── src/
│   ├── App.tsx              # Root — routing, screen state, responsive switching
│   ├── components/
│   │   ├── DesktopHome.tsx          # Desktop homepage (hero, collections, testimonials)
│   │   ├── DesktopShop.tsx          # Shop with filters & pagination
│   │   ├── DesktopBlog.tsx          # Blog page
│   │   ├── DesktopContactUs.tsx     # Contact form + Google Maps
│   │   ├── DesktopCheckout.tsx      # Checkout flow
│   │   ├── DesktopOrderDetails.tsx  # Order tracking timeline
│   │   ├── DesktopProductDetails.tsx # Product detail page
│   │   ├── DesktopPage.tsx          # Category showcase page
│   │   ├── DesktopNav.tsx           # Sticky desktop navigation bar
│   │   ├── Home.tsx                 # Mobile homepage
│   │   ├── Login.tsx / Signup.tsx   # Authentication screens
│   │   ├── Cart.tsx                 # Shopping cart
│   │   ├── Profile.tsx              # User profile dashboard
│   │   ├── Wishlist.tsx             # Saved items
│   │   ├── MyOrders.tsx             # Order history
│   │   ├── OrderDetails.tsx         # Mobile order tracking
│   │   ├── ContactUs.tsx            # Mobile contact page
│   │   ├── Offers.tsx               # Promotions & deals
│   │   ├── Splash.tsx / Onboarding.tsx  # App launch flow
│   │   └── Chat.tsx                 # Customer support chat
│   └── index.css            # Global styles & Tailwind directives
├── server/
│   ├── src/
│   │   └── index.ts         # Express + Node.js backend API
│   └── prisma/
│       └── schema.prisma    # Database schema (User, Product, Cart, Order, Wishlist)
├── package.json
├── vite.config.ts
└── tsconfig.json
```

### Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend** | React 19, TypeScript | Component-based UI with strict typing |
| **Styling** | Tailwind CSS 4.2 | Utility-first responsive design |
| **Animations** | GSAP 3.15 | Scroll-driven animations & micro-interactions |
| **Motion** | Framer Motion | Page transitions & gesture support |
| **Build Tool** | Vite 8 | Ultra-fast HMR and optimized builds |
| **Icons** | Lucide React | Consistent SVG icon library |
| **Auth** | Google OAuth 2.0 | Secure social authentication |
| **Backend** | Node.js + Express | RESTful API server |
| **ORM** | Prisma | Type-safe database access |
| **Database** | PostgreSQL | Relational data persistence |

---

## ⚡ Quick Start

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x
- **PostgreSQL** (local or hosted — e.g., [Neon](https://neon.tech))

### 1. Clone the Repository

```bash
git clone https://github.com/rosdebbu/jewwllery-front-end.git
cd jewwllery-front-end
```

### 2. Install Dependencies

```bash
# Frontend
npm install

# Backend
cd server
npm install
cd ..
```

### 3. Configure Environment

Create `server/.env`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/indiglam?schema=public"
JWT_SECRET="your-jwt-secret-key"
```

### 4. Set Up the Database

```bash
cd server
npx prisma migrate dev --name init
cd ..
```

### 5. Run the Application

```bash
# Terminal 1 — Frontend
npm run dev

# Terminal 2 — Backend
cd server
npx ts-node src/index.ts
```

Open **http://localhost:5173** in your browser.

---

## 📦 Database Schema

```prisma
model User {
  id        String   @id @default(uuid())
  email     String   @unique
  password  String
  name      String?
  cartItems CartItem[]
  orders    Order[]
  wishlist  WishlistItem[]
}

model Product {
  id          String   @id @default(uuid())
  name        String
  category    String
  description String?
  price       Float
  image       String
}

model Order {
  id              String   @id @default(uuid())
  status          String   @default("Pending")
  totalAmount     Float
  shippingAddress String?
  userId          String
  user            User     @relation(fields: [userId], references: [id])
}
```

---

## 🎯 Design Philosophy

> _"Jewellery is more than just an accessory — it's a reflection of personality, heritage, and timeless beauty."_

IndiGlam was designed with a **luxury-first** mindset. Every pixel serves the brand:

- **Color Palette**: Deep obsidian blacks (`#0A0A0A`, `#0D0D0D`) paired with warm gold accents (`#E6D0AC`, `#C77E18`) evoke the premium feel of a high-end jewellery showroom.
- **Typography**: Serif fonts for headings create elegance; sans-serif body text ensures readability.
- **Imagery**: High-resolution product and model photography presented in borderless, full-bleed layouts.
- **Interactions**: GSAP-powered entrance animations give every page a sense of motion and life without compromising performance.

---

## 🗺️ Roadmap

- [x] Desktop responsive layout (Home, Shop, Blog, Contact, Checkout)
- [x] Mobile-first onboarding & authentication flow
- [x] Product catalog with filters and pagination
- [x] Shopping cart & wishlist
- [x] Order tracking with status timeline
- [x] Google Maps integration
- [x] Blog with article grid
- [ ] Search functionality with auto-suggestions
- [ ] Payment gateway integration (Razorpay / Stripe)
- [ ] Admin dashboard for product & order management
- [ ] Push notifications for order updates
- [ ] Multi-language support (Hindi, Tamil, English)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  <strong>Built with ❤️ by <a href="https://github.com/rosdebbu">Debjit Das</a></strong><br/>
  <em>IndiGlam — Where Elegance Meets Eternity</em>
</p>
