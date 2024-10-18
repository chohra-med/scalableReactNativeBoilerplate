// learn the Facade Pattern
// https://medium.com/@malikchohra/build-to-scale-the-facade-pattern-1f5db01226a9
import axios from 'axios';

import {
    API_CUSTOM,
} from '../utils/configurations/config';
import { AxiosErrorHandler } from '../utils/helpers/axiosHelper';

axios.interceptors.response.use((response) => response, AxiosErrorHandler);
axios.defaults.headers.common.accept = 'application/json';

export const customApiAxios = axios.create({
    baseURL: API_CUSTOM,
});
