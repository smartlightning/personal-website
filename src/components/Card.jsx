import { motion } from 'framer-motion'
const Card = ({ title, image, children, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="w-full bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer"
      href={link}
    >
      <img className="object-cover h-80 w-full" src={image} alt={title} />
      <div className="p-6 text-center">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <p className="text-lg text-gray-700 mt-4">{children}</p>
      </div>
    </motion.div>
  )
}

export default Card
