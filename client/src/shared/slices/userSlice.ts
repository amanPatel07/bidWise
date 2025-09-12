import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserInfo } from "../models/user.model";

interface UserStore {
    user: UserInfo
}

const initialState: UserStore = {
    user: {
        id: '',
        name: '',
        email: '',
        contactNumber: '',
        profileImage: '',
        role: '',
        status: '',
        createdAt: '',
        updatedAt: '',
        lastLoginAt: '',
        failedLoginAttempts: 0,
        Auction: [],
        Bid: []
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserInfo>) => {
            state.user = action.payload
        }
    }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;