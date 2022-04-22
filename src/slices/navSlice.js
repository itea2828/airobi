import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    pid: null,

    
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {

        setPid: (state, action) => {
            state.pid = action.payload;
        },
    },
});

export const { 

    setPid,

} = navSlice.actions;

// selectors 

export const selectPid = (state) => state.nav.pid;


export default navSlice.reducer;
 
