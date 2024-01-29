import React, { useState } from 'react'
import Nav from "../components/Nav";
import AuthModel from "../components/AuthModel";
const Home = () => {
  const [showModel, setShowModel] = useState(false)
  const [isSingUp, setIsSignUp] = useState(true);
  function hendleClick() {
    console.log("clicked")
    setShowModel(true);
    setIsSignUp(true)
  }
  const authToken = false;
  return (
    <div className='overlay'>
      <Nav minimal={false}
        setShowModel={setShowModel}
        showModel={showModel}
        setIsSignUp={setIsSignUp}
      />
      <div className='home'>
        <h1 className='primary-title'>Swipe Right&reg;</h1>
        <button className='primary-button' onClick={hendleClick}>
          {authToken ? "Singout" : "Create Account"}
        </button>
        {showModel && (
          <AuthModel
            setShowModel={setShowModel}
            setIsSignUp={setIsSignUp}
            isSingUp={isSingUp} />
        )}
      </div>
    </div>
  )
}

export default Home