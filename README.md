# ModernShop - React E-commerce Platform

A modern, fully-featured e-commerce platform built with React, TypeScript, and Tailwind CSS. This project demonstrates best practices in React development, state management, and responsive design.

![ModernShop Screenshot](https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80)

## ✨ Features

- **Authentication System**

  - User sign-up and sign-in
  - Form validation
  - Secure password handling
  - Persistent session management

- **Product Management**

  - Dynamic product catalog
  - Advanced search functionality
  - Responsive product grid
  - Beautiful product cards with images

- **Shopping Cart**

  - Real-time cart updates
  - Quantity management
  - Persistent cart state
  - Smooth animations

- **Checkout System**
  - Multi-step checkout process
  - Address validation
  - Payment integration
  - Order confirmation

## 🚀 Quick Start

1. **Clone and Install**

   ```bash
   https://github.com/tarunerror/E-commerce.git
   cd modernshop
   npm install
   ```

2. **Start Development Server**

   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 🛠 Tech Stack

- **Frontend Framework:** React 18
- **Type System:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **Icons:** Lucide React
- **Build Tool:** Vite
- **Development Environment:** Node.js

## 📁 Project Structure

```
src/
├── components/         # React components
│   ├── AuthPage.tsx   # Authentication page
│   ├── Cart.tsx       # Shopping cart
│   ├── ProductCard.tsx # Product display
│   └── ...
├── store/             # State management
│   └── useStore.ts    # Zustand store
├── types/             # TypeScript types
│   └── index.ts
├── data/             # Mock data
│   └── products.ts
└── App.tsx           # Main application
```

## 🎯 Key Features Explained

### Authentication System

- Secure user authentication flow
- Persistent sessions using local storage
- Form validation with error handling
- Smooth transition between sign-up and sign-in

### Product Management

- Dynamic product filtering
- Responsive grid layout
- Optimized image loading
- Real-time search functionality

### Shopping Cart

- Add/remove products
- Quantity adjustment
- Total calculation
- Persistent cart state

### Checkout Process

- Multi-step form validation
- Address verification
- Payment processing
- Order confirmation

## 🔧 Configuration

The application can be configured through environment variables:

```env
VITE_API_URL=your_api_url
VITE_STRIPE_KEY=your_stripe_key
```

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints for all devices
- Optimized layouts
- Touch-friendly interfaces

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com) for the amazing styling system
- [Lucide Icons](https://lucide.dev) for beautiful icons
- [Zustand](https://github.com/pmndrs/zustand) for state management
- [Vite](https://vitejs.dev) for the blazing fast build tool

---

Made with ❤️ by Tarun Gautam
