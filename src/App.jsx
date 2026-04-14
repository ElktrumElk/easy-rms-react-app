import './styles/style1.css';
import './styles/style2.css';
import './styles/style3.css';
import './styles/style4.css';
import './styles/style5.css';
import './styles/style6.css';
import './styles/style7.css';
import './styles/style8.css';
import './styles/style9.css';


import { AuthProvider } from "./context/AuthContext.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import { useEffect } from 'react';
import { useState } from 'react';
import { useThemeSync } from './scripts/auto_them_sync.js';
export default function App() {

  window.addEventListener("load", () => {
    console.log("changed made")
  })
  return (
    <AuthProvider>

      <div className='app'>
        <AppRoutes />
      </div>
    </AuthProvider>
  );
}

