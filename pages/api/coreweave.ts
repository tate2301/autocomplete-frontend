import { NextApiRequest, NextApiResponse } from "next";
import { parseCookies } from "nookies";
import { generator_api_url_cors } from "../../lib/constants";
import { firebaseAdmin } from "../../lib/firebaseAdmin";

export default async function coreweave(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== "POST") {
        return res.status(500).json({
            error: true,
            message: "GET method not allowed"
        })
    } else {
        const cookies = parseCookies({ req })

        try {
            const { body } = req
            const user = await firebaseAdmin.auth().verifyIdToken(cookies.token)

            console.log(body)

            // Update usage requests count
            await firebaseAdmin.firestore().collection("usage").doc(user.uid).set({ request_count: firebaseAdmin.firestore.FieldValue.increment(1) })

            const api_req = await fetch(generator_api_url_cors, {
                body: body.data,
                method: "post"
            })
    
            const data = await api_req.json()
    
            // Save request and response in firestore history
            await firebaseAdmin.firestore().collection("requests").doc(user.uid).set({ request: {
                    ...body.data,
                    predictions: data?.predictions
                } 
            })

            return res.json(data?.predictions)
        } catch (err) {
            console.log(err)
            return res.status(500).json({err})
        }
        
    }
}