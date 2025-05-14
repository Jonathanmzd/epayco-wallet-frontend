import { useRoutes } from 'react-router-dom';
import Layout from '../components/Layout';
import { ClientForm } from '../features/client/ClientForm';
import RechargeForm from '../features/wallet/RechargeForm';


const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: 'register', element: <ClientForm /> },
        { path: 'recharge', element: <RechargeForm /> },
        { path: '*', element: <div>404 - Page not found</div> },
      ],
    },
  ]);

  return routes;
};

export default AppRoutes;
