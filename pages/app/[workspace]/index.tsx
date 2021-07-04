import { DownloadIcon, TrashIcon } from "@heroicons/react/outline";
import { PlusIcon } from "@heroicons/react/solid";
import CustomerNavbar from '../../../components/navbar/CustomerNavbar'
import Button from "../../../components/Button";
import SnippetCard from "../../../components/SnippetCard";

const snippets = [
  {
    name: "React component for ABC",
    dateCreated: new Date()
  }
]

export default function Example() {

  return (
      <>
        <header className="bg-black">
          <CustomerNavbar />
        </header>
        <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between mt-8 pb-4 border-b border-border-gray">
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate">Workspaces (1)</h2>
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
        <div className="max-w-5xl p-2 mx-auto h-screen flex overflow-hidden bg-black">
          <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
            <div className="flex-1 relative z-0 flex overflow-hidden">
              <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
                {/* Start main area*/}
                <div className="py-6 px-4 sm:px-6 lg:px-8 space-y-4">
                  <div className="h-full border-2 border-border-gray bg-light-gray rounded-lg p-4 space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-100">
                        What's the name of this snippet
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          className="shadow-sm focus:ring-border-gray focus:border-border-gray block w-full sm:text-sm border-border-gray bg-dark-gray rounded-md"
                          placeholder="What's the name of this snippet"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="question" className="block text-sm font-medium text-gray-100">
                        Explain what you would like to achieve
                      </label>
                      <div className="mt-1">
                        <textarea
                          name="question"
                          id="question"
                          required
                          maxLength={400}
                          className="shadow-sm focus:ring-border-gray focus:border-border-gray block w-full sm:text-sm border-border-gray bg-dark-gray rounded-md"
                          placeholder="e.g. "
                        />
                      </div>
                    </div>

                    <div className="w-full">
                        <div className="mt-4 flex justify-end">
                            <Button className="rounded-md px-4 py-2 bg-yellow-500 text-black font-bold text-sm">
                                Generate
                            </Button>
                        </div>
                    </div>
                  </div>

                  <div className="h-full border-2 border-border-gray border-dashed rounded-lg p-2">
                    <p className="text-sm font-bold my-2">Generated Code</p>
                  </div>
                </div>
                {/* End main area */}
              </main>

              <aside className="hidden relative xl:order-first xl:flex xl:flex-col flex-shrink-0 w-96">
                {/* Start secondary column */}
                <div className="px-3">
                  <div className="h-full py-2 md:p-4">
                    <div className="flex justify-between">
                      <h4 className="text-xl my-2">Snippets</h4>
                      <div className="items-center flex">
                        <button className="p-1 rounded-full bg-yellow-500">
                            <PlusIcon className="h-5 w-5 text-white" />
                        </button>
                      </div>
                    </div>
                  
                    <div className="mt-4">
                      {
                        snippets.map((snippet, key) => <SnippetCard key={key} {...snippet} docId="doc-id" />)
                      }
                    </div>
                  </div>
                </div>
                {/* End secondary column */}
              </aside>
            </div>
          </div>
        </div>
    
      </>
    )
}
