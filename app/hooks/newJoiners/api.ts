import axios from "axios";
import { endpoint } from "../constants";

export const getNewJoinersAPI = (): Promise<any> => {
    return axios.get(`${endpoint}/users/joiners`);
};