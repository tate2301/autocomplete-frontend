import CustomerNavbar from "../../components/navbar/CustomerNavbar";
import { verifyAuthenticatedClient } from "../../lib/constants";

export default function NewWorkspace() {
    return (
        <>
            <header className="bg-black">
                <CustomerNavbar />
            </header>
        </>
    )
}

export const getServerSideProps = verifyAuthenticatedClient