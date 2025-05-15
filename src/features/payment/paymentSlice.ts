import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../app/axios';
import { InitiatePaymentPayload, PaymentState } from './types';

export const initiatePayment = createAsyncThunk(
  'payment/initiate',
  async (payload: InitiatePaymentPayload, { rejectWithValue }) => {
    try {
      const response = await api.post('/payment/initiate', payload);
      return response.data; // wait { message, sessionId }
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Payment failed');
    }
  }
);

const initialState: PaymentState = {
  sessionId: null,
  message: '',
  status: 'idle',
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initiatePayment.pending, (state) => {
        state.status = 'loading';
        state.message = '';
        state.sessionId = null;
      })
      .addCase(initiatePayment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.message = action.payload.message;
        state.sessionId = action.payload.sessionId;
      })
      .addCase(initiatePayment.rejected, (state, action) => {
        state.status = 'failed';
        state.message = action.payload as string;
      });
  },
});

export default paymentSlice.reducer;
