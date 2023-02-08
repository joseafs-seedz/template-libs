import React from 'react';
export interface Props {
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: React.InputHTMLAttributes<unknown>['type'];
    label?: string;
    required?: boolean;
    value?: string | number;
    min?: string | number;
    max?: string | number;
    placeholder?: string;
}
export declare const InputText: React.MemoExoticComponent<({ name, type, label, value, min, max, required, placeholder, onChange, }: Props) => JSX.Element>;
