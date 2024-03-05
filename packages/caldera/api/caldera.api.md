## API Report File for "@salutejs/caldera"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

/// <reference types="react" />

import { addFocus } from '@salutejs/plasma-new-hope/styled-components';
import { AnchorHTMLAttributes } from 'react';
import type { BaseboxProps } from '@salutejs/plasma-new-hope/styled-components';
import { bodyL } from '@salutejs/caldera-online-themes/tokens';
import { bodyLBold } from '@salutejs/caldera-online-themes/tokens';
import { bodyM } from '@salutejs/caldera-online-themes/tokens';
import { bodyMBold } from '@salutejs/caldera-online-themes/tokens';
import { bodyS } from '@salutejs/caldera-online-themes/tokens';
import { bodySBold } from '@salutejs/caldera-online-themes/tokens';
import { bodyXS } from '@salutejs/caldera-online-themes/tokens';
import { bodyXSBold } from '@salutejs/caldera-online-themes/tokens';
import { bodyXXS } from '@salutejs/caldera-online-themes/tokens';
import { bodyXXSBold } from '@salutejs/caldera-online-themes/tokens';
import { BoldProps } from '@salutejs/plasma-new-hope/types/components/Typography/Typography.types';
import { ButtonHTMLAttributes } from 'react';
import { ButtonProps as ButtonProps_2 } from '@salutejs/plasma-new-hope/styled-components';
import { ComponentClass } from 'react';
import { CustomDropdownProps } from '@salutejs/plasma-new-hope/types/components/Dropdown/Dropdown.types';
import { CustomToastProps } from '@salutejs/plasma-new-hope/types/components/Toast/Toast.types';
import { DropdownPlacement } from '@salutejs/plasma-new-hope/styled-components';
import { DropdownProps } from '@salutejs/plasma-new-hope/styled-components';
import { DropdownTrigger } from '@salutejs/plasma-new-hope/styled-components';
import { dsplL } from '@salutejs/caldera-online-themes/tokens';
import { dsplLBold } from '@salutejs/caldera-online-themes/tokens';
import { dsplM } from '@salutejs/caldera-online-themes/tokens';
import { dsplMBold } from '@salutejs/caldera-online-themes/tokens';
import { dsplS } from '@salutejs/caldera-online-themes/tokens';
import { dsplSBold } from '@salutejs/caldera-online-themes/tokens';
import { Filter } from '@salutejs/plasma-new-hope/types/engines/types';
import { FocusProps } from '@salutejs/plasma-new-hope/styled-components';
import type { ForwardRefExoticComponent } from 'react';
import { FunctionComponent } from 'react';
import { h1 } from '@salutejs/caldera-online-themes/tokens';
import { h1Bold } from '@salutejs/caldera-online-themes/tokens';
import { h2 } from '@salutejs/caldera-online-themes/tokens';
import { h2Bold } from '@salutejs/caldera-online-themes/tokens';
import { h3 } from '@salutejs/caldera-online-themes/tokens';
import { h3Bold } from '@salutejs/caldera-online-themes/tokens';
import { h4 } from '@salutejs/caldera-online-themes/tokens';
import { h4Bold } from '@salutejs/caldera-online-themes/tokens';
import { h5 } from '@salutejs/caldera-online-themes/tokens';
import { h5Bold } from '@salutejs/caldera-online-themes/tokens';
import { HTMLAttributes } from 'react';
import type { InputHTMLAttributes } from 'react';
import { JSXElementConstructor } from 'react';
import { LinkCustomProps } from '@salutejs/plasma-new-hope/types/components/Link/Link';
import { mediaQuery } from '@salutejs/plasma-new-hope/styled-components';
import { modalClasses } from '@salutejs/plasma-new-hope/styled-components';
import { ModalProps } from '@salutejs/plasma-new-hope/styled-components';
import { MouseEvent as MouseEvent_2 } from 'react';
import { popupClasses } from '@salutejs/plasma-new-hope/styled-components';
import { PopupInfo } from '@salutejs/plasma-new-hope/styled-components';
import { PopupPlacement } from '@salutejs/plasma-new-hope/styled-components';
import { PopupProps } from '@salutejs/plasma-new-hope/styled-components';
import { PopupProvider } from '@salutejs/plasma-new-hope/styled-components';
import { PropsType } from '@salutejs/plasma-new-hope/types/engines/types';
import { RadioGroup } from '@salutejs/plasma-new-hope/styled-components';
import { ReactElement } from 'react';
import { ReactFragment } from 'react';
import { ReactNode } from 'react';
import { ReactPortal } from 'react';
import { RefAttributes } from 'react';
import { SegmentGroupProps } from '@salutejs/plasma-new-hope/styled-components';
import { SegmentItemProps } from '@salutejs/plasma-new-hope/styled-components';
import { SegmentProvider } from '@salutejs/plasma-new-hope/styled-components';
import { ShowToastArgs } from '@salutejs/plasma-new-hope/styled-components';
import { SpacingProps } from '@salutejs/plasma-new-hope/styled-components';
import { SSRProvider } from '@salutejs/plasma-new-hope/styled-components';
import { StyledComponent } from 'styled-components';
import { SwitchPropsVariations } from '@salutejs/plasma-new-hope/types/components/Switch/Switch.types';
import { textL } from '@salutejs/caldera-online-themes/tokens';
import { textLBold } from '@salutejs/caldera-online-themes/tokens';
import { textM } from '@salutejs/caldera-online-themes/tokens';
import { textMBold } from '@salutejs/caldera-online-themes/tokens';
import { textS } from '@salutejs/caldera-online-themes/tokens';
import { textSBold } from '@salutejs/caldera-online-themes/tokens';
import { textXS } from '@salutejs/caldera-online-themes/tokens';
import { textXSBold } from '@salutejs/caldera-online-themes/tokens';
import { ToastPosition } from '@salutejs/plasma-new-hope/styled-components';
import { ToastProps } from '@salutejs/plasma-new-hope/styled-components';
import { ToastRole } from '@salutejs/plasma-new-hope/styled-components';
import { usePopupContext } from '@salutejs/plasma-new-hope/styled-components';
import { useSegment } from '@salutejs/plasma-new-hope/styled-components';
import { useToast } from '@salutejs/plasma-new-hope/styled-components';
import { Variants } from '@salutejs/plasma-new-hope/types/engines/types';

