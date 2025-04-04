# 🏨 Next.js Hotel Booking Platform

A fullstack hotel reservation system built with Next.js 13 and modern technologies. Manage hotel listings, handle bookings, and process payments securely.

## 🛠 Tech Stack

- **Frontend**: Next.js 13, TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity Studio
- **Authentication**: NextAuth.js
- **Payments**: Stripe
- **Database**: Sanity CMS

## ✨ Features

- 🔐 User authentication & session management
- 🏩 Hotel room management with Sanity CMS
- 📅 Booking system with date selection
- 💳 Secure payment processing with Stripe
- ⭐ Review and rating system
- 📱 Responsive mobile-first design

## 🧑‍💻 Run Locally

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Access Sanity Studio at `/studio`

## 🔐 Environment Variables

Buat file `.env` di root folder:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
STRIPE_SECRET_KEY=your_stripe_secret
NEXTAUTH_SECRET=your_auth_secret
NEXTAUTH_URL=http://localhost:3000
```

## 📁 Folder Structure
```
hotels/
├── src/
│   ├── app/         # Next.js app router
│   ├── components/  # Reusable components
│   ├── schemas/     # Sanity CMS schemas
│   ├── libs/        # Utility functions
│   └── context/     # Global state management
├── sanity.config.ts # Sanity configuration
└── next.config.js   # Next.js configuration
```

## 👤 Author
- GitHub: [@hashiifabdillah](https://github.com/hashiifab)
- LinkedIn: [Hashiif Abdillah](https://www.linkedin.com/in/hashiif-abdillah-665373297/)
