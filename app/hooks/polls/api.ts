import axios from "axios";
import { endpoint } from "../constants";

export const getPollAPI = (): Promise<any> => {
    return axios.get(`${endpoint}/polls`);
};