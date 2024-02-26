import styled from 'styled-components';
import { IErrors } from './types';
import checkboxActive from './images/checkboxActive.svg';
import checkbox from './images/checkbox.svg';

export const CheckmarkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    row-gap: 0.8rem;
`;

export const Label = styled.label<IErrors>`
    display: block;
    margin: 0 0 10px 0;
    cursor: pointer;
    user-select: none;
    position: relative;
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

export const Input = styled.input`
    display: none;

    &:checked + span:before {
        background: url(${checkboxActive}) center no-repeat;
        background-size: 100% 100%;
    }
`;

export const Span = styled.span`
    display: inline-block;
    position: relative;
    padding: 0 0 0 35px;
    line-height: 22px;

    &:before {
        content: '';
        display: inline-block;
        width: 1.5rem;
        height: 1.5rem;
        position: absolute;
        left: 0;
        top: 0;
        transition: background 0.3s ease;
        background: url(${checkbox}) center no-repeat;
        background-size: 100% 100%;
    }

    &:hover:before {
        filter: brightness(110%);
    }

    &:active:before {
        filter: brightness(80%);
    }
`;
