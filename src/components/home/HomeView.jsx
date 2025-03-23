import React from 'react'
import Login from '../auth/Login'

const HomeView = ({isLogin, setIsLogin, setUsername}) => {
  return (

    <>

    {isLogin ? (<div className='container mt-5'>
        <h1 className='text-primary'>
            Welcome to Home Page
        </h1>

        

    </div>): <Login/>}
    
    </>
    
  )
}

export default HomeView