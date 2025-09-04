import { AppShell, useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Master = () => {
    const [opened, { toggle }] = useDisclosure(false);
    const { setColorScheme } = useMantineColorScheme();
    const computed = useComputedColorScheme('light', { getInitialValueInEffect: true });

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

            <AppShell.Main
                h="100%"
            >
                <Outlet />
            </AppShell.Main>
        </AppShell>
    );
}

export default Master;