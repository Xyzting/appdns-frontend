import axios from "axios";
import {
  errorInterceptor,
  requestInterceptor,
} from "./interceptors";

// import {
//   setAuthorizationHeader,
//   setTenantHeader,
// } from "./setAuthorizationHeader";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

instance.interceptors.response.use(
  (response) => response.data,
  errorInterceptor
);
instance.interceptors.request.use(requestInterceptor, errorInterceptor);

// export { setAuthorizationHeader, setTenantHeader };

export default instance;
