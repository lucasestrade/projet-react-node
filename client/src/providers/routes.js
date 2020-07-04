import providers from "./providers";
import Home from '../pages/Home';
import Home2 from '../pages/Home2';
import Basket from '../pages/Basket';
import Product from '../pages/Product';

export const routes = [
    {
        path: providers.routes.HOME.PATH,
        title: providers.routes.HOME.TITLE,
        Component: Home
    },
    {
        path: providers.routes.HOME2.PATH,
        title: providers.routes.HOME2.TITLE,
        Component: Home2
    },
    {
        path: providers.routes.BASKET.PATH,
        title: providers.routes.BASKET.TITLE,
        Component: Basket
    },
    {
        path: providers.routes.PRODUCT.PATH,
        title: providers.routes.PRODUCT.TITLE,
        Component: Product
    }
]