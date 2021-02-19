import React from 'react'

const Login = () => {
    return (
        <div className="box">
            <form style={{ padding: '5% 10%', background: '#000'}}>
                <h1>Login</h1>
                <p className="text-muted"> Please enter your login and password!</p> 
                <input type="text" name="" placeholder="Username" /> 
                <input type="password" name="" placeholder="Password" /> 
                <a className='submit' name="" value="Login" href="/" >SUBMIT</a>
                <div className="col-md-12">
                    <p className="text-muted"> New here? Sign Up</p> 
                    <a className='submit btn btn-success' href="/register" >Sign Up</a>
                </div>
            </form>
        </div>
    )
}

export default Login
