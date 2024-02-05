import React from 'react';

import { ZoomPlusOutline as Icon16 } from '../Icon.assets.16/ZoomPlusOutline';
import { ZoomPlusOutline as Icon24 } from '../Icon.assets.24/ZoomPlusOutline';
import { ZoomPlusOutline as Icon36 } from '../Icon.assets.36/ZoomPlusOutline';
import { IconProps, IconRoot, getIconComponent, sizeMap } from '../IconRoot';

export const IconZoomPlusOutline: React.FC<IconProps> = ({ size = 's', color, className }) => {
    const IconComponent = getIconComponent(Icon16, Icon24, Icon36, sizeMap[size].size);
    if (!IconComponent) {
        return null;
    }
    return <IconRoot className={className} size={size} color={color} icon={IconComponent} />;
};
