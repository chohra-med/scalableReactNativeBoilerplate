import { customApiAxios } from '../Api';
import { ROUTE_CUSTOM_ROUTE } from './routes';
import Config from 'react-native-config'
class CustomAPI {
  // for the usage of config in react native
  // check this article
  // https://casainnov.com/securing-sensitive-keys-in-react-native-with-react-native-config

  appToken = Config.APP_TOKEN;

  /*get the list of the customs */
  LoadAllCustoms() {
    return customApiAxios.get(ROUTE_CUSTOM_ROUTE);

  }
}
export default new CustomAPI();
