import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';


const AddPost = () => {
    // create form field state
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [tags, setTags] = useState("");
    const [content, setContent] = useState("");
    const [processing, setProcessing] = useState(false);

    // clear form field
    const clear = () => {
        setTitle("");
        setCategory("");
        setContent("");
        setTags("");
    }

    // handle submit form data
    const handleSubmit = async (e) => {
        setProcessing(true);
        e.preventDefault();

        const postData = {
            title,
            category,
            tags,
            content
        };


        // console.log(postData);
        // send data to backend server

        try {
            const url = "http://localhost:5000/posts/api/create-post";

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(postData),
            });

            const data = response.json();
            console.log(data)

            // clear function
            if (data) {
                setProcessing(false);
                clear();
            }


        } catch (error) {
            setProcessing(false);
            console.log(error.message);
        }


    }

    return (
        <div className="container">
            <h1 className="my-3 text-primary">Add New Post</h1>

            <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Post Title</Form.Label>
                        <Form.Control
                            type="text" placeholder="Enter post title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="category">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            type="text" placeholder="Enter post category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="tags">
                        <Form.Label>Tags</Form.Label>
                        <Form.Control
                            type="text" placeholder="Enter post tags"
                            value={tags}
                            onChange={(e) => setTags(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="content">
                        <Form.Label>Post Content</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={9}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </Form.Group>

                    {processing ? (<Spinner animation="border" variant="primary" />) : ( <Button variant="primary" type="submit">
                        Submit
                    </Button>)}

                   
                </Form>
            </div>
        </div>
    )
}

export default AddPost