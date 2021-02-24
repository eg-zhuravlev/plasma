import styled from 'styled-components';
import { Switch as BaseSwitch } from '@salutejs/plasma-core/components/Switch';
import { accent, surfaceLiquid03, white } from '@salutejs/plasma-tokens';

export type { SwitchProps } from '@salutejs/plasma-core/components/Switch';

export const Switch = styled(BaseSwitch)`
    --plasma-switch-trigger-background: ${surfaceLiquid03};
    --plasma-switch-trigger-background-checked: ${accent};
    --plasma-switch-ellipse-background: ${white};
`;
