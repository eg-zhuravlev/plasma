import { css } from '@linaria/core';

import { tokens } from '../../../../tokens';

export const base = css`
    background-color: var(${tokens.tabsBackgroundColor});

    &::after {
        content: '';
        position: absolute;
        bottom: 0.25rem;
        left: 0.25rem;
        right: 0.25rem;
        background: var(${tokens.tabsDividerColor});
        height: var(${tokens.tabsDividerHeight});
        border-radius: var(${tokens.tabsDividerBorderRadius});
    }
`;
