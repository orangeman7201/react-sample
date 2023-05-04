import { useState } from 'react'

type CounterProps = {
  initialValue: number
}

const Counter = (props: CounterProps) => {
  const { initialValue } = props

  const [count, setCount] = useState(initialValue)

  const plusOne = (count: number) => {
    return count + 1
  }

  return (
    <div style={{ padding: '20px' }}>
      <p>Count: {count}</p>
      <button onClick={()=> setCount(count - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => plusOne(prevCount))}>+</button>
    </div>
  )
}

export default Counter