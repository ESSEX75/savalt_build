import styled from 'styled-components';

export const Root = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    row-gap: 3rem;

    @media (max-width: 1180px) {
        padding: 2.18rem 2.8rem 0;
        row-gap: 2rem;
    }

    @media (max-width: 640px) {
        padding: 1rem 1rem 0;
    }
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 0.8rem;
`;
