import { AxiosInstance } from 'axios';
import ziggyRoute from 'ziggy-js';

declare global {
    interface Window {
        axios: AxiosInstance;
    }

    let route: typeof ziggyRoute;
}
