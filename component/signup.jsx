"use client";
import { useState } from "react";

const Signupcomponent = ({ setUserdata, userdata, setPage }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [catchErrror, setCatcherrror] = useState(false);
  return (
    <div>
      <div className="signupform">
        <div className="signup-name-flex">
          <label>
            <span className="input-text">Name</span>
            <input
              type="text "
              className={!userdata.name && catchErrror ? "err-msg" : "suname"}
              name="name"
              value={userdata.name}
              onChange={handleChange}
            />
          </label>
          <label>
            <span className="input-text"> Username</span>
            <input
              type="text"
              className={
                !userdata.username && catchErrror ? "err-msg" : "suusername"
              }
              name="username"
              value={userdata.username}
              onChange={handleChange}
            />
          </label>
        </div>
        <label>
          <span className="input-text">Email</span>
          <input
            type="email"
            className={!userdata.email && catchErrror ? "err-msg" : "suemail"}
            name="email"
            value={userdata.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <span className="input-text">Password</span>
          <input
            type="password"
            className={
              !userdata.password && catchErrror ? "err-msg" : "supassword"
            }
            placeholder="6+ characters"
            name="password"
            value={userdata.password}
            onChange={handleChange}
          />
        </label>
        <div
          className="create-account-btn"
          onClick={() => {
            setCatcherrror(true);
            !userdata.name
              ? setPage(0)
              : !userdata.username
              ? setPage(0)
              : !userdata.email
              ? setPage(0)
              : !userdata.email
              ? setPage(0)
              : setPage(1);
          }}
        >
          Create Account
        </div>
      </div>
    </div>
  );
};

export default Signupcomponent;
