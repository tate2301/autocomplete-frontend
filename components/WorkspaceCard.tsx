import { DownloadIcon, TrashIcon } from "@heroicons/react/outline";
import Link from "next/link"

export default function WorkspaceCard({items, name, docId, dateCreated, storageBucketUrl}) {
    return (
        <Link href={`/app/${docId}/`}>
            <a>
                <div className="bg-dark-gray border border-border-gray p-2 md:p-4 rounded-md w-full">
                    <div className="grid grid-cols-5">
                        <div className="col-span-4">
                            <h4 className="text-white text-lg">
                                {name}
                            </h4>
                            <p className="text-sm mt-2">
                                Created: {new Date(dateCreated).toDateString()}
                            </p>
                            <p className="text-sm">
                                Items: {items?.length}
                            </p>
                        </div>
                        <div className="col-span-1">
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
                </div>
            </a>
        </Link>
    )
}