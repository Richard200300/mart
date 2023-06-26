import React from 'react'

const Signupcomponent = () => {
  return (
    <div>
        <div className="signupform">
        <div className="signup-name-flex">
            <label>
               <span className='input-text'>Name</span> 
                <input type='text ' className='suname'/>
            </label>
            <label>
            <span className='input-text'> Username</span>
                <input type='text ' className='suusername' />
            </label>
        </div>
        <label>
        <span className='input-text'>Email</span>
            <input type='email' className='suemail' />
        </label>
        <label>
        <span className='input-text'>Password</span>
            <input type='password' className='supassword' placeholder='6+ characters' />
        </label>
        <div className="create-account-btn">
            Create Account
        </div>
        </div>
       
    </div>
  )
}

export default Signupcomponent;