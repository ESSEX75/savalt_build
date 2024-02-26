import styled from 'styled-components';
import { IFiller } from './types';
import { ICloudWrapper } from './types';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background-color: #efefef;
    box-sizing: border-box;
    border-radius: 40px;
    padding: 4rem 3rem 6rem;
    width: 100%;
    gap: 2em;

    @media (max-width: 910px) {
        padding: 2rem 2rem 4rem;
    }

    @media (max-width: 640px) {
        padding: 2rem 1rem;
    }
`;

export const ControlButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    column-gap: 0.4rem;
    padding-top: 20px;
`;

export const ProgressBar = styled.div`
    height: 6px;
    width: 224px;
    background-color: #e8bfb7;
    border-radius: 50px;
`;

export const Filler = styled.div<IFiller>`
    height: 100%;
    width: ${({ completed }) => completed}%;
    background-color: #e75a45;
    border-radius: inherit;
    transition: width 1s ease-in-out;
`;

export const CloudWrapper = styled.div<ICloudWrapper>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateX(${({ completed }) => completed}px);
    transition: transform 1s ease-in-out;
`;

export const ProgressBarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 3.2px;
`;

export const CounterWrapper = styled.div`
    position: relative;
    top: 22px;
`;
