import React, { useState } from 'react'
import "./Login.css"
import { Link, useHistory } from "react-router-dom"
import { auth } from 'firebase';



function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img
                className="login-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                alt=""
                />
            </Link>

            <div className="login-container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input  type="email" />
                    <h5>Password</h5>
                    <input  type="password" />
                    <button type="submit" className="login-signinbutton">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice. 

                </p>
                <button className="login-registerbutton">Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
