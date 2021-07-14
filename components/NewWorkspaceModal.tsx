import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { createWorkspace } from '../lib/database'
import { useContext } from 'react'
import { AuthContext } from '../lib/auth'

export default function NewWorkspaceModal({open, close}) {
    const userData = useContext(AuthContext)

    const createNewWorkspace = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        createWorkspace({uid: userData?.user?.uid, name: name})
        close()
    }
    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={open} as={Fragment}>
        <Dialog
            as="div"
            static
            className="fixed z-10 inset-0 overflow-y-auto"
            initialFocus={cancelButtonRef}
            open={open}
            onClose={close}
        >
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                &#8203;
            </span>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
                <form onSubmit={createNewWorkspace} className="inline-block align-bottom bg-black rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div>
                    <div className="mt-3 sm:mt-5">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-white">
                        Create new workspace
                    </Dialog.Title>
                    </div>
                    <div className="mx-auto flex flex-col mt-4">
                        <div>
                            <label htmlFor="query" className="block text-sm font-medium text-gray-100">
                                Workspace name
                            </label>
                            <div className="mt-1">
                            <input
                                name="name"
                                id="name"
                                autoComplete="off"
                                required
                                minLength={4}
                                maxLength={50}
                                className="shadow-sm focus:ring-border-gray focus:border-border-gray block w-full sm:text-sm border-2 border-border-gray bg-dark-gray rounded-md p-2 outline-none"
                                placeholder="Type a name"
                            />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                    <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-600 text-base font-medium text-white sm:col-start-2 sm:text-sm"
                    >
                    Create workspace
                    </button>
                    <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-border-gray shadow-sm px-4 py-2 bg-dark-gray text-base font-medium text-gray-200 sm:mt-0 sm:col-start-1 sm:text-sm"
                        onClick={close}
                        ref={cancelButtonRef}
                    >
                    Cancel
                    </button>
                </div>
                </form>
            </Transition.Child>
            </div>
        </Dialog>
        </Transition.Root>
    )
}