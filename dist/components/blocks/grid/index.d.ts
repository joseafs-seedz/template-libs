import React from 'react';
export declare type PropsGrid = {
    mgn?: number[];
    pdg?: number[];
    zind?: string;
    overflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
    bgColor?: string;
    flex?: boolean;
    align?: 'left' | 'center' | 'right';
};
interface Props extends PropsGrid {
    children?: React.ReactNode;
    className?: string;
}
export declare const Grid: React.MemoExoticComponent<({ children, mgn, align, pdg, zind, bgColor, overflow, flex, className, }: Props) => JSX.Element>;
export {};
