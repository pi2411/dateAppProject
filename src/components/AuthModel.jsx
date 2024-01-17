import React,{useState} from 'react'
import { IoMdCloseCircleOutline } from "react-icons/io";

const AuthModel = ({setShowModel , isSingUp}) => {
  const[email,setEmail]=useState(null);
  const[password,setPassword]=useState(null);
  const[confirmPasword,setConfirmPassword]=useState(null);
  const[error,setError]=useState(null);

  console.log(email,password,confirmPasword)
    function heandleClick(){
        setShowModel(false)

    }function heandleSubmit(e){
    e.preventefault()
    try {
      if(isSingUp && (password !== confirmPasword)){
        console.log("Password need to match!")
        }
      console.log("Mack post request to our database")
    }catch(error){
      console.log(error)
    }
 }
  return (
    <div className='auth-modal'>
    <div className='close-icon' onClick={heandleClick}><IoMdCloseCircleOutline/></div>
    <h2>{isSingUp? "NTCREATE ACCOU" : "Sing In"}</h2>
    <p>By clicking Log In, you agree to our terms. Learn how we process your data in our Privacy Policy and Cookie Policy.</p>
    <form onSubmit={heandleSubmit}>
    <input 
      type='email'
      id="email"
      name='email'
      placeholder='email'
      required={true}
      onChange={(e)=>setEmail(e.target.value)}
    />
    <input 
      type='password'
      id="password"
      name='password'
      placeholder='password'
      required={true}
      onChange={(e)=>setPassword(e.target.value)}
    />
   {isSingUp && <input 
      type='password'
      id="password-check"
      name='password-check'
      placeholder='confirm-password'
      required={true}
      onChange={(e)=>setConfirmPassword(e.target.value)}
    />}
    <input className='secondary-button' type='submit' />
    <p>{error}</p>
    </form>
    <hr/>
    <h2>GET THE APP</h2>

    </div>
  )
}

export default AuthModel