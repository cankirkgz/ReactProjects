import logo from './logo.svg';
import './App.css';
import AuthContext from './context/auth-context'
import Auth from './Auth';
import { useState } from 'react';

function App() {
  const [login, setlogin] = useState(false)
  const loginAuth = () => {
    setlogin (!login);
  }
  return (
    <AuthContext.Provider value={{status:login, login:loginAuth}}>
      <Auth></Auth>
    </AuthContext.Provider>
  );
}

export default App;
