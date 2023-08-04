import React  from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import { useNavigate  } from "react-router-dom";
import { useCallback } from 'react'



// import styles from './Counter.module.css'

// const count2 = useSelector((state) => state.counter.value)



export function Counter() {

    // const count = useSelector((state) => state.counter.value);
    const navigate = useNavigate();
    // const dispatch = useDispatch();
  //   const count2 = useSelector((state) => state.counter.value);

  const swtt = useCallback(() => {
    navigate("/File2");
  }, [navigate]);


    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()


    
    
    return (
        <div>
      <div>
        <button
          aria-label="Increment value"
onClick={swtt}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}







