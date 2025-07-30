"use client"
import { IconButton, Tooltip } from "@mui/material"
import { LightMode, DarkMode } from "@mui/icons-material"
import { useThemeMode } from "../contexts/ThemeContext"
import { useLanguage } from "../contexts/LanguageContext"

const ThemeToggle = () => {
    const { mode, toggleTheme } = useThemeMode()
    const { t } = useLanguage()

    return (
        <Tooltip title={mode === "dark" ? t("switchToLight") : t("switchToDark")}>
            <IconButton
                onClick={toggleTheme}
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
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 0,
                }}
            >
                {mode === "dark" ? <LightMode sx={{ fontSize: 20 }} /> : <DarkMode sx={{ fontSize: 20 }} />}
            </IconButton>
        </Tooltip>
    )
}

export default ThemeToggle
