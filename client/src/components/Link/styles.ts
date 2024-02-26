import styled from 'styled-components';
import { IStyleLink } from './types';
import telegram from '@Images/telegram.png';
import whatsapp from '@Images/whatsapp.png';
import mail from '@Images/mail.png';

const styleVariants = {
    telegramLink: {
        border: 'none',
        background: telegram,
        backgroundColor: 'none',
        backgroundSize: '100% 100%',
        borderRadius: 'none',
        scale: '0.95',
    },
    whatsappLink: {
        border: 'none',
        background: whatsapp,
        backgroundColor: 'none',
        backgroundSize: '100% 100%',
        borderRadius: 'none',
        scale: '0.95',
    },
    mailLink: {
        border: 'none',
        background: mail,
        backgroundColor: 'none',
        backgroundSize: '100% 100%',
        borderRadius: 'none',
        scale: '0.95',
    },
    baseButton: {
        border: 'none',
        background: 'none',
        backgroundColor: '#E75A45',
        backgroundSize: 'none',
        borderRadius: '100px',
        scale: '0.95',
    },
    base: {
        border: 'none',
        background: 'none',
        backgroundColor: 'none',
        backgroundSize: 'none',
        borderRadius: 'none',
        scale: '1',
    },
};

const linkSizeStyle = {
    screen1538: {
        button: {
            width: '80%',
            height: '80px',
        },
        base: {
            width: 'none',
            height: 'none',
        },
    },
    screen1180: {
        button: {
            width: '100%',
            height: '70px',
        },
        base: {
            width: 'none',
            height: 'none',
        },
    },
};

const fontSizeStyles = {
    screen1280: {
        button: {
            fontSize: '1.25rem',
            lineHeight: '125%',
        },
        description: {
            fontSize: '1,125rem',
            lineHeight: '140%',
        },
        subtext: {
            fontSize: '0.875rem',
            lineHeight: '125%',
        },
        base: {
            fontSize: '1.25rem',
            lineHeight: '140%',
        },
    },
    screen640: {
        button: {
            fontSize: '1.125rem',
            lineHeight: '125%',
        },
        description: {
            fontSize: '16px',
            lineHeight: '140%',
        },
        subtext: {
            fontSize: '0.875rem',
            lineHeight: '125%',
        },
        base: {
            fontSize: '1.25rem',
            lineHeight: '140%',
        },
    },
};

const colorStyle = {
    orange: {
        color: '#E75A45',
    },
    white: {
        color: '#ffffff',
    },
    base: {
        color: '#ffffff',
    },
};

const displayVariants = {
    centeringButtonContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nonFlex: {
        display: 'inline',
        flexDirection: 'none',
        justifyContent: 'none',
        alignItems: 'none',
    },
};

export const LinkStyle = styled.a<IStyleLink>`
    display: ${({ display }) => displayVariants[display || 'base'].display};
    flex-direction: ${({ display }) => displayVariants[display || 'base'].flexDirection};
    justify-content: ${({ display }) => displayVariants[display || 'base'].justifyContent};
    align-items: ${({ display }) => displayVariants[display || 'base'].alignItems};
    width: ${({ linkSize }) => linkSizeStyle.screen1538[linkSize || 'base'].width};
    height: ${({ linkSize }) => linkSizeStyle.screen1538[linkSize || 'base'].height};
    border: ${({ variant }) => styleVariants[variant || 'base'].border};
    background-image: url(${({ variant }) => styleVariants[variant || 'base'].background});
    background-color: ${({ variant }) => styleVariants[variant || 'base'].backgroundColor};
    background-size: ${({ variant }) => styleVariants[variant || 'base'].backgroundSize};
    border-radius: ${({ variant }) => styleVariants[variant || 'base'].borderRadius};
    background-repeat: no-repeat;
    background-position: center;
    text-decoration: none;
    cursor: pointer;
    color: ${({ color }) => colorStyle[color || 'base'].color};
    font-weight: 700;
    font-size: ${({ fontSize }) => fontSizeStyles.screen1280[fontSize || 'base'].fontSize};

    &:hover {
        transform: scale(${({ variant }) => styleVariants[variant || 'base'].scale});
        transition: transform 0.2s;
    }

    @media (max-width: 1180px) {
        width: ${({ linkSize }) => linkSizeStyle.screen1180[linkSize || 'base'].width};
        height: ${({ linkSize }) => linkSizeStyle.screen1180[linkSize || 'base'].height};
    }
    @media (max-width: 640px) {
        font-size: ${({ fontSize }) => fontSizeStyles.screen640[fontSize || 'base'].fontSize};
        line-height: ${({ fontSize }) => fontSizeStyles.screen640[fontSize || 'base'].lineHeight};
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const InternalIcon = styled.img`
    width: 30px;
    height: 30px;
    object-fit: cover;
`;
