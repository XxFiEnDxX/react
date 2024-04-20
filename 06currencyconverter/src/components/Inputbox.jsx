// import React from 'react';


function Inputbox({label,amount,onAmountChange,currency="usd",onCurrencyChange,currencyOptions,amountDisabled=false,currencyDisabled=false}){
    return(
        <>
        <div className='flex flex-row justify-center items-center font-semibold tracking-wider gap-[10px]'>
            <div className='flex flex-col gap-2'>
                {/* <div>{label}</div> */}
                <label className="text-[20px]">{label}</label>
                <input 
                className="px-5 text-gray-700 border-[1.4px] border-black rounded-sm text-[40px] w-[320px] h-[78px]"
                type="number"
                //  min={0}
                //  max={100}
                value={amount}
                disabled={amountDisabled}
                onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className='flex flex-col items-start gap-2'>
                <label className="text-[20px]">Currency Type</label>
                <select className='border-[1.4px] border-black rounded-sm text-[35px] w-[120px] h-[78px] px-2'
                value={currency}
                onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled={currencyDisabled}>
                    {currencyOptions.map((cur)=>(
                        <option className="text-[30px]" key={cur} value={cur}>
                            {cur}
                        </option>
                    ))}
                </select>
            </div>
        </div>
        </>
    )
}

export default Inputbox;