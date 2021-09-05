import { IApiRes } from "./interface"

export const getErrorMsg = (error?: Error): IApiRes<null> => {
    return {loading: false, error: error?.message, data: null};
}

export const getSuccessMsg = (data?: any): IApiRes<any> => {
    return { loading: false, error: undefined, data };
}
