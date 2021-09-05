import { useEffect, useState } from "react";
import { initialApiRes } from "../constants";
import { getSuccessMsg, getErrorMsg } from "../helpers";
import { IHookReturnType, IApiRes } from "../interface";
import { getPollAPI } from "./api";

export const usePoll = (): IHookReturnType => {
    const [res, setRes] = useState<IApiRes<null>>(initialApiRes);

    const getPoll = async () => {
        try {
            const result = await getPollAPI();
            if (result.data)
                setRes(getSuccessMsg(result.data));
        } catch (error) {
            setRes(getErrorMsg(error))
        }
    };
    useEffect(() => {
        getPoll();
    }, []);

    return { res, action: getPoll };
};
