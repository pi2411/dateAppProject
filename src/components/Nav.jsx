import React from 'react'
import whiteLogo from "../images/tinder_logo_white.png"
import colorLogo from "../images/color-logo-tinder.png"
const Nav = ({minimal,authToken,setShowModel,showModel}) => {
  function heandleClick(){
    setShowModel(true)
  }
  return (
    <nav>
    <div className='logo-container'>
    <img className='logo' src={minimal ? colorLogo : whiteLogo} alt='logo'/>
    </div>
    {!authToken && !minimal &&
     <button className='nav-button'
     onClick={heandleClick}
     disabled={showModel}
     >log in</button>}
    </nav>
  )
}

export default Nav