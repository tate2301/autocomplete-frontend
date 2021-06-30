export default function SignUpForm(props) {
    return (
        <div className="bg-light-gray sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
            <div className="px-4 py-8 sm:px-10">
                <div>
                    <p className="text-sm font-medium text-gray-200">Sign in with</p>

                    <div className="mt-1 grid grid-cols-2 gap-3">
                    <div>
                        <a
                        href="#"
                        className="w-full inline-flex justify-center py-2 px-4 rounded-md shadow-sm bg-blue-600 text-sm font-medium text-white"
                        >
                        <span className="sr-only">Sign in with Facebook</span>
                        <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path
                            fillRule="evenodd"
                            d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                            clipRule="evenodd"
                            />
                        </svg>
                        </a>
                    </div>

                    <div>
                        <a
                        href="#"
                        className="w-full inline-flex justify-center py-2 px-4 rounded-md shadow-sm bg-gray-700 text-sm font-medium text-white"
                        >
                        <span className="sr-only">Sign in with GitHub</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                fillRule="evenodd"
                                d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </div>
                    </div>
                </div>

                <div className="mt-6 relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-border-gray" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-light-gray text-gray-500">Or</span>
                    </div>
                </div>

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