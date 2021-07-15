import { NextApiRequest, NextApiResponse } from "next";

const stripe = require('stripe')(process.env.STRIPE_KEY);

const createPortalLink = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const customer = "cus_JrAB2Q9XnbH1j3"

        const { url } = await stripe.billingPortal.sessions.create({
            customer,
            return_url: `${process.env.BASE_URL}/app/`
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