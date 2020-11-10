import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, makeContactFavorite } from '../redux/actions';


function Home() {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state);

    const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)

    const contactList = showFavoritesOnly ? contacts.filter(item => item.favorites === true) : contacts

    const btnAddtoFav = (id) => {
        dispatch(makeContactFavorite(id))
    }

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
            <p>show favorites only<input type="checkbox" onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}></input></p>
            <ul>
                {contactList.map(contact => (
                    <li key={contact.id}>
                        <span>Name: {contact.name} | </span>
                        <span>Phone: {contact.phone} | </span>
                        <span>Mail: {contact.mail} | </span>
                        <button><Link to={`/contact/:${contact.id}`}>Edit</Link></button>
                        {(contact.favorites === false) ? <input onClick={() => btnAddtoFav(contact.id)} type="button" value="Add to favorites" /> : "favorite contact"}
                    </li>
                ))}
            </ul >
            <input onClick={btnAddNewContact} type="button" value="Add new contact" />
        </>
    );
}

export default Home;