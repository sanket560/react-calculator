import React, { useState } from 'react'
import './App.css'

function App() {
  const [input , setinput] = useState('')
  
  const handelClick =(value)=>{
    if(value === 'C' ){
      setinput('')
    }else if(value === '>'){
      setinput(input.slice(0,-1));
    }else if(value === '='){
      setinput(eval(input))
    }else{
      setinput((preValue)=> preValue + value)
    }
  }
  return (
    <>
      <p className='text-2xl text-white text-center md:mt-20 mt-20 mb-5 font-semibold'>Calculator using React-js</p>
      <div className='md:w-[400px] w-4/5 bg-white mx-auto flex flex-col justify-center items-center shadow-lg py-4 rounded-xl'>
        <div className='text-3xl border md:w-96 w-72 rounded-lg h-12 px-3'>
          <p placeholder='enter number'>{input}</p>
        </div>
        <div className='flex flex-col gap-5 mt-5'>
          <div className='flex gap-5'>
            <button onClick={()=>handelClick('(')} className='md:w-20 w-14 py-2 text-2xl bg-[#eee] rounded-lg'>(</button>
            <button onClick={()=>handelClick(')')} className='md:w-20 w-14 py-2 text-2xl bg-[#eee] rounded-lg'>)</button>
            <button onClick={()=>handelClick('%')} className='md:w-20 w-14 py-2 text-2xl bg-[#eee] rounded-lg'>%</button>
            <button onClick={()=>handelClick('C')} className='md:w-20 w-14 py-2 text-2xl bg-[#eee] rounded-lg'>C</button>
          </div>
          <div className='flex gap-5'>
            <button onClick={()=>handelClick('7')} className='md:w-20 w-14 py-2 text-2xl border rounded-lg'>7</button>
            <button onClick={()=>handelClick('8')} className='md:w-20 w-14 py-2 text-2xl border rounded-lg'>8</button>
            <button onClick={()=>handelClick('9')} className='md:w-20 w-14 py-2 text-2xl border rounded-lg'>9</button>
            <button onClick={()=>handelClick('/')} className='md:w-20 w-14 py-2 text-2xl bg-[#eee] rounded-lg'>÷</button>
          </div>
          <div className='flex gap-5'>
            <button onClick={()=>handelClick('4')} className='md:w-20 w-14 py-2 text-2xl border rounded-lg'>4</button>
            <button onClick={()=>handelClick('5')} className='md:w-20 w-14 py-2 text-2xl border rounded-lg'>5</button>
            <button onClick={()=>handelClick('6')} className='md:w-20 w-14 py-2 text-2xl border rounded-lg'>6</button>
            <button onClick={()=>handelClick('*')} className='md:w-20 w-14 py-2 text-2xl bg-[#eee] rounded-lg'>*</button>
          </div>
          <div className='flex gap-5'>
            <button onClick={()=>handelClick('1')} className='md:w-20 w-14 py-2 text-2xl border rounded-lg'>1</button>
            <button onClick={()=>handelClick('2')} className='md:w-20 w-14 py-2 text-2xl border rounded-lg'>2</button>
            <button onClick={()=>handelClick('3')} className='md:w-20 w-14 py-2 text-2xl border rounded-lg'>3</button>
            <button onClick={()=>handelClick('-')} className='md:w-20 w-14 py-2 text-2xl bg-[#eee] rounded-lg'>-</button>
          </div>
          <div className='flex gap-5'>
            <button onClick={()=>handelClick('0')} className='md:w-20 w-14 py-2 text-2xl border rounded-lg'>0</button>
            <button onClick={()=>handelClick('>')} className='md:w-20 w-14 py-2 text-2xl bg-[#eee] rounded-lg'>⌫</button>
            <button onClick={()=>handelClick('+')} className='md:w-20 w-14 py-2 text-2xl bg-[#eee] rounded-lg'>+</button>
            <button onClick={()=>handelClick('=')} className='md:w-20 w-14 py-2 text-2xl bg-[#0561ff] text-white rounded-lg'>=</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
