"use client";

import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, Calendar, Tag } from "lucide-react";
import { useState, useRef } from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";

export function RealizationsPageClient() {
  const [selectedCategory, setSelectedCategory] = useState("Wszystkie");

  const categories = ["Wszystkie", "E-commerce", "SaaS", "Landing Page", "Firmowe", "Fintech"];

  const filteredProjects = selectedCategory === "Wszystkie"
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0B1220] text-[#E6EDF6] overflow-x-hidden relative">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Radial gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-20"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            background: "radial-gradient(circle, rgba(0,224,198,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(46,144,250,0.2) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: "rgba(11, 18, 32, 0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-bold"
              style={{
                fontFamily: "var(--font-display)",
                background: "linear-gradient(135deg, #00E0C6, #2E90FA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              WebDev
            </Link>

            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-medium transition-colors duration-300 hover:text-[#00E0C6]"
              style={{
                fontFamily: "var(--font-body)",
                color: "rgba(230, 237, 246, 0.75)",
              }}
            >
              <ArrowLeft className="h-4 w-4" />
              Powrót do strony głównej
            </Link>
          </div>
        </div>
      </motion.nav>

      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6">
        {/* Hero */}
        <div className="max-w-7xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 border"
              style={{
                backgroundColor: "rgba(0, 224, 198, 0.1)",
                borderColor: "rgba(0, 224, 198, 0.3)",
              }}
            >
              <div className="w-2 h-2 rounded-full bg-[#00E0C6] animate-pulse" />
              <span className="text-sm font-medium" style={{ color: "#00E0C6" }}>
                Portfolio
              </span>
            </motion.div>

            <h1
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Wybrane{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #00E0C6, #2E90FA)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                realizacje
              </span>
            </h1>
            <p
              className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                color: "rgba(230, 237, 246, 0.7)",
              }}
            >
              Z dumą pracowałem dla startupów z całego świata, agencji marketingowych i rosnących firm technologicznych. Każdy projekt to unikalne wyzwanie i historia sukcesu.
            </p>
          </motion.div>

          {/* Category filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 justify-center mt-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
                style={{
                  backgroundColor: selectedCategory === category
                    ? "rgba(0, 224, 198, 0.15)"
                    : "rgba(18, 26, 43, 0.6)",
                  borderColor: selectedCategory === category
                    ? "#00E0C6"
                    : "rgba(255,255,255,0.08)",
                  border: "1px solid",
                  color: selectedCategory === category
                    ? "#00E0C6"
                    : "rgba(230, 237, 246, 0.75)",
                }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ slug, title, category, tags, description, longDescription, image, year, results, index }: any) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Link href={`/realizacje/${slug}`}>
      <motion.div
        ref={cardRef}
        layout
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        whileHover={{ y: -8 }}
        className="group cursor-pointer relative"
      >
      <motion.div
        className="rounded-2xl overflow-hidden border transition-all duration-300 relative h-full flex flex-col"
        animate={{
          borderColor: isHovered ? "rgba(0,224,198,0.3)" : "rgba(255,255,255,0.08)",
          boxShadow: isHovered ? "0 0 40px rgba(0,224,198,0.2)" : "none",
        }}
        style={{
          backgroundColor: "#121A2B",
        }}
      >
        {/* Spotlight effect on hover */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none z-20"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,224,198,0.12), transparent 40%)`,
            }}
          />
        )}

        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "linear-gradient(135deg, rgba(0,224,198,0.3), rgba(46,144,250,0.3))",
            }}
          />

          {/* Year badge */}
          <div
            className="absolute top-4 left-4 px-3 py-1 rounded-full backdrop-blur-md text-xs font-bold flex items-center gap-1.5"
            style={{
              backgroundColor: "rgba(11, 18, 32, 0.8)",
              border: "1px solid rgba(0,224,198,0.3)",
              color: "#00E0C6",
            }}
          >
            <Calendar className="w-3 h-3" />
            {year}
          </div>

          {/* External link icon */}
          <motion.div
            className="absolute top-4 right-4 w-10 h-10 rounded-full backdrop-blur-md flex items-center justify-center"
            initial={{ scale: 0, rotate: -180 }}
            animate={{
              scale: isHovered ? 1 : 0,
              rotate: isHovered ? 0 : -180,
            }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: "rgba(0,224,198,0.9)",
            }}
          >
            <ExternalLink className="w-5 h-5 text-[#0B1220]" />
          </motion.div>

          {/* Corner accent */}
          <motion.div
            className="absolute bottom-0 left-0 w-24 h-24"
            initial={{ x: -100, y: 100 }}
            animate={{
              x: isHovered ? 0 : -100,
              y: isHovered ? 0 : 100,
            }}
            transition={{ duration: 0.4 }}
            style={{
              background: "linear-gradient(135deg, #00E0C6, #2E90FA)",
              clipPath: "polygon(0 100%, 0 0, 100% 100%)",
              opacity: 0.6,
            }}
          />
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Category badge */}
          <div className="flex items-center gap-2 mb-3">
            <div
              className="text-xs px-3 py-1 rounded-full font-medium"
              style={{
                backgroundColor: "rgba(0,224,198,0.1)",
                color: "#00E0C6",
                border: "1px solid rgba(0,224,198,0.2)",
              }}
            >
              {category}
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>
            {title}
          </h3>

          <p
            className="text-sm mb-4 flex-1"
            style={{
              fontFamily: "var(--font-body)",
              color: "rgba(230, 237, 246, 0.7)",
              lineHeight: "1.6"
            }}
          >
            {isHovered ? longDescription : description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag: string) => (
              <div
                key={tag}
                className="flex items-center gap-1 text-xs px-2 py-1 rounded"
                style={{
                  backgroundColor: "rgba(46,144,250,0.1)",
                  color: "rgba(46,144,250,0.8)",
                }}
              >
                <Tag className="w-3 h-3" />
                {tag}
              </div>
            ))}
          </div>

          {/* Results */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isHovered ? "auto" : 0,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t pt-4"
            style={{ borderColor: "rgba(255,255,255,0.05)" }}
          >
            <div className="space-y-2">
              {results.map((result: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[#00E0C6]" />
                  <span className="text-xs" style={{ color: "rgba(230, 237, 246, 0.6)" }}>
                    {result}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
      </motion.div>
    </Link>
  );
}
