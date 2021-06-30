import OpenAILogo from './logo/openai'
import SignUpForm from './forms/SignUp'
import PublicNavbar from './navbar/PublicNavbar'

export default function LandingPageHero() {
  return (
    <div className="relative overflow-hidden">
      <div className="relative pt-6 pb-16 sm:pb-24">
        <PublicNavbar />
        <main className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                <div>
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                    <span className="md:block">Writes code as fast</span>{' '}
                    <span className="text-yellow-400 md:block">as you think</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    ThotAI generates code for Python, JavaScript, C++. Trained on billions of lines of public code, ThotAI
                    puts the knowledge you need at your fingertips, saving you time and helping you stay focused. 
                  </p>
                  <p className="mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10">Powered by</p>
                  <div className="mt-2 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                    <div className="flex flex-wrap items-start justify-between">
                      <div className="flex justify-center px-1">
                        <OpenAILogo className="h-9 sm:h-10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                <SignUpForm />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}