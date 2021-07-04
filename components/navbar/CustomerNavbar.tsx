import { Disclosure } from '@headlessui/react'
import { LogoutIcon } from '@heroicons/react/solid'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import ThotAILogo from '../logo/thotai'

export default function CustomerNavbar() {
  return (
    <Disclosure as="nav" className="bg-black border-b border-border-gray">
      {({ open }) => (
        <>
          <div className="max-w-5xl px-2 mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center px-2 lg:px-0">
                <div className="flex-shrink-0">
                  <ThotAILogo className="h-8 w-8"/>
                </div>
                <div className="hidden lg:block lg:ml-6">
                  <div className="flex space-x-4">
                    {/* Current: "bg-dark-gray text-white", Default: "text-gray-300 hover:text-white" */}
                    <a href="/app" className="bg-dark-gray text-white px-3 py-2 rounded-md text-sm font-medium">
                      Workspaces
                    </a>
                    <a
                      href="/app/account"
                      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Account
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:block lg:ml-4">
                <div className="flex items-center">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <button className="flex-shrink-0 ml-3 bg-light-gray p-1 rounded-full text-gray-400 hover:text-white">
                    <span className="sr-only">View notifications</span>
                    <LogoutIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Current: "bg-dark-gray text-white", Default: "text-gray-300 hover:text-white" */}
              <a href="/app" className="bg-dark-gray text-white block px-3 py-2 rounded-md text-base font-medium">
                Workspaces
              </a>
              <a
                href="/app/account"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Account
              </a>
            </div>
            <div className="pt-4 pb-3 border-t border-dark-gray">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">Tom Cook</div>
                  <div className="text-sm font-medium text-gray-400">tom@example.com</div>
                </div>
                <button className="ml-auto flex-shrink-0 bg-light-gray p-1 rounded-full text-gray-400 hover:text-white">
                  <span className="sr-only">View notifications</span>
                  <LogoutIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}