import { Svg } from './styles';
import React from 'react';
import { ICloud } from './types';

const Cloud = ({ className, color }: ICloud) => (
    <Svg className={className} viewBox="0 0 141 91">
        <path
            d="M131 0H10C4.47715 0 0 4.47714 0 9.99998V63.1769C0 68.7183 4.50612 73.2031 10.0474 73.1768L49.4699 72.9898L63.7941 85.9382C67.602 89.3804 73.3978 89.3804 77.2058 85.9382L91.5299 72.9898H131C136.523 72.9898 141 68.5126 141 62.9898V10C141 4.47715 136.523 0 131 0Z"
            fill={color}
        />
    </Svg>
);

export default Cloud;
