import Home from '../components/Home';
import Elements from '../components/Elements';
import Pages from '../components/Pages';
import Templates from '../components/Templates';
import Single from '../components/Single';

export const navbar = [
  {
    id: 1,
    title: 'Home',
    path: '/home',
    element: <Home />,
    isPrivate: false,
  },
  {
    id: 5,
    title: 'Home',
    path: '/home/:id',
    element: <Single />,
    isPrivate: false,
  },
  {
    id: 2,
    title: 'Login',
    path: '/elements',
    element: <Elements />,
    isPrivate: false,
  },
  {
    id: 3,
    title: 'Pages',
    path: '/pages',
    element: <Pages />,
    isPrivate: true,
  },
  {
    id: 4,
    title: 'Templates',
    path: '/templates',
    element: <Templates />,
    isPrivate: false,
  },
];
