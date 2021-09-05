import { useEffect, useState } from "react";
import { initialApiRes } from "../constants";
import { getSuccessMsg, getErrorMsg } from "../helpers";
import { IHookReturnType, IApiRes } from "../interface";
import { getAnnouncementsAPI } from "./api";

export const useAnnouncements = (): IHookReturnType => {
    const [res, setRes] = useState<IApiRes<null>>(initialApiRes);

    const getAnnouncements = async () => {
        try {
            const result = await getAnnouncementsAPI();
            setRes(getSuccessMsg(result.data));
        } catch (error) {
            setRes(getErrorMsg(error))
        }
    };
    useEffect(() => {
        getAnnouncements();
    }, []);

    return { res, action: getAnnouncements };
};
