import React from 'react';
import styled from 'styled-components';
import {
    CheckboxProps as BaseProps,
    CheckboxInput as Input,
    CheckboxLabel as Label,
    CheckboxDescription as Description,
} from '@salutejs/plasma-core';
import { white } from '@salutejs/plasma-tokens';

import { InteractionProps } from '../../mixins';
import { Root, Trigger } from '../Checkbox/Checkbox';

export interface RadioboxProps extends BaseProps, InteractionProps {}

const StyledTrigger = styled(Trigger)`
    border-radius: 1.125rem;
`;
const StyledEllipse = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 0.625rem;
    transition: transform 0.1s ease-in-out;
    transform: scale(0);
    background-color: ${white};

    /* stylelint-disable-next-line selector-nested-pattern, selector-type-no-unknown */
    ${Input}:checked ~ ${Trigger} & {
        transform: scale(1);
    }
`;

/**
 * Переключатель, или *радиокнопка*.
 */
// eslint-disable-next-line prefer-arrow-callback
export const Radiobox = React.forwardRef<HTMLInputElement, RadioboxProps>(function Radiobox(
    {
        id,
        name,
        value,
        label,
        description,
        checked,
        defaultChecked,
        scaleOnInteraction,
        focused,
        disabled,
        tabIndex,
        onChange,
        onFocus,
        onBlur,
        ...rest
    },
    ref,
) {
    return (
        <Root disabled={disabled} {...rest}>
            <Input
                id={id}
                ref={ref}
                type="radio"
                name={name}
                value={value}
                checked={checked}
                defaultChecked={defaultChecked}
                disabled={disabled}
                tabIndex={tabIndex}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <StyledTrigger $type="checkbox" $focused={focused} $scaleOnInteraction={scaleOnInteraction}>
                <StyledEllipse />
            </StyledTrigger>
            {label && <Label>{label}</Label>}
            {description && <Description>{description}</Description>}
        </Root>
    );
});
