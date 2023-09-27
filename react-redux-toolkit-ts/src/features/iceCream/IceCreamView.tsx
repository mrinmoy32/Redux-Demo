import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restocked } from './iceCreamSlice';

export const IceCreamView = () => {
    // To read data from redux store in a react component we use useSelector hook from react-redux library
    // useSelector returns whatever is returned by its callback (selector)  function
    const numOfIceCreams  = useSelector((state) => state.iceCream.numOfIceCreams);
    const dispatch = useDispatch();
    const HandleIceCreamOrder = () => dispatch(ordered());
    const HandleIceCreamRestock = () => dispatch(restocked(5));
  return (
    <div>
        <h2>Number of ice creams : {numOfIceCreams}</h2>
        <button onClick={HandleIceCreamOrder}>Order ice cream</button>
        <button onClick={HandleIceCreamRestock}>Restock ice creams</button>
    </div>
  )
}
