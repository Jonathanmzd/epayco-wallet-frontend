import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../app/axios';
import { RegisterClientPayload } from './types';

interface ClientState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  message: string;
}

const initialState: ClientState = {
  status: 'idle',
  message: '',
};

export const registerClient = createAsyncThunk(
  'client/register',
  async (payload: RegisterClientPayload, { rejectWithValue }) => {
    try {
      const response = await api.post('/client/register', payload);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Registration failed');
    }
  }
);

const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerClient.pending, (state) => {
        state.status = 'loading';
        state.message = '';
      })
      .addCase(registerClient.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.message = action.payload.message || 'Registered successfully';
      })
      .addCase(registerClient.rejected, (state, action) => {
        state.status = 'failed';
        state.message = action.payload as string;
      });
  },
});

export default clientSlice.reducer;
