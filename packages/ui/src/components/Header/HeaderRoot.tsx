import React from 'react';
import styled, { css } from 'styled-components';
import { scalingPixelBasis } from '@salutejs/plasma-tokens';

import { mediaQuery } from '../../utils/mediaQuery';

import { StyledHeaderBackButton } from './HeaderBack';
import { HeaderSubtitle } from './HeaderSubtitle';

const height = 36 / scalingPixelBasis;
const paddingY = 30 / scalingPixelBasis;

const StyledHeaderRoot = styled.header`
    position: relative;

    display: flex;
    align-items: center;
    box-sizing: content-box;

    width: 100%;
    height: ${height}rem;
    padding-top: ${paddingY}rem;
    padding-bottom: ${paddingY}rem;

    ${({ theme }) => css`
        ${mediaQuery(
            'XL',
            theme.deviceScale,
        )(css`
            & ${StyledHeaderBackButton} {
                display: none;
            }
        `)}
        ${mediaQuery(
            'S',
            theme.deviceScale,
        )(css`
            & ${HeaderSubtitle} {
                display: none;
            }
            & ${StyledHeaderBackButton} {
                position: static;
                margin-right: ${16 / scalingPixelBasis}rem;
            }
        `)}
    `}
`;

export const HeaderRoot: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...rest }) => {
    return <StyledHeaderRoot {...rest}>{children}</StyledHeaderRoot>;
};
