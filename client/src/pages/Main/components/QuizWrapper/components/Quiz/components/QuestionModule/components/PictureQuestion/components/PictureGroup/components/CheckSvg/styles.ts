import styled from 'styled-components';

const Icon = styled.svg.attrs({
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
})``;

export const Svg = styled(Icon)`
    width: 4.375rem;
    height: auto;
    text-align: center;

    @media (max-width: 1280px) {
        width: 6vw;
    }

    @media (max-width: 640px) {
        width: 4.375rem;
    }
`;
