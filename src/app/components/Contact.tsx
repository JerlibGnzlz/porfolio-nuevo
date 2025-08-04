"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Box, Typography, Container, TextField, Button, Paper, Alert, Fade, IconButton } from "@mui/material"
import { Send, Email, Phone, LocationOn, LinkedIn, GitHub } from "@mui/icons-material"
import { useInView } from "react-intersection-observer"
import { useLanguage } from "../contexts/LanguageContext"
import emailjs from "emailjs-com";
import Grid from '@mui/material/Grid'


const Contact = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        subject: "",
        message: "",
    })
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null)
    const [mounted, setMounted] = useState(false)

    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
        skip: !mounted,
    })


    const { t } = useLanguage()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div>Loading...</div>
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            // Configurar EmailJS con tus credenciales
            // Reemplaza estos valores con tus propias credenciales de EmailJS
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY


            if (!serviceId || !templateId || !publicKey) {
                throw new Error("EmailJS environment variables are not set.")
            }


            const templateParams = {
                name: formData.nombre,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_name: t("name"),
            }

            // Descomenta la siguiente línea cuando tengas configurado EmailJS
            await emailjs.send(serviceId, templateId, templateParams, publicKey)




            // Simulación de envío exitoso para demo
            await new Promise((resolve) => setTimeout(resolve, 1000))

            setAlert({
                type: "success",
                message: t("successMessage"),
            })

            setFormData({
                nombre: "",
                email: "",
                subject: "",
                message: "",
            })

            setTimeout(() => {
                setAlert(null)
            }, 3000)


            setFormData({ nombre: "", email: "", subject: "", message: "" })
        } catch (error: any) {
            console.error("Error al enviar el mensaje:", error?.text || error?.message || error)
            setAlert({
                type: "error",
                message: t("errorMessage"),
            })
        } finally {
            setLoading(false)
        }
    }

    const contactInfo = [
        {
            icon: <Email sx={{ color: "primary.main" }} />,
            title: t("email"),
            value: "jerlibgnzlz@gmail.com",
            link: "mailto:jerlibgnzlz@gmail.com",
        },
        {
            icon: <Phone sx={{ color: "primary.main" }} />,
            title: t("phone"),
            value: "(+54) 911 515  74336",
            link: "tel:+91151574336",
        },
        {
            icon: <LocationOn sx={{ color: "primary.main" }} />,
            title: t("location"),
            value: "Buenos Aires, Argentina",
        },
    ]

    const socialLinks = [
        { icon: <LinkedIn />, url: "https://www.linkedin.com/in/jerlibgnzlz/", label: "LinkedIn" },
        { icon: <GitHub />, url: "https://github.com/JerlibGnzlz", label: "GitHub" },
    ]

    return (
        <Box
            id="contact"
            ref={ref}
            sx={{
                py: 10,
                bgcolor: "background.paper",
            }}
        >
            <Container maxWidth="lg">
                <Fade in={inView} timeout={1000}>
                    <Box>
                        <Typography
                            variant="h2"
                            sx={{
                                mb: 2,
                                textAlign: "center",
                                color: "text.primary",
                                position: "relative",
                            }}
                        >
                            {t("contactTitle")}
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{
                                mb: 6,
                                textAlign: "center",
                                color: "text.secondary",
                                maxWidth: 600,
                                mx: "auto",
                                position: "relative",
                                "&::after": {
                                    content: '""',
                                    position: "absolute",
                                    bottom: -20,
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: 60,
                                    height: 4,
                                    bgcolor: "primary.main",
                                    borderRadius: 2,
                                },
                            }}
                        >
                            {t("contactSubtitle")}
                        </Typography>

                        <Grid container spacing={6}>
                            <Grid item xs={12} md={6}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        p: 4,
                                        bgcolor: "background.default",
                                        border: "1px solid rgba(100, 255, 218, 0.1)",
                                        height: "100%",
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            mb: 3,
                                            color: "text.primary",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {t("contactInfo")}
                                    </Typography>

                                    {contactInfo.map((info, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                mb: 3,
                                                p: 2,
                                                borderRadius: 2,
                                                transition: "background-color 0.3s ease",
                                                "&:hover": {
                                                    bgcolor: "rgba(100, 255, 218, 0.05)",
                                                },
                                            }}
                                        >
                                            <Box sx={{ mr: 3 }}>{info.icon}</Box>
                                            <Box>
                                                <Typography variant="subtitle2" sx={{ color: "text.secondary", mb: 0.5 }}>
                                                    {info.title}
                                                </Typography>
                                                <Typography
                                                    variant="body1"
                                                    component="a"
                                                    href={info.link}
                                                    sx={{
                                                        color: "text.primary",
                                                        textDecoration: "none",
                                                        "&:hover": {
                                                            color: "primary.main",
                                                        },
                                                    }}
                                                >
                                                    {info.value}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    ))}

                                    <Box sx={{ mt: 4 }}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                mb: 2,
                                                color: "text.primary",
                                            }}
                                        >
                                            {t("followSocial")}
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
                                                        },
                                                    }}
                                                >
                                                    {social.icon}
                                                </IconButton>
                                            ))}
                                        </Box>
                                    </Box>
                                </Paper>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Paper
                                    elevation={3}
                                    sx={{
                                        p: 4,
                                        bgcolor: "background.default",
                                        border: "1px solid rgba(100, 255, 218, 0.1)",
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            mb: 3,
                                            color: "text.primary",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {t("sendMessage")}
                                    </Typography>

                                    {alert && (
                                        <Alert severity={alert.type} sx={{ mb: 3 }} onClose={() => setAlert(null)}>
                                            {alert.message}
                                        </Alert>
                                    )}

                                    <Box component="form" onSubmit={handleSubmit}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    label={t("nombre")}
                                                    name="nombre"
                                                    value={formData.nombre}
                                                    onChange={handleChange}
                                                    required
                                                    sx={{
                                                        "& .MuiOutlinedInput-root": {
                                                            "& fieldset": {
                                                                borderColor: "rgba(100, 255, 218, 0.3)",
                                                            },
                                                            "&:hover fieldset": {
                                                                borderColor: "primary.main",
                                                            },
                                                            "&.Mui-focused fieldset": {
                                                                borderColor: "primary.main",
                                                            },
                                                        },
                                                        "& .MuiInputLabel-root": {
                                                            color: "text.secondary",
                                                            "&.Mui-focused": {
                                                                color: "primary.main",
                                                            },
                                                        },
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    label={t("email")}
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    sx={{
                                                        "& .MuiOutlinedInput-root": {
                                                            "& fieldset": {
                                                                borderColor: "rgba(100, 255, 218, 0.3)",
                                                            },
                                                            "&:hover fieldset": {
                                                                borderColor: "primary.main",
                                                            },
                                                            "&.Mui-focused fieldset": {
                                                                borderColor: "primary.main",
                                                            },
                                                        },
                                                        "& .MuiInputLabel-root": {
                                                            color: "text.secondary",
                                                            "&.Mui-focused": {
                                                                color: "primary.main",
                                                            },
                                                        },
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    label={t("subject")}
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    required
                                                    sx={{
                                                        "& .MuiOutlinedInput-root": {
                                                            "& fieldset": {
                                                                borderColor: "rgba(100, 255, 218, 0.3)",
                                                            },
                                                            "&:hover fieldset": {
                                                                borderColor: "primary.main",
                                                            },
                                                            "&.Mui-focused fieldset": {
                                                                borderColor: "primary.main",
                                                            },
                                                        },
                                                        "& .MuiInputLabel-root": {
                                                            color: "text.secondary",
                                                            "&.Mui-focused": {
                                                                color: "primary.main",
                                                            },
                                                        },
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    label={t("message")}
                                                    name="message"
                                                    multiline
                                                    rows={4}
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                    sx={{
                                                        "& .MuiOutlinedInput-root": {
                                                            "& fieldset": {
                                                                borderColor: "rgba(100, 255, 218, 0.3)",
                                                            },
                                                            "&:hover fieldset": {
                                                                borderColor: "primary.main",
                                                            },
                                                            "&.Mui-focused fieldset": {
                                                                borderColor: "primary.main",
                                                            },
                                                        },
                                                        "& .MuiInputLabel-root": {
                                                            color: "text.secondary",
                                                            "&.Mui-focused": {
                                                                color: "primary.main",
                                                            },
                                                        },
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button
                                                    type="submit"
                                                    variant="contained"
                                                    size="large"
                                                    disabled={loading}
                                                    startIcon={<Send />}
                                                    sx={{
                                                        bgcolor: "primary.main",
                                                        color: "background.default",
                                                        px: 4,
                                                        py: 1.5,
                                                        "&:hover": {
                                                            bgcolor: "primary.dark",
                                                        },
                                                        "&:disabled": {
                                                            bgcolor: "rgba(100, 255, 218, 0.3)",
                                                        },
                                                    }}
                                                >
                                                    {loading ? t("sending") : t("send")}
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Box>
                </Fade>
            </Container>
        </Box >
    )
}

export default Contact



