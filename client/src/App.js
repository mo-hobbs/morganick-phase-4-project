import React, { useState, useEffect } from 'react';
import './styles/App.css';
import NavBar from './NavBar';




function App() {
  const [user, setUser] = useState(null);

  // THIS WOULD BE TO HAVE USER INFO SAVED IN SESSION
  useEffect(() => {
    fetch("http://127.0.0.1:3000/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogin(user) {
    setUser(user);
    // console.log(user)
  }

  function handleLogout() {
    setUser(null);
  }


  return (

        <div className="App">
          
          <NavBar  
            user={user} 
            onLogin={handleLogin} 
            onLogout={handleLogout}/>

        </div>


  );
}

export default App;
