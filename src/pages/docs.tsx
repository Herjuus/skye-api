import React from "react";

type endpoint = {
    path: string;
}

type props = {
    title: string;
    getendpoints: Array<endpoint>;
    postendpoints: Array<endpoint>;
    reactendpoints: Array<endpoint>;
}

export default function Docs(props: props){
    return(
        <main className="space-y-2">
            <div className="bg-gray-100 w-full p-2">
                <span className="text-2xl font-semibold">{props.title} <span className="font-light"> | docs</span></span>
            </div>
            <div className="px-2 space-y-2">
                <span className="text-2xl font-light">Endpoints:</span>
                <div className="flex flex-col text-xl space-y-1">
                    {props.getendpoints.map((endpoint) => (
                        <div className="space-x-2 border-2 border-spacing-1 bg-blue-600/10 border-blue-500 p-2 rounded-lg flex items-center" key={endpoint.path}>
                            <div className="bg-blue-500 text-white text-sm font-bold rounded w-20 p-2 flex justify-center items-center">GET</div>
                            <span className="font-light">{endpoint.path}</span>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col text-xl">
                    {props.postendpoints.map((endpoint) => (
                        <div className="space-x-2 border-2 border-spacing-1 bg-green-600/10 border-green-500 p-2 rounded-lg flex items-center" key={endpoint.path}>
                            <div className="bg-green-500 text-white text-sm font-bold rounded w-20 p-2 flex justify-center items-center">POST</div>
                            <span className="font-light">{endpoint.path}</span>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col text-xl">
                    {props.reactendpoints.map((endpoint) => (
                        <div className="space-x-2 border-2 border-spacing-1 bg-purple-600/10 border-purple-500 p-2 rounded-lg flex items-center" key={endpoint.path}>
                            <div className="bg-purple-500 text-white text-sm font-bold rounded w-20 p-2 flex justify-center items-center">REACT</div>
                            <span className="font-light">{endpoint.path}</span>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}