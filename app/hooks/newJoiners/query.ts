import { useEffect, useState } from "react";
import { initialApiRes } from "../constants";
import { getSuccessMsg, getErrorMsg } from "../helpers";
import { IHookReturnType, IApiRes } from "../interface";
import { getNewJoinersAPI } from "./api";

export const useNewJoiners = (): IHookReturnType => {
    const [res, setRes] = useState<IApiRes<null>>(initialApiRes);

    const getNewJoiners = async () => {
        try {
            const result = await getNewJoinersAPI();
            setRes(getSuccessMsg(result.data));
        } catch (error) {
            setRes(getErrorMsg(error))
        }
    };
    useEffect(() => {
        getNewJoiners();
    }, []);

    return { res, action: getNewJoiners };
};
