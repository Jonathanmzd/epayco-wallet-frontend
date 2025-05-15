import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../app/axios';
import { CheckBalancePayload } from './types';

export const checkBalance = createAsyncThunk(
  'wallet/checkBalance',
  async (payload: CheckBalancePayload, { rejectWithValue }) => {
    try {
      const res = await api.post('/wallet/balance', payload);
      return res.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Balance check failed');
    }
  }
);

const walletBalanceSlice = createSlice({
  name: 'walletBalance',
  initialState: {
    status: 'idle',
    message: '',
    balance: null as number | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkBalance.pending, (state) => {
        state.status = 'loading';
        state.message = '';
        state.balance = null;
      })
      .addCase(checkBalance.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.balance = action.payload.balance;
        state.message = 'Balance retrieved successfully';
      })
      .addCase(checkBalance.rejected, (state, action) => {
        state.status = 'failed';
        state.message = action.payload as string;
        state.balance = null;
      });
  },
});

export default walletBalanceSlice.reducer;