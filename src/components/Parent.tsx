import React, { memo, useState, useCallback } from 'react'

type FizzProps = {
  isFizz: boolean
}

const Fizz = (props: FizzProps) => {
  const { isFizz } = props
  console.log('Fizが再描画されました。', `isFizz=${isFizz}`)
  return <span>{ isFizz ? 'Fizz' : '' }</span>
}

type BuzzProps = {
  isBuzz: boolean
  onClick: () => void
}

const Buzz = memo<BuzzProps>((props) => {
  const { isBuzz, onClick } = props
  console.log('Buzが再描画されました。', `isBuzz=${isBuzz}`)
  return (
    <span onClick={onClick}>
    {isBuzz ? 'buzz' : ''}
    </span>
  )
})

export const Parent = () => {
  const [count, setCount] = useState(1)
  const isFizz = count % 3 === 0
  const isBuzz = count % 5 === 0
  const onBuzzClick = useCallback(() => {
    console.log('Buzzがクリックされました')
  }, [])
  


  console.log('親コンポーネントが再描画されました', `count=${count}`)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <p>{`現在のカウント${count}`}</p>
      <p>
        <Fizz isFizz={isFizz}/>
        <Buzz isBuzz={isBuzz} onClick={onBuzzClick}/>
      </p>
    </div>
  )
}
