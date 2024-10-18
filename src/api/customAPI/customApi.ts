import { customApiAxios } from '../Api';
import { ROUTE_CUSTOM_ROUTE } from './routes';
import Config from 'react-native-config'
class CustomAPI {
  appToken = Config.APP_TOKEN;
  /*get the list of the customs */

  LoadAllCustoms() {
    return customApiAxios.get(ROUTE_CUSTOM_ROUTE);

  }
}
export default new CustomAPI();
