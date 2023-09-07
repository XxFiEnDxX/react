import { useCallback, useEffect, useState, useRef } from 'react'

function App() {
  const [length, setLength] = useState(9)
  const [num, setNum] = useState(false)
  const [Char, setChar] = useState(false)
  const [password, setPassword] = useState("  ")

  // useRef
  const passRef = useRef(null)

  const passGen = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(num)str += "0123456789"
    if(Char)str += "!@#$%&*^"

    for (let i = 1; i <= length; i++) {
      let ch =Math.floor(Math.random()*str.length+1)  
      
      pass += str.charAt(ch);
    }

    setPassword(pass)

  },[length,num,Char,setPassword])

  useEffect(()=>{
    passGen()},[length,num,Char,passGen])

    const  CopyPassword = useCallback(()=>{
      passRef.current?.select()
      window.navigator.clipboard.writeText(password)
    },[password])


   
    return (
      <>
      <div className='px-6 py-9 bg-blue-500 rounded-lg overflow-hidden w-[530px]'>

        <h1 className='uppercase italic font-black  text-white text-sm mb-2 ml-1'>Password Generator</h1>

        <div className='flex flex-row items-center justify-between'>
          <h3 className='bg-blue-800 w-full rounded-md mr-5 border-blue-800 border-[2px] px-2 py-1 font-bold italic h-[36px]'>{password}</h3>
          <button className='uppercase italic font-bold 
          bg-blue-800 text-white text-lg rounded-md px-2 py-[3px] hover:text-blue-800 hover:bg-white'
          onClick={CopyPassword}>Copy</button>
        </div>
        <div className='flex items-start justify-start mt-3'>
          <div className='flex flex-col items-center mr-7'>
            <input 
            type="range" 
            min={8}
            max={32}
            value={length}
            onChange={(e)=>{setLength(e.target.value)}}/>
            <label className='text-[15px] lowercase font-semibold italic'>Length: {length}</label>
          </div>
          <div className='flex justify-center mr-7'>
            <input className='mr-1' type="checkbox"
            defaultChecked={num}
            id='NumberCheck'
            onChange={()=>{setNum(num?false:true)}}/>
            <label className='text-[15px] lowercase font-semibold italic'>Numbers</label>
          </div>
          <div className='flex'>
            <input className='mr-1' type="checkbox" 
            defaultChecked={Char}
            id='CharacterCheck'
            onChange={()=>{setChar(Char?false:true)}}/>
            <label className='text-[15px] lowercase font-semibold italic'>Characters</label>
          </div>

        </div>
      </div>
      </>
    )
}

export default App
