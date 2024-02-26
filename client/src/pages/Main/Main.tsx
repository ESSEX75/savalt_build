import React from 'react';
import { Root, MainBackground } from './styles';
import { Home, Description, QuizWrapper } from './components';

const Main = () => {
    return (
        <MainBackground>
            <Root>
                <Home />
                <Description />
                <QuizWrapper />
            </Root>
        </MainBackground>
    );
};

export default Main;
