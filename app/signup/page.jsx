"use client";
import { useState } from "react";
import Signin from "@/component/signin";
import Signupcomponent from "@/component/signup";
import Signinimg from "../../public/assets/images/uni.jpg";
import Image from "next/image";
const Signup = () => {
  const [togSignin, setTogSignin] = useState(true);
  return (
    <div className="main-user-login">
      <div className="mainuser-img-cont">
        <Image src={Signinimg} alt={Signinimg} className="mainuser-img"/>
      </div>
      <div className="user-info-cont">
        <div className="">
        <h2 className="Su-si-text">{togSignin ? "Sign up" : "Sign in"}</h2>
        {togSignin ? <Signupcomponent /> : <Signin />}

        </div>
        <div className="switch-user-info">
          <p className="switch-user-info-text">{togSignin ? "Already a member" : "Not a member"} ?</p>
          <button
          className="switch-btn-component"
            onClick={() => {
              setTogSignin((prevlogin) => !prevlogin);
            }}
          >
            {togSignin ? "Sign in" : "Sign up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
