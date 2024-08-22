import Link from 'next/link'
import React from 'react'

const BottonContact = () => {
  return (
        <div className='flex justify-between px-40 py-4 bg-twitch fixed top-4 left-4 w-fit self-start items-center content-center'>
        <div className='block text-zinc-950 text-2xl font-sans'>MAS INFORMACIÓN</div>
       <div className='r'>
       <button className='block bg-black hover:bg-white rounded-3xl w-[140px] h-[36px]'>
            <label className='block justify-center items-center text-white hover:text-neutral-950 text-[16px] font-sans' htmlFor="">Contac</label>
        </button>
       </div>
    </div>
  
    
  )
}

export default BottonContact