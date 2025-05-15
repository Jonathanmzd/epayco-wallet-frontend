export interface InitiatePaymentPayload {
  document: string;
  phone: string;
  amount: number;
}

export interface PaymentState {
  sessionId: number | null;
  message: string;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}