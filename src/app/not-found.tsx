
'use client'

import Link from 'next/link'
import { Button, Typography, Box } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock'
import { motion } from 'framer-motion'

const MotionBox = motion(Box)

export default function NotFound() {
    return (
        <MotionBox
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="80vh"
            textAlign="center"
            px={2}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <MotionBox
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
            >
                <LockIcon sx={{ fontSize: 70, color: "primary.main", mb: 2 }} />
            </MotionBox>

            <Typography variant="h4" gutterBottom fontWeight="bold">
                El repositorio es privado
            </Typography>

            <Typography variant="body1" color="text.secondary" mb={3} maxWidth="500px">
                No tienes acceso a este recurso o el repositorio no está disponible públicamente.
            </Typography>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
            >
                <Link href="/" passHref>
                    <Button variant="contained" color="primary" size="large">
                        Volver al inicio
                    </Button>
                </Link>
            </motion.div>
        </MotionBox>
    )
}
