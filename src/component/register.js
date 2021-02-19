import React from 'react'

const Register = () => {
    return (
        <div className="container login-page">
        <div className="row">
        <div className="col-md-6">
            <div className="card">
                <form className="box">
                    <h1>Sign Up</h1>
                    <input type="text" name="" placeholder="Full Name" />
                    <input type="text" name="" placeholder="Username" /> 
                    <input type="password" name="" placeholder="Password" /> 
                    <a className='submit' name="" value="Login" href="/" >SUBMIT</a>
                    <div className="col-md-12">
                        <p className="text-muted">Log In?</p> 
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
