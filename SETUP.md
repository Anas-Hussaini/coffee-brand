# Quick Setup Guide for Artisan Coffee Co.

## Installation Steps

Follow these steps to get your coffee store running:

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- shadcn-ui components
- Radix UI primitives
- Lucide icons

### 2. Run the Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### 3. Build for Production

```bash
npm run build
npm start
```

## What's Included

### Pages
- **Home** (`/`) - Hero section with featured products
- **Shop** (`/shop`) - Full product catalog with filtering
- **Cart** (`/cart`) - Shopping cart with checkout
- **About** (`/about`) - Company information

### Features
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Shopping cart with localStorage persistence
- ✅ Product filtering by category and roast level
- ✅ Product sorting (price, name, featured)
- ✅ Modern UI with shadcn-ui components
- ✅ Image optimization with Next.js Image
- ✅ TypeScript for type safety
- ✅ Clean, maintainable code structure

### shadcn-ui Components Used
- Button
- Card
- Badge
- Select
- Tabs
- Dialog
- Separator

## Customization

### Change Colors
Edit `app/globals.css` to modify the color scheme:
```css
:root {
  --primary: 25 95% 53%; /* Change this for primary color */
}
```

### Add/Edit Products
Edit `data/products.ts` to modify the product catalog.

### Modify Layout
Edit `app/layout.tsx` for global layout changes, or individual page files for specific pages.

## Tips

- The cart data persists in localStorage - clear your browser's localStorage to reset the cart
- Product images use Unsplash URLs - replace with your own images in production
- All components are fully typed with TypeScript
- The project uses Next.js 14 App Router for modern React features

## Need Help?

Check out the documentation:
- [Next.js Docs](https://nextjs.org/docs)
- [shadcn-ui Docs](https://ui.shadcn.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

Happy coding! ☕

