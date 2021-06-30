import LandingPageHero from "../components/LandingPageHero"
import Head from 'next/head'
import LanguagesFeature from "../components/feature/LanguagesFeature"
import LandingPageCTA from "../components/LandingPageCTA"
import LandingPagePricing from "../components/LandingPagePricing"

export default function LandingPage() {
    return(
        <>
            <Head>
                <title>The online code generator - ThotAI</title>
            </Head>
            <LandingPageHero />
            <LanguagesFeature />
            <LandingPageCTA />
            <LandingPagePricing />
        </>
    )
}