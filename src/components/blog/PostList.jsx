
import { useState, useEffect } from "react";
import PostCard from "./PostCard";
import Spinner from 'react-bootstrap/Spinner';

const PostList = () => {
    // create a component state for data
    const [postData, setPostData] = useState([]);
    const [loading, setLoading] = useState(false);

    // write a fetch function
    const fetchPost = async () => {
        setLoading(true);
        try {
            const url = "http://localhost:5000/posts/api/fetch-all"

            const result = await fetch(url);
            const data = await result.json();
            setPostData(data.data);
            setLoading(false);
        } catch (error) {
          console.log(error.message);  
        }
    }
    // call the fetch func inside useEffect
    useEffect(() => {
        fetchPost();
    }, [])
  return (
    <div className="container mt-5">
        <h1 className="my-3 text-primary">Our Blogs List</h1>

        {loading ? (<Spinner animation="border" variant="primary" />) : (<div>
            {postData.map((item) => (
                <PostCard postObj={item}/>
            ))}
        </div>)}
    </div>
  )
}

export default PostList