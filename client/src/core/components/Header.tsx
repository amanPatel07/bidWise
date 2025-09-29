import { ActionIcon, Burger, Group, Title } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';
import type { HeaderProps } from '../models/header.model';

const Header = ({ opened, toggle, toggleTheme, computed }: HeaderProps) => {
    return (
        <Group h="100%" px="md" justify="space-between">
            <Group>
                <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                <Title order={4}>Dashboard</Title>
            </Group>
            <ActionIcon variant="subtle" onClick={toggleTheme} aria-label="Toggle color scheme">
                {computed === 'dark' ? <IconSun /> : <IconMoon />}
            </ActionIcon>
        </Group>
    );
};

export default Header;
