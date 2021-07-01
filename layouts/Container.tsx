export default function Container({children}) {
    return (
        <div className="relative bg-black max-w-7xl mx-auto py-16">
            {children}
        </div>
    )
}