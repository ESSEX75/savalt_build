import styled from 'styled-components';

export const Root = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1.5rem;
    background-color: #ffffff;
    border-radius: 40px;
`;

export const ListWrapper = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    grid-gap: 1rem;
    @media screen and (max-width: 1180px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 640px) {
        grid-template-columns: 1fr;
    }
`;

export const ListItem = styled.li`
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    column-gap: 1.2rem;
    background-color: #efefef;
    border-radius: 30px;
    width: 100%;
    height: 100%;
    padding: 1.8rem;
    @media (max-width: 640px) {
        padding: 1rem;
    }
`;

export const ListIcon = styled.img`
    width: 5.75rem;
    object-fit: cover;
    @media (max-width: 1180px) {
        width: 4.8rem;
    }
`;
