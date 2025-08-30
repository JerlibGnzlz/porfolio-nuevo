"use client"
import type React from "react"
import { createContext, useContext, useState, useEffect, useMemo } from "react"
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material/styles"

type ThemeMode = "light" | "dark"

interface ThemeContextType {
    mode: ThemeMode
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useThemeMode = () => {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error("useThemeMode must be used within a ThemeProvider")
    }
    return context
}

interface ThemeProviderProps {
    children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [mode, setMode] = useState<ThemeMode>("dark")
    const [, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        // Cargar tema guardado del localStorage
        const savedTheme = localStorage.getItem("theme") as ThemeMode
        if (savedTheme) {
            setMode(savedTheme)
        } else {
            // Detectar preferencia del sistema
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
            setMode(prefersDark ? "dark" : "light")
        }
    }, [])

    const toggleTheme = () => {
        const newMode = mode === "light" ? "dark" : "light"
        setMode(newMode)
        localStorage.setItem("theme", newMode)
    }

    const theme = createTheme({
        palette: {
            mode,
            primary: {
                main: mode === "dark" ? "#64ffda" : "#1976d2",
            },
            secondary: {
                main: mode === "dark" ? "#f50057" : "#dc004e",
            },
            background: {
                default: mode === "dark" ? "#0a192f" : "#ffffff",
                paper: mode === "dark" ? "#112240" : "#f5f5f5",
            },
            text: {
                primary: mode === "dark" ? "#ccd6f6" : "#333333",
                secondary: mode === "dark" ? "#8892b0" : "#666666",
            },
        },
        typography: {
            fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
            h1: {
                fontSize: "3.5rem",
                fontWeight: 700,
                "@media (max-width:600px)": {
                    fontSize: "2.5rem",
                },
            },
            h2: {
                fontSize: "2.5rem",
                fontWeight: 600,
                "@media (max-width:600px)": {
                    fontSize: "2rem",
                },
            },
        },
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    body: {
                        transition: "background-color 0.3s ease, color 0.3s ease",
                    },
                },
            },
        },
    })



    return (
        <ThemeContext.Provider value={useMemo(() => ({
            mode, toggleTheme
        }),
            [mode, toggleTheme])}>
            <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
        </ThemeContext.Provider>
    )
}
