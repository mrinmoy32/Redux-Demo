import React from 'react';
import { useSelector } from 'react-redux'

export const IceCreamView = () => {
    // To read data from redux store in a react component we use useSelector hook from react-redux library
    // useSelector returns whatever is returned by its callback (selector)  function
    const numOfIceCreams  = useSelector((state) => state.iceCream.numOfIceCreams)
  return (
    <div>
        <h2>Number of ice creams - {numOfIceCreams}</h2>
        <button>Order ice cream</button>
        <button>Restock ice creams</button>
    </div>
  )
}
