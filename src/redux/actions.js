export function addContact(contact) {
    return {
        type: 'ADD_CONTACT',
        payload: contact
    }
}

export function makeContactFavorite(id) {
    return {
        type: 'MAKE_CONTACT_FAVORITE',
        payload: id
    }
}

export function changeContact(contact) {
    return {
        type: 'CHANGE_CONTACT',
        payload: contact
    }
}