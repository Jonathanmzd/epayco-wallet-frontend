import { configureStore } from '@reduxjs/toolkit';
import clientReducer from '../features/client/clientSlice';
import walletRechargeReducer from '../features/wallet/walletRechargeSlice';
import walletBalanceReducer from '../features/wallet/walletBalanceSlice';

export const store = configureStore({
  reducer: {
    client: clientReducer,
    walletRecharge: walletRechargeReducer,
    walletBalance: walletBalanceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;