import './styles/style1.css';
import './styles/style2.css';
import './styles/style3.css';
import './styles/style4.css';
import './styles/style5.css';
import './styles/style6.css';
import './styles/style7.css';
import './styles/style8.css';
import './styles/style9.css';
import './styles/style10.css';
import './styles/style11.css';


import { AuthProvider } from "./context/AuthContext.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import { useEffect } from 'react';
import ValidDataProvider from './context/validData_provider.jsx';

export default function App() {

  return (
    <AuthProvider>
      <ValidDataProvider>
        <div className='app'>
          <AppRoutes />
        </div>
      </ValidDataProvider>
    </AuthProvider>
  );
}

