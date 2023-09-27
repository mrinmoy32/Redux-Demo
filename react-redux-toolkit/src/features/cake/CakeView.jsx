import React from 'react'
import { useSelector } from 'react-redux'

export const CakeView = () => {
    // To read data from redux store in a react component we use useSelector hook from react-redux library
    // useSelector returns whatever is returned by its callback (selector)  function
    const numOfCakes  = useSelector((state) => state.cake.numOfCakes);
    console.log(numOfCakes)
  return (
    <div>
        <h2>Number of cakes - {numOfCakes}</h2>
        <button>Order Cake</button>
        <button>Restock Cakes</button>
    </div>
  )
}
