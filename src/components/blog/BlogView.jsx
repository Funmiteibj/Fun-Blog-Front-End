import React from 'react'
import PostList from './PostList'
import {Link} from "react-router-dom"


const BlogView = () => {
  return (
    <div className='container mt-5'>
        <h1 className='text-primary'>
            Welcome to our Blog Page
        </h1>
        <Link to="/add-post" as={Link}>Add New Post</Link>
        <PostList/>

    </div>
  )
}

export default BlogView