"use client";
import { useState } from "react";
import Signin from "@/component/signin";
import Signupcomponent from "@/component/signup";
import Signinimg from "../../public/assets/images/uni.jpg";
import Unimart from "../../public/assets/svgicons/unimart.svg";
import Image from "next/image";

const Signup = () => {
  const [userdata, setUserdata] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    signedName: "",
    signedPassword: "",
  });
  const [togSignin, setTogSignin] = useState(true);
  const [page, setPage] = useState(0)
  return (
    <div className="main-user-login">
      <div className="mainuser-img-cont">
        <Image src={Signinimg} alt={Signinimg} className="mainuser-img" />
      </div>
      <div className="user-info-cont">
        <Image src={Unimart} alt={Unimart} className="signuplogo" />

     {page === 0 ?   <div className=""> 
        <div className="">
          <h2 className="Su-si-text">{togSignin ? "Sign up" : "Sign in"}</h2>
          {togSignin ? (
            <Signupcomponent userdata={userdata} setUserdata={setUserdata} setPage={setPage} />
          ) : (
          <Signin userdata={userdata} setUserdata={setUserdata} setPage={setPage}/>
          )}
        </div>
        <div className="switch-user-info">
          <p className="switch-user-info-text">
            {togSignin ? "Already a member" : "Not a member"} ?
          </p>
          <button
            className="switch-btn-component"
            onClick={() => {
              setTogSignin((prevlogin) => !prevlogin);
            }}
          >
            {togSignin ? "Sign in" : "Sign up"}
          </button>
        </div>
        </div> : ""}

      </div>
    </div>
  );
};

export default Signup;
