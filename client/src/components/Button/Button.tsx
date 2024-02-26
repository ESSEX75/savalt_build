import React from 'react';
import { IButton } from './types';
import { ButtonStyle } from './styles';

const Button: React.FC<IButton> = ({ children, variant, onClick, type, disabled }) => {
    return (
        <ButtonStyle onClick={onClick} variant={variant} type={type} disabled={disabled}>
            {children}
        </ButtonStyle>
    );
};

export default Button;
