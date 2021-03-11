import React from "react";
export interface TextStyles {
    fontFamily?: string;
    color?: string;
    fontSize?: string | number;
}
export interface Styles {
    themeColor?: string;
    mainTextStyle?: TextStyles;
    bottonTextStyle?: TextStyles;
    backgroundImage?: string;
    backgroundColor?: string;
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
export interface Labels {
    mainLabel: string;
    mainLabel_or: string;
    bottonLabel: string;
    buttonLabel: string;
}
export interface ErrorsValidation {
    mime: string;
    ext: string;
    size: string;
}
