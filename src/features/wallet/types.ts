// Payload to recharge the wallet
export interface RechargePayload {
  document: string;
  phone: string;
  amount: number;
}

// Payload to check the balance
export interface CheckBalancePayload {
  document: string;
  phone: string;
}

// Redux slice state shape
export interface WalletState {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  message: string;
  balance: number | null;
}