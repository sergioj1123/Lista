import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contact from "../../models/contact";

type ContactState = {
    items: Contact[]
}

const initialState: ContactState = {
    items: [{
        id: 1,
        name: "joao",
        email: "joao@gmail.com",
        phone: "(99)9999-9999"
    },
    {
        id: 2,
        name: "maria",
        email: "maria@gmail.com",
        phone: "(99)9999-9999"
    },
    {
        id: 3,
        name: "pedro",
        email: "pedro@gmail.com",
        phone: "(99)9999-9999"
    },
    {
        id: 4,
        name: "lucas",
        email: "lucas@gmail.com",
        phone: "(99)9999-9999"
    },
    {
        id: 5,
        name: "teste",
        email: "teste@gmail.com",
        phone: "(99)9999-9999"
    },
    {
        id: 6,
        name: "marcos",
        email: "marcos@gmail.com",
        phone: "(99)9999-9999"
    },
    {
        id: 7,
        name: "sergio",
        email: "sergio@gmail.com",
        phone: "(99)9999-9999"
    }
]}

const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(contact => contact.id !== action.payload)
        }
    }
})

export const { remove } = contactSlice.actions

export default contactSlice.reducer