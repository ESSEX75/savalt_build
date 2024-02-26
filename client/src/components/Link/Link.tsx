import React from 'react';
import { ILink } from './types';
import { LinkStyle, InternalIcon, Wrapper } from './styles';

const Link: React.FC<ILink> = ({ children, variant, href, color, display, src, fontSize, linkSize }) => {
    return (
        <LinkStyle
            href={href}
            variant={variant}
            color={color}
            display={display}
            fontSize={fontSize}
            linkSize={linkSize}
        >
            {src ? (
                <Wrapper>
                    <InternalIcon src={src} />
                    {children}
                </Wrapper>
            ) : (
                children
            )}
        </LinkStyle>
    );
};

export default Link;
