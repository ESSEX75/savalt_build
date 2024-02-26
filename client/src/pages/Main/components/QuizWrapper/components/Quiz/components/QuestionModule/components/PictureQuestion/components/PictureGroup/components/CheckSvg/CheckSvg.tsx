import { Svg } from './styles';
import React from 'react';
import { ICheckSvg } from './types';

const CheckSvg = ({ className, color }: ICheckSvg) => (
    <Svg className={className} viewBox="0 0 105 105">
        <path
            d="M105 52.5C105 81.4949 81.4949 105 52.5 105C23.5051 105 0 81.4949 0 52.5C0 23.5051 23.5051 0 52.5 0C81.4949 0 105 23.5051 105 52.5Z"
            fill="#ffffff"
        />
        <path d="M48.0664 76L29 57.234L37.7388 48.633L48.0664 58.7979L73.2612 34L82 42.6011L48.0664 76Z" fill={color} />
    </Svg>
);

export default CheckSvg;
