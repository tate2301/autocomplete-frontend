import { Disclosure } from '@headlessui/react'
import { LogoutIcon } from '@heroicons/react/solid'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import ThotAILogo from '../logo/thotai'
import { AuthContext, useAuth } from '../../lib/auth'
import { useContext } from 'react'
import { Avatar } from '@chakra-ui/react'

export default function CustomerNavbar() {
  const { logout, sendEmailVerification } = useAuth()
  const data = useContext(AuthContext)

  const { user } = data
  return (
    <>
      <Disclosure as="nav" className="bg-black border-b border-border-gray">
        {({ open }) => (
          <>
            <div className="max-w-5xl px-2 mx-auto px-2 sm:px-4 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="flex items-center px-2 lg:px-0">
                  <div className="flex-shrink-0">
                    <ThotAILogo className="text-yellow-500 h-8 w-8 text-yellow-500"/>
                  </div>
                  <div className="hidden lg:block lg:ml-6">
                    <div className="flex space-x-4">
                      {/* Current: "bg-dark-gray text-white", Default: "text-gray-300 hover:text-white" */}
                      <a href="/app" className="text-white px-3 py-2 rounded-md text-sm font-medium">
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
                    <Avatar
                      className="h-8 w-8 rounded-full  border border-border-gray"
                      src={user?.photoURL}
                      alt=""
                    />
                    <button className="flex-shrink-0 ml-3 bg-light-gray p-1 rounded-full text-gray-400 hover:text-white">
                      <span className="sr-only">View notifications</span>
                      <LogoutIcon onClick={logout} className="h-6 w-6" aria-hidden="true" />
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
                    <Avatar
                      className="h-10 w-10 rounded-full border border-border-gray"
                      src={user?.photoURL}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">{user?.displayName}</div>
                    <div className="text-sm font-medium text-gray-400">{user?.email}</div>
                  </div>
                  <button className="ml-auto flex-shrink-0 bg-light-gray p-1 rounded-full text-gray-400 hover:text-white">
                    <span className="sr-only">View notifications</span>
                    <LogoutIcon onClick={logout} className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {(user && !user?.emailVerified) && <div className="mt-4 p-2 max-w-5xl mx-auto">
          <div className="bg-red-500 text-white rounded-md w-full p-4">
            <p className="text-lg font-medium">Email not verified</p>
            <p className="text-sm">Please check your mailbox and verify your email address to prevent usage interruptions</p>
            <p className="mt-2">
              <button onClick={sendEmailVerification} className="bg-white text-black font-bold text-sm rounded-md px-8 py-2">Resend email</button>
            </p>
          </div>
      </div>}
    </>)
}