/* eslint-disable */
import React from 'react';
import ReactDom from 'react-dom';
import { mount } from '@cypress/react';
import { IconEye } from '@salutejs/plasma-icons';

import { Badge } from '.';
import { CypressTestDecorator, Padme, SpaceMe } from '../../helpers/CypressHelpers';

const Icon = () => <IconEye color="inherit" size="xs" />;

describe('plasma-web: Badge', () => {
    it('_view', () => {
        mount(
            <CypressTestDecorator>
                <Badge view="primary" text="Badge_view_primary" contentLeft={<Icon />} />
                <SpaceMe />
                <Badge view="primary" contentLeft={<Icon />} />
                <Padme />
                <Badge view="secondary" text="Badge_view_secondary" contentLeft={<Icon />} />
                <SpaceMe />
                <Badge view="secondary" contentLeft={<Icon />} />
                <Padme />
                <Badge view="success" text="Badge_view_success" contentLeft={<Icon />} />
                <SpaceMe />
                <Badge view="success" contentLeft={<Icon />} />
                <Padme />
                <Badge view="warning" text="Badge_view_warning" contentLeft={<Icon />} />
                <SpaceMe />
                <Badge view="warning" contentLeft={<Icon />} />
                <Padme />
                <Badge view="critical" text="Badge_view_critical" contentLeft={<Icon />} />
                <SpaceMe />
                <Badge view="critical" contentLeft={<Icon />} />
                <Padme />
            </CypressTestDecorator>,
            { ReactDom },
        );
        cy.matchImageSnapshot();
    });
});
