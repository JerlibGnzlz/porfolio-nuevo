"use client"
import { Box, CircularProgress } from "@mui/material"

const LoadingSpinner = () => {
    return (
        <Box
            sx={{
                position: "fixed",
                inset: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                backgroundColor: "rgba(10, 18, 47, 0.8)",
                zIndex: 9999,
            }}
        >
            <CircularProgress
                size={50}
                thickness={5}
                sx={{ color: "primary.main" }}
            />
        </Box>
    )
}

export default LoadingSpinner
