import { createSlice } from "@reduxjs/toolkit"

const initialAuthenticationState = {
    isAuthentication: false
}

const authSlice = createSlice({
    name: "Authentication",
    initialState: initialAuthenticationState,
    reducers: {
        Login(state) {
            state.isAuthentication = true
        },
        Logout(state) {
            state.isAuthentication = false
        }
    }

})

export const authenticationActions = authSlice.actions;
export default authSlice.reducer
