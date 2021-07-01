import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import ThotAILogo from '../logo/thotai'

const navigation = [
    { name: 'Product', href: '#product' },
    { name: 'Pricing', href: '#pricing' },
]
  
export default function PublicNavbar() {
    return (
        <Popover>
          {({ open }) => (
            <>
              <nav
                className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
                aria-label="Global"
              >
                <div className="flex items-center flex-1">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <span className="sr-only">ThotAI</span>
                      <ThotAILogo className="h-10 w-auto sm:h-10 text-yellow-500" />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="hidden space-x-10 md:flex md:ml-10">
                    {navigation.map((item) => (
                      <a key={item.name} href={item.href} className="font-medium text-white hover:text-gray-300">
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="hidden md:flex space-x-4">
                    <a
                        href="#"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-bold rounded-md text-black bg-yellow-500"
                    >
                    Get started now
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-bold rounded-md text-white bg-gray-600 hover:bg-gray-700"
                  >
                    Log in
                  </a>
                </div>
              </nav>

              <Transition
                show={open}
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  static
                  className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                  <div className="rounded-lg shadow-md bg-dark-gray ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                      <div>
                        <ThotAILogo className="h-10 w-auto sm:h-10 text-yellow-500" />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-black"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <a
                      href="#"
                      className="block w-full px-5 py-3 text-center font-medium text-yellow-600 bg-light-gray"
                    >
                      Try free
                    </a>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>

    )
}