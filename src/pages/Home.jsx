import React from 'react'
import clouds from '../assets/clouds.jpeg'
import background from '../assets/background.jpg'
import { loremIpsum } from 'lorem-ipsum'
import Card from '../components/Card'

export default function Home() {
  return (
    <div
      className="portfolio bg-gray-100 portfolio bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="text-center text-5xl font-bold py-10 ">
        Welcome to My Portfolio
      </h1>
      <Card title="Test card" parallaxSpeed={-50} image={clouds}>
        <p>{loremIpsum({ count: 3 })}</p>
      </Card>
      <Card title="My skills" parallaxSpeed={-100} image={clouds}>
        <p>{loremIpsum({ count: 2 })}</p>
      </Card>
      <Card title="What I offer" parallaxSpeed={150} image={clouds}>
        <p>{loremIpsum({ count: 3 })}</p>
      </Card>
      <Card title="References" parallaxSpeed={-200} image={clouds}>
        <p>{loremIpsum({ count: 3 })}</p>
      </Card>
    </div>
  )
}
