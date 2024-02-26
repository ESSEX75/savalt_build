import styled, { createGlobalStyle } from 'styled-components';

export const Root = styled.div`
    background-color: rgba(0, 0, 0, 0.25);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    animation-duration: 300ms;

    @media (max-width: 640px) {
        background-color: #ffffff;
    }
`;

export const Scrollbar = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export const RootContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2.5rem;
    border-radius: 10px;
    background-color: #ffffff;
    width: 26.1rem;
    height: auto;
    row-gap: 3rem;

    @media (max-width: 640px) {
        width: 83vw;
        padding: 1.5rem 2rem;
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;
`;

export const CloseWrapper = styled.div`
    position: relative;
    top: 2.05rem;
    right: 0.5rem;
    align-self: flex-end;

    @media (max-width: 640px) {
        top: 0;
        right: 1rem;
    }
`;

export const ContentCloseWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
