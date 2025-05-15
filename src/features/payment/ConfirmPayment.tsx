import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { confirmPayment } from './paymentSlice';
import { Paper, Typography, Box, TextField, Button, Alert } from '@mui/material';

const ConfirmPayment = () => {
  const dispatch = useAppDispatch();
  const { status, message } = useAppSelector((state) => state.payment);

  const [form, setForm] = useState({
    sessionId: '',
    token: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(confirmPayment({ sessionId: Number(form.sessionId), token: form.token }));
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: 'auto', mt: 6 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Confirmar Pago
      </Typography>
      <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
        <TextField
          label="Session ID"
          name="sessionId"
          value={form.sessionId}
          onChange={handleChange}
          variant="outlined"
          required
        />
        <TextField
          label="Token"
          name="token"
          value={form.token}
          onChange={handleChange}
          variant="outlined"
          required
        />
        <Button type="submit" variant="contained" color="primary" disabled={status === 'loading'}>
          {status === 'loading' ? 'Confirmando...' : 'Confirmar'}
        </Button>
      </Box>
      {message && (
        <Alert severity={status === 'succeeded' ? 'success' : 'error'} sx={{ mt: 2 }}>
          {message}
        </Alert>
      )}
    </Paper>
  );
};

export default ConfirmPayment;
