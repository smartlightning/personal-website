import { motion } from 'framer-motion'

const Button = ({ children, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold shadow-lg hover:opacity-90 transition-all"
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}

export default Button