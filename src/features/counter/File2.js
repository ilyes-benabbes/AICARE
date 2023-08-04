// 
import React, { useEffect , useCallback  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice';
import { useNavigate  } from "react-router-dom";

export function File2() {

        
    const navigate = useNavigate();
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
//   const count2 = useSelector((state) => state.counter.value);

  useEffect(() => {
    console.log(count);
    // console.log("jjj", count2);
  }, [count]); // The empty dependency array means this effect will run only on initial render


  const switchh = useCallback(() => {
    navigate("/Counter");
  }, [navigate]);

  
  return (
    <div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={switchh}>
          swithc
        </button>
      </div>
    </div>
  );
}
