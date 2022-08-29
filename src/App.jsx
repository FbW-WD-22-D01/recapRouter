import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Contact from './Contact'
import Header from './Header'
import LandingPage from './LandingPage'
import Login from './Login'


function App() {
  

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Der useEffect startet einmal am Anfang und jedes Mal wenn der state isLoggedIn sich verändert 
  useEffect(  () => {
    if(isLoggedIn){
      alert('Willkommen zurück')
    }
  },   [ isLoggedIn ]   )


  function handleLogout(){
    setIsLoggedIn(false)
  }


  return (
    <div className="App">
    
    {/* Der Header wird nur eingeblendet, wenn der User eingeloggt ist */}
    {isLoggedIn &&  <Header setIsLoggedIn={setIsLoggedIn}/> }
    
    
    <Routes>
      {
        //Wenn der User nicht eingeloggt ist, ruf immer die Login Seite auf
        !isLoggedIn ? 
        <Route path="*" element={<Login setIsLoggedIn={setIsLoggedIn} />} /> :
        
        //Ansonsten geh zu der jeweiligen Unterseite
        <>
          <Route path="/"        element={<LandingPage />} /> 
          <Route path="home"     element={<LandingPage />} />
          <Route path="contact"  element={<Contact /> }   />
        </>
      }
    </Routes> 
    
    </div>
  )
}

export default App
