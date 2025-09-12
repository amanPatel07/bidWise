import { Flex, Group, NavLink, Title } from '@mantine/core';
import { IconAlbum, IconGavel, IconHammer, IconHome2, IconUserFilled } from '@tabler/icons-react';

const Sidebar = () => {
    return (
        <>
            <Group justify="center" p="md">
                <IconGavel stroke={2} size={32} />
                <Title order={2}>Platform</Title>
            </Group>
            <Flex direction="column" p="md">
                <NavLink
                    href="#required-for-focus"
                    label="Home"
                    leftSection={<IconHome2 size={16} stroke={1.5} />}
                />
                <NavLink
                    href="#required-for-focus"
                    label="Auctions"
                    leftSection={<IconHammer size={16} stroke={1.5} />}
                />
                <NavLink
                    href="#required-for-focus"
                    label="My Auctions"
                    leftSection={<IconAlbum size={16} stroke={1.5} />}
                />
                <NavLink
                    href="#required-for-focus"
                    label="Profile"
                    leftSection={<IconUserFilled size={16} stroke={1.5} />}
                />
            </Flex>
        </>
    );
};

export default Sidebar;
