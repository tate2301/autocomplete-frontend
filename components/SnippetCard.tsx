export default function SnippetCard({name, dateCreated, docId}) {
    return(
        <a href={"#"}>
            <div className="bg-dark-gray rounded-md px-4 py-2">
                <p className="text-white text-sm">
                    {name}
                </p>
                <p className="mt-1 text-xs">
                    Last modified: {new Date(dateCreated).toDateString()}
                </p>
            </div>
        </a>
    )
}