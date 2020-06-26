import providers from "./providers";
import Home from '../pages/Home';
import Basket from '../pages/Basket';

export const routes = [
    {
        path: providers.routes.HOME.PATH,
        title: providers.routes.HOME.TITLE,
        Component: Home
    },
    {
        path: providers.routes.BASKET.PATH,
        title: providers.routes.BASKET.TITLE,
        Component: Basket
    }
]