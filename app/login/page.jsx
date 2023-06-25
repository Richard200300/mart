import Link from "next/link";
import Image from "next/image";
import Signinimg from "../../public/assets/images/uni.jpg";
const Login = () => {
  return (
    <section className="loginpage">
      <div className="logininfo">
        <div className="mainloginifo">
        <h2 className="signintext">Sign in</h2>
        <p className="link-text">
          New to Unimart
          <Link href="/signup">
            <span className="su-link">Sign up for free</span>
          </Link>
        </p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <p>
          <Link href="/forgotpassword">Forgot Password</Link>
        </p>
        <div className="signin-btn">Sign in</div>

        </div>
        
      </div>
      <div className="loginimg">
        <Image src={Signinimg} alt={Signinimg} className="Signinimg" />
      </div>
    </section>
  );
};

export default Login;
