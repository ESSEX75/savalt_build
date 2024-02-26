import styled from 'styled-components';

export const Root = styled.header`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 3%;
    box-sizing: border-box;
    background-color: #efefef;
    width: 100%;
    height: 5.3rem;
    z-index: 1;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.29);
    @media (max-width: 640px) {
        display: flex;
    }
`;

export const LogoManagersPhoneWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 0.6rem;
`;

export const ManagersPhoneWrapper = styled.div`
    max-width: 13.6rem;
`;

export const Logo = styled.img`
    width: 7.5rem;
`;
