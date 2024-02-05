import React from 'react';

import { SberbomMiniOutline as Icon16 } from '../Icon.assets.16/SberbomMiniOutline';
import { SberbomMiniOutline as Icon24 } from '../Icon.assets.24/SberbomMiniOutline';
import { SberbomMiniOutline as Icon36 } from '../Icon.assets.36/SberbomMiniOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSberbomMiniOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
