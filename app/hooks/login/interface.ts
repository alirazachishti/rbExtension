import { UserRoles } from "../constants";

export interface ILoginData {
    email: string;
    isEmployee?: boolean;
}

export interface ILoginResponse {
    email: string;
    role: UserRoles
    verified: boolean;
}