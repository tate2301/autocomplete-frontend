/* This example requires Tailwind CSS v2.0+ */
import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline'
import { Flex, Text } from '@chakra-ui/react'
import Link from "next/link"
import ThotAILogo from '../logo/thotai'
import { useRouter } from 'next/dist/client/router'



export default function Sidebar({ setSidebarOpen, sidebarOpen }: {
    sidebarOpen: boolean
    setSidebarOpen: Dispatch<SetStateAction<boolean>>
}) {
    const router = useRouter()

    const navigation = [
        { name: 'Dashboard', href: '/', icon: HomeIcon, current: router.pathname === "/" },
        { name: 'Users', href: '/users', icon: UsersIcon, current: router.pathname.includes("users") },
        { name: 'Subscriptions', href: '/subscriptions', icon: FolderIcon, current: router.pathname.includes("subscriptions") },
        { name: 'Discounts', href: '/discounts', icon: FolderIcon, current: router.pathname.includes("discounts") },
        { name: 'Reports', href: '/reports', icon: ChartBarIcon, current: router.pathname.includes("reports") },
      ]

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 flex z-40 md:hidden"
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4">
                    <ThotAILogo className="text-yellow-500 h-8 w-8" />
                </div>
                <nav className="mt-5 px-2 space-y-1">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                        <a>
                            <Flex className={`p-2 rounded-md my-2 ${item.current && "bg-gray-700"}`}> 
                                <item.icon
                                    className={`mr-3 flex-shrink-0 h-6 w-6`}
                                    aria-hidden="true"
                                />
                                <Text>{item.name}</Text>
                            </Flex>
                        </a>
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="flex-shrink-0 flex border-t p-4">
                <a href="#" className="flex-shrink-0 group block">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="inline-block h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <Text className="text-base font-medium">Tom Cook</Text>
                      <Text className="text-sm font-medium">View profile</Text>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14">{/* Force sidebar to shrink to fit close icon */}</div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col h-0 flex-1 border-r">
            <div className="flex-1 flex flex-col pt-5 pb-4">
              <div className="flex items-center flex-shrink-0 px-4">
                <ThotAILogo className="text-yellow-500 h-8 w-8" />
              </div>
              <nav className="mt-5 flex-1 px-2 space-y-1">
                {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                        <a>
                            <Flex className={`p-2 rounded-md my-2 ${item.current && "bg-gray-700"}`}> 
                                <item.icon
                                    className="mr-3 flex-shrink-0 h-6 w-6"
                                    aria-hidden="true"
                                />
                                <Text>{item.name}</Text>
                            </Flex>
                        </a>
                    </Link>
                  
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t p-4">
              <a href="#" className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <Text className="text-sm font-medium">Tom Cook</Text>
                    <Text className="text-xs font-medium">View profile</Text>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}
