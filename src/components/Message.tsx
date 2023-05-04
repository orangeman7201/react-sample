// 無名関数を用いて作成したコンポーネント。関数コンポーネントという。
const Text = (props: {content: string}) => {
  const { content } = props;
  return <p className='text'>{content}</p>
}

const Message = () => {
  const state = 'Hello World';

  return (
    <div>
      <Text content={state}/>
    </div>
  )
}

export default Message


