import { useRoutes } from 'react-router-dom';
import Layout from '../components/Layout';
import { ClientForm } from '../features/client/ClientForm';
import RechargeForm from '../features/wallet/RechargeForm';
import BalanceChecker from '../features/wallet/BalanceChecker';
import ClientList from '../features/client/ClientList';

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
        { path: '*', element: <div>404 - Page not found</div> },
      ],
    },
  ]);

  return routes;
};

export default AppRoutes;
