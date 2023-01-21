import Products from './Components/Products'
import Header from './Components/Header'
import Categories from './Components/Categories';
import {
  createRouteConfig,
  createReactRouter,
  RouterProvider,
  Outlet
} from '@tanstack/react-router';

import './App.css'

const rootRoute = createRouteConfig();

const home = rootRoute.createRoute({
  path: '/',
  component: () => (
    <>
      <Header />
      <Categories />
      <Products />
      <Outlet />
    </>
  )
});

const cart = rootRoute.createRoute({
  path: '/cart',
  component: () => (
    <>
      <Header />
      <Products />
      <Outlet />
    </>
  )
});

const routeConfig = rootRoute.addChildren([home, cart]);

const router = createReactRouter(routeConfig);

function App() {
  return (
    <RouterProvider router={router} >
    </RouterProvider>
  );
}



export default App
