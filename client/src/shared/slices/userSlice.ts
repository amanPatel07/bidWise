import type { IUser } from '@auction/shared';
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface UserStore {
    user: IUser
}

const initialState: UserStore = {
    user: {
        id: '',
        name: '',
        email: '',
        contactNumber: '',
        profileImage: '',
        role: '', status: '',
        createdAt: new Date(),
        updatedAt: new Date(),
        lastLoginAt: new Date(),
        failedLoginAttempts: 0,
        Auction: [],
        Bid: []
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
        }
    }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;