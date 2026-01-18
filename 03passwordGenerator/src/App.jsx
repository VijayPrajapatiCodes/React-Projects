  import React, { useState,useCallback,useEffect ,useRef} from 'react'
  import { use } from 'react'
  const App = () => {
    const [length,setlength]=useState(8)
    const [numallow,setnumballow]=useState(false)
    const [charallow,setcharallow]=useState(false)
    const [pass,setpass]=useState("")
      
    const passwordref=useRef(null)

    const passgenerator=useCallback(()=>{
        let pass= ""
        let str="ABCDEFGKIJKLMNOPQRSTVXYZabcdefghijklmnopqrstvxyz"
        if(numallow){
            str+="123456789"
        }
        if(charallow){
      str += "!@#$%^&*()_+-={}[]|\\:;\"'<>,.?/~`";
        }
        for (let i = 0; i <= length; i++) {  
            let char=Math.floor(Math.random()*str.length+1)
            pass +=str.charAt(char)
        }
        setpass(pass)
    },[length,numallow,charallow,setpass])
        useEffect(()=>{
          passgenerator()
        },[length,numallow,charallow])
      
    const   copypasswordtoclip=useCallback(()=>{
      passwordref.current.select()
        passwordref.current.setSelectionRange(0, 999)
          window.navigator.clipboard.writeText(pass)
    },[pass])

    return (
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 text-center '>
        <h1 className='text-white font-bold'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
          type="text"
          value={pass}
          className='outline-none w-full py-1 px-3 bg-white '
          placeholder='password'
          readOnly
          ref={passwordref}
          />

          <button className='px-3 py-2 mr-0 bg-sky-500 rounded-lg  shrink-0 ' onClick={copypasswordtoclip}>Copy</button>

        </div>
        
        <div className='flex flex-grid gap-2'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{
          setlength(e.target.value)
        }}
          />
          <label>Length: {length}</label>
          
          <input 
          type="checkbox"
          defaultChecked={numallow}
          id='numberInput'
          onChange={()=>{
            setnumballow((prev)=>!prev);
          }}
            />
            <label htmlFor="numberInput">Number</label>
          <input 
          type="checkbox"
          defaultChecked={charallow}
          id='charallowed'
          onChange={()=>{
            setcharallow((prev)=>!prev)
          }}
          />
          <label htmlFor="charallowed">Character</label>
        
      </div>
        </div>

    )
  }

  export default App