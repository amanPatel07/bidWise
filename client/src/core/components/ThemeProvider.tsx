import { localStorageColorSchemeManager, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import type { PropsWithChildren } from 'react';
import { theme } from '../utility/theme/theme.config';

// persists user choice
const colorSchemeManager = localStorageColorSchemeManager({
    key: 'auction-color-scheme',
});

const ThemeProvider = ({ children }: PropsWithChildren) => {
    return (
        <MantineProvider
            theme={theme}
            defaultColorScheme="auto"
            colorSchemeManager={colorSchemeManager}
        >
            {children}
        </MantineProvider>
    );
};

export default ThemeProvider;
