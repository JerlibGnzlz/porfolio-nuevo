"use client"
import { Box, Typography, Button, Container, Fade } from "@mui/material"
import { KeyboardArrowDown } from "@mui/icons-material"
import { useLanguage } from "../contexts/LanguageContext"
import { useLoading } from "../contexts/LoadingContext"
import { useEffect, useState } from "react"
import LoadingSpinner from "./LoadingSpinner"

const Hero = () => {
    const { showLoading, hideLoading, loading } = useLoading()
    const { t } = useLanguage()
    const [showHero, setShowHero] = useState(false) // controla el Fade del Hero

    const scrollToAbout = () => {
        const element = document.querySelector("#about")
        if (element) element.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        showLoading()
        const timer = setTimeout(() => {
            hideLoading()
            setShowHero(true) // después de 1s mostramos el Hero
        }, 1000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            {/* Spinner */}
            <Fade in={loading} unmountOnExit>
                <Box sx={{ position: "fixed", inset: 0, zIndex: 9999 }}>
                    <LoadingSpinner />
                </Box>
            </Fade>

            {/* Hero */}
            <Fade in={showHero} timeout={1000}>
                <Box
                    id="hero"
                    sx={{
                        minHeight: "100vh",
                        display: "flex",
                        alignItems: "center",
                        background: "linear-gradient(135deg, #0a192f 0%, #112240 100%)",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    <Container maxWidth="lg">
                        <Box sx={{ textAlign: "left", zIndex: 2, position: "relative" }}>
                            <Typography variant="h6" sx={{ color: "primary.main", mb: 2, fontFamily: "monospace" }}>
                                {t("hello")}
                            </Typography>
                            <Typography variant="h1" sx={{ color: "text.primary", mb: 2, fontWeight: "bold" }}>
                                {t("name")}
                            </Typography>
                            <Typography variant="h2" sx={{ color: "text.secondary", mb: 4 }}>
                                {t("role")}
                            </Typography>
                            <Typography variant="h6" sx={{ color: "text.secondary", mb: 6, maxWidth: "600px", lineHeight: 1.6 }}>
                                {t("heroDescription")}
                            </Typography>
                            <Button
                                variant="outlined"
                                size="large"
                                sx={{
                                    borderColor: "primary.main",
                                    color: "primary.main",
                                    px: 4,
                                    py: 2,
                                    fontSize: "1.1rem",
                                    "&:hover": { bgcolor: "rgba(100, 255, 218, 0.1)", borderColor: "primary.main" },
                                }}
                                onClick={() => {
                                    const element = document.querySelector("#projects")
                                    if (element) element.scrollIntoView({ behavior: "smooth" })
                                }}
                            >
                                {t("viewWork")}
                            </Button>
                        </Box>
                    </Container>

                    <Box
                        sx={{
                            position: "absolute",
                            bottom: 30,
                            left: "50%",
                            transform: "translateX(-50%)",
                            cursor: "pointer",
                            animation: "bounce 2s infinite",
                            "@keyframes bounce": {
                                "0%, 20%, 50%, 80%, 100%": { transform: "translateX(-50%) translateY(0)" },
                                "40%": { transform: "translateX(-50%) translateY(-10px)" },
                                "60%": { transform: "translateX(-50%) translateY(-5px)" },
                            },
                        }}
                        onClick={scrollToAbout}
                    >
                        <KeyboardArrowDown sx={{ fontSize: 40, color: "primary.main" }} />
                    </Box>
                </Box>
            </Fade>
        </>
    )
}

export default Hero
