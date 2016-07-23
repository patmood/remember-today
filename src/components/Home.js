import React from 'react'
import { Link } from 'react-context-router'

const Home = (props, { route }) => {
  const links = Array.from({ length: 16 }).map((a, i) => i)

  return (
    <div>
      <h2>Home</h2>
      <ul>
        {links.map(i => (
          <li key={i}>
            <Link href={`/items/${i}`} children={`Item ${i}`} />
          </li>
        ))}
      </ul>
    </div>
  )
}

Home.contextTypes = {
  route: React.PropTypes.object
}

export default Home
