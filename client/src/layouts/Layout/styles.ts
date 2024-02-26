import styled from 'styled-components';

export const Root = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1680px;
    box-sizing: border-box;
    padding: 5rem 3.75rem 0;
    margin: 0 auto;
    font-family: 'ttInterfaces', sans-serif;
    row-gap: 6.5rem;

    @media (max-width: 1680px) {
        padding: 2.5rem 1.25rem 0;
    }

    @media (max-width: 1180px) {
        row-gap: 4rem;
    }

    @media (max-width: 640px) {
        row-gap: 3rem;
        padding: 0 0.625rem;
    }
`;
