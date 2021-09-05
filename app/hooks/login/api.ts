import axios from "axios";
import { endpoint } from "../constants";
import { ILoginData } from "./interface";

export const loginAPI = (data: ILoginData): Promise<any> => {
    return axios.post(`${endpoint}/users/login`, data);
};