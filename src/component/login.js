import React from 'react'

const Login = () => {
    return (
        <div class="container login-page">
        <div class="row">
        <div class="col-md-6">
            <div class="card">
                <form class="box">
                    <h1>Login</h1>
                    <p class="text-muted"> Please enter your login and password!</p> 
                    <input type="text" name="" placeholder="Username" /> 
                    <input type="password" name="" placeholder="Password" /> 
                    <a className='submit' name="" value="Login" href="/" >SUBMIT</a>
                    <div class="col-md-12">
                        <p class="text-muted"> New here? Sign Up</p> 
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
