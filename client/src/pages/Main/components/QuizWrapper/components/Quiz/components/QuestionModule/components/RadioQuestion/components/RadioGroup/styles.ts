import styled from 'styled-components';
import { IErrors } from './types';
import radioButtonNotActive from './images/radioButtonNotActive.svg';
import radioButtonActive from './images/radioButtonActive.svg';

export const RadioWrapper = styled.div<IErrors>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    row-gap: 0.8rem;
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
    margin-right: 30px;
`;

export const Input = styled.input`
    display: none;

    &:disabled + label:before {
        filter: grayscale(100%);
    }

    &:checked + label:before {
        background: url(${radioButtonActive}) center no-repeat;
        background-size: 100% 100%;
    }
`;

export const Label = styled.label`
    display: inline-block;
    cursor: pointer;
    position: relative;
    padding-left: 2rem;
    margin-right: 0;
    line-height: 1.64rem;
    user-select: none;

    &:before {
        content: '';
        display: inline-block;
        width: 1.5rem;
        height: 1.5rem;
        position: absolute;
        left: 0;
        bottom: 1px;
        background: url(${radioButtonNotActive}) center no-repeat;
        background-size: 100% 100%;
    }

    &:hover:before {
        filter: brightness(250%);
    }
`;
