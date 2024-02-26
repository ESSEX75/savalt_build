import styled, { css } from 'styled-components';
import { GroupBase, StylesConfig } from 'react-select';
import { IErrors } from './types';
import InputMask from 'react-input-mask';
import { AnswerTypeSelect } from '../../../../types';

export const Root = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    row-gap: 3rem;
    @media (max-width: 640px) {
        row-gap: 1.4rem;
    }
`;

export const SelectWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    row-gap: 0.8rem;
    width: 40%;

    @media (max-width: 640px) {
        width: 100%;
    }
`;

export const InputTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    row-gap: 1rem;
    width: 40%;

    @media (max-width: 640px) {
        width: 100%;
    }
`;

const InputTemplate = css`
    box-sizing: border-box;
    background-color: #ffffff;
    height: 3.75rem;
    width: 100%;
    border: 1px solid #b2b2b2;
    border-radius: 5px;
    text-align: left;
    padding: 10px;
    font-size: 1rem;
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

    &:focus {
        border-color: #7e7e7e;
        outline: 0;
        outline-offset: 0;
    }
    &:hover {
        border-color: #7e7e7e;
        outline: 0;
        outline-offset: 0;
    }

    @media (max-width: 640px) {
        height: 2.8rem;
    }
`;

export const InputField = styled.input<IErrors>`
    ${InputTemplate};
    animation: ${({ errors }) => (errors ? 'shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both' : 'none')};
`;

export const StyleInputMask = styled(InputMask)<IErrors>`
    ${InputTemplate};
    animation: ${({ errors }) => (errors ? 'shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both' : 'none')};
`;

export const ErrorsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    row-gap: 0.4rem;
`;

export const customStyles: StylesConfig<AnswerTypeSelect, false, GroupBase<AnswerTypeSelect>> = {
    container: (provided) => ({
        ...provided,
        width: '100%',
    }),
    control: (provided) => ({
        ...provided,
        width: '100%',
        height: '3.75rem',
        borderRadius: '5px',
        cursor: 'pointer',
        border: '1px solid #b2b2b2',
        boxShadow: 'none',
        '&:hover': {
            borderColor: '#7e7e7e',
        },
    }),
    input: (provided) => ({
        ...provided,
        color: '#141414',
    }),
    singleValue: (provided) => ({
        ...provided,
        height: '100%',
        marginTop: '8px',
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
    menu: (provided) => ({
        ...provided,
        color: '#141414',
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: '#141414',
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#E75A45' : 'transparent',
        color: state.isFocused ? '#ffffff' : '#141414',
        '&:hover': {
            backgroundColor: '#e8a69a',
        },
    }),
};
