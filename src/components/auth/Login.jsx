import React from 'react'

const Login = ({setIsLogin, setUsername}) => {
    return (
        <div className='container'>
            <h1 className='text-primary'>Login</h1>
            <input type="text" placeholder='Enter username'/>

            <button>Login</button>


        </div>
    )
}

export default Login