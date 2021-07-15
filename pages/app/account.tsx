import CustomerNavbar from '../../components/navbar/CustomerNavbar'
import Subscription from '../../components/account/Subscription'
import UpdateEmail from '../../components/account/UpdateEmail'
import UpdatePassword from '../../components/account/UpdatePassword'
import { populateWithAccountDetails, verifyAuthenticatedClient } from '../../lib/constants'
import { useRouter } from 'next/dist/client/router'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../lib/auth'
import axios from 'axios'

export default function Example({subscription, noSub}) {
  const router = useRouter()
  const { user } = useContext(AuthContext)
  const { session_id } = router.query


  useEffect(() => {
    if(session_id && user) {
        axios.post("/api/user/custom-roles", { session_id })
          .then((res) => {
            if(res.status === 200) {
              window.location.href= "/app/account"
            }
          }).catch(err => {
            window.location.reload()
          })
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
              <Subscription subscription={subscription} active={!noSub} />
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

export const getServerSideProps = populateWithAccountDetails