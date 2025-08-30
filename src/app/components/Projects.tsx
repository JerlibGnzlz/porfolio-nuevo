"use client"

import { useState, useEffect } from "react"
import {
    Box,
    Typography,
    Container,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button,
    Chip,
    IconButton,
    Fade,
    useTheme,
    useMediaQuery,
    Stack,
} from "@mui/material"
import { ChevronLeft, ChevronRight, Launch, Code } from "@mui/icons-material"
import { useInView } from "react-intersection-observer"
import { useLanguage } from "../contexts/LanguageContext"
import { useRouter } from "next/navigation"

const Projects = () => {
    const router = useRouter()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))
    const [currentProject, setCurrentProject] = useState(0)
    const [mounted, setMounted] = useState(false)
    const { t } = useLanguage()

    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
        skip: !mounted,
    })

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div>Loading...</div>
    }

    const projects = [
        {
            title: t("ecommerceTitle"),
            description: t("ecommerceDesc"),
            image: "/fss.jpg",
            technologies: [
                "React",
                "Redux",
                "Formik",
                "Tailwind CSS",
                "Node.js",
                "Firebase",
                "Express",
                "PostgreSQL",
                "Sequelize",
            ],
            liveUrl: "https://free-style-store.vercel.app/",
            githubUrl: "https://github.com/JerlibGnzlz?tab=repositories&q=ecom&type=&language=&sort=",
            status: "Demo",
            year: "2024",
            category: "E-Commerce",
        },
        {
            title: t("taskAppTitle"),
            description: t("taskAppDesc"),
            image: "/videoapp.jpg",
            technologies: ["React", "Redux", "Node.js", "PostgreSQL", "Express", "Sequelize", "CSS vanilla"],
            liveUrl: "https://videos-app-ten.vercel.app",
            githubUrl: "https://github.com/JerlibGnzlz/videogames-master",
            status: "Activo",
            year: "2023",
            category: "Web App",
        },
        {
            title: t("weatherTitle"),
            description: t("weatherDesc"),
            image: "/fcg.png",
            technologies: ["React", "Redux", "Node.js", "PostgreSQL"],
            liveUrl: "https://fit-center-gym.vercel.app/",
            githubUrl: "",
            status: "Demo",
            year: "2023",
            category: "Sistema",
        },
        {
            title: t("socialTitle"),
            description: t("socialDesc"),
            image: "/connecta.png",
            technologies: ["React", "Redux", "Node.js", "PostgreSQL"],
            liveUrl: "https://connecta-v1.vercel.app/",
            githubUrl: "",
            status: "Beta",
            year: "2023",
            category: "Social",
        },
        {
            title: t("sanJoseTitle"),
            description: t("sanJoseDesc"),
            image: "/csj.png",
            technologies: ["React", "Redux", "Node.js", "PostgreSQL"],
            liveUrl: "https://stagging-csj.vercel.app/auth/",
            githubUrl: "",
            status: "Desarrollo",
            year: "2024",
            category: "Cooperativa",
        },
    ]

    const nextProject = () => {
        setCurrentProject((prev) => (prev + 1) % projects.length)
    }

    const prevProject = () => {
        setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Producción":
                return "#4caf50"
            case "Activo":
                return "#2196f3"
            case "Beta":
                return "#ff9800"
            case "Demo":
                return "#9c27b0"
            case "Desarrollo":
                return "#f44336"
            default:
                return "#64ffda"
        }
    }

    return (
        <Box
            id="projects"
            ref={ref}
            sx={{
                py: 10,
                bgcolor: "background.default",
                position: "relative",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "radial-gradient(circle at 20% 50%, rgba(100, 255, 218, 0.03) 0%, transparent 50%)",
                    pointerEvents: "none",
                },
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
                                fontWeight: 700,
                            }}
                        >
                            {t("projectsTitle")}
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                mb: 2,
                                textAlign: "center",
                                color: "text.secondary",
                                maxWidth: 400,
                                mx: "auto",
                                fontSize: "1.1rem",
                                "&::after": {
                                    content: '""',
                                    position: "absolute",
                                    bottom: -30,
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: 60,
                                    height: 2,
                                    bgcolor: "primary.main",
                                    borderRadius: 2,
                                },
                            }}
                        >
                        </Typography>
                        <Box sx={{ position: "relative", maxWidth: 900, mx: "auto" }}>
                            <Card
                                sx={{
                                    bgcolor: "background.paper",
                                    border: "1px solid rgba(100, 255, 218, 0.1)",
                                    borderRadius: 4,
                                    overflow: "hidden",
                                    position: "relative",
                                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                    "&:hover": {
                                        transform: "translateY(-8px)",
                                        boxShadow: "0 25px 50px rgba(100, 255, 218, 0.15)",
                                        borderColor: "rgba(100, 255, 218, 0.3)",
                                    },
                                    "&::before": {
                                        content: '""',
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: "4px",
                                        background: `linear-gradient(90deg, ${getStatusColor(projects[currentProject].status)}, rgba(100, 255, 218, 0.8))`,
                                        zIndex: 1,
                                    },
                                }}
                            >
                                {/* Header con información del proyecto */}
                                <Box
                                    sx={{
                                        p: 3,
                                        pb: 0,
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                        <Chip
                                            label={projects[currentProject].category}
                                            size="small"
                                            sx={{
                                                bgcolor: "rgba(100, 255, 218, 0.1)",
                                                color: "primary.main",
                                                fontWeight: 600,
                                                fontSize: "0.75rem",
                                            }}
                                        />
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                color: "text.secondary",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {projects[currentProject].year}
                                        </Typography>
                                    </Box>

                                    <Chip
                                        label={projects[currentProject].status}
                                        size="small"
                                        sx={{
                                            bgcolor: `${getStatusColor(projects[currentProject].status)}20`,
                                            color: getStatusColor(projects[currentProject].status),
                                            fontWeight: 600,
                                            fontSize: "0.75rem",
                                            border: `1px solid ${getStatusColor(projects[currentProject].status)}40`,
                                        }}
                                    />
                                </Box>

                                {/* Imagen del proyecto */}
                                <Box
                                    sx={{
                                        position: "relative",
                                        height: 300,
                                        overflow: "hidden",
                                        m: 3,
                                        borderRadius: 3,
                                        "&::after": {
                                            content: '""',
                                            position: "absolute",
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background: "linear-gradient(45deg, rgba(100, 255, 218, 0.1) 0%, transparent 100%)",
                                            opacity: 0,
                                            transition: "opacity 0.3s ease",
                                        },
                                        "&:hover::after": {
                                            opacity: 1,
                                        },
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={projects[currentProject].image}
                                        alt={projects[currentProject].title}
                                        sx={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            filter: "grayscale(20%) brightness(0.9)",
                                            transition: "all 0.4s ease",
                                            "&:hover": {
                                                filter: "grayscale(0%) brightness(1)",
                                                transform: "scale(1.02)",
                                            },
                                        }}
                                    />

                                    {/* Overlay con botones de acción rápida */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: 16,
                                            right: 16,
                                            display: "flex",
                                            gap: 1,
                                            opacity: 0,
                                            transition: "opacity 0.3s ease",
                                            ".MuiCard-root:hover &": {
                                                opacity: 1,
                                            },
                                        }}
                                    >
                                    </Box>
                                </Box>

                                <CardContent sx={{ p: 4, pt: 2 }}>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            mb: 2,
                                            color: "text.primary",
                                            fontWeight: 700,
                                            background: "linear-gradient(45deg, #64ffda, #4fd1c7)",
                                            backgroundClip: "text",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                        }}
                                    >
                                        {projects[currentProject].title}
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        sx={{
                                            mb: 4,
                                            color: "text.secondary",
                                            lineHeight: 1.7,
                                            fontSize: "1rem",
                                        }}
                                    >
                                        {projects[currentProject].description}
                                    </Typography>

                                    <Box sx={{ mb: 4 }}>
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                mb: 2,
                                                color: "text.primary",
                                                fontWeight: 600,
                                                fontSize: "0.9rem",
                                            }}
                                        >
                                            {t("stackTecnologicoTitle")}
                                        </Typography>
                                        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
                                            {projects[currentProject].technologies.map((tech, index) => (
                                                <Chip
                                                    key={tech}
                                                    label={tech}
                                                    size="small"
                                                    sx={{
                                                        bgcolor: "rgba(100, 255, 218, 0.08)",
                                                        color: "text.secondary",
                                                        border: "1px solid rgba(100, 255, 218, 0.2)",
                                                        fontSize: "0.75rem",
                                                        fontWeight: 500,
                                                        transition: "all 0.3s ease",
                                                        animation: `fadeInUp 0.6s ease ${index * 0.1}s both`,
                                                        "&:hover": {
                                                            bgcolor: "rgba(100, 255, 218, 0.15)",
                                                            color: "primary.main",
                                                            transform: "translateY(-2px)",
                                                        },
                                                        "@keyframes fadeInUp": {
                                                            from: {
                                                                opacity: 0,
                                                                transform: "translateY(20px)",
                                                            },
                                                            to: {
                                                                opacity: 1,
                                                                transform: "translateY(0)",
                                                            },
                                                        },
                                                    }}
                                                />
                                            ))}
                                        </Stack>
                                    </Box>
                                </CardContent>

                                <CardActions sx={{ p: 4, pt: 0, gap: 2 }}>
                                    <Button
                                        variant="outlined"
                                        startIcon={<Code />}
                                        onClick={() => {
                                            const url = projects[currentProject].githubUrl
                                            if (!url || url === "#" || !url.startsWith("http")) {
                                                router.push("/not-found")
                                            } else {
                                                window.open(url, "_blank", "noopener,noreferrer")
                                            }
                                        }}
                                        sx={{
                                            borderColor: "rgba(100, 255, 218, 0.3)",
                                            color: "text.secondary",
                                            textTransform: "none",
                                            fontWeight: 600,
                                            px: 3,
                                            py: 1.5,
                                            borderRadius: 3,
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                borderColor: "primary.main",
                                                color: "primary.main",
                                                bgcolor: "rgba(100, 255, 218, 0.05)",
                                                transform: "translateY(-2px)",
                                            },
                                        }}
                                    >
                                        {t("viewCode")}
                                    </Button>

                                    <Button
                                        variant="contained"
                                        startIcon={<Launch />}
                                        href={projects[currentProject].liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{
                                            bgcolor: "primary.main",
                                            color: "background.default",
                                            textTransform: "none",
                                            fontWeight: 600,
                                            px: 3,
                                            py: 1.5,
                                            borderRadius: 3,
                                            boxShadow: "0 8px 25px rgba(100, 255, 218, 0.3)",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                bgcolor: "primary.dark",
                                                transform: "translateY(-2px)",
                                                boxShadow: "0 12px 35px rgba(100, 255, 218, 0.4)",
                                            },
                                        }}
                                    >
                                        {t("viewDemo")}
                                    </Button>
                                </CardActions>
                            </Card>

                            {/* Navigation Arrows */}
                            <IconButton
                                onClick={prevProject}
                                sx={{
                                    position: "absolute",
                                    left: isMobile ? -15 : -70,
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    bgcolor: "background.paper",
                                    border: "2px solid rgba(100, 255, 218, 0.2)",
                                    color: "primary.main",
                                    width: 50,
                                    height: 50,
                                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        bgcolor: "rgba(100, 255, 218, 0.1)",
                                        borderColor: "primary.main",
                                        transform: "translateY(-50%) scale(1.1)",
                                    },
                                }}
                            >
                                <ChevronLeft fontSize="large" />
                            </IconButton>

                            <IconButton
                                onClick={nextProject}
                                sx={{
                                    position: "absolute",
                                    right: isMobile ? -15 : -70,
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    bgcolor: "background.paper",
                                    border: "2px solid rgba(100, 255, 218, 0.2)",
                                    color: "primary.main",
                                    width: 50,
                                    height: 50,
                                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        bgcolor: "rgba(100, 255, 218, 0.1)",
                                        borderColor: "primary.main",
                                        transform: "translateY(-50%) scale(1.1)",
                                    },
                                }}
                            >
                                <ChevronRight fontSize="large" />
                            </IconButton>

                            {/* Project Indicators */}
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    mt: 4,
                                    gap: 2,
                                }}
                            >
                                {projects.map((project, index) => (
                                    <Box
                                        key={project.image}
                                        onClick={() => setCurrentProject(index)}
                                        sx={{
                                            width: index === currentProject ? 40 : 12,
                                            height: 12,
                                            borderRadius: 6,
                                            bgcolor: index === currentProject ? "primary.main" : "rgba(100, 255, 218, 0.3)",
                                            cursor: "pointer",
                                            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                            position: "relative",
                                            "&:hover": {
                                                bgcolor: index === currentProject ? "primary.main" : "rgba(100, 255, 218, 0.5)",
                                                transform: "scale(1.2)",
                                            },
                                        }}
                                    />
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Fade>
            </Container>
        </Box >
    )
}

export default Projects
