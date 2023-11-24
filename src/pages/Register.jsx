import { useState } from "react"
import handleTitle from '../handle/handleTitle';

function Register() {
    handleTitle('Register | GreenWaste');

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmitRegister = async (e) => {
        e.preventDefault()

        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
    }

    return (
        <div className="h-screen md:flex md:flex-row-reverse md:gap-x-3.5">
            <img src="/img/register.jpg" className="md:w-1/2 object-cover hidden md:block" alt="login" />
            <div className="md:w-1/2 py-4 flex flex-col justify-center items-center relative">
                <a href="/">
                    <img src="/img/logo.png" className="absolute top-5 left-0" alt="logo" />
                </a>
                <div className="">
                    <h1 className="text-center text-green-light text-4xl font-medium">Create an account</h1>
                    <form className="w-fit flex flex-col gap-4 p-5 mt-20" onSubmit={handleSubmitRegister}>
                        <div className="form-group flex flex-col">
                            <label htmlFor="username">Username</label>
                            <input type="username" name="username" id="username" className="px-3 py-2 border-gray-color border-2 rounded-md" placeholder="Your Username" value={username} onChange={handleUsernameChange} />
                        </div>
                        <div className="form-group flex flex-col">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" className="px-3 py-2 border-gray-color border-2 rounded-md" placeholder="Your Email" value={email} onChange={handleEmailChange} />
                        </div>
                        <div className="form-group flex flex-col">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" className="px-3 py-2 border-gray-color border-2 rounded-md" placeholder="Your Password" value={password} onChange={handlePasswordChange} />
                        </div>
                        <p className="text-sm"><span className="font-bold">By signing up yout to agree to out</span> Terms & Condition and privacy Policy*</p>
                        <button type="submit" className="p-3.5 text-white bg-green-button rounded-lg">Register</button>
                    </form>
                    <div className="flex gap-1 justify-center text-sm">
                        <p className="my-auto">Already signed up?</p>
                        <a href="/login" className="my-auto text-green-dark">Login</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
