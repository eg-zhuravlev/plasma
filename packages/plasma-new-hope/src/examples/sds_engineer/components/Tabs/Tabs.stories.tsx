import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { styled } from '@linaria/react';

import { tabsConfig } from '../../../../components/Tabs';
import { mergeConfig } from '../../../../engines';
import { argTypesFromConfig, WithTheme } from '../../../_helpers';
import { IconMic } from '../../../../components/_Icon';

import { config } from './Tabs.config';
import { Tabs } from './Tabs';
import { TabItem } from './TabItem';
import { TabsController } from './TabsController';

const tabItemViews = ['clear', 'default', 'divider', 'secondary'];

type CustomStoryTabsProps = {
    tabItemView: string;
    itemsNumber?: number;
    animated?: boolean;
    label?: string;
    showLeftContent: boolean;
    showRightContent: boolean;
};

type StoryTabsProps = ComponentProps<typeof Tabs> & CustomStoryTabsProps;

const meta: Meta<StoryTabsProps> = {
    title: 'sds_engineer/Tabs',
    component: Tabs,
    decorators: [WithTheme],
    argTypes: {
        ...argTypesFromConfig(mergeConfig(tabsConfig, config)),
        tabItemView: {
            options: tabItemViews,
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

const StoryDefault = (props: StoryTabsProps) => {
    const {
        itemsNumber,
        label,
        view,
        disabled,
        stretch,
        pilled,
        animated,
        tabItemView,
        size,
        showLeftContent,
        showRightContent,
    } = props;
    const items = Array(itemsNumber).fill(0);
    const secondItems = Array(10).fill(0);
    const [index, setIndex] = useState(0);
    const [secondIndex, setSecondIndex] = useState(0);
    const [controllerIndex, setControllerIndex] = useState(0);

    const itemsController = Array(itemsNumber).fill({
        label,
        view: tabItemView,
        contentLeft: showLeftContent && <IconMic size="xs" color="inherit" />,
        contentRight: showRightContent && <div>Text</div>,
        animated,
        pilled,
        size,
    });

    return (
        <>
            <h3>Tabs with auto width</h3>
            <Tabs view={view} stretch={stretch} pilled={pilled} disabled={disabled} size={size}>
                {items.map((_, i) => (
                    <TabItem
                        key={`item:${i}`}
                        view={tabItemView}
                        selected={i === index}
                        onClick={() => !disabled && setIndex(i)}
                        tabIndex={!disabled ? 0 : -1}
                        disabled={disabled}
                        pilled={pilled}
                        animated={animated}
                        contentLeft={showLeftContent && <IconMic size="xs" color="inherit" />}
                        contentRight={showRightContent && <div>Text</div>}
                        size={size}
                    >
                        {label}
                    </TabItem>
                ))}
            </Tabs>

            <h3>Tabs with fixed width</h3>
            <Tabs
                view={view}
                stretch={stretch}
                pilled={pilled}
                disabled={disabled}
                size={size}
                style={{ width: '28.5rem' }}
            >
                {secondItems.map((_, i) => (
                    <TabItem
                        key={`item:${i}`}
                        view={tabItemView}
                        selected={i === secondIndex}
                        onClick={() => !disabled && setSecondIndex(i)}
                        tabIndex={!disabled ? 0 : -1}
                        disabled={disabled}
                        pilled={pilled}
                        animated={animated}
                        contentLeft={showLeftContent && <IconMic size="xs" color="inherit" />}
                        contentRight={showRightContent && <div>Text</div>}
                        size={size}
                    >
                        {label}
                    </TabItem>
                ))}
            </Tabs>

            <h3>Tabs with arrow navigation</h3>
            <TabsController
                items={itemsController}
                index={controllerIndex}
                onIndexChange={(i) => setControllerIndex(i)}
                view={view}
                pilled={pilled}
                stretch={stretch}
                disabled={disabled}
                size={size}
            />
        </>
    );
};

export const Default: StoryObj<StoryTabsProps> = {
    args: {
        size: 'xs',
        itemsNumber: 4,
        tabItemView: 'divider',
        disabled: false,
        stretch: false,
        pilled: false,
        animated: true,
        view: 'divider',
        label: 'Label',
        showLeftContent: false,
        showRightContent: false,
    },
    render: (args) => <StoryDefault {...args} />,
};

const StyledMultipleContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1rem;
`;

const StoryMultiple = ({
    itemsNumber,
    label,
    view,
    disabled,
    stretch,
    pilled,
    animated,
    tabItemView,
    size,
    showLeftContent,
    showRightContent,
}: StoryTabsProps) => {
    const items = Array(itemsNumber).fill({
        label,
        view: tabItemView,
        contentLeft: showLeftContent && <IconMic size="xs" color="inherit" />,
        contentRight: showRightContent && <div>Text</div>,
        animated,
        pilled,
        size,
    });

    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);

    return (
        <StyledMultipleContainer>
            <TabsController
                items={items}
                index={index1}
                onIndexChange={(i) => setIndex1(i)}
                view={view}
                pilled={pilled}
                stretch={stretch}
                disabled={disabled}
                size={size}
                style={{ width: '20rem' }}
                autoscroll
            />
            <TabsController
                items={items}
                index={index2}
                onIndexChange={(i) => setIndex2(i)}
                view={view}
                pilled={pilled}
                stretch={stretch}
                disabled={disabled}
                size={size}
                style={{ width: '20rem' }}
                autoscroll
            />
        </StyledMultipleContainer>
    );
};

export const Multiple: StoryObj<StoryTabsProps> = {
    args: {
        size: 'xs',
        itemsNumber: 6,
        tabItemView: 'divider',
        disabled: false,
        stretch: false,
        pilled: false,
        animated: true,
        view: 'divider',
        label: 'Label',
        showLeftContent: false,
        showRightContent: false,
    },
    render: (args) => <StoryMultiple {...args} />,
};
