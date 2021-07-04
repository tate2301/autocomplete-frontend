import CustomerNavbar from '../../components/navbar/CustomerNavbar'
import Subscription from '../../components/account/Subscription'
import UpdateEmail from '../../components/account/UpdateEmail'
import UpdatePassword from '../../components/account/UpdatePassword'

export default function Example() {

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
