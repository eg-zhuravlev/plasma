import React from 'react';

import { IconRoot, IconProps } from '../IconRoot';

export const IconButton3x2CFill: React.FC<IconProps> = ({ size = 's', color, className }) => {
    return <IconRoot className={className} size={size} color={color} icon="button3x2CFill" />;
};