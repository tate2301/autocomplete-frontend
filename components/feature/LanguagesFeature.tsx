import { useState } from 'react'
import CPlusPlusIcon from '../logo/cplusplus'
import JavascriptIcon from '../logo/javascript'
import PythonIcon from '../logo/python'
import Playground from '../playground/Playground'

const features = [
  {
    name: 'C++',
    icon: CPlusPlusIcon,
  },
  {
    name: 'JavaScript',
    icon: JavascriptIcon,
  },
  {
    name: 'Python',
    icon: PythonIcon,
  },
]

export default function LanguagesFeature() {
  const [selectedLang, setSelectedlang] = useState(features[0].name)
    return (
      <div className="relative bg-black py-16 sm:py-24 lg:py-32" id="product">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold tracking-wider text-yellow-500 uppercase">Build Faster</h2>
          <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Just focus on building your product
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-300">
            Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
            malesuada. Eleifend condimentum id viverra nulla.
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-3 gap-4 md:gap-8 ">
              {features.map((feature) => (
                <div onClick={() => setSelectedlang(feature.name)} key={feature.name} className="pt-6">
                  <div className={`flow-root bg-dark-gray rounded-lg px-2 py-4 md:py-0 md:px-6 md:pb-8 cursor-pointer ${selectedLang === feature.name && "border-2 border-yellow-500"}`}>
                    <div className="md:-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-yellow-500 rounded-md shadow-lg">
                          <feature.icon className="h-8 w-8 text-black" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 hidden sm:block text-lg font-medium text-white tracking-tight">{feature.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Playground selectedLanguage={selectedLang} />
      </div>
    )
}