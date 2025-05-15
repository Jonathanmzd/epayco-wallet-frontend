import { useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getClients } from './clientSlice';

const ClientList = () => {
  const dispatch = useAppDispatch();
  const { clients, status } = useAppSelector((state) => state.client);

  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'document', headerName: 'Documento', width: 130 },
    { field: 'name', headerName: 'Nombres', width: 300 },
    { field: 'email', headerName: 'Email', width: 300 },
    { field: 'phone', headerName: 'Celular', width: 130 },
    { field: 'actions', headerName: 'Acciones', width: 300 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h2>Listado Clientes</h2>
      <DataGrid
        rows={clients}
        columns={columns}
        loading={status === 'loading'}
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default ClientList;

