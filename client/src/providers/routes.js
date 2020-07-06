import providers from "./providers";
import Home from '../pages/Home';
import Home2 from '../pages/Home2';
import Paiement from '../pages/Paiement';

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
        path: providers.routes.PAIEMENT.PATH,
        title: providers.routes.PAIEMENT.TITLE,
        Component: Paiement
    }
]