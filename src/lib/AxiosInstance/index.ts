import envConfig from "@/app/config/envConfig";
import axios from "axios";
const AxiosInstance = axios.create({
  baseURL: envConfig.baseApi,
});

export default AxiosInstance;
