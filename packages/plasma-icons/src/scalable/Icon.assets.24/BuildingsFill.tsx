import React from 'react';

import { IconProps } from '../IconRoot';

export const BuildingsFill: React.FC<IconProps> = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M7 5.75C7 5.33579 7.33579 5 7.75 5C8.16422 5 8.5 5.33579 8.5 5.75C8.5 6.16422 8.16422 6.5 7.75 6.5C7.33579 6.5 7 6.16422 7 5.75Z"
            fill="currentColor"
        />
        <path
            d="M7 8.75C7 8.33579 7.33579 8 7.75 8C8.16422 8 8.5 8.33579 8.5 8.75C8.5 9.16422 8.16422 9.5 7.75 9.5C7.33579 9.5 7 9.16422 7 8.75Z"
            fill="currentColor"
        />
        <path
            d="M7.75 11C7.33579 11 7 11.3358 7 11.75C7 12.1642 7.33579 12.5 7.75 12.5C8.16422 12.5 8.5 12.1642 8.5 11.75C8.5 11.3358 8.16422 11 7.75 11Z"
            fill="currentColor"
        />
        <path
            d="M7 14.75C7 14.3358 7.33579 14 7.75 14C8.16422 14 8.5 14.3358 8.5 14.75C8.5 15.1642 8.16422 15.5 7.75 15.5C7.33579 15.5 7 15.1642 7 14.75Z"
            fill="currentColor"
        />
        <path
            d="M7.75 17C7.33579 17 7 17.3358 7 17.75C7 18.1642 7.33579 18.5 7.75 18.5C8.16422 18.5 8.5 18.1642 8.5 17.75C8.5 17.3358 8.16422 17 7.75 17Z"
            fill="currentColor"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.72222 2H13.2778C13.604 1.99999 13.8928 1.99997 14.1321 2.01952C14.3869 2.04034 14.6509 2.08702 14.908 2.21799C15.2843 2.40974 15.5903 2.7157 15.782 3.09202C15.913 3.34907 15.9597 3.61311 15.9805 3.86793C16 4.10722 16 4.39596 16 4.72221V6H17.6762C17.9337 5.99999 18.1702 5.99997 18.3679 6.01612C18.581 6.03353 18.8142 6.0734 19.0445 6.19074C19.3738 6.35852 19.6415 6.62624 19.8093 6.95552C19.9266 7.18583 19.9665 7.419 19.9839 7.63213C20 7.82981 20 8.06627 20 8.32374V19.6762C20 19.9337 20 20.1702 19.9839 20.3679C19.9665 20.581 19.9266 20.8142 19.8093 21.0445C19.6415 21.3738 19.3738 21.6415 19.0445 21.8093C18.8142 21.9266 18.581 21.9665 18.3679 21.9839C18.1702 22 17.9337 22 17.6762 22H11.8238C11.8031 22 11.7826 22 11.7622 22H6.72221C6.396 22 6.1072 22 5.86793 21.9805C5.61311 21.9597 5.34907 21.913 5.09202 21.782C4.7157 21.5903 4.40974 21.2843 4.21799 20.908C4.08702 20.6509 4.04034 20.3869 4.01952 20.1321C3.99997 19.8928 3.99999 19.6041 4 19.2778V4.72222C3.99999 4.39599 3.99997 4.10722 4.01952 3.86793C4.04034 3.61311 4.08702 3.34907 4.21799 3.09202C4.40974 2.7157 4.7157 2.40974 5.09202 2.21799C5.34907 2.08702 5.61311 2.04034 5.86793 2.01952C6.10722 1.99997 6.39598 1.99999 6.72222 2ZM9.52996 20.5C9.52411 20.4553 9.51965 20.4112 9.51611 20.3679C9.49996 20.1702 9.49998 19.9337 9.5 19.6763V8.32377C9.49998 8.0663 9.49996 7.82981 9.51611 7.63213C9.53353 7.419 9.57339 7.18583 9.69074 6.95552C9.85851 6.62624 10.1262 6.35852 10.4555 6.19074C10.6858 6.0734 10.919 6.03353 11.1321 6.01612C11.3298 5.99997 11.5662 5.99999 11.8237 6L14.5 6V4.75C14.5 4.38759 14.4994 4.16089 14.4855 3.99008C14.4722 3.82802 14.4508 3.78335 14.4455 3.77301C14.3976 3.67893 14.3211 3.60244 14.227 3.5545C14.2167 3.54923 14.172 3.52778 14.0099 3.51454C13.8391 3.50059 13.6124 3.5 13.25 3.5H6.75C6.38759 3.5 6.16089 3.50059 5.99008 3.51454C5.82802 3.52778 5.78335 3.54923 5.77301 3.5545C5.67893 3.60244 5.60244 3.67893 5.5545 3.77301C5.54923 3.78335 5.52778 3.82802 5.51454 3.99008C5.50059 4.16089 5.5 4.38759 5.5 4.75V19.25C5.5 19.6124 5.50059 19.8391 5.51454 20.0099C5.52778 20.172 5.54923 20.2167 5.5545 20.227C5.60244 20.3211 5.67893 20.3976 5.77301 20.4455C5.78335 20.4508 5.82802 20.4722 5.99008 20.4855C6.16089 20.4994 6.38759 20.5 6.75 20.5H9.52996ZM12.5 9.74976C12.5 9.33555 12.8358 8.99976 13.25 8.99976C13.6642 8.99976 14 9.33555 14 9.74976C14 10.164 13.6642 10.4998 13.25 10.4998C12.8358 10.4998 12.5 10.164 12.5 9.74976ZM12.5 12.25C12.5 11.8358 12.8358 11.5 13.25 11.5C13.6642 11.5 14 11.8358 14 12.25C14 12.6642 13.6642 13 13.25 13C12.8358 13 12.5 12.6642 12.5 12.25ZM13.25 13.9998C12.8358 13.9998 12.5 14.3356 12.5 14.7498C12.5 15.164 12.8358 15.4998 13.25 15.4998C13.6642 15.4998 14 15.164 14 14.7498C14 14.3356 13.6642 13.9998 13.25 13.9998ZM15.5 9.74976C15.5 9.33555 15.8358 8.99976 16.25 8.99976C16.6642 8.99976 17 9.33555 17 9.74976C17 10.164 16.6642 10.4998 16.25 10.4998C15.8358 10.4998 15.5 10.164 15.5 9.74976ZM16.25 11.5C15.8358 11.5 15.5 11.8358 15.5 12.25C15.5 12.6642 15.8358 13 16.25 13C16.6642 13 17 12.6642 17 12.25C17 11.8358 16.6642 11.5 16.25 11.5ZM15.5 14.7498C15.5 14.3356 15.8358 13.9998 16.25 13.9998C16.6642 13.9998 17 14.3356 17 14.7498C17 15.164 16.6642 15.4998 16.25 15.4998C15.8358 15.4998 15.5 15.164 15.5 14.7498ZM13.25 16.5C12.8358 16.5 12.5 16.8358 12.5 17.25V20.5H17V17.25C17 16.8358 16.6642 16.5 16.25 16.5H13.25Z"
            fill="currentColor"
        />
    </svg>
);