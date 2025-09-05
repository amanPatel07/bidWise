import { createTheme, localStorageColorSchemeManager, MantineProvider, rem } from '@mantine/core';
import type { PropsWithChildren } from 'react';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

export const theme = createTheme({
    focusRing: 'auto',
    scale: 1,
    white: '#ffffff',
    black: '#1a1b1e',
    colors: {
        primary: [
            "#fff4e6", // 0
            "#ffe8cc", // 1
            "#ffd8a8", // 2
            "#ffc078", // 3
            "#ffa94d", // 4
            "#ff922b", // 5 primary-light
            "#fd7e14", // 6 primary
            "#f76707", // 7
            "#e8590c", // 8 primary-dark
            "#d9480f", // 9
        ],
        gray: [
            "#f8f9fa",
            "#f1f3f5",
            "#e9ecef",
            "#dee2e6",
            "#ced4da",
            "#adb5bd",
            "#868e96",
            "#495057",
            "#343a40",
            "#212529",
        ],
    },
    primaryShade: { light: 6, dark: 8 },
    primaryColor: "primary",
    autoContrast: true,
    luminanceThreshold: 0.3,
    fontFamily: "Inter, Roboto, sans-serif",
    fontFamilyMonospace: "Fira Code, Menlo, monospace",
    headings: {
        fontFamily: "Inter, Roboto, sans-serif",
        fontWeight: "600",
        textWrap: "balance",
        sizes: {
            h1: { fontSize: rem(34), lineHeight: "1.2", fontWeight: "700" },
            h2: { fontSize: rem(28), lineHeight: "1.3", fontWeight: "700" },
            h3: { fontSize: rem(22), lineHeight: "1.35", fontWeight: "600" },
            h4: { fontSize: rem(18), lineHeight: "1.4", fontWeight: "600" },
            h5: { fontSize: rem(16), lineHeight: "1.45", fontWeight: "500" },
            h6: { fontSize: rem(14), lineHeight: "1.5", fontWeight: "500" },
        },
    },
    radius: { xs: rem(4), sm: rem(8), md: rem(12), lg: rem(16), xl: rem(20) },
    defaultRadius: "md",
    spacing: { xs: rem(8), sm: rem(12), md: rem(16), lg: rem(24), xl: rem(32) },
    fontSizes: { xs: rem(12), sm: rem(14), md: rem(16), lg: rem(18), xl: rem(20) },
    lineHeights: { xs: "1.3", sm: "1.4", md: "1.5", lg: "1.6", xl: "1.7" },
    breakpoints: {
        xs: "30em", // ~480px
        sm: "48em", // ~768px
        md: "64em", // ~1024px
        lg: "74em", // ~1184px
        xl: "90em", // ~1440px
    },
    respectReducedMotion: true,
    cursorType: "pointer",
    defaultGradient: {
        from: "primary.5",
        to: "primary.8",
        deg: 45,
    },
    other: {
        roles: ["ADMIN", "SELLER", "BUYER"],
    },
});

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
}

export default ThemeProvider;