import React, { useState } from 'react'
import FruitsCard from './FruitsCard'

const Items = () => {
    const[fruits,setFruits]=useState([

         {   id:1,
            image:'lemon',
            name:'Lemon',
            price:100
        },
                
        {   id:2,
            image:'grapes',
            name:'Green Grapes',
            price:150
        },
                
        {   id:3,
            image:'pomegranate',
            name:'Pomegranate',
            price:200
        },
                
        {   id:4,
            image:'blackgrapes',
            name:'Black Grapes',
            price:250
        },
        {   id:5,
            image:'orange',
            name:'Orange',
            price:150
        },
        {   id:6,
            image:'berry',
            name:'Berry',
            price:450
        },
        ]
    )
  return (
        <section className='w-5/6 mx-auto grid grid-cols-3 gap-16 bg-white'>
            {
              fruits.map((fruit)=>{
                return<FruitsCard key={fruit.id}fruit={fruit}/>
              })
            }
        </section>
  )
}

export default Items