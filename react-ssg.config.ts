import { defineReactSsgConfig } from 'vite-plugin-react-ssg';
import { routes } from './src/routes';

export default defineReactSsgConfig({
  history: 'browser',
  origin: 'https://hazurafif.github.io',
  routes,
  paths: [
    '/projects/pawly',
    '/projects/pos-service',
    '/projects/rbac-chat',
  ],
});
