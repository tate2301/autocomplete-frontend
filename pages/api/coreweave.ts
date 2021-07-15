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
            let { body } = req
            body.data = JSON.parse(body.data)
            const user = await firebaseAdmin.auth().verifyIdToken(cookies.token)
            const { workspace } = body.data

            const bodyData = {
                language: body.data.language,
                prompt: body.data.prompt,
                code_type_param: body.data.code_type_param,
                api_key: body.data.api_key,
            }

            console.log(bodyData)

            // Update usage requests count
            await firebaseAdmin.firestore().collection("usage").doc(user.uid).update({ request_count: firebaseAdmin.firestore.FieldValue.increment(1) })

            const api_req = await fetch(generator_api_url_cors, {
                body: JSON.stringify(bodyData),
                method: "post"
            })
    
            await console.log("Fetched")

            const data = await api_req.json()
    
            // Save request and response in firestore history
            await firebaseAdmin.firestore().collection("requests").doc(user.uid).set({ request: {
                    ...body.data,
                    workspace,
                    predictions: data?.predictions
                } 
            })

            await console.log("Saved")

            return res.json(data?.predictions)
        } catch (err) {
            console.log(err)
            return res.status(500).json({err})
        }
        
    }
}