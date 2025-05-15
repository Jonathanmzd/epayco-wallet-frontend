import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../app/axios';
import { ConfirmPaymentPayload, InitiatePaymentPayload, PaymentState } from './types';

// Initiate payment
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

// Confirm payment
export const confirmPayment = createAsyncThunk(
  'payment/confirm',
  async (payload: ConfirmPaymentPayload, { rejectWithValue }) => {
    try {
      const response = await api.post('/payment/confirm', payload);
      return response.data; // { message }
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Confirmation failed');
    }
  }
);

const initialState: PaymentState = {
  sessionId: null,
  message: '',
  status: 'idle',
};

// paymentSlice
const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  // reducers
  reducers: {
    clearPayment: (state) => {
      state.sessionId = null;
      state.message = '';
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    // initiatePayment
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
    // confirmPayment
    builder
      .addCase(confirmPayment.pending, (state) => {
        state.status = 'loading';
        state.message = '';
      })
      .addCase(confirmPayment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.message = action.payload.message;
      })
      .addCase(confirmPayment.rejected, (state, action) => {
        state.status = 'failed';
        state.message = action.payload as string;
      });
  },
});

export const { clearPayment } = paymentSlice.actions;
export default paymentSlice.reducer;
