export interface Client {
  id: number;
  document: string;
  name: string;
  email: string;
  phone: string;
}

export interface ClientState {
  clients: Client[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  message: string;
}

export interface RegisterClientPayload {
  document: string;
  name: string;
  email: string;
  phone: string;
}
