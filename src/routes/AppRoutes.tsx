import { useRoutes } from 'react-router-dom';
import Layout from '../components/Layout';
import { ClientForm } from '../features/client/ClientForm';
import RechargeForm from '../features/wallet/RechargeForm';
import BalanceChecker from '../features/wallet/BalanceChecker';
import ClientList from '../features/client/ClientList';
import InitiatePayment from '../features/payment/InitiatePayment';
import ConfirmPayment from '../features/payment/ConfirmPayment';

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
        { path: 'pay', element: <InitiatePayment /> },
        { path: 'confirm', element: <ConfirmPayment /> },
        { path: '*', element: <div>404 - Page not found</div> },
      ],
    },
  ]);

  return routes;
};

export default AppRoutes;
