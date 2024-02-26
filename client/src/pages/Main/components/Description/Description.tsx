import React from 'react';
import { Root, ListWrapper, ListItem, ListIcon } from './styles';
import { Typography } from '@mainComponents/index';
import { DESCRIPTION_LIST } from './constants';

const Description = () => {
    return (
        <Root>
            <Typography tag="h2" variant="title1bold1center" color="orange">
                УСЛОВИЯ
            </Typography>
            <ListWrapper>
                {DESCRIPTION_LIST.map((description) => (
                    <ListItem key={description.id}>
                        <ListIcon src={description.icon} />
                        <Typography tag="p" variant="largeBody1regular1left" color="black">
                            {description.description}
                        </Typography>
                    </ListItem>
                ))}
            </ListWrapper>
        </Root>
    );
};

export default Description;
