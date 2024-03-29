/* eslint-disable */
import React, { useState } from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

enum Codes {
    'ArrowUp' = 38,
    'ArrowDown' = 40,
    'Enter' = 13,
    'Space' = 32,
    'Esc' = 27,
    'PageUp' = 33,
    'PageDown' = 34,
}

const id = 'test-select';
const items = [
    { value: 'each', label: 'Каждый' },
    { value: 'hunter', label: 'Охотник', isDisabled: true },
    { value: 'wants', label: 'Желает' },
    {
        value: 'toKnow',
        label: 'Знать',
        items: [
            { value: '_fullText', label: 'Каждый охотник желает знать, где сидит фазан' },
            { value: '_thePheasant', label: 'Фазан' },
            { value: '_is', label: 'Сидит' },
        ],
    },
    { value: 'where', label: 'Где' },
    { value: 'is', label: 'Сидит' },
    { value: 'thePheasant', label: 'Фазан' },
    { value: 'fullText', label: 'Каждый охотник желает знать, где сидит фазан' },
];

describe('plasma-hope: Select', () => {
    const Select = getComponent('Select');

    const ControlledSelect = () => {
        const [value, setValue] = useState(null);

        return (
            <Select
                id={id}
                value={value}
                onChange={(v) => setValue(v)}
                items={items}
                placeholder="Попробуй радугу"
                helperText="Skittles"
            />
        );
    };

    it('default', () => {
        mount(
            <CypressTestDecorator>
                <Select items={items} placeholder="Попробуй радугу" helperText="Skittles" />
            </CypressTestDecorator>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('disabled', () => {
        mount(
            <CypressTestDecorator>
                <Select disabled items={items} placeholder="Попробуй радугу" helperText="Skittles" />
            </CypressTestDecorator>,
        );

        cy.get('button').click({ force: true });

        cy.matchImageSnapshot();
    });

    it('empty', () => {
        mount(
            <CypressTestDecorator>
                <Select items={[]} placeholder="Пустой список" helperText="Empty" />
            </CypressTestDecorator>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('multiselect', () => {
        mount(
            <CypressTestDecorator>
                <Select
                    multiselect
                    value={['each', 'wants']}
                    items={items}
                    placeholder="Попробуй радугу"
                    helperText="Skittles"
                />
            </CypressTestDecorator>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('item click', () => {
        mount(
            <CypressTestDecorator>
                <ControlledSelect />
            </CypressTestDecorator>,
        );

        cy.get('button').click();
        cy.get('li').contains('Каждый').click({ force: true });
        cy.get('button').click();

        cy.matchImageSnapshot();
    });

    it('handling dropdown menu height', () => {
        mount(
            <CypressTestDecorator>
                <Select
                    items={items}
                    placeholder="Попробуй радугу"
                    helperText="Skittles"
                    listOverflow="scroll"
                    listHeight={9}
                />
            </CypressTestDecorator>,
        );

        cy.get('button').click();

        cy.matchImageSnapshot();
    });
});

describe('plasma-hope: Select a11y - keyboard control', () => {
    const Select = getComponent('Select');

    const ControlledSelect = () => {
        const [value, setValue] = useState(null);

        return (
            <Select
                id={id}
                value={value}
                onChange={(v) => setValue(v)}
                items={items}
                placeholder="Попробуй радугу"
                helperText="Skittles"
            />
        );
    };

    it('open with "ArrowDown", "Space" and "Enter"', () => {
        mount(
            <CypressTestDecorator>
                <ControlledSelect />
            </CypressTestDecorator>,
        );

        // Open with "ArrowDown"
        cy.root().get('[role="combobox"]').focus().trigger('keydown', { keyCode: Codes.ArrowDown });
        cy.get('[role="combobox"]').should('have.attr', 'aria-expanded', 'true');
        // Check is first item is in focus
        cy.get('[role="combobox"]').should('have.attr', 'aria-activedescendant', `${id}-dropdown-item-0`);

        // Close with "Esc"
        cy.root().get('[role="combobox"]').focus().trigger('keydown', { keyCode: Codes.Esc });
        cy.get('[role="combobox"]').should('have.attr', 'aria-expanded', 'false');

        // Open with "Space"
        cy.root().get('[role="combobox"]').focus().trigger('keydown', { keyCode: Codes.Space });
        cy.get('[role="combobox"]').should('have.attr', 'aria-expanded', 'true');

        // Close again
        cy.root().get('[role="combobox"]').focus().trigger('keydown', { keyCode: Codes.Esc });
        cy.get('[role="combobox"]').should('have.attr', 'aria-expanded', 'false');

        // Open with "Enter"
        cy.root().get('[role="combobox"]').focus().trigger('keydown', { keyCode: Codes.Enter });
        cy.get('[role="combobox"]').should('have.attr', 'aria-expanded', 'true');

        // Close again
        cy.root().get('[role="combobox"]').focus().trigger('keydown', { keyCode: Codes.Esc });
        cy.get('[role="combobox"]').should('have.attr', 'aria-expanded', 'false');
    });

    it('navigate with "ArrowDown" and "ArrowUp" and select', () => {
        mount(
            <CypressTestDecorator>
                <ControlledSelect />
            </CypressTestDecorator>,
        );

        // Open with "Enter"
        cy.root().get('[role="combobox"]').focus().trigger('keydown', { keyCode: Codes.Enter });
        cy.get('[role="combobox"]').should('have.attr', 'aria-expanded', 'true');

        // Navigate to the second item (it is disabled)
        cy.root().get('[role="combobox"]').focus().trigger('keydown', { keyCode: Codes.ArrowDown });
        cy.get('[role="combobox"]').should('have.attr', 'aria-activedescendant', `${id}-dropdown-item-1`);

        // Select navigated item with "Enter"
        cy.root().get('[role="combobox"]').focus().trigger('keydown', { keyCode: Codes.Enter });
        cy.get('[role="combobox"]').should(($p) => {
            // select should not contain a value
            expect($p).not.contain(items[1].label);
            // select should not be closed
            expect($p.attr('aria-expanded')).to.eq('true');
        });

        // Open with enter
        cy.root().get('[role="combobox"]').focus().trigger('keydown', { keyCode: Codes.Enter });
        cy.get('[role="combobox"]').should('have.attr', 'aria-expanded', 'true');

        // Navigate to the first item
        cy.root().get('[role="combobox"]').focus().trigger('keydown', { keyCode: Codes.ArrowUp });
        cy.get('[role="combobox"]').should('have.attr', 'aria-activedescendant', `${id}-dropdown-item-0`);

        // Select navigated item with "Space"
        cy.root().get('[role="combobox"]').focus().trigger('keydown', { keyCode: Codes.Space });
        cy.get('[role="combobox"]').should(($p) => {
            // select should contain a value
            expect($p).to.contain('Каждый');
            // select should be closed
            expect($p.attr('aria-expanded')).to.eq('false');
        });

        // First item in the list must be selected
        cy.get(`#${id}-dropdown-item-0`).should('have.attr', 'aria-selected', 'true');
    });

    it('navigate with "PageDown" and "PageUp"', () => {
        mount(
            <CypressTestDecorator>
                <ControlledSelect />
            </CypressTestDecorator>,
        );

        // Open with "Enter"
        cy.root().get('[role="combobox"]').focus().trigger('keydown', { keyCode: Codes.Enter });
        cy.get('[role="combobox"]').should('have.attr', 'aria-expanded', 'true');

        // Navigate to the last item
        cy.root().get('[role="combobox"]').focus().trigger('keydown', { keyCode: Codes.PageDown });
        cy.get('[role="combobox"]').should('have.attr', 'aria-activedescendant', `${id}-dropdown-item-7`);

        // Navigate to the first item
        cy.root().get('[role="combobox"]').focus().trigger('keydown', { keyCode: Codes.PageUp });
        cy.get('[role="combobox"]').should('have.attr', 'aria-activedescendant', `${id}-dropdown-item-0`);
    });

    it('search by typing', () => {
        mount(
            <CypressTestDecorator>
                <ControlledSelect />
            </CypressTestDecorator>,
        );

        // Open with "Enter"
        cy.root().get('[role="combobox"]').focus().trigger('keydown', { keyCode: Codes.Enter });

        // Type a letter
        cy.root().get('[role="combobox"]').focus().trigger('keydown', { key: 'Ж' });
        cy.get('[role="combobox"]').should('have.attr', 'aria-activedescendant', `${id}-dropdown-item-2`);

        cy.wait(500);

        // Type a full word
        cy.root()
            .get('[role="combobox"]')
            .focus()
            .trigger('keydown', { key: 'З' })
            .trigger('keydown', { key: 'Н' })
            .trigger('keydown', { key: 'А' })
            .trigger('keydown', { key: 'Т' })
            .trigger('keydown', { key: 'Ь' });
        cy.get('[role="combobox"]').should('have.attr', 'aria-activedescendant', `${id}-dropdown-item-3`);

        // Close and open
        cy.root()
            .get('[role="combobox"]')
            .focus()
            .trigger('keydown', { keyCode: Codes.Esc })
            .trigger('keydown', { keyCode: Codes.Enter });

        // Type, something, that doesnt exist
        cy.root().get('[role="combobox"]').focus().trigger('keydown', { key: 'W' });
        cy.get('[role="combobox"]').should('have.attr', 'aria-activedescendant', `${id}-dropdown-item-0`);
    });
});
// import React, { FC, PropsWithChildren, useState } from 'react';
// import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
// import { standard as standardTypo } from '@salutejs/plasma-typo';
// import { createGlobalStyle } from 'styled-components';
//
// const id = 'test-select';
//
// const StandardTypoStyle = createGlobalStyle(standardTypo);
//
// const items = [
//     { value: 'each', label: 'Каждый' },
//     { value: 'hunter', label: 'Охотник', isDisabled: true },
//     { value: 'wants', label: 'Желает' },
//     { value: 'toKnow', label: 'Знать' },
//     { value: 'where', label: 'Где' },
//     { value: 'is', label: 'Сидит' },
//     { value: 'thePheasant', label: 'Фазан' },
//     { value: 'fullText', label: 'Каждый охотник желает знать, где сидит фазан' },
// ];
//
// describe('plasma-b2c: Select', () => {
//     const Select = getComponent('Select');
//
//     const ControlledSelect = () => {
//         const [value, setValue] = useState(null);
//
//         return (
//             <Select
//                 id={id}
//                 value={value}
//                 onChange={setValue}
//                 items={items}
//                 placeholder="Выберите пример"
//                 helperText="Заполните пример"
//             />
//         );
//     };
//
//     const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
//         <CypressTestDecorator>
//             <StandardTypoStyle />
//             {children}
//         </CypressTestDecorator>
//     );
//
//     it('default', () => {
//         mount(
//             <CypressTestDecoratorWithTypo>
//                 <ControlledSelect />
//             </CypressTestDecoratorWithTypo>,
//         );
//
//         cy.get('button').click();
//
//         cy.matchImageSnapshot();
//     });
//
//     it('disabled', () => {
//         mount(
//             <CypressTestDecoratorWithTypo>
//                 <Select disabled items={items} placeholder="Выберите пример" helperText="Заполните пример" />
//             </CypressTestDecoratorWithTypo>,
//         );
//
//         cy.get('button').click({ force: true });
//
//         cy.matchImageSnapshot();
//     });
//
//     it('empty', () => {
//         mount(
//             <CypressTestDecoratorWithTypo>
//                 <Select items={[]} placeholder="Выберите пример" helperText="Заполните пример" />
//             </CypressTestDecoratorWithTypo>,
//         );
//
//         cy.get('button').click();
//
//         cy.matchImageSnapshot();
//     });
//
//     it('multiselect', () => {
//         mount(
//             <CypressTestDecoratorWithTypo>
//                 <Select
//                     multiselect
//                     value={['each', 'wants']}
//                     items={items}
//                     placeholder="Выберите пример"
//                     helperText="Заполните пример"
//                 />
//             </CypressTestDecoratorWithTypo>,
//         );
//
//         cy.get('button').click();
//
//         cy.matchImageSnapshot();
//     });
//
//     it('item click', () => {
//         mount(
//             <CypressTestDecoratorWithTypo>
//                 <ControlledSelect />
//             </CypressTestDecoratorWithTypo>,
//         );
//
//         cy.get('button').click();
//         cy.get('div').contains('Каждый').click({ force: true });
//         cy.get('button').click();
//
//         cy.matchImageSnapshot();
//     });
//
//     it('handling dropdown menu height', () => {
//         mount(
//             <CypressTestDecoratorWithTypo>
//                 <Select items={items} placeholder="Пустой список" helperText="Заполните пример" listHeight={9} />
//             </CypressTestDecoratorWithTypo>,
//         );
//
//         cy.get('button').click();
//
//         cy.matchImageSnapshot();
//     });
// });
//
// describe('plasma-hope: Select a11y - keyboard control', () => {
//     const Select = getComponent('Select');
//
//     const ControlledSelect = () => {
//         const [value, setValue] = useState(null);
//
//         return (
//             <Select
//                 id={id}
//                 value={value}
//                 onChange={setValue}
//                 items={items}
//                 placeholder="Выберите пример"
//                 helperText="Заполните пример"
//             />
//         );
//     };
//
//     it('open with "ArrowDown", "Space" and "Enter"', () => {
//         mount(
//             <CypressTestDecorator>
//                 <ControlledSelect />
//             </CypressTestDecorator>,
//         );
//
//         cy.get('body').tab();
//         cy.get('.select-target').should('be.focused');
//
//         // Open with "ArrowDown"
//         cy.get('body').trigger('keydown', { code: 'ArrowDown' });
//         cy.get('.popover-root').should('be.visible');
//
//         // Close with "Esc"
//         cy.get('body').trigger('keydown', { code: 'Escape' });
//         cy.get('.select-target').should('be.focused');
//         cy.get('.popover-root').should('not.be.visible');
//
//         // Open with "Space"
//         cy.get('body').trigger('keydown', { code: 'Space' });
//         cy.get('.popover-root').should('be.visible');
//
//         // Close again
//         cy.get('body').trigger('keydown', { code: 'Escape' });
//         cy.get('.select-target').should('be.focused');
//         cy.get('.popover-root').should('not.be.visible');
//
//         // Open with "Enter"
//         cy.get('body').trigger('keydown', { code: 'Space' });
//         cy.get('.popover-root').should('be.visible');
//     });
//
//     it('choosing 3rd item', () => {
//         mount(
//             <CypressTestDecorator>
//                 <ControlledSelect />
//             </CypressTestDecorator>,
//         );
//
//         cy.get('body').tab();
//         cy.get('.select-target').should('be.focused');
//         cy.get('body').trigger('keydown', { code: 'ArrowDown' });
//         // eslint-disable-next-line cypress/no-unnecessary-waiting
//         cy.wait(0);
//         cy.focused()
//             .trigger('keydown', { code: 'ArrowDown' })
//             .trigger('keydown', { code: 'ArrowDown' })
//             .trigger('keydown', { code: 'Enter' });
//         cy.get('.select-target-text').should('have.text', items[2].label);
//         cy.get('.popover-root').should('not.be.visible');
//     });
// });
