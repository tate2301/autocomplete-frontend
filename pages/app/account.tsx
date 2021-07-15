import CustomerNavbar from '../../components/navbar/CustomerNavbar'
import Subscription from '../../components/account/Subscription'
import UpdateEmail from '../../components/account/UpdateEmail'
import UpdatePassword from '../../components/account/UpdatePassword'
import { verifyAuthenticatedClient } from '../../lib/constants'
import { useRouter } from 'next/dist/client/router'
import { useContext, useEffect } from 'react'
import { registerSubscription, useMySubscription } from '../../lib/database'
import { AuthContext } from '../../lib/auth'

export default function Example() {
  const router = useRouter()
  const { user } = useContext(AuthContext)
  const { session_id } = router.query
  const { data: subscription, status, error } = useMySubscription(user?.uid)
  useEffect(() => {
    if(session_id && user && subscription) {
        if(!subscription || subscription?.length === 0) {
          registerSubscription(session_id).then(() => {
            window.location.href= "/app/account"
          })
        }
    }
  }, [session_id, user, subscription])

  if (session_id) {
    return (
      <div>Please wait as we set up your subscription</div>
    )
  }
  return (
    <>
      <header className="bg-black">
        <CustomerNavbar />
      </header>
      <main className="max-w-5xl px-2 mx-auto pt-10 pb-12 px-4 lg:pb-16">
        <form>
          <div className="space-y-6">
            <div>
              <h1 className="text-xl leading-6 font-medium text-white">Account Settings</h1>
            </div>

            <div>
              <Subscription active={true} />
            </div>
            <div>
              <UpdateEmail />
            </div>
            <div>
              <UpdatePassword />
            </div>
          </div>
        </form>
      </main>
    </>
  )
}

export const getServerSideProps = verifyAuthenticatedClient