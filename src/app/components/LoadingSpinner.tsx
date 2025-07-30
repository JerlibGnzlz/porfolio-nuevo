"use client"
import { Box, CircularProgress } from "@mui/material"

const LoadingSpinner = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "200px",
            }}
        >
            <CircularProgress sx={{ color: "primary.main" }} />
        </Box>
    )
}

export default LoadingSpinner
