import { useEffect, useState } from 'react'
import Inputbox from './components/Inputbox'
import useCurrencyinfo from './hooks/useCurrencyinfo'
import './App.css'

function App() {
    // let str = "from"
    const [amount,setAmount] = useState(1)
    const [from,setFrom] = useState('usd')
    const [to,setTo] = useState('inr')
    const [convert,setConvert] = useState(0)

    const currencyinfo = useCurrencyinfo(from)
    const options = Object.keys(currencyinfo)


      const cal = ()=>{
        let temp = currencyinfo[to]
        setConvert(Math.round((amount*temp)*1000)/1000)
      }
    const swap = ()=>{
      setFrom(to)
      setTo(from)
      setConvert(0)
      setAmount(1)
    }

    const onAmountChange = (num)=>{
        setAmount(num)
    }
    const onConvertChange = (num)=>{
        onConvertChange(num)
    }
    const onFromChange = (cur)=>{
        setFrom(cur)
    }
    const onToChange = (cur)=>{
        setTo(cur)
    }

  return (
    <div className='bg-[#59FFA0] w-[600px] px-8 py-7 customShadow border-2 rounded-lg border-black gap-2 font-semibold flex flex-col items-start'>
      {/* <span>{amount}</span>
      <span>{from}</span>
      <span>{to}</span>
      <span>{convert}</span> */}
      <Inputbox label="From"
      amount = {amount}
      onAmountChange = {onAmountChange}
      currency = {from}
      onCurrencyChange={onFromChange}
      currencyOptions={options}
      />
      <Inputbox label="To"
      amount = {convert}
      onAmountChange={onConvertChange}
      currency = {to}
      onCurrencyChange={onToChange}
      currencyOptions={options}
      amountDisabled
      />
 
      <div className='flex gap-4 justify-end mt-5'>
        <button className='text-[25px] italic text-center bg-[#B4ADEA] px-5 py-2 border-[1.4px] hover:bg-[#9a8dfe] custombtnShadow rounded-3xl border-black' onClick={swap}>Swap</button>
        <button className='text-[25px] italic text-center bg-[#FFED65] px-5 py-2 border-[1.4px] hover:bg-[#ffe62c]  custombtnShadow rounded-3xl border-black' onClick={cal}>Convert</button>
      </div>
    </div>
    
  )
}

export default App
