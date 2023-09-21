import React from "react";

type endpoint = {
    path: string;
}

type props = {
    title: string;
    getendpoints: Array<endpoint>;
}

export default function Docs(props: props){
    return(
        <main className="space-y-2">
            <div className="bg-gray-100 w-full p-2">
                <span className="text-2xl font-semibold">{props.title} <span className="font-light"> | docs</span></span>
            </div>
            <div className="flex flex-col p-2 text-xl">
                {props.getendpoints.map((endpoint) => (
                    <div className="space-x-2 border-2 border-spacing-1 bg-blue-600/10 border-blue-500 p-2 rounded-lg flex items-center" key={endpoint.path}>
                        <div className="bg-blue-500 text-white text-sm font-bold rounded w-20 p-2 flex justify-center items-center">GET</div>
                        <span className="font-light">{endpoint.path}</span>
                    </div>
                ))}
            </div>
        </main>
    )
}