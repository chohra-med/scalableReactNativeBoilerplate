import { customApiAxios } from '../Api';
import { ROUTE_CUSTOM_ROUTE } from './routes';

class CustomAPI {
  /*get the list of the customs */

  LoadAllCustoms() {
    return customApiAxios.get(ROUTE_CUSTOM_ROUTE);

  }
}
export default new CustomAPI();
