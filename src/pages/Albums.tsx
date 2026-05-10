import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import Icon from "@/components/ui/icon"

const categories = [
  {
    id: "wood",
    title: "Гравировка на дереве",
    description: "Портреты, орнаменты, логотипы — на дубе, сосне, грецком орехе",
    image: "https://cdn.poehali.dev/projects/0d499110-ccaf-4b2e-96f0-22e7c8bb154d/files/5b45161a-c322-456a-9a12-0a2164363cd6.jpg",
    count: "120+ работ",
  },
  {
    id: "plywood",
    title: "Резка фанеры",
    description: "Декоративные панели, ажурные изделия, архитектурные элементы",
    image: "https://cdn.poehali.dev/projects/0d499110-ccaf-4b2e-96f0-22e7c8bb154d/files/38e322ed-12d6-4025-bcb5-0cb7dce6a512.jpg",
    count: "80+ работ",
  },
  {
    id: "gifts",
    title: "Подарки с гравировкой",
    description: "Именные сувениры, корпоративные подарки, памятные изделия",
    image: "https://cdn.poehali.dev/projects/0d499110-ccaf-4b2e-96f0-22e7c8bb154d/files/7f055dc6-f8be-4358-9079-583b23203f09.jpg",
    count: "200+ работ",
  },
]

export default function Albums() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="relative flex items-center justify-between px-6 py-6 md:px-12">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-300 text-sm tracking-wider"
        >
          <Icon name="ArrowLeft" size={16} />
          Назад
        </button>
        <h1 className="font-serif text-lg md:text-2xl tracking-widest uppercase text-white/90">
          Альбомы работ
        </h1>
        <div className="w-16" />
      </div>

      {/* Categories Grid */}
      <div className="px-6 md:px-12 pb-16 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[3/4] mb-4">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-white/50 text-xs tracking-widest uppercase">{cat.count}</span>
                </div>
              </div>
              <h2 className="font-serif text-lg text-white mb-1 group-hover:text-white/80 transition-colors">
                {cat.title}
              </h2>
              <p className="text-white/40 text-sm leading-relaxed">{cat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
