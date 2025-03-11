import { motion } from 'framer-motion'

const Testimonial = ({ image, name, text }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="relative bg-gray-600 p-8 rounded-xl shadow-lg text-white text-center"
    >
      <img
        src={image}
        alt="Testimonial"
        className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-none"
      />
      <p className="text-lg italic">"{text}"</p>
      <h3 className="text-lg font-semibold mt-4">{name}</h3>
    </motion.div>
  )
}

export default Testimonial
