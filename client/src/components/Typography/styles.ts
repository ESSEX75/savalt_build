import styled from 'styled-components';
import React from 'react';
import { IStyleTypography, ITypography } from './types';

const colorStyle = {
    orange: {
        color: '#E75A45',
    },
    black: {
        color: '#141414',
    },
    white: {
        color: '#ffffff',
    },
    error: {
        color: '#e32a12',
    },
    base: {
        color: '#141414',
    },
};

const variantStyles = {
    screen1538: {
        head1bold1left: {
            fontSize: '3rem',
            lineHeight: '125%',
            fontWeight: '900',
            textAlign: 'left',
            textDecoration: 'none',
        },
        title1bold1center: {
            fontSize: '2.4rem',
            lineHeight: '125%',
            fontWeight: '900',
            textAlign: 'center',
            textDecoration: 'none',
        },
        smallTitle1bold1center: {
            fontSize: '1.5rem',
            lineHeight: '110%',
            fontWeight: '900',
            textAlign: 'center',
            textDecoration: 'none',
        },
        smallTitle1bold1left: {
            fontSize: '1.5rem',
            lineHeight: '110%',
            fontWeight: '900',
            textAlign: 'left',
            textDecoration: 'none',
        },
        body1regular1left: {
            fontSize: '1.125rem',
            lineHeight: '140%',
            fontWeight: '400',
            textAlign: 'left',
            textDecoration: 'none',
        },

        body1regular1center: {
            fontSize: '1.125rem',
            lineHeight: '140%',
            fontWeight: '400',
            textAlign: 'center',
            textDecoration: 'none',
        },

        largeBody1regular1left: {
            fontSize: '1.25rem',
            lineHeight: '140%',
            fontWeight: '400',
            textAlign: 'left',
            textDecoration: 'none',
        },

        smallBody1regular1left: {
            fontSize: '0.875rem',
            lineHeight: '125%',
            fontWeight: '400',
            textAlign: 'left',
            textDecoration: 'none',
        },
        base: {
            fontSize: '1.125rem',
            lineHeight: '140%',
            fontWeight: '900',
            textAlign: 'center',
            textDecoration: 'none',
        },
    },
    screen640: {
        head1bold1left: {
            fontSize: '1.8rem',
            lineHeight: '125%',
            fontWeight: '900',
            textAlign: 'left',
            textDecoration: 'none',
        },
        title1bold1center: {
            fontSize: '1.25rem',
            lineHeight: '125%',
            fontWeight: '900',
            textAlign: 'center',
            textDecoration: 'none',
        },
        smallTitle1bold1center: {
            fontSize: '1.25rem',
            lineHeight: '110%',
            fontWeight: '900',
            textAlign: 'center',
            textDecoration: 'none',
        },
        smallTitle1bold1left: {
            fontSize: '1.25rem',
            lineHeight: '110%',
            fontWeight: '900',
            textAlign: 'left',
            textDecoration: 'none',
        },
        body1regular1left: {
            fontSize: '1rem',
            lineHeight: '140%',
            fontWeight: '400',
            textAlign: 'left',
            textDecoration: 'none',
        },
        body1regular1center: {
            fontSize: '1rem',
            lineHeight: '140%',
            fontWeight: '900',
            textAlign: 'center',
            textDecoration: 'none',
        },
        largeBody1regular1left: {
            fontSize: '1.25rem',
            lineHeight: '140%',
            fontWeight: '400',
            textAlign: 'left',
            textDecoration: 'none',
        },
        smallBody1regular1left: {
            fontSize: '0.875rem',
            lineHeight: '125%',
            fontWeight: '400',
            textAlign: 'left',
            textDecoration: 'none',
        },
        base: {
            fontSize: '1rem',
            lineHeight: '140%',
            fontWeight: '900',
            textAlign: 'left',
            textDecoration: 'none',
        },
    },
};

export const StyleTypography = (Component: React.FC<ITypography>) => styled(Component)<IStyleTypography>`
    margin: 0;
    color: ${({ color }) => colorStyle[color || 'base'].color};
    text-decoration: ${({ variant }) => variantStyles.screen1538[variant || 'base'].textDecoration};
    text-align: ${({ variant }) => variantStyles.screen1538[variant || 'base'].textAlign};
    font-weight: ${({ variant }) => variantStyles.screen1538[variant || 'base'].fontWeight};
    font-size: ${({ variant }) => variantStyles.screen1538[variant || 'base'].fontSize};
    line-height: ${({ variant }) => variantStyles.screen1538[variant || 'base'].lineHeight};

    @media (max-width: 640px) {
        font-size: ${({ variant }) => variantStyles.screen640[variant || 'base'].fontSize};
        line-height: ${({ variant }) => variantStyles.screen640[variant || 'base'].lineHeight};
    }
`;
