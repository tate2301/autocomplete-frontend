import { useState } from "react";
import Container from "../../layouts/Container";
import CodeOutputPreview from "./CodeOutputPreview";
import SelectCodeQuery from "./SelectCodeQuery";

const data = [
    {
        id: 1,
        text: "A blue button with red text on a white background with witdh 40px and height 20rem",
        code: {
            "C++": 
`#include <stdio.h>
using namespace std;

int main() {
    cout << "Hello World" << endl;
    return 0;
}
`,
            "JavaScript": `function HelloWorld() {
                return 0;
}
            ` 
        },
    },
    {
        id: 2,
        text: "A blue button with red text on a white background with witdh 40px and height 20rem",
        code: {
            "JavaScript": `
#include <stdio.h>

using namespace std;

int main() {
    cout << "Hello World" << endl;
    return 0;
}
            `
        },
    },
    
]


export default function Playground({selectedLanguage}) {
    const [isStarted, setIsStarted] = useState(false)
    const toggleIsStarted = () => setIsStarted(!isStarted)

    console.log({selectedLanguage})
    return(
        <Container>
            <div className="w-full p-4 md:p-8 lg:pt-12 rounded-md bg-light-gray flex md:h-96 justify-center items-center">
                {
                    (isStarted || selectedLanguage)
                    ? <LoadPlayground selectedLang={selectedLanguage} /> 
                    : <button 
                        onClick={toggleIsStarted}
                        className="px-8 py-2 bg-black text-white font-medium rounded-md">
                        Launch playground
                    </button>
                }
            </div>
        </Container>
    )
}

function LoadPlayground({selectedLang}) {
    const [selectedItem, setSelectedItem] = useState(data[0])

    const updateSelectedCode = (key: number) => {
        setSelectedItem(data[key])
    }

    console.log(selectedItem.code[selectedLang])

    return(
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4">
            <SelectCodeQuery data={data} updateSelectedCode={updateSelectedCode} />
            <CodeOutputPreview  selectedLang={selectedLang} selectedCode={selectedItem} />
        </div>
    )
}