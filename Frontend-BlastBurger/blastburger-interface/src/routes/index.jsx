import { createBrowserRouter } from "react-router-dom";
import { Home } from '../containers/Home';
import { Login } from '../containers/Login';
import { Register } from '../containers/Register';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer"
import { Menu } from "../containers/Menu";
import { Cart } from '../containers/Cart'


export const router = createBrowserRouter([
    {
        path: '/home',
        element: (
            <>
                <Header />
                <Home />
                <Footer />
            </>
        ),
    },
    {
        path: '/session',
        element: <Login />,
    },
    {
        path: '/cadastro',
        element: <Register />,
    },
    {
        path: '/cardapio',
        element: (
            <>
                <Header />
                <Menu />
                <Footer />
            </>
        ),
    },
    {
        path: '/carrinho',
        element: (
            <>
                <Header />
                <Cart />
                <Footer />
            </>
        ),
    },

]);  // <--- Error here 


