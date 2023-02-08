export declare type TpSchedulingItem = {
    [key: string]: string | number;
    id: number;
    title: string;
    dateTimeStart: string;
    dateTimeEnd: string;
};
export declare const SchedulingInitial: {
    id: number;
    title: string;
    dateTimeStart: string;
    dateTimeEnd: string;
    duration: string;
};
export declare type TpErrorList = {
    id: string;
    text: string | JSX.Element;
};
