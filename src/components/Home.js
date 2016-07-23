import React from 'react'

const Home = (props, { route }) => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

Home.contextTypes = {
  route: React.PropTypes.object
}

export default Home
