let initialState = [
    {
        id: "1",
        name: "Olga",
        phone: "11111",
        mail: "olga@mail",
        favorites: true
    },
    {
        id: "2",
        name: "Ivan",
        phone: "22222",
        mail: "ivan@mail",
        favorites: false
    }
];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CONTACT': {
            return [...state, action.payload];
        }
        case 'MAKE_CONTACT_FAVORITE':
            let newContacts = state.map(contact => {
                if (contact.id === action.payload) return { ...contact, favorites: true }
                else return contact
            })
            return newContacts
        case 'CHANGE_CONTACT':
            let newState = state.map(contact => {
                if (contact.id === action.payload.id) return action.payload
                else return contact
            })
            return newState

        default: return state;
    }
}

export default reducer;