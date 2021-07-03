import { ReactNode } from "react";
import Spinner from "./Spinner";

export default function Button(props: {
    children?: ReactNode
    className?: string
    isLoading?: boolean
    disabled?: boolean
    type?: "button" | "submit" | "reset" 
}) {

    const { children } = props
    if (props.isLoading) {
        const newProps = {
            className: props.className,
            type: props.type
        }
        newProps.className = "bg-yellow-300 " + props.className
        return( 
            <button {...newProps} disabled>
                <Spinner />
                {children}
            </button>
        )
    } else {
        return(
            <button {...props} />
        )
    }
    
}