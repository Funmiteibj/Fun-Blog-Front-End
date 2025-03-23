
import { useState, useEffect } from "react";
import PostCard from "./PostCard";
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from "react-router-dom";

const PostList = () => {
    const style ={
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "16px"
    }
    // create a component state for data
    const [postData, setPostData] = useState([]);
    const [loading, setLoading] = useState(false);

    // write a fetch function
    const fetchPost = async () => {
        setLoading(true);
        try {
            const url = "https://fun-blog-backend.onrender.com/posts/api/fetch-all"

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
    }, []);

    // create an instance of use Navigate
    const navigate = useNavigate();      

    const handleOpenPost=(postId) => {
        //alert(`id ${postId}`)
        navigate(`/post/${postId}`)
    }

  return (
    <div className="container mt-5">
        <h1 className="my-3 text-primary">Our Blogs List</h1>
        {loading ? (<Spinner animation="border" variant="primary" />) : (<div style={style}>
            {postData.map((item) => (
                <PostCard  postObj={item} func={() => {handleOpenPost(item._id)}}/>
            ))}
        </div>)}
    </div>
  )
}

export default PostList