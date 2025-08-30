"use client"
import { Box, CircularProgress } from "@mui/material"

const LoadingSpinner = () => {
    return (
        <Box
            sx={{
                position: "fixed",       // fijo sobre toda la pantalla
                inset: 0,                // top:0, right:0, bottom:0, left:0
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",         // ocupa toda la altura de la pantalla
                backgroundColor: "rgba(10, 18, 47, 0.8)", // opcional: oscurecer el fondo
                zIndex: 9999,            // encima de todo
            }}
        >
            <CircularProgress
                size={50}                 // tamaño más grande (por defecto es 40)
                thickness={5}             // grosor del círculo
                sx={{ color: "primary.main" }}
            />
        </Box>
    )
}

export default LoadingSpinner
