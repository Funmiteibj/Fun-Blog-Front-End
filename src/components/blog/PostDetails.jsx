import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from "react-router-dom";


const PostDetails = () => {
    // write a fetch function
    // create a component state for data
    const { id } = useParams();

    const [postObject, setPostObject] = useState({});
    const [loading, setLoading] = useState(false);

    const fetchsinglePost = async () => {
        setLoading(true);
        try {
            const url = `https://fun-blog-backend.onrender.com/posts/api/post/${id}`

            const result = await fetch(url);
            const data = await result.json();
            // console.log(data);
            setPostObject(data.data);
            setLoading(false);
        } catch (error) {
            console.log(error.message);
            setLoading(false);
        }
    }
    // call the fetch func inside useEffect
    useEffect(() => {
        fetchsinglePost();
    }, []);


    return (
        <div className="container mt-5">
            {loading && (<Spinner animation="border" variant="primary" />)}
            <h1 className="text-primary">{postObject.title}</h1>
            <h2>{postObject.category}</h2>
            <p>{postObject.content}</p>
            <Link to="/blog">Go Back</Link>
        </div>
    )
}

export default PostDetails