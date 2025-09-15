import { IconAlbum, IconHammer, IconHome2, IconUserFilled } from '@tabler/icons-react';
import type { ComponentType } from "react";

export interface INavItems {
    id: number,
    label: string;
    icon: ComponentType<any>;
    navLink: string;
}

export const navItems: INavItems[] = [
    {
        id: 1,
        label: 'Home',
        icon: IconHome2,
        navLink: 'home'
    },
    {
        id: 2,
        label: 'Auctions',
        icon: IconHammer,
        navLink: 'auctions'
    },
    {
        id: 3,
        label: 'My Auctions',
        icon: IconAlbum,
        navLink: 'my-auctions'
    },
    {
        id: 4,
        label: 'profile',
        icon: IconUserFilled,
        navLink: 'profile'
    }
];