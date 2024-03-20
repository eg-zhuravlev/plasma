import React, { useCallback, useContext, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';
import { Button, TextM, Tooltip } from '@salutejs/plasma-b2c';
import { IconTrashFilled, IconEye, IconEdit } from '@salutejs/plasma-icons';

import { iconButtonFade } from '../mixins';
import { normalizeValue, getHEXAColor, TokenContext, getBackgroundColor, getHSLARawColor } from '../../utils';
import type { TokenValue } from '../../types';
import { PreviewColor } from '../PreviewColor/PreviewColor';

const IconButtons = styled.div`
    display: flex;
    min-width: 12rem;
    justify-content: end;
`;

const IconButton = styled(Button)`
    opacity: 0;
    height: 1.5rem;

    ${iconButtonFade};
`;

const StyledToken = styled(TextM)<{ enabled?: boolean }>`
    font-family: inherit;

    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 83rem;

    margin: 1rem 0;
    margin-left: 2rem;

    ${({ enabled }) =>
        enabled === false &&
        css`
            opacity: 0.28;
        `}

    &:hover {
        ${IconButton} {
            opacity: 0.5;
        }
    }
`;

const TokenName = styled.span<{ disable?: boolean }>`
    width: 18rem;

    cursor: default;

    ${({ disable }) =>
        disable &&
        css`
            text-decoration: line-through;
        `}
`;

const TokenHEXAValue = styled.div`
    width: 7rem;
`;

const TokenRGBAValue = styled.div`
    width: 20rem;
`;

interface TokenProps {
    section: string;
    subsection: string;
    name: string;
    data: TokenValue;
}

export const Token = ({ section, subsection, name, data }: TokenProps) => {
    const { onOpenTokenForm, onTokenDelete, onTokenEnabled, defaultData } = useContext(TokenContext);
    const [visible, setVisible] = useState(false);

    const { value, comment = '', enabled } = data;

    const normalizedValue = useMemo(() => normalizeValue(value), [value]);

    const tokenInfo = useMemo(
        () => ({
            section: {
                value: section,
            },
            subsection: {
                value: subsection,
            },
            name: {
                value: name,
            },
            value: {
                value: value,
            },
            comment: {
                value: comment,
            },
            enabled: {
                value: enabled,
            },
        }),
        [comment, enabled, name, section, subsection, value],
    );

    const onMouseEnter = () => setVisible(true);

    const onMouseLeave = () => setVisible(false);

    const onTokenEditClick = useCallback(() => {
        onOpenTokenForm(tokenInfo);
    }, [onOpenTokenForm, tokenInfo]);

    const onTokenDeleteClick = useCallback(() => {
        onTokenDelete(tokenInfo);
    }, [onTokenDelete, tokenInfo]);

    const onTokenEnabledClick = useCallback(() => {
        onTokenEnabled({
            ...tokenInfo,
            enabled: {
                value: !(enabled === undefined || enabled === true),
            },
        });
    }, [onTokenEnabled, tokenInfo, enabled]);

    const canDelete = defaultData && !defaultData['dark'][section]?.[subsection][name];

    return (
        <StyledToken enabled={enabled}>
            <Tooltip placement="top-start" isOpen={Boolean(comment) && visible} hasArrow text={comment}>
                <TokenName
                    disable={enabled === false}
                    onClick={onTokenEditClick}
                    onMouseLeave={onMouseLeave}
                    onMouseEnter={onMouseEnter}
                    // INFO: Верну как было после дизайн-ревью
                    style={{ color: name.includes('Hover') || name.includes('Active') ? 'coral' : undefined }}
                >
                    {name}
                </TokenName>
            </Tooltip>
            <PreviewColor background={getBackgroundColor(value)} borderRadius="50%" size="1rem" />
            <TokenHEXAValue>{getHEXAColor(normalizedValue)}</TokenHEXAValue>
            {/* INFO: Верну как было после дизайн-ревью */}
            <TokenRGBAValue>{getHSLARawColor(normalizedValue).toString()}</TokenRGBAValue>
            <IconButtons>
                <IconButton view="clear" onClick={onTokenEditClick} contentLeft={<IconEdit />} />
                {canDelete && (
                    <IconButton view="clear" onClick={onTokenDeleteClick} contentLeft={<IconTrashFilled />} />
                )}
                <IconButton view="clear" onClick={onTokenEnabledClick} contentLeft={<IconEye />} />
            </IconButtons>
        </StyledToken>
    );
};
