import React from 'react';
import { Root, Logo, ManagersPhoneWrapper, LogoManagersPhoneWrapper } from './styles';
import logo from '@Images/logo.png';
import { Link, Typography } from '@mainComponents/index';

const Header = () => {
    return (
        <Root>
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
                            fontSize="subtext"
                            linkSize="base"
                        >
                            +7 (922) 214-47-87
                        </Link>
                    </Typography>
                </ManagersPhoneWrapper>
            </LogoManagersPhoneWrapper>
        </Root>
    );
};

export default Header;
