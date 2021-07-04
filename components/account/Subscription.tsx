import Button from "../Button"

export default function Subscription(props: SubscriptionProps) {
    if (!props.active) {
        return (
            <InActiveSubscription />
        )
    } else {
        return (
            <ActiveSubscription/>
        )
    }
}

function ActiveSubscription() {
    return (
        <div className="rounded-md p-2 md:p-4 bg-light-gray border border-border-gray">
            <h3 className="text-xl font-medium text-white">
                You are on the Premium subscription
            </h3>
            <p className="mt-1 text-sm">
                You subscription will be renewed on Wednesday, July 7, 2021.
            </p>

            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div className="px-4 py-5 bg-dark-gray shadow rounded-lg border border-border-gray overflow-hidden sm:p-6">
                    <dt className="text-sm font-medium text-gray-200 truncate">July Usage</dt>
                    <dd className="mt-1 text-3xl font-semibold text-white">14k</dd>
                </div>
            </dl>
            
        </div>
    )
}

function InActiveSubscription() {
    return(
        <div className="rounded-md p-2 md:p-4 bg-light-gray border border-border-gray">
            <h3 className="text-xl font-medium text-white">
                You are not on an active subscription
            </h3>
            <p className="mt-1 text-sm">
                Subscribe to one of our plans to have access to the API. It's a $29.99/month price for unlimited requests.
            </p>
            <div className="mt-4">
                <Button className="rounded-md px-8 py-2 bg-yellow-500 text-black font-bold">
                    Subscribe now
                </Button>
            </div>
        </div>
    )
}

type SubscriptionProps = {
    active?: boolean
}