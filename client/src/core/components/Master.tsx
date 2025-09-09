import { AppShell, ScrollArea, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useGetUserByIdQuery } from "../../modules/user/pages/profile/utility/slices/userApiSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUser } from "../../shared/slices/userSlice";

const Master = () => {
    const [opened, { toggle }] = useDisclosure(false);
    const { setColorScheme } = useMantineColorScheme();
    const computed = useComputedColorScheme('light', { getInitialValueInEffect: true });
    const { data: user, isLoading } = useGetUserByIdQuery('3c8979bf-8f25-4e32-8759-fb8fe73f91b9');
    const userDispatch = useDispatch();

    useEffect(() => {
        if (user) {
            userDispatch(setUser(user));
        }
    }, [user, userDispatch]);

    console.log(user, isLoading)

    const toggleTheme = () => {
        setColorScheme(computed === 'light' ? 'dark' : 'light');
    }

    return (
        <AppShell
            layout="alt"
            h="100%"
            header={{ height: 56 }}
            navbar={{
                width: 260,
                breakpoint: 'sm',
                collapsed: {
                    mobile: !opened
                }
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
                    <Outlet />
                </ScrollArea>
            </AppShell.Main>
        </AppShell>
    );
}

export default Master;