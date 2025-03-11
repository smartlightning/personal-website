import React from 'react'
import Card from '../components/Card'
import Navbar from '../components/layout/Navbar'
import Button from '../components/Button'
import Testimonial from '../components/Testimonial'

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header className="h-screen flex flex-col gap-12 items-center justify-center text-center px-6">
        <h1 className="text-6xl font-extrabold">
          Crafting <span className="text-blue-400">digital experiences</span>
          <br />
          that feel <span className="text-pink-400">genuine</span> and{' '}
          <span className="text-green-400">impactful</span>.
        </h1>
        <p className="text-lg m-6">
          Web development, design, and consulting services with a personal
          touch.
        </p>
        <Button>Get in Touch</Button>
      </header>

      {/* Cards */}
      <section className="max-w-screen-lg mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 my-20">
        <Card title="Coaching" image="/assets/clouds.jpeg">
          Personal coaching to help you grow your faith and build a better
          relationship with God.
        </Card>
        <Card title="Web Development" image="/assets/clouds.jpeg">
          Custom websites built with React, Next.js, and Tailwind.
        </Card>
        <Card title="Design & Branding" image="/assets/drops.jpg">
          Sleek, modern branding for startups and businesses.
        </Card>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            What My Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            <Testimonial
              image="/assets/avatar.jpg"
              name="John Doe"
              text="Chris transformed my website into something incredible!"
            />
            <Testimonial
              image="/assets/avatar.jpg"
              name="Jane Smith"
              text="An amazing developer who really understands the vision!"
            />
            <Testimonial
              image="/assets/avatar.jpg"
              name="Sarah Wilson"
              text="Delivered exactly what we needed, on time and on budget!"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 bg-gray-900 text-gray-300">
        <p>© 2025 Chris | Christian Productivity & Faith</p>
      </footer>
    </div>
  )
}
