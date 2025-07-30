"use client"
import { ThemeProvider } from "./contexts/ThemeContext"
import CssBaseline from "@mui/material/CssBaseline"
import { Box } from "@mui/material"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { LanguageProvider } from "./contexts/LanguageContext"

export default function Portfolio() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <CssBaseline />
        <Box sx={{ minHeight: "100vh" }}>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </Box>
      </ThemeProvider>
    </LanguageProvider>
  )
}
