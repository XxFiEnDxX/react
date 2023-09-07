import { useState } from 'react'

function App() {
    let [color,setColor] = useState('#f1f5f9');

return (
    <div className='w-screen h-screen flex flex-col justify-end items-center'
    style={{backgroundColor:color}}>
        <div className="container w-[630px] mb-10 flex bg-sky-200 text-gray-800 px-5 py-1 rounded-3xl">
            <div onClick={()=>{setColor('rgb(125 211 252)')}} className='m-1 uppercase font-extrabold text-md italic hover:text-white bg-sky-300 rounded-sm px-3 py-1'>blue</div>
            <div onClick={()=>{setColor('rgb(252 165 165)')}} className='m-1 uppercase font-extrabold text-md italic hover:text-white bg-red-300 rounded-sm px-3 py-1'>red</div>
            <div onClick={()=>{setColor('rgb(249 168 212)')}} className='m-1 uppercase font-extrabold text-md italic hover:text-white bg-pink-300 rounded-sm px-3 py-1'>pink</div>
            <div onClick={()=>{setColor('rgb(134 239 172)')}} className='m-1 uppercase font-extrabold text-md italic hover:text-white bg-green-300 rounded-sm px-3 py-1'>green</div>
            <div onClick={()=>{setColor('rgb(253 186 116)')}} className='m-1 uppercase font-extrabold text-md italic hover:text-white bg-orange-300 rounded-sm px-3 py-1'>orange</div>
            <div onClick={()=>{setColor('rgb(216 180 254)')}} className='m-1 uppercase font-extrabold text-md italic hover:text-white bg-purple-300 rounded-sm px-3 py-1'>purple</div>
            <div onClick={()=>{setColor('rgb(253 224 71)')}} className='m-1 uppercase font-extrabold text-md italic hover:text-white bg-yellow-300 rounded-sm px-3 py-1'>yellow</div>
        </div>
    </div>
)
}

export default App
