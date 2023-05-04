import React from 'react'

const TitleContext = React.createContext(0)

const Title = () => {
  return (
    <TitleContext.Consumer>
      {(title) => {
        return <h1>{title}</h1>
      }}
    </TitleContext.Consumer>
  )
}

const Header = () => {
  return (
    <div>
      <Title />
    </div>
  )
}

const Page = () => {
  const states = 100

  return (
    <TitleContext.Provider value={states}>
      <Header />
    </TitleContext.Provider>
  )
}

export default Page