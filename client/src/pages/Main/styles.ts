import styled from 'styled-components';

export const MainBackground = styled.div`
    background-color: #ffffff;
`;

export const Root = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 6.5rem;

    @media (max-width: 1180px) {
        row-gap: 4rem;
    }
    @media (max-width: 640px) {
        row-gap: 3rem;
    }
`;
