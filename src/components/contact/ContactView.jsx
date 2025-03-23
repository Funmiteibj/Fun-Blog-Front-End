import React from 'react'
import { Link } from "react-router-dom"
import ContactList from './ContactList'


const ContactView = () => {
    return (
        <div className='container mt-5'>
            <h1 className='text-primary'>
                Please fill in your Contact Informations        </h1>
            <Link to="/contact">Contact Us</Link>
            <ContactList />

        </div>
    )
}

export default ContactView