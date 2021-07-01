import Prism from 'prismjs'
import { useEffect } from 'react';

export default function CodeOutputPreview({selectedLang, selectedCode}){
    useEffect(() => {
        Prism.highlightAll();
      }, [selectedLang, selectedCode]);

    const lang_class = selectedLang === "C++" ? "clike" : selectedLang === "JavaScript" ? "javascript" : "python"
    return(
        <div className="p-2 h-full bg-black rounded-md">
            <p className="p-2 pt-4">
                <span className="bg-yellow-500 rounded-md p-2 text-sm text-white">
                    {selectedLang}
                </span>
            </p>
            <pre className={`whitespace-pre-line text-sm py-2 px-4`}>
                <code className={`lang-${lang_class}`}>
                    {selectedCode.code[selectedLang]}
                </code>
            </pre>
        </div>
    )
}
