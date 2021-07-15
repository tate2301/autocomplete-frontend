import { NextApiRequest, NextApiResponse } from "next";
import { parseCookies } from "nookies";
import { firebaseAdmin } from "../../../lib/firebaseAdmin";

const stripe = require('stripe')(process.env.STRIPE_KEY);

const createPortalLink = async (req: NextApiRequest, res: NextApiResponse) => {
    const cookies = parseCookies({ req })
    try {
        const user = await firebaseAdmin.auth().verifyIdToken(cookies.token)

        const claims = await (await firebaseAdmin.auth().getUser(user.uid)).customClaims
        console.log(claims)

        const { url } = await stripe.billingPortal.sessions.create({
            customer: claims.session_id,
            return_url: `${process.env.BASE_URL}/app/account`
        });

      return res.redirect(url)
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ error: { statusCode: 500, message: err.message } });
    }
};

export default createPortalLink;