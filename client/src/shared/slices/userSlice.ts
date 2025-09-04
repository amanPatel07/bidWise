import { createSlice } from "@reduxjs/toolkit";
import type { IUser } from '@auction/shared';

const initialState = {
    // id: '',
    // name: '',
    // email: '',
    // contactNumber: '',
    // profileImage: '',
    // role: '', status: '',
    // createdAt: new Date(),
    // updatedAt: new Date(),
    // lastLoginAt: new Date(),
    // failedLoginAttempts: 0,
    // Auction: [],
    // Bid: []
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {}
});

export const { } = userSlice.actions;
export default userSlice.reducer;