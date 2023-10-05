import React, { useState } from 'react'

const Filters = () => {
    const[selected,setSelected]=useState(1);
  return (
    <section className='my-10 py-3 w-4/6 mx-auto flex justify-around'>
        <button onClick={()=>setSelected(1)} className={`btnstyle ${selected===1 ? 'bg-green-400 text-white' : 'text-slate-500'}`}>Latest</button>
        <button onClick={()=>setSelected(2)} className={`btnstyle ${selected===2 ? 'bg-green-400 text-white' : 'text-slate-500'}`}>Best Seller</button>
        <button onClick={()=>setSelected(3)} className={`btnstyle ${selected===3 ? 'bg-green-400 text-white': 'text-slate-500'}`}>Special</button>
    </section>
  )
}

export default Filters