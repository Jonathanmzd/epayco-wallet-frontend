import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { initiatePayment } from './paymentSlice';
import { Paper, Typography, Box, TextField, Button, Alert } from '@mui/material';

const InitiatePayment = () => {
   const dispatch = useAppDispatch();
   const { status, message, sessionId } = useAppSelector((state) => state.payment);

   const [form, setForm] = useState({
      document: '',
      phone: '',
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
      dispatch(initiatePayment(form));
   };

   return (
      <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: 'auto', mt: 6 }}>
         <Typography variant="h5" component="h2" gutterBottom>
            Iniciar Pago
         </Typography>
         {sessionId && (
            <Alert severity="info" sx={{ mt: 2 }}>
               Session ID: {sessionId}
            </Alert>
         )}
          <Box
            component="form"
            onSubmit={handleSubmit}
            display="flex"
            flexDirection="column"
            gap={2}
            sx={{ mt: 3 }}
          >
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
            <Button type="submit" variant="contained" color="primary" disabled={status === 'loading'}>
               {status === 'loading' ? 'Procesando...' : 'Pagar'}
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

export default InitiatePayment;
