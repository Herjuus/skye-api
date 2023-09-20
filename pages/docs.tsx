import React from "react";

type props = {
    message: string
}

export default function Docs(props: props){
    return(
        <span>{props.message}</span>
    )
}