import { FormEvent, useEffect } from "react"
import { useState } from "react"

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

export const generator_api_url = process.env.NEXT_APP_API_URL
const api_key = process.env.NEXT_APP_API_KEY

export const useGeneratorApi = () => {
    const [query, setQuery] = useState<string>(null)
    const [lang, setLang] = useState<SupportedLanguages>("js")
    const [pythonType, setPythonType] = useState<PythonType>("function")
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    const init = () => {
        setError(null)
        setData(null)
        setLoading(true)
    }

    const submitQuery = () => {
        init()
        const api_query: APIGenerateCodeQuery = {
            language: lang,
            prompt: query,
            code_type_param: pythonType,
            api_key
        }
        fetch(generator_api_url, {
            body: JSON.stringify(api_query)
        }).then(value => {
            setLoading(false)
            setData(value.json())
        }, error => {
            setLoading(false)
            setError(error)
        })
    }

    // Takes e as a form input event
    const updateQuery = (e) => {
        const value = e.target.value
        setQuery(value)
    }

    const updateLanguage = (lang: SupportedLanguages) => {
        if(!lang) {
            return
        }
        setLang(lang)
    }

    const updatePythonType = (pyType: PythonType) => {
        if(lang === "py") {
            setPythonType(pyType)
        }
    }

    useEffect(() => {
        console.log({error, data})
    }, [data, error])

    return {
        error,
        data,
        loading,
        updatePythonType,
        updateLanguage,
        submitQuery,
        updateQuery
    }

}