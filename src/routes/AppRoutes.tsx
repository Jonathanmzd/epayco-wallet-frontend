import { useRoutes } from 'react-router-dom';
import Layout from '../components/Layout';
import { ClientForm } from '../features/client/ClientForm';
import RechargeForm from '../features/wallet/RechargeForm';
import BalanceChecker from '../features/wallet/BalanceChecker';
import ClientList from '../features/client/ClientList';
import InitiatePayment from '../features/payment/InitiatePayment';
import ConfirmPayment from '../features/payment/ConfirmPayment';
import ClientDetail from '../features/client/ClientDetail';

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: 'register', element: <ClientForm /> },
        { path: 'recharge', element: <RechargeForm /> },
        { path: 'balance', element: <BalanceChecker /> },
        { path: 'clients', element: <ClientList /> },
        { path: 'clientes/:id', element: <ClientDetail /> },
        { path: 'pay', element: <InitiatePayment /> },
        { path: 'confirm', element: <ConfirmPayment /> },
        { path: '*', element: <div>404 - Page not found</div> },
      ],
    },
  ]);

  return routes;
};

export default AppRoutes;
