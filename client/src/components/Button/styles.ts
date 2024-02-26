import styled from 'styled-components';
import { IButtonStyle } from './types';
import close from '@Images/close.svg';

const stylesButton = {
    close: {
        border: 'none',
        background: close,
        backgroundColor: 'none',
        backgroundSize: '100% 100%',
        width: '1.5rem',
        height: '1.5rem',
        borderRadius: 'none',
    },
    control: {
        border: 'none',
        background: 'none',
        backgroundColor: '#E75A45',
        backgroundSize: '100% 100%',
        width: '8.75rem',
        height: '2.5rem',
        borderRadius: '46px',
    },
    base: {
        border: 'none',
        background: 'none',
        backgroundColor: '#E75A45',
        backgroundSize: '100% 100%',
        width: '240px',
        height: '50px',
        borderRadius: '46px',
    },
};

export const ButtonStyle = styled.button<IButtonStyle>`
    width: ${({ variant }) => stylesButton[variant || 'base'].width};
    height: ${({ variant }) => stylesButton[variant || 'base'].height};
    border: ${({ variant }) => stylesButton[variant || 'base'].border};
    background-image: url(${({ variant }) => stylesButton[variant || 'base'].background});
    background-color: ${({ variant }) => stylesButton[variant || 'base'].backgroundColor};
    background-size: ${({ variant }) => stylesButton[variant || 'base'].backgroundSize};
    border-radius: ${({ variant }) => stylesButton[variant || 'base'].borderRadius};
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    color: white;
    font-weight: 600;

    &:hover {
        transform: scale(0.95);
        transition: transform 0.2s;
    }
`;
