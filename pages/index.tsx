import LandingPageHero from "../components/LandingPageHero"
import Head from 'next/head'
import LanguagesFeature from "../components/feature/LanguagesFeature"
import LandingPageCTA from "../components/LandingPageCTA"
import LandingPagePricing from "../components/LandingPagePricing"
import LandingPageFAQs from "../components/LandingPageFAQs"
import LandingPageFeatureSection from "../components/LandingPageFeatureSection"
import TopFeaturesSection from "../components/TopFeaturesSection"
import Playground from "../components/playground/Playground"

export default function LandingPage() {
    return(
        <>
            <Head>
                <title>The online code generator - ThotAI</title>
            </Head>
            <LandingPageHero />

            <LanguagesFeature />
            <LandingPageFeatureSection />
            <LandingPageCTA />
            <TopFeaturesSection />
            <LandingPagePricing />
            <LandingPageFAQs />
        </>
    )
}