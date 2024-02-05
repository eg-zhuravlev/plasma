import React from 'react';

import { SberbomMiniCastOutline as Icon16 } from '../Icon.assets.16/SberbomMiniCastOutline';
import { SberbomMiniCastOutline as Icon24 } from '../Icon.assets.24/SberbomMiniCastOutline';
import { SberbomMiniCastOutline as Icon36 } from '../Icon.assets.36/SberbomMiniCastOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconSberbomMiniCastOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
