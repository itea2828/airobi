import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    face: null,
}

export const persSlice = createSlice({
    name: 'pers',
    initialState,
    reducers: {
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        },
        setFace: (state, action) => {
            state.face = action.payload;
        }
    },
});

export const { 
    

    setIsAuthenticated,
    setFace,



} = persSlice.actions;

// selectors 


export const selectIsAuthenticated = (state) => state.pers.isAuthenticated;
export const selectFace = (state) => state.pers.face;

export default persSlice.reducer;

