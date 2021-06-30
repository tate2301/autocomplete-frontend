import LandingPageHero from "../components/LandingPageHero"
import Head from 'next/head'

export default function LandingPage() {
    return(
        <>
            <Head>
                <title>The online code generator - ThotAI</title>
            </Head>
            <LandingPageHero />
        </>
    )
}