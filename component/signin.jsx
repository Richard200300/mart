"use client";
import { useState } from "react";
const signin = ({ setUserdata, userdata, setPage }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [catchErrror, setCatcherrror] = useState(false)
  return (
    <div className="signupform">
      <label>
        <span className="input-text">Username or Email</span>
        <input
          type="email"
          className= {!userdata.signedName && catchErrror? "err-msg": "siemail"}
          name="signedName"
          value={userdata.signedName}
          onChange={handleChange}
        />
      </label>
      <label>
        <span className="input-text">Password</span>
        <input
          type="password"
          className= {!userdata.signedPassword && catchErrror? "err-msg": "sipassword"}
          name="signedPassword"
          value={userdata.signedPassword}
          onChange={handleChange}
        />
      </label>
      <p className="forgot-password">Forgot Password?</p>
      <div
        className="create-account-btn"
        onClick={() => {
          setCatcherrror(true)
          !userdata.signedName
            ? setPage(0)
            : !userdata.signedPassword
            ? setPage(0)
            : setPage(1);
        }}
      >
        Sign in
      </div>
    </div>
  );
};

export default signin;
