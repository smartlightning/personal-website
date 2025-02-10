import React from 'react'
import clouds from '../assets/clouds.jpeg'
import background from '../assets/background.jpg'
import { loremIpsum } from 'lorem-ipsum'
import Card from '../components/Card'

export default function Home() {
  return (
    <div
      className="py-20 bg-gray-50 bg-cover bg-center bg-fixed space-y-10"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="text-center text-6xl font-extrabold tracking-tight py-10">
        Welcome to My Portfolio
      </h1>
      <Card title="Test card" parallaxSpeed={50} image={clouds}>
        {loremIpsum({ count: 3 })}
      </Card>
      <Card title="My skills" parallaxSpeed={50} image={clouds}>
        {loremIpsum({ count: 2 })}
      </Card>
      <Card title="What I offer" parallaxSpeed={50} image={clouds}>
        {loremIpsum({ count: 3 })}
      </Card>
      <Card title="References" parallaxSpeed={50} image={clouds}>
        {loremIpsum({ count: 3 })}
      </Card>
    </div>
  )
}