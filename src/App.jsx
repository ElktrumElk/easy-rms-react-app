import { useState } from 'react'

import './styles/style1.css';
import './styles/style2.css';
import './styles/style3.css';
import './styles/style4.css';
import './styles/style5.css';
import './styles/style6.css';
import DefaultPage from './pages/DefaultPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/DashboardPage';


function App() {
  const [isSigninPressed, setSignin] = useState(false);


  return (
    <>
    <div className='app'>
      {
      //isSigninPressed ? <LoginPage  click={setSignin}/> : <DefaultPage isSign={setSignin} /> 
      <Dashboard />
      }
    </div>
    </>
  )
}

export default App
