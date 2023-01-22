import Products from './Components/Products'
import Header from './Components/Header'
import Categories from './Components/Categories';
import {
  createRouteConfig,
  ReactRouter,
  RouterProvider,
  Outlet
} from '@tanstack/react-router';

import './App.css'
import Cart from './Components/Cart';

const rootRoute = createRouteConfig({
  component: () => (
    <>
      <Header />
      <Outlet />
    </>
  ),
});

const homeRoute = rootRoute.createRoute({
  path: '/',
  component: () => (
    <>
      <Categories />
      <Products />
      <Outlet />
    </>
  )
});

const cartRoute = rootRoute.createRoute({
  path: '/cart',
  component: () => (
    <>
      <Cart />
      <Outlet />
    </>
  )
});

const routeConfig = rootRoute.addChildren([homeRoute, cartRoute]);

const router = new ReactRouter({ routeConfig });

function App() {
  return (
    <RouterProvider router={router} />
  );
}



export default App
