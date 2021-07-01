import { CheckCircleIcon } from '@heroicons/react/solid'

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
]

export default function LandingPagePricing() {
  return (
    <div className="bg-black" id={"pricing"}>
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">Simple no-tricks pricing</h2>
            <p className="mt-4 text-xl text-gray-200">
              If you're not satisfied, contact us within the first 14 days and we'll send you a full refund.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-black pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              <div className="flex-1 bg-dark-gray px-6 py-8 lg:p-12">
                <h3 className="text-2xl font-extrabold text-white sm:text-3xl">Lifetime Membership</h3>
                <p className="mt-6 text-base text-gray-300">
                  Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis
                  repellendus etur quidem assumenda.
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 text-sm tracking-wider font-semibold uppercase text-yellow-500">
                      What's included
                    </h4>
                    <div className="flex-1 border-t-2 border-border-gray" />
                  </div>
                  <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                    {includedFeatures.map((feature) => (
                      <li key={feature} className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <CheckCircleIcon className="h-5 w-5 text-yellow-300" aria-hidden="true" />
                        </div>
                        <p className="ml-3 text-sm text-gray-100">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="py-8 px-6 text-center bg-light-gray lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                {/* Toggle */}
                <div className="relative mb-8 flex justify-center">
                    <div className="bg-yellow-500 p-0.5 rounded-lg flex">
                        <button
                        type="button"
                        className="relative bg-white py-2 px-6 border-yellow-600 rounded-md shadow-sm text-sm font-medium text-yellow-600"
                        >
                        Monthly billing
                        </button>
                        <button
                        type="button"
                        className="ml-0.5 relative py-2 px-6 border border-transparent rounded-md text-sm font-medium text-yellow-200"
                        >
                        Yearly billing
                        </button>
                    </div>
                </div>
                <div className="mt-4 flex items-center justify-center text-5xl font-extrabold text-white">
                  <span>$349</span>
                  <span className="ml-3 text-xl font-medium text-white">USD</span>
                </div>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-bold rounded-md text-black bg-yellow-500"
                    >
                      Get started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}