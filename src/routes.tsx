import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import ProjectDetail from './pages/ProjectDetail';

export const routes = [
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'projects/:slug', Component: ProjectDetail },
      { path: '*', Component: NotFound },
    ],
  },
];
