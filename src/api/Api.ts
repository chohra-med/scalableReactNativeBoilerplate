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
