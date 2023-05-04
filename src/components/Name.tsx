const Name = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
  }

  return (
    <div style={{ color: 'red', padding: '100px' }}>
      <label htmlFor="nameInput">名前</label>
      <input id='nameInput' onChange={onChange}/>
    </div>
  )
}

export default Name