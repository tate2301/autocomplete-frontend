import { DownloadIcon, TrashIcon } from "@heroicons/react/outline";
import { PlusIcon } from "@heroicons/react/solid";
import CustomerNavbar from '../../../components/navbar/CustomerNavbar'
import SnippetCard from "../../../components/SnippetCard";
import { useState } from "react";
import GenerateCodeForm from "../../../components/forms/GenerateCodeForm";
import { verifyAuthenticatedClient } from "../../../lib/constants";

export default function App({api_key}) {
  return (
      <>
        <header className="bg-black">
          <CustomerNavbar />
        </header>
        <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between mt-8 pb-4 border-b border-border-gray">
              <div className="flex-1 min-w-0">
                <h2 contentEditable className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate">Workspaces</h2>
              </div>
                <div className="mt-4 flex md:mt-0 md:ml-4">
                    <div className="w-full flex justify-end space-x-2">
                        <button className="p-1 rounded-full bg-yellow-500">
                            <DownloadIcon className="h-5 w-5 text-white" />
                        </button>
                        <button className="p-1 rounded-full bg-red-500">
                            <TrashIcon className="h-5 w-5 text-white" />
                        </button>
                    </div>
                  </div>
                </div>
              <div>
          </div>
        </div>
        <div className="max-w-5xl p-2 mx-auto pb-12 flex overflow-hidden bg-black">
          <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
            <div className="flex-1 relative z-0 flex overflow-hidden">
              <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
                {/* Start main area*/}
                  <GenerateCodeForm api_key={api_key} />
                {/* End main area */}
              </main>
            </div>
          </div>
        </div>
    
      </>
    )
}

export const getServerSideProps = verifyAuthenticatedClient