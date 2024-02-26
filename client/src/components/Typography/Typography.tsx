import { createElement, FC } from 'react';
import { ITypography, IStyleTypography } from './types';
import { StyleTypography } from './styles';

const Typography: FC<ITypography> = ({ tag, variant, color, children, className }) =>
    createElement<IStyleTypography>(
        tag,
        {
            className,
            color,
            variant,
        },
        children,
    );

export default StyleTypography(Typography);
