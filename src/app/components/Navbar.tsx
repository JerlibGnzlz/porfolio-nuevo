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
import LanguageToggle from "./LanguageToggle"
import { useLanguage } from "../contexts/LanguageContext"

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState("hero")
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))
    const { t } = useLanguage()

    const menuItems = [
        { label: t("home"), href: "#hero", id: "hero" },
        { label: t("about"), href: "#about", id: "about" },
        { label: t("skills"), href: "#skills", id: "skills" },
        { label: t("projects"), href: "#projects", id: "projects" },
        { label: t("contact"), href: "#contact", id: "contact" },
    ]

    const handleScroll = () => {
        if (typeof window !== "undefined") {
            const isScrolled = window.scrollY > 50
            setScrolled(isScrolled)

            const scrollPosition = window.scrollY + 200
            for (const item of menuItems) {
                const element = document.getElementById(item.id)
                if (element) {
                    const offsetTop = element.offsetTop
                    const offsetHeight = element.offsetHeight
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(item.id)
                        break
                    }
                }
            }
        }
    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen)
    }

    const scrollToSection = (href: string, id: string) => {
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
            setActiveSection(id)
        }
        setMobileOpen(false)
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", handleScroll)
            handleScroll()
            return () => window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const drawer = (
        <Box sx={{ width: 250, height: "100%", bgcolor: "background.paper" }}>
            <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
                <IconButton onClick={handleDrawerToggle}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <List>
                {menuItems.map((item) => (
                    <ListItem
                        key={item.label}
                        onClick={() => scrollToSection(item.href, item.id)}
                        sx={{
                            cursor: "pointer",
                            borderRadius: 1,
                            mx: 1,
                            mb: 0.5,
                            position: "relative",
                            color: activeSection === item.id ? "primary.main" : "text.primary",
                            "&:hover": {
                                bgcolor: "rgba(100, 255, 218, 0.05)",
                                color: "primary.main",
                            },
                            "&::after": {
                                content: '""',
                                position: "absolute",
                                bottom: 0,
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: activeSection === item.id ? "80%" : "0%",
                                height: "2px",
                                bgcolor: "primary.main",
                                transition: "width 0.3s ease",
                            },
                        }}
                    >
                        <ListItemText
                            primary={item.label}
                            sx={{
                                textAlign: "center",
                                "& .MuiListItemText-primary": {
                                    fontWeight: activeSection === item.id ? "600" : "normal",
                                    fontSize: "0.95rem",
                                },
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

    return (
        <>
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    bgcolor: scrolled ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    transition: "all 0.3s ease",
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
                        onClick={() => scrollToSection("#hero", "hero")}
                    >
                        {"<Jerlib.dev />"}
                    </Typography>

                    {isMobile ? (
                        <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                            {menuItems.map((item) => (
                                <Button
                                    key={item.label}
                                    onClick={() => scrollToSection(item.href, item.id)}
                                    sx={{
                                        color: activeSection === item.id ? "primary.main" : "text.primary",
                                        fontWeight: activeSection === item.id ? "600" : "normal",
                                        px: 2.5,
                                        py: 1,
                                        borderRadius: 0,
                                        position: "relative",
                                        textTransform: "none",
                                        fontSize: "0.95rem",
                                        minWidth: "auto",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            bgcolor: "transparent",
                                            color: "primary.main",
                                        },
                                        "&::after": {
                                            content: '""',
                                            position: "absolute",
                                            bottom: 0,
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            width: activeSection === item.id ? "100%" : "0%",
                                            height: "2px",
                                            bgcolor: "primary.main",
                                            transition: "width 0.3s ease",
                                        },
                                        "&:hover::after": {
                                            width: "100%",
                                        },
                                    }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                            <Box sx={{ ml: 2, display: "flex", gap: 1 }}>
                                <LanguageToggle />
                                <ThemeToggle />
                                <DownloadCV variant="icon" />
                            </Box>
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

