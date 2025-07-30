"use client"
import { IconButton, Tooltip, Typography, } from "@mui/material"
import { LanguageTwoTone } from "@mui/icons-material"
import { useLanguage } from "../contexts/LanguageContext"

const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage()

    return (
        <Tooltip title={`${language === "es" ? "English" : "Español"}`}>
            <IconButton
                onClick={toggleLanguage}
                sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    color: "text.secondary",
                    border: "1px solid rgba(100, 255, 218, 0.3)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                        color: "primary.main",
                        bgcolor: "rgba(100, 255, 218, 0.1)",
                        transform: "scale(1.1)",
                    },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 0,
                }}
            >
                <LanguageTwoTone sx={{ fontSize: 20 }} />
                <Typography variant="caption" sx={{ fontSize: "0.6rem", fontWeight: "bold", lineHeight: 1 }}>
                    {language.toUpperCase()}
                </Typography>
            </IconButton>
        </Tooltip>
    )
}

export default LanguageToggle
