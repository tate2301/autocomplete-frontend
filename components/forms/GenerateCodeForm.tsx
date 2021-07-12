import { useState } from "react";
import { useGeneratorApi } from "../../lib/api";
import Button from "../Button";

export default function GenerateCodeForm({api_key}) {
    const onSubmit = (e) => {
        e.preventDefault()
        const lang = e.target.language?.value
        const query = e.target.query?.value
        const pythonType = e.target.pythonType?.value
        submitQuery({lang, query, pythonType})

    }

    const [isPythonSelected, setIsPythonSelected] = useState(false)
    const { loading, data, error, submitQuery } = useGeneratorApi(api_key)

    return(
        <form onSubmit={onSubmit} className="h-full border-2 border-border-gray bg-light-gray rounded-lg p-4 space-y-4">
            <div>
                <label htmlFor="query" className="block text-sm font-medium text-gray-100">
                Explain what you would like to achieve
                </label>
                <div className="mt-1">
                <textarea
                    name="query"
                    id="query"
                    required
                    maxLength={400}
                    className="shadow-sm focus:ring-border-gray focus:border-border-gray block w-full sm:text-sm border-border-gray bg-dark-gray rounded-md"
                    placeholder="e.g. "
                />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 space-x-4">
                <div className="col-span-1">
                    <label htmlFor="language" className="block text-sm font-medium text-gray-100">
                        Language
                    </label>
                    <select
                        id="language"
                        name="language"
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-dark-gray border-border-gray focus:outline-none focus:ring-border-gray focus:border-border-gray sm:text-sm rounded-md"
                        defaultValue="cpp"
                        onChange={(e)  => {
                            const value = e.target.value
                            if(value === "py") {
                                setIsPythonSelected(true)
                            } else {
                                setIsPythonSelected(false)
                            }
                        }}
                    >
                        <option value="cpp">C++</option>
                        <option value="js">JavaScript</option>
                        <option value="py">Python</option>
                    </select>
                </div>
                {isPythonSelected && <div className="col-span-1">
                    <label htmlFor="pythonType" className="block text-sm font-medium text-gray-100">
                        Code Type
                    </label>
                    <select
                        id="pythonType"
                        name="pythonType"
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-dark-gray border-border-gray focus:outline-none focus:ring-border-gray focus:border-border-gray sm:text-sm rounded-md"
                        defaultValue="function"
                    >
                        <option value="function">Function</option>
                        <option value="class">Class</option>
                    </select>
                </div>}
            </div>

            <div className="w-full">
                <div className="mt-4 flex w-full justify-end">
                    <Button isLoading={loading} type="submit" className="rounded-md px-4 py-2 bg-yellow-500 text-black font-bold text-sm flex space-x-2">
                        Generate
                    </Button>
                </div>
            </div>
        </form>
    )
}