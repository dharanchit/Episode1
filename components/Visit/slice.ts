import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { UserInformation } from './types';

const initialState:any = {
    email: '',
    token: '',
}

export const visitSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<UserInformation>) => {
            state.email = action.payload.email
            state.token = action.payload.token
        }
    }
});

export const { login } = visitSlice.actions
export default visitSlice.reducer

