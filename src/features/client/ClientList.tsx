import { useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getClients } from './clientSlice';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ClientList = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { clients, status } = useAppSelector((state) => state.client);

  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'document', headerName: 'Documento', width: 130 },
    { field: 'name', headerName: 'Nombres', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'phone', headerName: 'Celular', width: 130 },
    { field: 'balance', headerName: 'Saldo', width: 130 },
    {
      field: 'actions',
      headerName: 'Acciones',
      width: 300,
      renderCell: (params) => (
        <><Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => navigate(`/clientes/${params.row.id}`)}
          startIcon={<span className="material-icons"></span>}
        >
          Ver Mas
        </Button><Button
          variant="contained"
          color="primary"
          size="small"
          onClick={() => navigate('/recharge', {
            state: {
              document: params.row.document,
              phone: params.row.phone,
            },
          })}
        >
            Recargar
          </Button><Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => navigate('/pay', {
              state: {
                document: params.row.document,
                phone: params.row.phone,
              },
            })}
          >
            Pagar
          </Button></>
      ),
    },
  ];
  console.log(clients);
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

