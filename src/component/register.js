import React from 'react'

const Register = () => {
    return (
        <div class="container login-page">
        <div class="row">
        <div class="col-md-6">
            <div class="card">
                <form class="box">
                    <h1>Sign Up</h1>
                    <input type="text" name="" placeholder="Full Name" />
                    <input type="text" name="" placeholder="Username" /> 
                    <input type="password" name="" placeholder="Password" /> 
                    <a className='submit' name="" value="Login" href="/" >SUBMIT</a>
                    <div class="col-md-12">
                        <p class="text-muted">Log In?</p> 
                        <a className='submit btn btn-success' href="/login" >Login</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
    )
}

export default Register
