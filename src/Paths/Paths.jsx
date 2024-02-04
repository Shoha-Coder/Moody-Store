import React from 'react'
import Home from '../Pages/Home/Home';
import BProducts from '../Pages/B-Products/B-Products';
import SProduct from '../Pages/S-Product/S-Product';
import ShoppingBag from '../Pages/Shopping-bag/Shopping-bag';
import Page404 from '../Pages/404/404';
import { Route, Routes } from 'react-router-dom';
export const Paths = [
    {
        id: 1,
        path: "/",
        element: <Home />
    },
    {
        id: 2,
        path: "/bed-products/",
        element: <BProducts />
    },
    {
        id: 3,
        path: "/single-product/:productId/",
        element: <SProduct/>
    },
    {
        id: 4,
        path: "/shop-bag/",
        element: <ShoppingBag />
    },
    {
        id: 5,
        path: "*",
        element: <Page404 />
    }
]
const Index = () => {
  return (
    <React.Fragment>
        <Routes>
        {
            Paths.map((path) => {
                return(
                    <React.Fragment key={path.id}>
                        <Route path={path.path} element={path.element} />
                    </React.Fragment>
                )
            })
        }
        </Routes>
    </React.Fragment>
  )
}
export default Index;