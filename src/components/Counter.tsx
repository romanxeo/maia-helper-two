import {useState} from 'react';
import s from "./Counter.module.scss"

export const Counter = () => {

  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className={s.display}>{count}</h1>
      <button onClick={() => setCount(count => count+1)}>Inc</button>
    </div>
  );
};