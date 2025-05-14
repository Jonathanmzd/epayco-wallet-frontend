import { useRoutes } from 'react-router-dom';
import Layout from '../components/Layout';
import { ClientForm } from '../features/client/ClientForm';

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: 'register', element: <ClientForm /> },
        { path: '*', element: <div>404 - Page not found</div> },
      ],
    },
  ]);

  return routes;
};

export default AppRoutes;
