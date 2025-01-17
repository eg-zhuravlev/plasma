import React, { useCallback, useState, useRef } from 'react';
import type { ComponentProps } from 'react';
import { action } from '@storybook/addon-actions';
import type { StoryObj, Meta } from '@storybook/react';

import { IconPlaceholder, disableProps, InSpacingDecorator } from '../../helpers';

import { Button } from '.';
import type { ButtonProps as Base } from '.';

type ButtonProps = ComponentProps<Base>;

const views = ['accent', 'default', 'secondary', 'success', 'warning', 'critical', 'clear', 'dark', 'black', 'white'];
const sizes = ['l', 'm', 's', 'xs', 'xxs'];
const stretching = ['auto', 'filled', 'fixed'];
const pins = [
    'square-square',
    'square-clear',
    'clear-square',
    'clear-clear',
    'clear-circle',
    'circle-clear',
    'circle-circle',
    '',
];

const contentTypes = ['Text', 'Text+Left', 'Text+Right', 'Left'];

const onClick = action('onClick');
const onFocus = action('onFocus');
const onBlur = action('onBlur');

const meta: Meta<ButtonProps> = {
    title: 'Controls/Button',
    decorators: [InSpacingDecorator],
    component: Button,
    argTypes: {
        contentType: {
            options: contentTypes,
            control: {
                type: 'select',
            },
        },
        text: {
            control: {
                type: 'text',
            },
        },
        size: {
            options: sizes,
            control: {
                type: 'inline-radio',
            },
        },
        pin: {
            options: pins,
            control: {
                type: 'select',
            },
        },
        stretching: {
            options: stretching,
            control: {
                type: 'select',
            },
        },
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
        ...disableProps(['theme', 'loader', 'onClick', 'onFocus', 'onBlur', 'contentLeft', 'contentRight']),
    },
};

export default meta;

type StoryButtonProps = ButtonProps & { contentType: string; isLoading?: boolean };

const iconSize = {
    l: 's',
    m: 's',
    s: 's',
    xs: 'xs',
    xxs: 'xs',
};

export const Default: StoryObj<StoryButtonProps> = {
    args: {
        view: 'primary',
        size: 'l',
        disabled: false,
        text: 'Label',
        contentType: 'Text',
        isLoading: false,
        focused: true,
        square: false,
        stretching: 'auto',
        onClick,
        onFocus,
        onBlur,
    },
    render: ({ contentType, text, ...rest }) => (
        <Button
            autoFocus
            text={contentType !== 'Left' && text}
            contentLeft={
                (contentType === 'Left' || contentType === 'Text+Left') && (
                    <IconPlaceholder size={iconSize[rest.size]} />
                )
            }
            contentRight={contentType === 'Text+Right' && <IconPlaceholder size={iconSize[rest.size]} />}
            {...rest}
        />
    ),
};

const StoryLoading = ({ contentType, text, isLoading, onClick: _onClick, ...rest }: StoryButtonProps) => {
    const [loading, setLoading] = useState(isLoading);
    const [count, setCount] = useState(0);
    const intervalId = useRef<number | undefined>();

    const onClickHandle = useCallback(
        (event) => {
            event.persist();

            _onClick?.(event);

            setLoading(true);

            intervalId.current = window.setInterval(() => {
                setCount((prev) => {
                    return prev + 1;
                });
            }, 1_000);
        },
        [_onClick],
    );

    if (count === 6) {
        setLoading(false);
        setCount(0);
        window.clearInterval(intervalId.current);
    }

    return (
        <Button
            autoFocus
            onClick={onClickHandle}
            text={contentType !== 'Left' && text}
            contentLeft={
                (contentType === 'Left' || contentType === 'Text+Left') && (
                    <IconPlaceholder size={iconSize[rest.size]} />
                )
            }
            contentRight={contentType === 'Text+Right' && <IconPlaceholder size={iconSize[rest.size]} />}
            isLoading={loading}
            loader={<div>Loading - {count}</div>}
            {...rest}
        />
    );
};

export const Loading: StoryObj<StoryButtonProps> = {
    args: {
        ...Default.args,
        text: 'Start loading',
    },
    render: (args) => <StoryLoading {...args} />,
};
