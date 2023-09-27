import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice';

export const CakeView = () => {
    const [restockValue, setRestockValue] = useState(1)
    // To read data from redux store in a react component we use useSelector hook from react-redux library
    // useSelector returns whatever is returned by its callback (selector)  function
    const numOfCakes  = useSelector((state) => state.cake.numOfCakes);
    // useDispatch is used to dispatch action with react-redux
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Number of cakes : {numOfCakes}</h2>
        <button onClick={() => {dispatch(ordered())}}>Order Cake</button>
        {/* only store those states in redux store  which are required outside of that component
        Some state can be just internal like the restockValue and not to be stored in Redux-Store(to not make store complicated) */}
        <input type='number' onChange={e => setRestockValue(parseInt(e.target.value))}/>
        <button onClick={() => {dispatch(restocked(restockValue))}}>Restock Cakes</button>
    </div>
  )
}
