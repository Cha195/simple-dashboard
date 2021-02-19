import React from 'react'

const Login = () => {
    return (
        <div className="container login-page">
        <div className="row">
        <div className="col-md-6">
            <div className="card">
                <form className="box">
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
        </div>
    </div>
</div>
    )
}

export default Login
