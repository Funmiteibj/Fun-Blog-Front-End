import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='container mt-5'>
        <h1 className='text-danger'>
            404 page not found
        </h1>
        <Link to="/">Go back home</Link>
    </div>
  )
}

export default PageNotFound