export { addFocus }

// @public (undocumented)
export const BodyL: FunctionComponent<PropsType<    {
size: {
l: string;
};
}> & {
breakWord?: boolean | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export { bodyL }

export { bodyLBold }

// @public (undocumented)
export const BodyM: FunctionComponent<PropsType<    {
size: {
m: string;
};
}> & {
breakWord?: boolean | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export { bodyM }

export { bodyMBold }

// @public (undocumented)
export const BodyS: FunctionComponent<PropsType<    {
size: {
s: string;
};
}> & {
breakWord?: boolean | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export { bodyS }

export { bodySBold }

// @public (undocumented)
export const BodyXS: FunctionComponent<PropsType<    {
size: {
xs: string;
};
}> & {
breakWord?: boolean | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export { bodyXS }

export { bodyXSBold }

// @public (undocumented)
export const BodyXXS: FunctionComponent<PropsType<    {
size: {
xxs: string;
};
}> & {
breakWord?: boolean | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export { bodyXXS }

export { bodyXXSBold }

// @public
export const Button: FunctionComponent<PropsType<    {
view: {
primary: string;
accent: string;
secondary: string;
clear: string;
success: string;
warning: string;
critical: string;
};
size: {
l: string;
lr: string;
m: string;
mr: string;
s: string;
sr: string;
xs: string;
xsr: string;
xxs: string;
};
disabled: {
true: string;
};
focused: {
true: string;
};
stretching: {
auto: string;
filled: string;
fixed: string;
};
}> & ButtonProps_2<HTMLElement> & RefAttributes<HTMLButtonElement>>;

// Warning: (ae-forgotten-export) The symbol "ButtonComponent" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export type ButtonProps = typeof ButtonComponent;

// @public
export const Checkbox: FunctionComponent<BaseboxProps>;

// Warning: (ae-forgotten-export) The symbol "CheckboxComponent" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export type CheckboxProps = typeof CheckboxComponent;

// @public
export const Dropdown: FunctionComponent<PropsType<    {
size: {
xs: string;
s: string;
m: string;
l: string;
};
view: {
primary: string;
};
}> & HTMLAttributes<HTMLDivElement> & CustomDropdownProps & RefAttributes<HTMLDivElement>>;

// @public
export const DropdownItem: FunctionComponent<PropsType<Variants> & Omit<HTMLAttributes<HTMLDivElement>, "onSelect"> & {
id?: string | undefined;
disabled?: boolean | undefined;
label?: ReactNode;
role?: string | undefined;
contentLeft?: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | FunctionComponent<any> | ReactFragment | ReactPortal | ComponentClass<any, any> | null | undefined;
contentRight?: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | FunctionComponent<any> | ReactFragment | ReactPortal | ComponentClass<any, any> | null | undefined;
name?: string | undefined;
checked?: boolean | undefined;
text?: string | undefined;
value?: string | number | boolean | undefined;
isSelected?: boolean | undefined;
onClick?: ((event: MouseEvent_2<HTMLDivElement, MouseEvent>) => void) | undefined;
onSelect?: ((value?: any, text?: any) => void) | undefined;
size?: string | undefined;
view?: string | undefined;
} & RefAttributes<HTMLDivElement>>;

export { DropdownPlacement }

export { DropdownProps }

export { DropdownTrigger }

// @public (undocumented)
export const DsplL: FunctionComponent<PropsType<    {
size: {
l: string;
};
}> & {
breakWord?: boolean | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export { dsplL }

export { dsplLBold }

// @public (undocumented)
export const DsplM: FunctionComponent<PropsType<    {
size: {
m: string;
};
}> & {
breakWord?: boolean | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export { dsplM }

export { dsplMBold }

// @public (undocumented)
export const DsplS: FunctionComponent<PropsType<    {
size: {
s: string;
};
}> & {
breakWord?: boolean | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export { dsplS }

export { dsplSBold }

// @public (undocumented)
export const H1: FunctionComponent<PropsType<    {
size: {
h1: string;
};
}> & {
breakWord?: boolean | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export { h1 }

export { h1Bold }

// @public (undocumented)
export const H2: FunctionComponent<PropsType<    {
size: {
h2: string;
};
}> & {
breakWord?: boolean | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export { h2 }

export { h2Bold }

// @public (undocumented)
export const H3: FunctionComponent<PropsType<    {
size: {
h3: string;
};
}> & {
breakWord?: boolean | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export { h3 }

export { h3Bold }

// @public (undocumented)
export const H4: FunctionComponent<PropsType<    {
size: {
h4: string;
};
}> & {
breakWord?: boolean | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export { h4 }

export { h4Bold }

// @public (undocumented)
export const H5: FunctionComponent<PropsType<    {
size: {
h5: string;
};
}> & {
breakWord?: boolean | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export { h5 }

export { h5Bold }

// @public
export const Link: FunctionComponent<PropsType<    {
view: {
primary: string;
secondary: string;
tertiary: string;
paragraph: string;
accent: string;
positive: string;
warning: string;
negative: string;
clear: string;
};
disabled: {
true: string;
};
focused: {
true: string;
};
}> & AnchorHTMLAttributes<HTMLAnchorElement> & LinkCustomProps & RefAttributes<HTMLAnchorElement>>;

// Warning: (ae-forgotten-export) The symbol "LinkComponent" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export type LinkProps = typeof LinkComponent;

export { mediaQuery }

// @public
export const Modal: ForwardRefExoticComponent<ModalProps & RefAttributes<HTMLDivElement>>;

export { modalClasses }

export { ModalProps }

// @public
export const Popup: ForwardRefExoticComponent<PopupProps & RefAttributes<HTMLDivElement>>;

export { popupClasses }

export { PopupInfo }

export { PopupPlacement }

export { PopupProps }

export { PopupProvider }

// @public
export const Radiobox: FunctionComponent<Omit<BaseboxProps, "indeterminate">>;

// Warning: (ae-forgotten-export) The symbol "RadioboxComponent" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export type RadioboxProps = typeof RadioboxComponent;

export { RadioGroup }

// @public
export const SegmentGroup: FunctionComponent<PropsType<    {
view: {
clear: string;
filled: string;
};
size: {
xs: string;
s: string;
m: string;
l: string;
};
disabled: {
true: string;
};
pilled: {
true: string;
};
filledBackground: {
true: string;
};
stretch: {
true: string;
};
}> & HTMLAttributes<HTMLDivElement> & {
selectionMode?: "multiple" | "single" | undefined;
disabled?: boolean | undefined;
stretch?: boolean | undefined;
pilled?: boolean | undefined;
filledBackground?: boolean | undefined;
size?: string | undefined;
view?: string | undefined;
} & RefAttributes<HTMLDivElement>>;

export { SegmentGroupProps }

// @public
export const SegmentItem: FunctionComponent<PropsType<    {
view: {
clear: string;
default: string;
secondary: string;
};
size: {
xs: string;
s: string;
m: string;
l: string;
};
disabled: {
true: string;
};
pilled: {
true: string;
};
}> & ButtonHTMLAttributes<HTMLButtonElement> & {
value: string;
id?: string | undefined;
label?: ReactNode;
pilled?: boolean | undefined;
customHandleSelect?: ((e: MouseEvent_2<HTMLButtonElement, MouseEvent>) => void) | undefined;
size?: string | undefined;
view?: string | undefined;
} & RefAttributes<HTMLLabelElement>>;

export { SegmentItemProps }

export { SegmentProvider }

export { ShowToastArgs }

// @public
export const Spinner: StyledComponent<FunctionComponent<PropsType<    {
view: {
primary: string;
secondary: string;
tertiary: string;
paragraph: string;
accent: string;
positive: string;
warning: string;
negative: string;
};
}> & ((HTMLAttributes<HTMLDivElement> & {
width?: undefined;
height?: undefined;
size?: string | undefined;
view?: string | undefined;
} & RefAttributes<HTMLDivElement>) | (HTMLAttributes<HTMLDivElement> & {
width: number;
height: number;
size?: undefined; /**
* @deprecated
*/
view?: string | undefined;
} & RefAttributes<HTMLDivElement>) | (HTMLAttributes<HTMLDivElement> & {
width: string;
height: string;
size?: undefined;
view?: string | undefined;
} & RefAttributes<HTMLDivElement>))>, any, {}, never>;

// @public (undocumented)
export type SpinnerProps = HTMLAttributes<HTMLDivElement> & {
    size?: string | number;
    view?: string;
    color?: string;
    deviceScale?: number;
};

export { SSRProvider }

// @public
export const Switch: FunctionComponent<PropsType<    {
size: {
m: string;
};
view: {
default: string;
};
labelPosition: {
before: string;
after: string;
};
disabled: {
true: string;
};
focused: {
true: string;
};
}> & Filter<InputHTMLAttributes<HTMLInputElement>, "size"> & SwitchPropsVariations & RefAttributes<HTMLInputElement>>;

// @public (undocumented)
export type SwitchProps = {
    id?: string;
    label?: React.ReactNode;
    size?: string;
    view?: string;
    labelPosition?: 'before' | 'after';
    description?: React.ReactNode;
    disabled?: boolean;
    pressed?: boolean;
    focused?: boolean;
    outlined?: boolean;
} & FocusProps & Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'onChange' | 'onFocus' | 'onBlur'> & Pick<InputHTMLAttributes<HTMLInputElement>, 'name' | 'value' | 'checked' | 'disabled' | 'readOnly' | 'onChange' | 'onFocus' | 'onBlur'>;

// @public (undocumented)
export const TextL: FunctionComponent<PropsType<    {
size: {
l: string;
};
}> & {
breakWord?: boolean | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export { textL }

export { textLBold }

// @public (undocumented)
export const TextM: FunctionComponent<PropsType<    {
size: {
m: string;
};
}> & {
breakWord?: boolean | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export { textM }

export { textMBold }

// @public (undocumented)
export const TextS: FunctionComponent<PropsType<    {
size: {
s: string;
};
}> & {
breakWord?: boolean | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export { textS }

export { textSBold }

// @public (undocumented)
export const TextXS: FunctionComponent<PropsType<    {
size: {
xs: string;
};
}> & {
breakWord?: boolean | undefined;
} & SpacingProps & BoldProps & HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>>;

export { textXS }

export { textXSBold }

// @public (undocumented)
export const Toast: FunctionComponent<PropsType<    {
view: {
primary: string;
dark: string;
light: string;
};
size: {
m: string;
};
pilled: {
true: string;
};
}> & HTMLAttributes<HTMLButtonElement> & CustomToastProps & RefAttributes<HTMLDivElement>>;

export { ToastPosition }

export { ToastProps }

// @public (undocumented)
export const ToastProvider: ({ children }: {
    children: ReactNode;
}) => JSX.Element;

export { ToastRole }

export { usePopupContext }

export { useSegment }

export { useToast }

// (No @packageDocumentation comment for this package)

```