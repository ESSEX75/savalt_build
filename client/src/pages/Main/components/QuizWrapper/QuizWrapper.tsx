import React from 'react';
import { Root, TitleWrapper } from './styles';
import { Link, Typography } from '@mainComponents/index';
import { Quiz } from './components';

const QuizWrapper = () => {
    return (
        <Root id="quiz">
            <TitleWrapper>
                <Typography tag="h2" variant="title1bold1center" color="orange">
                    ВЫБЕРИТЕ, ЧТО ВАМ ВАЖНО В РАБОТЕ, И МЫ С ВАМИ СВЯЖЕМСЯ
                </Typography>
                <Typography tag="p" variant="body1regular1center" color="black">
                    Или просто позвоните нам:
                    <Link
                        color="orange"
                        variant="base"
                        href="tel:+79222144787"
                        display="nonFlex"
                        fontSize="description"
                        linkSize="base"
                    >
                        +7 (922) 214-47-87
                    </Link>
                    . Виктория
                </Typography>
            </TitleWrapper>
            <Quiz />
        </Root>
    );
};

export default QuizWrapper;
