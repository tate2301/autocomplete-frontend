import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import ContextProvider from '../lib/context'
import '../styles/globals.css'
import { extendTheme, ThemeConfig } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const config : ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
}

const theme = extendTheme({ 
    config,
    styles: {
        global: (props) => ({
          body: {
            fontFamily: "body",
            color: mode("gray.800", "whiteAlpha.900")(props),
            bg: mode("white", "gray.900")(props),
            lineHeight: "base",
          },
        }),
    },
    fonts: {
        heading: "Inter",
        body: "Inter",
    },
})

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <ContextProvider>
                <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"} />
                <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800&display=swap" rel="stylesheet" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                </Head>
                <Component {...pageProps} />
            </ContextProvider>
        </ChakraProvider>
    )
}

export const getInitialProps = async ({ Component, ctx }) => {
    let pageProps;
    // Ensure getInitialProps gets called on our child pages
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps({ ctx });
    }
    return { pageProps };
}

export default MyApp