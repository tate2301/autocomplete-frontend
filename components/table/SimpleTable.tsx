const people = [
    {
      name: 'Jane Cooper',
      title: 'Regional Paradigm Technician',
      department: 'Optimization',
      role: 'Admin',
      email: 'jane.cooper@example.com',
    },
]
const Ccolumns = Object.keys(people[0])
import {SearchIcon} from '@heroicons/react/outline'

/***
 * @param data Array<any> 
 * @param columns Array<string>  
 * 
 * The param columns should contain the names of the columns to be displayed and in the correct order.
 * 
***/
export default function SimpleTable({data, cols, ContextComponent}: {
    data?: Array<any>
    cols?: Array<string>
    ContextComponent?: () => JSX.Element
}) {
    const columns = cols ?? Ccolumns
    return (
        <div className="flex flex-col">
            <div className="flex flex-col items-start">
                <SearchIcon height={16} width={16} className="text-gray-300" />
            </div>
            <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b">
                        <table className="min-w-full divide-y">
                            <thead>
                                <tr>
                                    {columns.map((column, index) => (
                                        <th
                                            key={index}
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                        >
                                            {column}
                                        </th>
                                    ))}
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {people.map((val) => {
                                    const entries = Object.entries(val)

                                    return (
                                        <tr key={val[0]}>
                                            {entries.map(([key, value]) => (
                                                <td key={key} className="px-6 py-4 whitespace-nowrap text-sm">
                                                    {value}
                                                </td>
                                            ))}
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <ContextComponent />
                                            </td>
                                        </tr>
                                    )}
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

  