import React, { useState } from 'react'
import Nav from "../components/Nav";
import AuthModel from "../components/AuthModel";
const Home = () => {
   const[showModel,setShowModel]=useState(false)
  function hendleClick(){
  console.log("clicked")
  setShowModel(true);
  }
  const authToken = false;
  return (
    <div className='overlay'>
    <Nav minimal={false} authToken={authToken}  setShowModel={setShowModel} showModel={showModel} />
    <div className='home'>
    <h1>Swipe Right&reg;</h1>
    <button className='primary-button' onClick={hendleClick}>
      {authToken?"Singout":"Create Account"}
    </button>
    {showModel && (
      <AuthModel setShowModel={setShowModel}/>
    )}
    </div>
    </div>
  )
}

export default Home