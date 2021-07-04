import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
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
            <Footer />
        </>
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