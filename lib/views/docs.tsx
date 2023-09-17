import React from "react"

type endpoint = {
    type: string
    path: string
}
type props = {
    endpoints: endpoint[]
}

export default function Docs(props: props){

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {props.endpoints.map((endpoint) => {
                return(
                    <div key={endpoint.path}>
                        <span>{endpoint.path} </span>
                        <span>{endpoint.type}</span>
                    </div>
                )
            })}
        </div>
    )
}