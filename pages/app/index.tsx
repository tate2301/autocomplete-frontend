import { PlusIcon } from '@heroicons/react/outline'
import Head from 'next/head'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import CustomerNavbar from '../../components/navbar/CustomerNavbar'
import NewWorkspaceModal from '../../components/NewWorkspaceModal'
import WorkspaceCard from '../../components/WorkspaceCard'
import { AuthContext } from '../../lib/auth'
import { verifyAuthenticatedClient } from '../../lib/constants'
import { useWorkspaces } from '../../lib/database'


export default function Index() {
  const auth = useContext(AuthContext)
  const [empty, setEmpty] = useState(true)
  const [open, setOpen] = useState(false)

  const { data: workspaces } = useWorkspaces(auth?.user?.uid)
  const openModal = () => setOpen(true)
  const close = () => setOpen(false)

  useEffect(() => {
    if(workspaces) {
      if(workspaces.length > 0) {
        setEmpty(false)
      }
    }
  }, [workspaces])

  return (
    <div className="min-h-screen bg-black">
      <Head>
        <title>Workspaces ({workspaces?.length || 0})</title>
      </Head>
      <header className="bg-black shadow">
        <CustomerNavbar />
      </header>

      <main className="py-10 max-w-5xl px-2 mx-auto space-y-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate">Workspaces ({workspaces?.length || 0})</h2>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            {!empty && <button
              type="button"
              onClick={openModal}
              className="sm:ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-bold text-black bg-yellow-500"
            >
              New workspace
            </button>}
            <NewWorkspaceModal open={open} close={close} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {!empty ? workspaces?.map((space, key) => <WorkspaceCard key={key} {...space} />) : <NoWorkspacesPresent />}
        </div>
      </main>
    </div>
  )
}

const NoWorkspacesPresent = () => {
  const [open, setOpen] = useState(false)

  const openModal = () => setOpen(true)
  const close = () => setOpen(false)

  return(
    <div className="text-center">
      <svg
        className="mx-auto h-12 w-12 text-gray-100"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
        />
      </svg>
      <h3 className="mt-2 text-lg font-medium text-white">It's lonely here</h3>
      <p className="mt-1 text-sm text-gray-300">Get started by creating a new workspace.</p>
      <div className="mt-6">
        <button
          type="button"
          onClick={openModal}
          className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600"
        >
          <NewWorkspaceModal open={open} close={close} />
          <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          New Project
        </button>
      </div>
    </div>
  )
}

export const getServerSideProps = verifyAuthenticatedClient