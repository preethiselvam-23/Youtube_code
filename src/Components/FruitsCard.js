import React from 'react'

const FruitsCard = ({fruit}) => {
  return (
    <div className='rounded-lg overflow-hidden shadow-2xl transform hover:scale-110 duration-500'>
        <img src={require(`../assets/${fruit.image}.jpg`)} alt={`${fruit.image}`}
        className='w-full h-52 object-cover' 
       />
        <div className='flex flex-col items-center my-2'>
            <span className='text-slate-500'>{fruit.name}</span>
            <span>&#8377;{fruit.price}</span>
        </div>
    </div>
  )
}

export default FruitsCard