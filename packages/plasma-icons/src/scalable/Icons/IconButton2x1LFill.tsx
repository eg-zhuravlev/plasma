import React from 'react';

import { IconRoot, IconProps } from '../IconRoot';

export const IconButton2x1LFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon="button2x1LFill" />;
};