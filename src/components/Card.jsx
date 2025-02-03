import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Card = ({ title, parallaxSpeed, image, children }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Parallax movement (shifts the entire card)
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [parallaxSpeed, -parallaxSpeed]
  )

  // Apple-style effects (subtle scaling and fade)
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.9])

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center min-h-screen"
    >
      <motion.div
        style={{ y, scale, opacity }}
        className="w-full max-w-4xl bg-white bg-opacity-90 shadow-xl backdrop-blur-lg rounded-lg p-6"
      >
        <div className="contents">
          <img
            className="object-cover h-80 md:h-64 w-full rounded-lg"
            src={image}
            alt="card"
          />
          <div className="card-body p-6">
            <h2 className="text-3xl font-bold">{title}</h2>
            {children}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Card
