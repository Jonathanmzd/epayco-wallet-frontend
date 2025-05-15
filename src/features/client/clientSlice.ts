import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../app/axios';
import {
  ClientState,
  RegisterClientPayload,
} from './types';

// register client
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

// get list of clients
export const getClients = createAsyncThunk(
  'client/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/client/all');
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Failed to fetch clients');
    }
  }
);

// Initial state
const initialState: ClientState = {
  clients: [],
  status: 'idle',
  message: '',
};

// clientSlice
const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // registerClient
    builder
      .addCase(registerClient.pending, (state) => {
        state.status = 'loading';
        state.message = '';
      })
      .addCase(registerClient.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.message = action.payload.message;
      })
      .addCase(registerClient.rejected, (state, action) => {
        state.status = 'failed';
        state.message = action.payload as string;
      });

    // getClients
    builder
      .addCase(getClients.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getClients.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.clients = action.payload.data;
      })
      .addCase(getClients.rejected, (state, action) => {
        state.status = 'failed';
        state.message = action.payload as string;
      });
  },
});

export default clientSlice.reducer;
