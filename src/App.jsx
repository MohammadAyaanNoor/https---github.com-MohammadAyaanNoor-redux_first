import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseCount} from './store/actions/counterAction'
import { decreaseCount } from './store/reducers/counterSlice'
import { asyncDecrease } from './store/actions/counterAction'

const App = () => {
  const {value} = useSelector((state)=>state.counterReducer)
  const dispatch = useDispatch()
  const increaseCountHandler = () =>{
    dispatch(increaseCount(value+1))
  }
  const decreaseCountHandler = () =>{
    dispatch(decreaseCount(value-1))
  }
  const asyncDecreaseCountHandler = () =>{
    dispatch(asyncDecrease(value-1))
  }
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={increaseCountHandler}>increase</button>
      <button onClick={decreaseCountHandler}>decrease</button>
      <button onClick={asyncDecreaseCountHandler}>async decrease</button>
    </div>
  )
}

export default App