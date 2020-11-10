import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { makeContactFavorite } from '../../redux/actions'

function Contact(props) {
    const dispatch = useDispatch()

    const { name, phone, mail, favorites, id } = props.contact

    const btnAddtoFav = (id) => {
        dispatch(makeContactFavorite(id))
    }

    return (
        <li>
            <span>{name}</span>
            <span>{phone}</span>
            <span>{mail}</span>
            <Link to={`/contact/:${id}`}><input type="button" value="Edit" /></Link>
            {(favorites === false) ? <Link to={'/'}><input className="fav1" onClick={() => btnAddtoFav(id)} type="button" value="Add to Favorites" /></Link> : <span className="fav2">Favorite Contact</span>}
        </li>
    );
}

export default Contact;