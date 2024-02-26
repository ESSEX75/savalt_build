import React from 'react';
import { Root, RootContent, TextWrapper, CloseWrapper, ContentCloseWrapper, Scrollbar } from './styles';
import { IErrorModal } from './types';
import { Button, Typography } from '@mainComponents/index';

const ErrorModal: React.FC<IErrorModal> = ({ setActiveErrorModal, setActiveSubmit }) => {
    const handleClick = () => {
        setActiveErrorModal(false);
        setActiveSubmit(false);
    };
    return (
        <Root onClick={handleClick}>
            <Scrollbar />
            <ContentCloseWrapper>
                <CloseWrapper>
                    <Button onClick={handleClick} variant="close" type="button"></Button>
                </CloseWrapper>
                <RootContent onClick={(e) => e.stopPropagation()}>
                    <TextWrapper>
                        <Typography tag="h3" variant="smallTitle1bold1center" color="error">
                            Ошибка!
                        </Typography>
                        <Typography tag="p" variant="body1regular1center" color="black">
                            Ой, что то пошло не так, попробуйте еще раз позже
                        </Typography>
                    </TextWrapper>
                    <Button onClick={handleClick} variant="control" type="button">
                        Все понятно
                    </Button>
                </RootContent>
            </ContentCloseWrapper>
        </Root>
    );
};

export default ErrorModal;
