import React, { useContext, useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { Logincontext } from '../../components/Context/ContextProvider'
import { useStateValue } from '../../stateProvider'

const Login = () => {
    let name, value;
    let navigate = useNavigate();
    const { account, setAccount } = useContext(Logincontext)
    const [passwordAlert, setPasswordAlert] = useState(false)
    const [wrongPassword, setWrongPassword] = useState(false)
    const [user, setUser] = useState({
        email: "", password: ""
    })
    const [{ }, dispatch] = useStateValue()

    const handleInputs = (e) => {
        console.log(e.target.name)
        // if (e.target.name === 'password') {
        //     if (e.target.value < 6) {
        //         setPasswordAlert(true)
        //     } else {
        //         name = e.target.name;
        //         value = e.target.value;
        //         setUser({ ...user, [name]: value })
        //     }
        // } else {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
        // }

        console.log(user)
    }

    const postData = async (e) => {
        e.preventDefault();
        const { email, password } = user;
        const res = await fetch("/authenticate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        })
        const data = await res.json();
        console.log(data)
        if (res.status === 400 || !data) {
            setWrongPassword(true)

        } else {
            dispatch({
                type: "SET_USER",
                user: data
            })
            localStorage.setItem('user', JSON.stringify(data))
            window.alert('login successful')
            console.log(account);
            navigate('/')
        }
    }
    return (
        <>
            <div className="login">
                {wrongPassword && <h5 style={{ color: "red", marginTop: "15px" }}>Incorrect Password</h5>}
                <Link to='/'>
                    <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" className='login-logo' />

                </Link>
                <div className="login-container">
                    <h1>Sign in</h1>
                    <form action="">
                        <h5>Email</h5>
                        <input type="text"
                            name="email"
                            value={user.email}
                            onChange={handleInputs} required />
                        <h5>Password</h5>
                        <input type="password"
                            name="password"
                            value={user.password}
                            onChange={handleInputs} required />
                        {passwordAlert && <h5><b>password must be 6 or more character long</b></h5>}
                        <button type="submit" className='login-signin' onClick={postData}>
                            SignIn
                        </button>
                    </form>
                    <p>By continuing, you agree to Amazon's conditions of Use and Privacy Notice.</p>
                </div>
                <p>New to Amazon ?</p>
                <button className='login-register' onClick={() => { navigate('/register') }}>Create Your Account</button>
            </div>
        </>
    )
}

export default Login
