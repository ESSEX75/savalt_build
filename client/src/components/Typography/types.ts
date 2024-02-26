import React from 'react';

export interface ITypography {
    tag: string;
    children: string | React.ReactNode;
    className?: string;
    color: 'orange' | 'black' | 'white' | 'error';
    variant:
        | 'head1bold1left'
        | 'title1bold1center'
        | 'smallTitle1bold1center'
        | 'smallTitle1bold1left'
        | 'body1regular1left'
        | 'body1regular1center'
        | 'largeBody1regular1left'
        | 'smallBody1regular1left';
}

export interface IStyleTypography {
    className?: string;
    color: 'orange' | 'black' | 'white' | 'error';
    variant:
        | 'head1bold1left'
        | 'title1bold1center'
        | 'smallTitle1bold1center'
        | 'smallTitle1bold1left'
        | 'body1regular1left'
        | 'body1regular1center'
        | 'largeBody1regular1left'
        | 'smallBody1regular1left';
}
