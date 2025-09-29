import { AppShell, ScrollArea, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Notifications } from '@mantine/notifications';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { useGetUserByIdQuery } from '../../modules/user/pages/profile/utility/slices/userApiSlice';
import { setUser } from '../../shared/slices/userSlice';
import Header from './Header';
import Sidebar from './Sidebar';

const Master = () => {
    const [opened, { toggle }] = useDisclosure(false);
    const { setColorScheme } = useMantineColorScheme();
    const computed = useComputedColorScheme('light', { getInitialValueInEffect: true });
    const { data: user, isLoading } = useGetUserByIdQuery('62f7f84b-5f66-45b0-946f-744a88a7dff2');
    const userDispatch = useDispatch();

    useEffect(() => {
        if (user) {
            userDispatch(setUser(user as any));
        }
    }, [user, userDispatch]);

    const toggleTheme = () => {
        setColorScheme(computed === 'light' ? 'dark' : 'light');
    };

    if (isLoading) {
        return <>Loading</>
    }

    return (
        <>
            <Notifications />
            <AppShell
                layout="alt"
                h="100%"
                header={{ height: 56 }}
                navbar={{
                    width: 260,
                    breakpoint: 'sm',
                    collapsed: {
                        mobile: !opened,
                    },
                }}
                padding="md"
                styles={{
                    main: {
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        overflow: 'hidden',
                    },
                }}
            >
                <AppShell.Navbar>
                    <Sidebar />
                </AppShell.Navbar>

                <AppShell.Header>
                    <Header
                        opened={opened}
                        toggle={toggle}
                        toggleTheme={toggleTheme}
                        computed={computed}
                    />
                </AppShell.Header>

                <AppShell.Main>
                    <ScrollArea>
                        <Suspense>
                            <Outlet />
                        </Suspense>
                    </ScrollArea>
                </AppShell.Main>
            </AppShell>
        </>
    );
};

export default Master;
