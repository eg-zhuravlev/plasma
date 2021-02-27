import { Checkbox as BaseCheckbox } from '@salutejs/plasma-core/components/Checkbox';
import styled from 'styled-components';

import { basebox } from '../Basebox';

export type { CheckboxProps } from '@salutejs/plasma-core/components/Checkbox';

/**
 * Флажок или *чекбокс*. Позволяет пользователю управлять параметром с двумя состояниями — ☑ включено и ☐ отключено.
 */
export const Checkbox = styled(BaseCheckbox)`
    ${basebox};
`;
