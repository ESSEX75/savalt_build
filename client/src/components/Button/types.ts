import React from 'react';

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'close' | 'base' | 'control';
    children?: string;
    onClick?: () => void;
}

export interface IButtonStyle {
    variant: 'close' | 'base' | 'control';
}
