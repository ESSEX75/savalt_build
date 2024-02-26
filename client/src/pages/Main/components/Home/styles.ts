import styled from 'styled-components';

export const Root = styled.section`
    width: 100%;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2.25rem;
    background-color: #efefef;
    border-radius: 40px;
    @media (max-width: 1180px) {
        grid-template-columns: 1fr;
        justify-items: center;
        grid-row-gap: 1.125rem;
    }
    @media (max-width: 640px) {
        padding-top: 5.4rem;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 42rem;
    row-gap: 3rem;
    padding: 3.125rem 0 3.125rem 3.125rem;

    @media (max-width: 1180px) {
        max-width: 38rem;
        padding: 2.18rem 2.8rem 5rem;
        grid-row: 2;
        row-gap: 2rem;
    }
    @media (max-width: 640px) {
        max-width: 100%;
        padding: 3rem 1.56rem;
    }
`;

export const LogoManagersPhoneWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-bottom: 2.5rem;
    column-gap: 2rem;
    @media (max-width: 1180px) {
        padding-bottom: 1.25rem;
    }
    @media (max-width: 640px) {
        display: none;
    }
`;

export const Logo = styled.img`
    width: 10vw;
    @media (max-width: 1760px) {
        width: 11.25rem;
    }
`;

export const ManagersPhoneWrapper = styled.div`
    max-width: 16.25rem;
`;

export const DescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    row-gap: 1.4rem;
    padding-bottom: 2.5rem;
    max-width: 28rem;
    @media (max-width: 1180px) {
        padding-bottom: 1.56rem;
    }
`;

export const CoverImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 50%;
    border-radius: 0 40px 40px 0;

    @media (max-width: 1180px) {
        height: 50vw;
        border-radius: 40px;
        grid-row: 1;
    }

    @media (max-width: 640px) {
        border-radius: 0 0 20px 20px;
    }
`;
