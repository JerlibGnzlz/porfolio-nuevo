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
} from "@mui/material"
import { ChevronLeft, ChevronRight, Launch, GitHub } from "@mui/icons-material"
import { useInView } from "react-intersection-observer"
import { useLanguage } from "../contexts/LanguageContext"
import { useRouter } from 'next/navigation'

const Projects = () => {
    const router = useRouter();
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
            technologies: ["React", "Redux", "Formik", "Tailwind CSS", "Node.js", "Firebase", "Express", "postgresql", "Sequelize"],
            liveUrl: "https://free-style-store.vercel.app/",
            githubUrl: "https://github.com/JerlibGnzlz?tab=repositories&q=ecom&type=&language=&sort=",
        },
        {
            title: t("taskAppTitle"),
            description: t("taskAppDesc"),
            image: "/videoapp.jpg",
            technologies: ["React", "Redux", "Node.js", "Postgresql", "Express", "Sequelize", "CSS vanilla"],
            liveUrl: "https://videos-app-ten.vercel.app",
            githubUrl: "https://github.com/JerlibGnzlz/videogames-master",
        },
        {
            title: t("weatherTitle"),
            description: t("weatherDesc"),
            image: "/fcg.png",
            technologies: ["React", "Redux", "Node.js", "Postgresql",],
            liveUrl: "https://fit-center-gym.vercel.app/",
            githubUrl: "",
        },

        {
            title: t("socialTitle"),
            description: t("socialDesc"),
            image: "/connecta.png",
            technologies: ["React", "Redux", "Node.js", "Postgresql",],
            liveUrl: "https://connecta-v1.vercel.app/",
            githubUrl: "",
        },
        {
            title: t("sanJoseTitle"),
            description: t("sanJoseDesc"),
            image: "/csj.png",
            technologies: ["React", "Redux", "Node.js", "Postgresql",],
            liveUrl: "https://stagging-csj.vercel.app/auth/",
            githubUrl: "",
        },
    ]
    const nextProject = () => {
        setCurrentProject((prev) => (prev + 1) % projects.length)
    }

    const prevProject = () => {
        setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
    }

    return (
        <Box
            id="projects"
            ref={ref}
            sx={{
                py: 10,
                bgcolor: "background.default",
            }}
        >
            <Container maxWidth="lg">
                <Fade in={inView} timeout={1000}>
                    <Box>
                        <Typography
                            variant="h2"
                            sx={{
                                mb: 6,
                                textAlign: "center",
                                color: "text.primary",
                                position: "relative",
                                "&::after": {
                                    content: '""',
                                    position: "absolute",
                                    bottom: -10,
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: 60,
                                    height: 4,
                                    bgcolor: "primary.main",
                                    borderRadius: 2,
                                },
                            }}
                        >
                            {t("projectsTitle")}
                        </Typography>

                        <Box sx={{ position: "relative", maxWidth: 800, mx: "auto" }}>
                            <Card
                                sx={{
                                    bgcolor: "background.paper",
                                    border: "1px solid rgba(100, 255, 218, 0.1)",
                                    transition: "transform 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-5px)",
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={projects[currentProject].image}
                                    alt={projects[currentProject].title}
                                    sx={{
                                        width: "250px",          // Ancho fijo
                                        height: "350px",         // Alto fijo
                                        objectFit: "contain",    // Para que se vea toda la imagen sin recortarse
                                        borderRadius: 2,
                                        mx: "auto",              // Centra horizontalmente
                                        filter: "grayscale(50%)",
                                        transition: "filter 0.3s ease",
                                        "&:hover": {
                                            filter: "grayscale(0%)",
                                        },
                                    }}
                                />
                                <CardContent sx={{ p: 4 }}>
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            mb: 2,
                                            color: "text.primary",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {projects[currentProject].title}
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        sx={{
                                            mb: 3,
                                            color: "text.secondary",
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        {projects[currentProject].description}
                                    </Typography>

                                    <Box sx={{ mb: 3 }}>
                                        {projects[currentProject].technologies.map((tech) => (
                                            <Chip
                                                key={tech}
                                                label={tech}
                                                size="small"
                                                sx={{
                                                    mr: 1,
                                                    mb: 1,
                                                    bgcolor: "rgba(100, 255, 218, 0.1)",
                                                    color: "primary.main",
                                                    border: "1px solid rgba(100, 255, 218, 0.3)",
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </CardContent>

                                <CardActions sx={{ p: 4, pt: 0 }}>
                                    <Button
                                        variant="outlined"
                                        startIcon={<GitHub />}
                                        onClick={() => {
                                            const url = projects[currentProject].githubUrl;

                                            // Si no hay URL válida o es un placeholder
                                            if (!url || url === "#" || !url.startsWith("http")) {
                                                router.push("/not-found"); // Redirige a tu página 404 personalizada
                                            } else {
                                                window.open(url, "_blank", "noopener,noreferrer");
                                            }
                                        }}
                                        sx={{
                                            borderColor: "primary.main",
                                            color: "primary.main",
                                            "&:hover": {
                                                bgcolor: "rgba(100, 255, 218, 0.1)",
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
                                            "&:hover": {
                                                bgcolor: "primary.dark",
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
                                    left: isMobile ? -20 : -60,
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    bgcolor: "background.paper",
                                    border: "1px solid rgba(100, 255, 218, 0.3)",
                                    color: "primary.main",
                                    "&:hover": {
                                        bgcolor: "rgba(100, 255, 218, 0.1)",
                                    },
                                }}
                            >
                                <ChevronLeft />
                            </IconButton>

                            <IconButton
                                onClick={nextProject}
                                sx={{
                                    position: "absolute",
                                    right: isMobile ? -20 : -60,
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    bgcolor: "background.paper",
                                    border: "1px solid rgba(100, 255, 218, 0.3)",
                                    color: "primary.main",
                                    "&:hover": {
                                        bgcolor: "rgba(100, 255, 218, 0.1)",
                                    },
                                }}
                            >
                                <ChevronRight />
                            </IconButton>

                            {/* Project Indicators */}
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    mt: 3,
                                    gap: 1,
                                }}
                            >
                                {projects.map((_, index) => (
                                    <Box
                                        key={index}
                                        onClick={() => setCurrentProject(index)}
                                        sx={{
                                            width: 12,
                                            height: 12,
                                            borderRadius: "50%",
                                            bgcolor: index === currentProject ? "primary.main" : "rgba(100, 255, 218, 0.3)",
                                            cursor: "pointer",
                                            transition: "background-color 0.3s ease",
                                        }}
                                    />
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Fade>
            </Container>
        </Box>
    )
}

export default Projects
