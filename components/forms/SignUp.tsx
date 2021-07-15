export default function SignUpForm(props) {
    return (
        <div className="bg-light-gray sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
            <div className="px-4 py-8 sm:px-10">
                <div className="mt-6">
                    <form action="#" method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="name" className="sr-only">
                            Full name
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            autoComplete="name"
                            placeholder="Full name"
                            required
                            className="block w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm border-border-gray rounded-md bg-light-gray"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="sr-only">
                            Email address
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="email"
                            placeholder="Email address"
                            required
                            className="block w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm border-border-gray rounded-md bg-light-gray"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="sr-only">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            autoComplete="current-password"
                            required
                            className="block w-full shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm border-border-gray rounded-md bg-light-gray"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-black bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                        >
                        Create your account
                        </button>
                    </div>
                    </form>
                </div>
            </div>
            <div className="px-4 py-6 border-t-2 border-border-gray sm:px-10 bg-light-gray">
                <p className="text-xs leading-5 text-gray-300">
                    By signing up, you agree to our{' '}
                    <a href="#" className="font-medium text-gray-200 hover:underline">
                    Terms
                    </a>
                    ,{' '}
                    <a href="#" className="font-medium text-gray-200 hover:underline">
                    Data Policy
                    </a>{' '}
                    and{' '}
                    <a href="#" className="font-medium text-gray-200 hover:underline">
                    Cookies Policy
                    </a>
                    .
                </p>
            </div>
        </div>
                  
    )
}