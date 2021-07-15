import { NextApiRequest, NextApiResponse } from "next";
import { firebaseAdmin } from "../../../lib/firebaseAdmin";
const { parseCookies } = require('nookies');

export default async function customRoles(req: NextApiRequest, res: NextApiResponse) {
    const cookies = parseCookies({ req })
    const { body } = req
    const user = await firebaseAdmin.auth().verifyIdToken(cookies.token)
    await firebaseAdmin.auth().setCustomUserClaims(user.uid, {...body})
    return res.status(200).send("Ok")
}