import React from 'react';
import {
    Root,
    LogoManagersPhoneWrapper,
    Logo,
    ManagersPhoneWrapper,
    ContentWrapper,
    CoverImage,
    DescriptionWrapper,
} from './styles';
import { Typography, Link } from '@mainComponents/index';
import logo from '@Images/logo.png';
import coverImage from './images/coverImage.jpg';
import arrowOnButton from './images/arrowOnButton.svg';

const Home = () => {
    return (
        <Root>
            <ContentWrapper>
                <LogoManagersPhoneWrapper>
                    <Logo src={logo} />
                    <ManagersPhoneWrapper>
                        <Typography tag="p" variant="body1regular1left" color="black">
                            Менеджер по персоналу Виктория:&nbsp;
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
                        </Typography>
                    </ManagersPhoneWrapper>
                </LogoManagersPhoneWrapper>
                <Typography tag="h1" variant="head1bold1left" color="orange">
                    ОТКРЫТ КОНКУРС НА ВАКАНСИЮ ВОДИТЕЛЬ КАТЕГОРИИ СЕ (Е)
                </Typography>
                <DescriptionWrapper>
                    <Typography tag="p" variant="smallTitle1bold1left" color="black">
                        Екатеринбург и Свердловская обл.
                    </Typography>
                    <Typography tag="p" variant="body1regular1left" color="black">
                        Оф. белая ЗП до 260 000 ₽ + фиксированный график и больничные.
                        <Typography tag="strong" variant="body1regular1left" color="black">
                            Обязателен опыт от 1 года
                        </Typography>
                    </Typography>
                </DescriptionWrapper>
                <Link
                    color="white"
                    variant="baseButton"
                    href="#quiz"
                    display="centeringButtonContent"
                    src={arrowOnButton}
                    fontSize="button"
                    linkSize="button"
                >
                    Перейти к анкете кандидата
                </Link>
            </ContentWrapper>
            <CoverImage src={coverImage} alt="Грузовик Savalt" />
        </Root>
    );
};
export default Home;
