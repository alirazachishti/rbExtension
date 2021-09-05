import { useState } from "react";
import { initialApiRes } from "../constants";
import { getSuccessMsg, getErrorMsg } from "../helpers";
import { IHookReturnType, IApiRes } from "../interface";
import { loginAPI } from "./api";
import { ILoginData, ILoginResponse } from "./interface";

export const useLogin = (): IHookReturnType => {
    const [res, setRes] = useState<IApiRes<ILoginResponse | null>>(initialApiRes);
    const login = async (data: ILoginData) => {
        try {
            const result = await loginAPI(data);
            setRes(getSuccessMsg(result.data));
        } catch (error) {
            setRes(getErrorMsg(error))
        }
    };
    return { res, action: login };
};
