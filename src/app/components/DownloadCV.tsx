"use client"
import { Button, IconButton, Tooltip } from "@mui/material"
import type React from "react"

import { Download, GetApp } from "@mui/icons-material"

interface DownloadCVProps {
    variant?: "button" | "icon"
    size?: "small" | "medium" | "large"
}

const DownloadCV: React.FC<DownloadCVProps> = ({ variant = "button", size = "medium" }) => {
    const handleDownload = () => {
        // Crear un enlace temporal para descargar
        const link = document.createElement("a")
        link.href = "/CV_FullStack.pdf" // Ruta al archivo PDF
        link.download = "CV_FullStack.pdf"
        link.target = "_blank"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    if (variant === "icon") {
        return (
            <Tooltip title="Descargar CV">
                <IconButton
                    onClick={handleDownload}
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
                    <Download />
                </IconButton>
            </Tooltip>
        )
    }

    return (
        <Button
            variant="outlined"
            size={size}
            startIcon={<GetApp />}
            onClick={handleDownload}
            sx={{
                borderColor: "primary.main",
                color: "primary.main",
                px: 3,
                py: 1.5,
                "&:hover": {
                    bgcolor: "rgba(100, 255, 218, 0.1)",
                    borderColor: "primary.main",
                    transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
            }}
        >
            Descargar CV
        </Button>
    )
}

export default DownloadCV
