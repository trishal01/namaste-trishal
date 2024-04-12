import { createSlice , current} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart', // name of reducer
    initialState: {
        items: [] // initial state of cart reducer
    },
    reducers: { // To write reducer function correspond to each action dispatched
        // action like add an item, remove an item
        addItem: (state, action) => { // reducer function has access to store and action

            // Vanilla Redux Says - Don't mutate state and return was mandatory 
            // but new version of redux and toolkit allows mutating and retuning is not mandatory(Toolkit uses IMMER )
            // mutating (modifying) the state here
            state.items.push(action.payload); // whatever we pass will come in action.paylaod
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0; // []
            console.log(current(state)) // current() makes proxy object, can't read
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;