const initialState = [
    {
        id: 0,
        name: "Prakriti",
        number: 1234567890,
        email: "ps@g.com",
    },
    {
        id: 1,
        name: "Mrigank",
        number: 2134567890,
        email: "ms@g.com",
    }
];

const contactReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_CONTACT":
            state = [...state, action.payload];
            return state;
        case "UPDATE_CONTACT":
            const updateState = state.map(contact=>contact.id===action.payload.id ? action.payload : contact);
            state = updateState;
            return state;
        case "DELETE_CONTACT":
            const filteredContacts = state.filter(contact=>contact.id !== action.payload);
            state = filteredContacts;
            return state;
        default:
            return state;
    }
};

export default contactReducer;
