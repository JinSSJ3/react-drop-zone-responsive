import React from "react";
export interface Styles {
    color?: string;
    backgroundImage?: string;
}
export interface Limits {
    extensions?: Array<string>;
    mimeType?: Array<string>;
    maxSize?: number;
}
export interface DropZoneProps {
    style?: Styles;
    limits?: Limits;
    amountOfFiles?: number;
    handleFileSelect?: Function;
    localization?: string;
}
export interface ButtonProps {
    children?: React.FC | string;
    onClick?: Function;
    style?: Styles;
}
export interface ResultFileValidation {
    file: File;
    errors: Array<string>;
}
