import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addContact } from '../../redux/actions'
import Contact from './Contact.js'

function ContactListPage() {
    const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)
    const dispatch = useDispatch()
    const contacts = useSelector(state => state)
    const contactList = showFavoritesOnly ? contacts.filter(item => item.favorites === true) : contacts

    const btnAddNewContact = () => {
        dispatch(addContact({
            id: Date.now().toString(),
            name: "New contact",
            phone: "",
            mail: "",
            favorites: false
        }))
    }

    return (
        <>
            <h1>Contact List</h1>
            <ul>
                <li>
                    <span>Name:</span>
                    <span>Phone:</span>
                    <span>Mail:</span>
                    <span className="w400">Show Favorites Only<input type="checkbox" onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}></input></span>
                </li>
                {contactList.map(contact => (
                    <Contact key={contact.id} contact={contact} />
                ))}
            </ul >
            <input onClick={btnAddNewContact} type="button" value="Add new Contact" />
        </>
    );
}

export default ContactListPage