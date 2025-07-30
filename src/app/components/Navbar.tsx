"use client"

import { useState, useEffect } from "react"
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useMediaQuery,
    useTheme,
} from "@mui/material"
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material"
import ThemeToggle from "./ThemeToggle"
import DownloadCV from "./DownloadCV"
import { useLanguage } from "../contexts/LanguageContext"
import LanguageToggle from "./LanguageToggle"

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [, setScrolled] = useState(false)
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))
    const { t } = useLanguage()

    const menuItems = [
        { label: t("home"), href: "#hero" },
        { label: t("about"), href: "#about" },
        { label: t("skills"), href: "#skills" },
        { label: t("projects"), href: "#projects" },
        { label: t("contact"), href: "#contact" },
    ]

    const handleScroll = () => {
        if (typeof window !== "undefined") {
            const isScrolled = window.scrollY > 50
            setScrolled(isScrolled)
        }
    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const scrollToSection = (href: string) => {
        if (typeof document !== "undefined") {
            const element = document.querySelector(href)
            if (element) {
                element.scrollIntoView({ behavior: "smooth" })
            }
        }
        setMobileOpen(false)
    }

    const drawer = (
        <Box sx={{ width: 250, height: "100%", bgcolor: "background.paper" }}>
            <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
                <IconButton onClick={handleDrawerToggle}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <List>
                {menuItems.map((item) => (
                    <ListItem key={item.label} onClick={() => scrollToSection(item.href)}>
                        <ListItemText
                            primary={item.label}
                            sx={{
                                cursor: "pointer",
                                "&:hover": { color: "primary.main" },
                            }}
                        />
                    </ListItem>
                ))}
            </List>
            <Box sx={{ p: 2, display: "flex", justifyContent: "center", gap: 2 }}>
                <LanguageToggle />
                <ThemeToggle />
                <DownloadCV variant="icon" />
            </Box>
        </Box>
    )

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleScroll)
            return () => window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)", // fondo semitransparente
                    backdropFilter: "blur(10px)",               // efecto de desenfoque
                    WebkitBackdropFilter: "blur(10px)",         // compatibilidad Safari
                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                    color: "text.primary",
                }}
            >

                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            fontWeight: "bold",
                            color: "primary.main",
                            cursor: "pointer",
                        }}
                        onClick={() => {
                            if (typeof document !== "undefined") {
                                scrollToSection("#hero")
                            }
                        }}
                    >
                        {"<Jerlib.dev />"}
                    </Typography>

                    {isMobile ? (
                        <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                            {menuItems.map((item) => (
                                <Button
                                    key={item.label}
                                    color="inherit"
                                    onClick={() => scrollToSection(item.href)}
                                    sx={{
                                        "&:hover": {
                                            color: "primary.main",
                                        },
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                            <LanguageToggle />
                            <ThemeToggle />
                            <DownloadCV variant="icon" />
                        </Box>
                    )}
                </Toolbar>
            </AppBar>

            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                {drawer}
            </Drawer>
        </>
    )
}

export default Navbar
