import { useState, useEffect } from "react";
import ContactCard from "./ContactCard";
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from "react-router-dom";


const ContactList = () => {
    const style = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "16px"
    }
    // create a component state for data
    const [contactData, setContactData] = useState([]);
    const [loading, setLoading] = useState(false);

    // write a fetch function
    const fetchContact = async () => {
        setLoading(true);
        try {
            const url = "https://fun-blog-backend.onrender.com/contacts/api/contacts";
            const result = await fetch(url);
            const data = await result.json();
    
            if (data && data.data) {
                setContactData(data.data);
            } else {
                console.error("Unexpected API response:", data);
            }
        } catch (error) {
            console.error("Error fetching contacts:", error.message);
        } finally {
            setLoading(false); // Ensure loading state resets
        }
    };
    
    // call the fetch func inside useEffect
    useEffect(() => {
        fetchContact();
    }, []);

    // create an instance of use Navigate
    const navigate = useNavigate();

    const handleOpenContact = (contactId) => {
        //alert(`id ${postId}`)
        navigate(`/contact/${contactId}`)
    }

    return (
        <div className="container mt-5">
            <h1 className="my-3 text-primary">Our Contact List</h1>
            {loading ? (<Spinner animation="border" variant="primary" />) : (<div style={style}>
                {contactData.map((item) => (
                    <ContactCard contactObj={item} func={() => { handleOpenContact(item._id) }} />
                ))}
            </div>)}
        </div>
    )
}


export default ContactList