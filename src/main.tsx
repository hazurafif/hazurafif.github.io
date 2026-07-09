import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { createHead, UnheadProvider } from '@unhead/react/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { routes } from './routes'
import './styles/globals.css'

const head = createHead()
const router = createBrowserRouter(routes, {
  hydrationData: (window as any).__staticRouterHydrationData,
})

hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <UnheadProvider head={head}>
      <RouterProvider router={router} />
    </UnheadProvider>
  </StrictMode>,
)
