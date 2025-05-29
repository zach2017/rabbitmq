# Vite Demo App 

## Create Vitejs base React Typescript template

```yarn create vite vitejsdemo --template react-ts
cd vitejsdemo
```

## Add Prettier

```
yarn add --dev --exact prettier

yarn add --dev prettier-eslint

```
#
# Material-UI Dashboard App

A React TypeScript application built with Vite, Material-UI, and featuring authentication, dashboard, and FAQ functionality.

## 🚀 Features

- **Authentication System**: Login with predefined users
- **Protected Routes**: Dashboard accessible only after login
- **Material-UI Design**: Professional, responsive interface
- **Dashboard Analytics**: Stats cards, orders table, and top products
- **FAQ Page**: Public accordion-style FAQ section
- **TypeScript**: Full type safety throughout the application

## 📦 Project Structure

```
src/
├── App.tsx           # Main application component
├── main.tsx          # Application entry point
├── types.ts          # TypeScript type definitions
├── data.ts           # Static data and mock functions
├── AuthContext.tsx   # Authentication context and provider
├── Login.tsx         # Login page component
├── Dashboard.tsx     # Protected dashboard component
├── FAQ.tsx           # Public FAQ page component
├── NavBar.tsx        # Navigation bar component
└── ProtectedRoute.tsx # Route protection wrapper
```

## 🛠️ Installation

1. **Clone or create the project directory**
2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser to:**
   ```
   http://localhost:3000
   ```

## 🔐 Demo Credentials

Use these credentials to test the authentication:

- **Regular User:**
  - Username: `user01`
  - Password: `password`

- **Admin User:**
  - Username: `admin`
  - Password: `adminpassword`

## 🎯 Usage

1. **Public Access**: Visit FAQ page without logging in
2. **Login**: Use demo credentials to access the dashboard
3. **Dashboard**: View stats, recent orders, and top products
4. **Logout**: Click logout to return to login screen

## 🧩 Components Overview

### Authentication (`AuthContext.tsx`)
- React Context for global auth state
- Login/logout functionality
- User session management

### Login (`Login.tsx`)
- Username/password form
- Error handling
- Demo credentials display

### Dashboard (`Dashboard.tsx`)
- Statistics cards with icons
- Recent orders table with status chips
- Top products list
- Responsive grid layout

### FAQ (`FAQ.tsx`)
- Accordion-style questions/answers
- Public access (no authentication required)

### Navigation (`NavBar.tsx`)
- Dynamic navigation based on auth state
- User welcome message
- Login/logout actions

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📚 Dependencies

- **React 18** - UI library
- **TypeScript** - Type safety
- **Material-UI (MUI) 5** - Component library
- **Vite** - Build tool
- **Emotion** - CSS-in-JS styling

## 🎨 Customization

### Adding New Routes
1. Create component in `src/`
2. Add route logic in `App.tsx`
3. Update navigation in `NavBar.tsx`

### Modifying Data
- Edit static data in `data.ts`
- Update types in `types.ts`
- Modify authentication users in `data.ts`

### Styling Changes
- Update theme in `App.tsx`
- Modify Material-UI component props
- Add custom styles using `sx` prop

## 🔒 Security Notes

This is a demo application with:
- Static user credentials (not suitable for production)
- Client-side authentication (no backend validation)
- No password encryption

For production use, implement:
- Secure backend authentication
- JWT tokens
- Password encryption
- HTTPS
- Input validation

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for educational/demo purposes. Feel free to use and modify as needed.