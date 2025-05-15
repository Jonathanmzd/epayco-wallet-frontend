import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Paper, Typography, List, ListItem, ListItemText, Box, Alert, CircularProgress } from '@mui/material';
import { useEffect } from 'react';
import { getClients } from './clientSlice';

const ClientDetail = () => {
  const { id } = useParams();
  const clientId = Number(id);
  const dispatch = useAppDispatch();
  const { clients, status } = useAppSelector((state) => state.client);

  // If there are no clients, fetch them from the API
  useEffect(() => {
    if (clients.length === 0 && status !== 'loading') {
      dispatch(getClients());
    }
  }, [clients.length, status, dispatch]);

  // Show loader while fetching data
  if (status === 'loading') {
    return (
      <Box mt={4} display="flex" justifyContent="center">
        <CircularProgress />
      </Box>
    );
  }

  // Find the client by ID from the URL
  const client = clients.find((c) => c.id === clientId);

  // If client is not found, show an error message
  if (!client) {
    return (
      <Box mt={4}>
        <Alert severity="error">Cliente no encontrado.</Alert>
      </Box>
    );
  }

  // Render client details
  return (
    <Paper elevation={3} sx={{ p: 2, m: 2, minWidth: 350, mt: 12, mx: 'auto', maxWidth: 500 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Detalle del Cliente
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="ID" secondary={client.id} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Documento" secondary={client.document} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Nombre" secondary={client.name} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Email" secondary={client.email} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Celular" secondary={client.phone} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Saldo" secondary={`${client.balance}`} />
        </ListItem>
      </List>
    </Paper>
  );
};

export default ClientDetail;
