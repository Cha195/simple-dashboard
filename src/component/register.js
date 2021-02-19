import React from 'react'

const Register = () => {
    return (
        <div className="box">
            <form style={{ padding: '5% 10%', background: '#000'}}>
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
    )
}

export default Register
