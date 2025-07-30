"use client"
import { Box, Typography, Container, IconButton, Divider } from "@mui/material"
import { LinkedIn, GitHub } from "@mui/icons-material"
import { useLanguage } from "../contexts/LanguageContext"
const Footer = () => {

    const { t } = useLanguage()


    const socialLinks = [
        { icon: <LinkedIn />, url: "https://www.linkedin.com/in/jerlibgnzlz/", label: "LinkedIn" },
        { icon: <GitHub />, url: "https://github.com/jerlibgnzlz", label: "GitHub" },
    ]

    const scrollToTop = () => {
        if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
    }

    return (
        <Box
            component="footer"
            sx={{
                bgcolor: "background.default",
                py: 6,
                borderTop: "1px solid rgba(100, 255, 218, 0.1)",
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 4,
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            color: "primary.main",
                            fontWeight: "bold",
                            cursor: "pointer",
                            mb: { xs: 2, md: 0 },
                        }}
                        onClick={scrollToTop}
                    >
                        {"<Jerlib.dev />"}
                    </Typography>

                    <Box sx={{ display: "flex", gap: 2 }}>
                        {socialLinks.map((social, index) => (
                            <IconButton
                                key={index}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    color: "text.secondary",
                                    border: "1px solid rgba(100, 255, 218, 0.3)",
                                    "&:hover": {
                                        color: "primary.main",
                                        bgcolor: "rgba(100, 255, 218, 0.1)",
                                        transform: "translateY(-2px)",
                                    },
                                    transition: "all 0.3s ease",
                                }}
                            >
                                {social.icon}
                            </IconButton>
                        ))}
                    </Box>
                </Box>

                <Divider sx={{ bgcolor: "rgba(100, 255, 218, 0.1)", mb: 4 }} />

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "space-between",
                        alignItems: "center",
                        textAlign: { xs: "center", md: "left" },
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{
                            color: "text.secondary",
                            width: "100%",
                            textAlign: "center",
                            mb: { xs: 2, md: 0 },
                        }}
                    >
                        © {new Date().getFullYear()} {t("name")}. {t("allRights")}.
                    </Typography>

                </Box>
            </Container>
        </Box>
    )
}

export default Footer
