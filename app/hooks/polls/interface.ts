export interface IPollOptions {
    yes: number;
    no: number;
    maybe: number;
}

export interface IPoll extends IPollOptions {
    name: string;
    _id: string;
}

export interface IPostPoll {
    yes?: boolean;
    no?: boolean;
    maybe?: boolean;
}