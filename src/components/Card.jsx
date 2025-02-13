import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const Card = ({ title, parallaxSpeed, image, children }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [parallaxSpeed, -parallaxSpeed])
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.85])
  const imageY = useTransform(scrollYProgress, [0, 1], [-20, 20])

  return (
    <section ref={ref} className="relative flex items-center justify-center">
      <motion.div
        style={{ y, scale, opacity }}
        className="w-full max-w-3xl bg-white bg-opacity-60 shadow-2xl backdrop-blur-xl rounded-2xl overflow-hidden hover:shadow-3xl transition-all"
      >
        <motion.img
          style={{ y: imageY }}
          className="object-cover h-80 w-full"
          src={image}
          alt="card"
        />
        <div className="p-8 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
          <p className="text-lg text-gray-700 mt-4">{children}</p>
        </div>
      </motion.div>
    </section>
  )
}

export default Card