import { useState } from "react"

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log('Email:', email);
        console.log('Password:', password);
    }

    return (
      <div className="h-screen md:flex md:gap-x-3.5">
          <img src="/img/login.jpg" className="md:w-1/2 object-cover hidden md:block" alt="login" />
          <div className="md:w-1/2 py-4 flex flex-col justify-center items-center relative">
              <img src="/img/logo.png" className="absolute top-5 left-0" alt="logo" />
              <div className="">
                <h1 className="text-center text-green-light text-4xl font-medium">Login to your account</h1>
                <form className="w-fit flex flex-col gap-4 p-5 mt-20" onSubmit={handleSubmit}>
                    <div className="form-group flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" className="px-3 py-2 border-gray-color border-2 rounded-md" placeholder="Your Email" value={email} onChange={handleEmailChange} />
                    </div>
                    <div className="form-group flex flex-col">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" className="px-3 py-2 border-gray-color border-2 rounded-md" placeholder="Your Password" value={password} onChange={handlePasswordChange} />
                    </div>
                    <p><span className="font-bold">By signing up yout to agree to out</span> Terms & Condition and privacy Policy*</p>
                    <button type="submit" className="p-3.5 text-white bg-green-button rounded-lg">Login</button>
                </form>
                <div className="flex gap-1 justify-center">
                    <p className="my-auto">Don&apos;t have an account?</p>
                    <a href="#" className="my-auto text-green-dark">Register</a>
                </div>
              </div>
          </div>
      </div>
    )
  }
  
  export default Login
  