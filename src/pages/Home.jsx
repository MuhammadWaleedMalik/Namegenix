// src/pages/Home.jsx

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Baby, Briefcase, Rocket, BookOpen, Sparkles, Package, Monitor, PawPrint, User, Globe } from "lucide-react";

const nameTypes = [
  { name: "Baby Names", icon: <Baby className="w-5 h-5 text-pink-500" /> },
  { name: "Brand Names", icon: <Briefcase className="w-5 h-5 text-blue-500" /> },
  { name: "Startup Names", icon: <Rocket className="w-5 h-5 text-orange-500" /> },
  { name: "Character Names", icon: <BookOpen className="w-5 h-5 text-green-500" /> },
  { name: "Fantasy Names", icon: <Sparkles className="w-5 h-5 text-violet-500" /> },
  { name: "Product Names", icon: <Package className="w-5 h-5 text-yellow-500" /> },
  { name: "Tech Names", icon: <Monitor className="w-5 h-5 text-gray-500" /> },
  { name: "Pet Names", icon: <PawPrint className="w-5 h-5 text-rose-500" /> },
  { name: "Username Ideas", icon: <User className="w-5 h-5 text-cyan-500" /> },
  { name: "Domain Names", icon: <Globe className="w-5 h-5 text-teal-500" /> },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <motion.h1
        className="text-4xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        EurekaAi - Name Generator
      </motion.h1>
      <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
        Discover the perfect name for your baby, brand, product, or project with AI-powered suggestions.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {nameTypes.map((type, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-md rounded-xl p-4 flex items-center gap-3 border border-gray-200"
          >
            {type.icon}
            <Link
              to="/pages/name"
              state={{ category: type.name }}
              className="text-lg text-gray-800 hover:underline"
            >
              {type.name}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
