import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { checkBalance } from './walletBalanceSlice';
import { Paper, Typography, Box, TextField, Button, Alert } from '@mui/material';

const BalanceChecker = () => {
  const dispatch = useAppDispatch();
  const { balance, status, message } = useAppSelector((state) => state.walletBalance);

  const [form, setForm] = useState({
    document: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(checkBalance(form));
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: 'auto', mt: 6 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Consultar Saldo
      </Typography>
      <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={2}>
        <TextField
          label="Documento"
          name="document"
          value={form.document}
          onChange={handleChange}
          variant="outlined"
          required
        />
        <TextField
          label="Teléfono"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          variant="outlined"
          required
        />
        <Button type="submit" variant="contained" color="primary" disabled={status === 'loading'}>
          {status === 'loading' ? 'Consultando...' : 'Consultar'}
        </Button>
      </Box>
      {balance !== null && (
        <Alert severity="info" sx={{ mt: 2 }}>
          💰 Saldo: ${balance}
        </Alert>
      )}
      {message && (
        <Alert severity={status === 'succeeded' ? 'success' : 'error'} sx={{ mt: 2 }}>
          {message}
        </Alert>
      )}
    </Paper>
  );
};

export default BalanceChecker;
