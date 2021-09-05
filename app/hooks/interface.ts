export interface IApiRes<T>  {
    data?: T | null;
    loading: boolean;
    error?: string;
}

export interface IHookReturnType {
    res: any;
    action?: (data?: any) => void;
}
