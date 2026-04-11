import { useEffect, useState } from 'react'

import './styles/style1.css';
import './styles/style2.css';
import './styles/style3.css';
import './styles/style4.css';
import './styles/style5.css';
import './styles/style6.css';
import './styles/style7.css';
import './styles/style8.css';
import DefaultPage from './pages/DefaultPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/DashboardPage';



function App() {
  const [currentPage, setCurrentPage] = useState('default');
  const [loggedIn, getLoggedIn] = useState(localStorage.getItem("isLoggedIn"));

  useEffect(() => {
    if(loggedIn === 'true') {
      setCurrentPage("dashboard");
    }
  }, [loggedIn])

  

  const renderPage = () => {

    switch (currentPage) {
      case 'login':
        return <LoginPage onBack={() => setCurrentPage('default')} onLoginSuccess={() => setCurrentPage('dashboard')} />;
      case 'dashboard':
        return <Dashboard />;
      default:
        return <DefaultPage onSignIn={() => setCurrentPage('login')} />;
    }
  };

  return (
    <>
      <div className='app'>
        {renderPage()}
      </div>
    </>
  )
}

export default App
