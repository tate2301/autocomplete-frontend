import { MenuIcon } from "@heroicons/react/solid"
import Head from "next/head"
import { useState } from "react"
import Sidebar from "../components/sidebar/Sidebar"

export default function Container({children, title}) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className="relative h-screen flex overflow-hidden">
            <Head>
                <title>
                    {title}
                </title>
            </Head>
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="flex flex-col w-0 flex-1 overflow-hidden">
                <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
                    <button
                        className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
                    <div className="py-6">
                        <div className="px-4 sm:px-6 md:px-8">
                            <h1 className="text-2xl font-semibold">{title}</h1>
                        </div>
                        <div className="mx-auto px-4 sm:px-6 md:px-8">
                            {/* Replace with your content */}
                            <div className="py-4">
                                {children}
                            </div>
                            {/* /End replace */}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}