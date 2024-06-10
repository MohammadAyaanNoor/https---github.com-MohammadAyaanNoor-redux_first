import { decreaseCount } from "../reducers/counterSlice";
export {increaseCount} from "../reducers/counterSlice"

export const asyncDecrease = (v)=>async(dispatch,getState)=>{
    try {
        setTimeout(()=>{
            dispatch(decreaseCount(v))
        },1000)
    } catch (error) {
        console.log(error)
    }

}