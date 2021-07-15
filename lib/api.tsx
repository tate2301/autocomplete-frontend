import axios from "axios"
import { useRouter } from "next/dist/client/router"
import { useState } from "react"
export const base_url = process.env.NODE_ENV === "production" ? "https://thot.ai" : "http://localhost:3000"

export type SupportedLanguages = "js" | "cpp" | "py"

export type PythonType = "function" | "class"

export type APIGenerateCodeResponse = {
    predictions: Array<Array<string>>
}

export type APIGenerateCodeQuery = {
    prompt: string;
    language: SupportedLanguages;
    api_key: string;
    code_type_param: string;
    workspace: any;
}



export const useGeneratorApi = (api_key) => {

    const router = useRouter()
    const { workspace } = router.query
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState([])
    const [lang, setLang] = useState(null)

    const init = () => {
        setError(null)
        setData([])
        setLoading(true)
    }

    const submitQuery = ({lang, query, pythonType}) => {
        setLang(lang)
        init()

        const api_query: APIGenerateCodeQuery = {
            language: lang,
            prompt: query,
            code_type_param: pythonType,
            api_key,
            workspace
        }


        axios.post(`${base_url}/api/coreweave`, {data: JSON.stringify(api_query)})
        .then(res => {
            setLoading(false)
            setData(res.data)
        }).catch(error => {
            setLoading(false)
            setError(error)
        })
    }

    return {
        error,
        data,
        loading,
        lang,
        submitQuery,
    }

}