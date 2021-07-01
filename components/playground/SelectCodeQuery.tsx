export default function SelectCodeQuery({data, updateSelectedCode}){
    return(
        <div className="p-2 flex md:flex-col w-full overflow-x-scroll md:overflow-x-hidden md:overflow-y-scroll scrollbars">
            {data.map((data, key) => <CodeCard key={key} text={data.text} onClick={() => updateSelectedCode(key)} />)}
        </div>
    )
}

const CodeCard = ({text, onClick}) => (
    <div className="rounded-md  w-56 mr-4 md:mr-0 md: mb-2 md:w-full flex-shrink-0 bg-black text-white flex flex-col p-4 cursor-pointer hover:bg-dark-gray" onClick={onClick}>
        <p className="text-sm">
            {text}
        </p>
        <p className="mt-4 text-xs">
            <span className="bg-green-100 text-green-500 font-medium rounded-md p-1">
                CACHED
            </span>
        </p>
    </div>
)