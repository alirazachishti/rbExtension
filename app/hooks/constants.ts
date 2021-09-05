import { IApiRes } from "./interface";

export const initialApiRes: IApiRes<null> = {
    loading: true,
}

export enum UserRoles {
    employee = "employee",
    admin = "admin",
}

export const endpoint = "https://remotebase-hackathon.herokuapp.com";