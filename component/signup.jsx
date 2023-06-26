import React from 'react'

const Signupcomponent = () => {
  return (
    <div>
        <div className="signupform">
        <div className="signup-name-flex">
            <label>
               <span className='input-text'>Name</span> 
                <input type='text' />
            </label>
            <label>
            <span className='input-text'> Username</span>
                <input type='text' />
            </label>
        </div>
        <label>
        <span className='input-text'>Email</span>
            <input type='email' />
        </label>
        <label>
        <span className='input-text'>Password</span>
            <input type='password' placeholder='6+ characters' />
        </label>
        <div className="create-account-btn">
            Create Account
        </div>
        </div>
       
    </div>
  )
}

export default Signupcomponent;