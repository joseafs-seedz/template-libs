import React from 'react';
import { PropsBaseColors } from '../../../types/theme';
export declare type PropsThemeButton = {
    color?: PropsBaseColors;
};
interface Props extends PropsThemeButton {
    type?: React.ButtonHTMLAttributes<unknown>['type'];
    text?: string;
    disabled?: boolean;
}
export declare const ButtonText: React.MemoExoticComponent<({ text, type, color, disabled }: Props) => JSX.Element>;
export {};
