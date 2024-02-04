import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.scss";
import { BrowserRouter } from "react-router-dom";
import Index from "./Paths/Paths";
import { CartProvider } from "react-use-cart";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <CartProvider>
            <Index />
        </CartProvider>
    </BrowserRouter>
);