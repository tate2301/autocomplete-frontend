import CustomerNavbar from '../../components/navbar/CustomerNavbar'
import WorkspaceCard from '../../components/WorkspaceCard'

const workspaces = [
  {
    user: "98934838934894",
    docId: "doc-id",
    name: "My Workspace",
    dateCreated: new Date(),
    storageBucketUrl: "some-url",
    items: [
      {
        url: "x-a-b",
        title: "My code",
        question: "This question",
        dateCreated: new Date(),
      }
    ]
  }
]

export default function Example() {
  return (
    <div className="min-h-screen bg-black">
      <header className="bg-black shadow">
        <CustomerNavbar />
      </header>

      <main className="py-10 max-w-5xl px-2 mx-auto space-y-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate">Workspaces (1)</h2>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <button
              type="button"
              className="sm:ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-bold text-black bg-yellow-500"
            >
              New workspace
            </button>
          </div>
        </div>
        <div>
          {workspaces.map((space, key) => <WorkspaceCard key={key} {...space} />)}
        </div>
      </main>
    </div>
  )
}
