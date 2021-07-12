import axios from "axios"
import { FormEvent, useEffect } from "react"
import { useState } from "react"
import { generator_api_url } from "./constants"

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
}



export const useGeneratorApi = (api_key) => {

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    const init = () => {
        setError(null)
        setData(null)
        setLoading(true)
    }

    const submitQuery = ({lang, query, pythonType}) => {
        init()

        const api_query: APIGenerateCodeQuery = {
            language: lang,
            prompt: query,
            code_type_param: pythonType,
            api_key
        }


        axios.post(generator_api_url, {...api_query})
        .then(res => {
            setLoading(false)
            setData(res.data)
        }).catch(error => {
            setLoading(false)
            setError(error)
        })
    }

    useEffect(() => {
        console.log({error, data, api_key, generator_api_url})
    }, [data, error])

    return {
        error,
        data,
        loading,
        submitQuery,
    }

}