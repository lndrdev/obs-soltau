"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import Image from 'next/image'

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const slides = [
    { image: "https://obs-soltau.de/wp-content/uploads/2021/05/r4-6718web.jpg", title: "Willkommen an der Oberschule Soltau", subtitle: "Ihr Lern- und Lebensraum" },
    { image: "https://obs-soltau.de/wp-content/uploads/2021/05/r4-7239web.jpg", title: "Innovative Bildung", subtitle: "Für eine erfolgreiche Zukunft" },
    { image: "https://obs-soltau.de/wp-content/uploads/2021/05/r4-6856web.jpg", title: "Gemeinschaft erleben", subtitle: "Zusammen wachsen und lernen" },
    { image: "https://obs-soltau.de/wp-content/uploads/2021/05/r4-6495web.jpg", title: "Moderne Lernumgebung", subtitle: "Optimal ausgestattete Räumlichkeiten" },
    { image: "https://obs-soltau.de/wp-content/uploads/2021/05/r4-6943web.jpg", title: "Vielfältige Angebote", subtitle: "Für ganzheitliche Entwicklung" },
  ]

  interface QuickLink {
    icon: (props: React.HTMLAttributes<HTMLSpanElement>) => JSX.Element; // Definiere den Typ für die icon-Funktion
    title: string;
    description: string;
  }
  
  const quickLinks: QuickLink[] = [
    { icon: (props) => <span {...props}>📅</span>, title: "Termine", description: "Wichtige Daten und Veranstaltungen" },
    { icon: (props) => <span {...props}>👥</span>, title: "Für Eltern", description: "Informationen und Ressourcen" },
    { icon: (props) => <span {...props}>📚</span>, title: "Schulbuchausleihe", description: "Prozess und Fristen" },
  ];
  

  const news = [
    {
      image: "https://obs-soltau.de/wp-content/uploads/2024/08/info-400x250.png",
      title: "Sitzung des Schulelternrates",
      excerpt: "Am Montag, 23.09.24, 19.00 Uhr, findet in der Mensa die erste Sitzung in diesem Schuljahr statt...",
      date: "15. August 2024",
    },
    {
      image: "https://obs-soltau.de/wp-content/uploads/2024/09/lllllimg-2695-400x250.jpg",
      title: "Auszeichnung als nachhaltige Schülerfirma",
      excerpt: "Seit dem 26.8.24 trägt unsere Schülerfirma Changers nun auch für jeden in unserer Schule sichtbar...",
      date: "27. August 2024",
    },
    {
      image: "https://obs-soltau.de/wp-content/uploads/2024/08/img-2664-400x250.jpg",
      title: "IHK-Ausbildungsbotschafter an der OBS",
      excerpt: "Immer mehr Unternehmen setzen auf das Engagement der IHK-Ausbildungsbotschafter, um Schülerinnen und Schülern einen Einblick...",
      date: "5. September 2024",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#">
            <Image src="/obs-logo.jpg" alt="Oberschule Soltau Logo" width={128} height={128} />
          </a>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Über uns</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Schulprofil</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Service</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Beratung</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Kontakt</a>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(true)}>
            <span>🍔</span> {/* Icon placeholder */}
          </Button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-y-0 right-0 w-full sm:w-80 bg-white shadow-lg z-50 overflow-y-auto"
          >
            <div className="p-4">
              <Button variant="ghost" size="icon" className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                <span>❌</span> {/* Close icon placeholder */}
              </Button>
              <nav className="mt-8 space-y-4">
                <a href="#" className="block text-lg text-gray-600 hover:text-blue-600 transition-colors">Über uns</a>
                <a href="#" className="block text-lg text-gray-600 hover:text-blue-600 transition-colors">Schulprofil</a>
                <a href="#" className="block text-lg text-gray-600 hover:text-blue-600 transition-colors">Service</a>
                <a href="#" className="block text-lg text-gray-600 hover:text-blue-600 transition-colors">Beratung</a>
                <a href="#" className="block text-lg text-gray-600 hover:text-blue-600 transition-colors">Kontakt</a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative h-[70vh] overflow-hidden">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
            style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center max-w-4xl px-4">
                <motion.h1 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-6xl font-bold text-white mb-4"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl text-gray-200 mb-8"
                >
                  {slide.subtitle}
                </motion.p>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button size="lg">Mehr erfahren</Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Schnellzugriff</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickLinks.map((link, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <link.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{link.title}</h3>
                  <p className="text-gray-600 mb-4">{link.description}</p>
                  <Button variant="outline">Mehr Info</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Neuigkeiten</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Image src={item.image} alt={item.title} width={400} height={250} className="w-full h-auto mb-4 rounded" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <p className="text-gray-400 text-sm">{item.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
