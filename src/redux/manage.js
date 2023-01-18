import { createSlice } from '@reduxjs/toolkit';

const manageSlicer = createSlice({
    name: "manager",
    initialState: {
        items: [],
        ids: [],
        subTotal: 0
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
            state.ids.push(action.payload.id)
            console.log(state.items)
            state.subTotal += (action.payload.price * action.payload.quantity)
        },   
        increaseQuantity: (state, action) => {
            state.items[action.payload].quantity += 1
            state.subTotal += state.items[action.payload].price
        },
        decreaseQuantity: (state, action) => {
            state.items[action.payload].quantity -= 1
            state.subTotal -= state.items[action.payload].price
        },

    }
});

export const { addItem, increaseQuantity, decreaseQuantity } = manageSlicer.actions
export default manageSlicer.reducer;