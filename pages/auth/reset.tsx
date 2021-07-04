import ThotAILogo from '../../components/logo/thotai'
import { useAuth } from '../../lib/auth'
import Button from '../../components/Button'


export default function Example() {
  const { signInWithEmail, authError, authLoading } = useAuth()

  return (
    <div className="min-h-screen flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <ThotAILogo className="mx-auto h-16 w-auto text-white"/>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-50">Forgot your password?</h2>
        </div>
        <form onSubmit={signInWithEmail} className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="off"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border bg-light-gray border-border-gray placeholder-gray-300 text-white rounded-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
          </div>
          {authError && <div className="my-2">
            <p className="text-red-500 text-sm">
              {authError.message}
            </p>
          </div>}

          <div className="flex items-center justify-end">
            <div className="text-sm">
              <a href="reset" className="font-medium text-yellow-600 hover:text-yellow-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <Button
              isLoading={authLoading}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Send reset instructions
            </Button>
          </div>
          <div>
            <a
              href="signup"
              className="group relative w-full flex justify-center py-2 px-4 border border-border-gray text-sm font-medium rounded-md text-white bg-dark-grayfocus:outline-none"
            >
              Sign in to your account
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
