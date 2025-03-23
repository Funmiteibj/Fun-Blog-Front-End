import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

const ContactUs = () => {
  // create form field state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [processing, setProcessing] = useState(false);

  // clear form field
  const clear = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  }

  // handle submit form data
  const handleSubmit = async (e) => {
    setProcessing(true);
    e.preventDefault();

    const contactData = { name, email, phone, message };

    try {
        const url = "https://fun-blog-backend.onrender.com/contacts/api/contact";
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contactData),
        });

        const data = await response.json();
        console.log(data);

        if (data && data.message === "Message sent successfully") {
            clear();
        }
    } catch (error) {
        console.error("Error submitting contact:", error.message);
    } finally {
        setProcessing(false);
    }
};

  return (
    <div className="container">
      <h1 className="my-3 text-primary">Contact Us</h1>

      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Contact Us</Form.Label>
            <Form.Control
              type="text" placeholder="Enter  name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email" placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="phone">
            <Form.Label>phone</Form.Label>
            <Form.Control
              type="tel" placeholder="Enter phone no"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="message">
            <Form.Label> message</Form.Label>
            <Form.Control
              as="textarea"
              rows={9}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>

          {processing ? (<Spinner animation="border" variant="primary" />) : (<Button variant="primary" type="submit">
            Submit
          </Button>)}


        </Form>
      </div>
    </div>
  )
}


export default ContactUs