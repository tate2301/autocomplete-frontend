import { NextApiRequest, NextApiResponse } from "next";
import { firebaseAdmin } from "../../../lib/firebaseAdmin";
const { parseCookies } = require('nookies');
const stripe = require('stripe')(process.env.STRIPE_KEY);

export default async function customRoles(req: NextApiRequest, res: NextApiResponse) {
    const cookies = parseCookies({ req })
    const { body } = req
    const user = await firebaseAdmin.auth().verifyIdToken(cookies.token)
    const session = await stripe.checkout.sessions.retrieve(body.session_id)
    await firebaseAdmin.auth().setCustomUserClaims(user.uid, {customer_id: session.customer, subscription: session.subscription})
    await firebaseAdmin.firestore().collection("subscriptions").doc(session.subscription).set({customer_id: session.customer, uid: user.uid})
    return res.status(200).send("Ok")
}