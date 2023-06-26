import React from 'react'

const signin = () => {
  return (
    <div  className="signupform">
        
 <label>
 <span className='input-text'>Username or Email</span>
            <input type='email' />
        </label>
        <label>
        <span className='input-text'>Password</span>
            <input type='password' />
        </label>
        <p  className='forgot-password'>Forgot Password</p>
        <div className="">
            Sign in
        </div>

    </div>
  )
}

export default signin