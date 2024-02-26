import styled from 'styled-components';
import { IErrors } from './types';
import { IImage } from './types';

export const RadioWrapper = styled.div<IErrors>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media (max-width: 640px) {
        flex-direction: column;
    }

    animation: ${({ errors }) => (errors ? 'shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both' : 'none')};
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;

    @keyframes shake {
        10%,
        90% {
            transform: translate3d(-1px, 0, 0);
        }

        20%,
        80% {
            transform: translate3d(2px, 0, 0);
        }

        30%,
        50%,
        70% {
            transform: translate3d(-4px, 0, 0);
        }

        40%,
        60% {
            transform: translate3d(4px, 0, 0);
        }
    }
`;

export const Radio = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;
`;

export const Input = styled.input`
    display: none;

    &:checked + label div span {
        opacity: 1;
    }
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 0.5rem;
    cursor: pointer;
    user-select: none;
`;

export const Image = styled.div<IImage>`
    width: 18vw;
    height: 18vw;
    background: url(${({ url }) => url}) center no-repeat;
    background-size: cover;

    @media (max-width: 640px) {
        width: 50vw;
        height: 50vw;
    }
`;

export const ImageCheck = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(20, 20, 20, 0.6);
    opacity: 0;
    width: 100%;
    height: 100%;

    &:hover {
        opacity: 0.3;
        transition: opacity 0.2s;
    }
`;
