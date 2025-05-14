import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';
import { useAppDispatch } from '../../app/hooks';
import { registerClient } from './clientSlice';

export const ClientForm = () => {
  const dispatch = useAppDispatch();
  const [form, setForm] = useState({
    document: '',
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(registerClient(form));
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: 'auto', mt: 6 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Registro de Cliente
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
          label="Nombre"
          name="name"
          value={form.name}
          onChange={handleChange}
          variant="outlined"
          required
        />
        <TextField
          label="Correo electrónico"
          name="email"
          value={form.email}
          onChange={handleChange}
          variant="outlined"
          type="email"
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
        <Button type="submit" variant="contained" color="primary">
          Registrar
        </Button>
      </Box>
    </Paper>
  );
};
