import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../app/axios';
import { RechargePayload } from './types';

export const rechargeWallet = createAsyncThunk(
  'wallet/recharge',
  async (payload: RechargePayload, { rejectWithValue }) => {
    try {
      const response = await api.post('/wallet/recharge', payload);
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Recharge failed');
    }
  }
);

const walletRechargeReducer = createSlice({
  name: 'wallet',
  initialState: {
    status: 'idle',
    message: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(rechargeWallet.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(rechargeWallet.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.message = action.payload.message;
      })
      .addCase(rechargeWallet.rejected, (state, action) => {
        state.status = 'failed';
        state.message = action.payload as string;
      });
  },
});

export default walletRechargeReducer.reducer;
