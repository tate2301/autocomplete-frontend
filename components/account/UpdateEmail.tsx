import Button from "../Button"

export default function UpdateEmail() {
    return(
        <div className="rounded-md p-2 md:p-4 bg-light-gray border border-border-gray">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-1 col-span-2 md:col-span-1">
                    <h4 className="text-lg">Email address</h4>
                    <p className="text-sm">Use an email address where you can receive mail</p>
                </div>
                <form className="col-span-2 md:col-span-1 space-y-3">
                    <div className="w-full">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-100">
                            Email address
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                            <input
                                type="email"
                                autoComplete="off"
                                name="email"
                                id="email"
                                required
                                className="bg-dark-gray border border-border-gray focus:border-border-gray focus:ring-border-gray flex-1 block w-full rounded-md sm:text-sm"
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="mt-4 flex justify-end">
                            <Button className="rounded-md px-4 py-2 bg-yellow-500 text-black font-bold text-sm">
                                Save
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}