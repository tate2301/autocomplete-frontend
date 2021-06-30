import LandingPageHero from "../components/LandingPageHero"
import Head from 'next/head'
import LanguagesFeature from "../components/feature/LanguagesFeature"

export default function LandingPage() {
    return(
        <>
            <Head>
                <title>The online code generator - ThotAI</title>
            </Head>
            <LandingPageHero />
            <LanguagesFeature />
        </>
    )
}