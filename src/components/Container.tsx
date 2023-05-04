type ContainerProps = {
  children: React.ReactElement
  title?: string
}

const Container = (props: ContainerProps) => {
  const { children, title } = props;
  return (
    <div style={{ backgroundColor: 'red' }}>
      <span>{title}</span>
      <div>{children}</div>
    </div>
  )
}

const Parent = () => {
  return (
    <Container title='titleを記述した'>
      <div>親要素のHTML要素</div>
    </Container>
  )
}

export default Parent


