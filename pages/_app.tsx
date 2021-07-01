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