import { NextApiRequest, NextApiResponse } from "next";
import { generator_api_url_cors } from "../../lib/constants";

export default async function coreweave(req: NextApiRequest, res: NextApiResponse) {
    if(req.method !== "POST") {
        return res.status(500).json({
            error: true,
            message: "GET method not allowed"
        })
    } else {
        const { body } = req
    
        const api_req = await fetch(generator_api_url_cors, {
            body: body.data,
            method: "post"
        })

        const data = await api_req.json()

        await console.log({data})
        return res.json(data?.predictions[0])
    }
}