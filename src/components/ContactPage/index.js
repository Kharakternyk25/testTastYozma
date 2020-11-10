import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changeContact } from '../../redux/actions'

function ContactPage(props) {
    const dispatch = useDispatch()
    const contacts = useSelector(state => state)
    const contactId = props.match.params.id.slice(1)
    let currentContact = contacts.find(contact => (contact.id === contactId))
    const [contact, setContact] = useState(currentContact)

    const btnSave = () => {
        dispatch(changeContact(contact))
        alert("saved")
    }

    return (
        <>
            <h1>Contact change page</h1>
            <p>Name: <input type="text" value={contact.name} onChange={e => setContact({ ...contact, "name": e.target.value })} /></p>
            <p>Phone: <input type="text" value={contact.phone} onChange={e => setContact({ ...contact, "phone": e.target.value })} /></p>
            <p>Mail: <input type="text" value={contact.mail} onChange={e => setContact({ ...contact, "mail": e.target.value })} /></p>
            <Link to='/'><input type="button" value="Back" /></Link>
            <input type="button" value="Save" onClick={btnSave} />
        </>
    );
}

export default ContactPage