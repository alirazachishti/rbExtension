import axios from "axios";
import { endpoint } from "../constants";

export const getAnnouncementsAPI = (): Promise<any> => {
    return axios.get(`${endpoint}/posts`);
};