import React from "react";

function Cards({username,text}) {
    return (
        <>
        <div className="duration-100 ease-out my-4 px-6 text-black hover:text-sky-200 hover:bg-black rounded-md bg-blue-200 p-1">
            <h1 className="m-1 uppercase italic font-bold">{username}</h1>
            <p className="font-medium lowercase italic">{text}</p>
        </div>
        </>
    )
}

export default Cards