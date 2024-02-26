import styled from 'styled-components';

export const AnimationWrapper = styled.div`
    width: 100%;
    animation-duration: 0.5s;
    animation-delay: 0.2s;
    animation-name: animate-fade, animate-move;
    animation-fill-mode: backwards;

    @keyframes animate-fade {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @keyframes animate-move {
        0% {
            transform: translateX(40px);
        }
        100% {
            transform: translateX(0);
        }
    }
`;
