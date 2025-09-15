import { Flex, Group, NavLink, Title } from '@mantine/core';
import { IconGavel } from '@tabler/icons-react';
import { navItems, type INavItems } from '../models/nav-items';

const Sidebar = () => {
    return (
        <>
            <Group justify="center" p="md">
                <IconGavel stroke={2} size={32} />
                <Title order={2}>Platform</Title>
            </Group>
            <Flex direction="column" p="md">
                {
                    navItems.map((navItems: INavItems) => (
                        <NavLink
                            href={navItems.navLink}
                            label={navItems.label}
                            leftSection={<navItems.icon size={16} stroke={1.5} />}
                        >
                        </NavLink>
                    ))
                }
            </Flex>
        </>
    );
};

export default Sidebar;
