import Link from "next/link"
const Login = () => {
  return (
    <section>
      <h2>Sign in</h2>
      <p>New to Unimart <Link href="/signup"><span>Sign up for free</span></Link></p>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password"/> 
      <p><Link href="/forgotpassword">Forgot Password</Link></p>
      <div className="signin-btn">
        Sign in
      </div>
    </section>
  )
}

export default Login