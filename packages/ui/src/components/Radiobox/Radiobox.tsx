import {
    Radiobox as BaseRadiobox,
    RadioboxProps as BaseRadioboxProps,
} from '@salutejs/plasma-core/components/Radiobox';
import styled from 'styled-components';

import type { InteractionProps } from '../../mixins';
import { basebox } from '../Basebox';

export interface RadioboxProps extends BaseRadioboxProps, InteractionProps {}

/**
 * Переключатель, или *радиокнопка*.
 */
export const Radiobox = styled(BaseRadiobox)<RadioboxProps>`
    ${basebox};
`;

Radiobox.defaultProps = {
    ...BaseRadiobox.defaultProps,
    scaleOnInteraction: true,
};
