import providers from "./providers";
import Home from '../pages/Home';
import Home2 from '../pages/Home2';
import Paiement from '../pages/Paiement';
import PSP from '../pages/PSP';
import Dashboard from '../pages/Dashboard';
import CancelPaiement from '../pages/CancelPaiement';
import ValidatePaiement from '../pages/ValidatePaiement';

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
    },
    {
        path: providers.routes.PSP.PATH,
        title: providers.routes.PSP.TITLE,
        Component: PSP
    },
    {
        path: providers.routes.VALIDATE_PAIEMENT.PATH,
        title: providers.routes.VALIDATE_PAIEMENT.TITLE,
        Component: ValidatePaiement
    },
    {
        path: providers.routes.CANCEL_PAIEMENT.PATH,
        title: providers.routes.CANCEL_PAIEMENT.TITLE,
        Component: CancelPaiement
    },
    {
        path: "/dashboard",
        title: "dashboard",
        Component: Dashboard
    }
]