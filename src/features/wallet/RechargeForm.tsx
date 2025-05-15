import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Paper, Typography, Box, TextField, Button, Alert } from '@mui/material';
import { rechargeWallet } from './walletRechargeSlice';
import { useLocation } from 'react-router-dom';

export const RechargeForm = () => {
  const dispatch = useAppDispatch();
  const { status, message } = useAppSelector((state) => state.walletRecharge);

  const location = useLocation();
  const initialData = location.state || {};

  const [form, setForm] = useState({
    document: initialData.document || '',
    phone: initialData.phone || '',
    amount: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === 'amount' ? Number(value) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(rechargeWallet(form));
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: 'auto', mt: 6 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Recargar Billetera
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        display="flex"
        flexDirection="column"
        gap={2}
      >
        <TextField
          label="Documento"
          name="document"
          value={form.document}
          onChange={handleChange}
          variant="outlined"
          required
          disabled
        />
        <TextField
          label="Teléfono"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          variant="outlined"
          required
          disabled
        />
        <TextField
          label="Monto"
          name="amount"
          type="number"
          value={form.amount}
          onChange={handleChange}
          variant="outlined"
          required
          inputProps={{ min: 0 }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Recargando...' : 'Recargar'}
        </Button>
      </Box>
      {message && (
        <Alert
          severity={status === 'succeeded' ? 'success' : 'error'}
          sx={{ mt: 2 }}
        >
          {message}
        </Alert>
      )}
    </Paper>
  );
};

export default RechargeForm;
