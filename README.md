# Artisan Coffee Co. - Coffee Brand Web Store

A modern, responsive e-commerce web store for a premium coffee brand, built with Next.js 14, TypeScript, and shadcn-ui components.

## Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Product Catalog**: Browse coffee beans, ground coffee, instant coffee, and pods
- **Advanced Filtering**: Filter by category, roast level, and sort by various criteria
- **Shopping Cart**: Full cart functionality with localStorage persistence
- **Product Cards**: Detailed product information with images and specifications
- **Featured Products**: Highlight best-selling or seasonal products
- **About Page**: Company story and values

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn-ui (v4)
- **Icons**: Lucide React
- **State Management**: React Context API
- **Image Optimization**: Next.js Image component

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── page.tsx           # Home page with hero section
│   ├── shop/              # Shop page with filters
│   ├── cart/              # Shopping cart page
│   ├── about/             # About page
│   ├── layout.tsx         # Root layout with navigation
│   └── globals.css        # Global styles
├── components/
│   ├── ui/                # shadcn-ui components
│   ├── navigation.tsx     # Header navigation
│   └── product-card.tsx   # Product card component
├── context/
│   └── cart-context.tsx   # Shopping cart context
├── data/
│   └── products.ts        # Product data
├── types/
│   └── product.ts         # TypeScript types
└── lib/
    └── utils.ts           # Utility functions
```

## Features in Detail

### Home Page
- Eye-catching hero section
- Featured products showcase
- Company values and benefits
- Call-to-action sections

### Shop Page
- Complete product catalog
- Filter by category (beans, ground, instant, pods)
- Filter by roast level (light, medium, dark)
- Sort by price, name, or featured status
- Responsive grid layout

### Shopping Cart
- Add/remove products
- Adjust quantities
- Persistent cart (localStorage)
- Real-time price calculations
- Free shipping threshold indicator
- Order summary

### Product Cards
- High-quality product images
- Product details and descriptions
- Origin and roast information
- Add to cart functionality
- Stock status indication

## Customization

### Adding Products

Edit `data/products.ts` to add or modify products:

```typescript
{
  id: "unique-id",
  name: "Product Name",
  description: "Product description",
  price: 19.99,
  image: "image-url",
  category: "beans", // or "ground", "instant", "pods"
  roast: "medium",   // or "light", "dark"
  origin: "Country",
  inStock: true,
  featured: false,   // Set to true for homepage display
}
```

### Styling

The project uses Tailwind CSS with a custom theme defined in `tailwind.config.ts`. Colors are defined using CSS variables in `app/globals.css`.

### Theme Colors

Primary color is set to a warm coffee-inspired orange/brown:
- Primary: `hsl(25 95% 53%)`

You can customize these in `app/globals.css` under the `:root` selector.

## Building for Production

```bash
npm run build
npm start
```

## License

This project is open source and available for educational and commercial use.

## Credits

Built with:
- [Next.js](https://nextjs.org/)
- [shadcn-ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

