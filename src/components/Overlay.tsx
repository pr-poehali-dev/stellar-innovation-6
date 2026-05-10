import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import Icon from "@/components/ui/icon"

export default function Overlay() {
  const navigate = useNavigate()

  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <div className="absolute top-8 left-0 right-0 flex flex-col items-center gap-2">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="font-serif text-2xl md:text-4xl font-light text-white tracking-widest uppercase"
        >
          Лазерная гравировка
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="font-sans text-sm md:text-base font-light text-white/60 tracking-widest"
        >
          & резка · точность до 0.1 мм
        </motion.p>
      </div>

      <div className="absolute top-8 right-8 pointer-events-auto">
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 1.0 }}
          onClick={() => navigate("/albums")}
          className="flex items-center gap-2 px-5 py-2.5 border border-white/20 rounded-full text-white/70 hover:text-white hover:border-white/50 transition-all duration-300 text-sm tracking-widest backdrop-blur-sm bg-white/5"
        >
          <Icon name="LayoutGrid" size={14} />
          Альбомы
        </motion.button>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="font-sans text-xs md:text-sm font-light text-white/40 tracking-widest uppercase"
        >
          Дерево · металл · акрил · кожа · стекло
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.6 }}
          className="flex items-center gap-2 text-white/25 text-xs tracking-wider"
        >
          <span>← перетащите для просмотра работ →</span>
        </motion.div>
      </div>
    </div>
  )
}