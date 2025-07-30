"use client"
import { Box, Typography, Container, Grid, Avatar, Fade } from "@mui/material"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import { useLanguage } from "../contexts/LanguageContext"

const About = () => {
    const [mounted, setMounted] = useState(false)
    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
        skip: !mounted, // Skip until component is mounted
    })

    const { t } = useLanguage()


    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div>Loading...</div>
    }

    return (
        <Box
            id="about"
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
                            {t("aboutTitle")}
                        </Typography>

                        <Grid container spacing={6} alignItems="center">
                            <Grid item xs={12} md={8}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: "text.secondary",
                                        fontSize: "1.1rem",
                                        lineHeight: 1.8,
                                        mb: 3,
                                    }}
                                >
                                    {t("aboutText1")}

                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: "text.secondary",
                                        fontSize: "1.1rem",
                                        lineHeight: 1.8,
                                        mb: 3,
                                    }}
                                >
                                    {t("aboutText2")}
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: "text.secondary",
                                        fontSize: "1.1rem",
                                        lineHeight: 1.8,
                                    }}
                                >
                                    {t("aboutText3")}
                                </Typography>

                                <Grid container spacing={2} sx={{ mt: 1 }}>
                                    {["JavaScript (ES6+)", "HTML", "CSS", "TypeScript", "React", "Node.js", "Next.js", "Redux Toolkit", "React Context", "Express", "MongoDB", "MUI", "Ant Design", "Sequelize", "Prisma", "Postgres", "MySQL", "Scrum", "Swagger", "Postman", "Jmeter", "Jira", "Linux"].map((tech) => (
                                        <Grid item xs={5} key={tech}>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: "text.secondary",
                                                    "&::before": {
                                                        content: '"▹"',
                                                        color: "primary.main",
                                                        mr: 2,
                                                    },
                                                }}
                                            >
                                                {tech}
                                            </Typography>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        position: "relative",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: "relative",
                                            "&::before": {
                                                content: '""',
                                                position: "absolute",
                                                top: 20,
                                                left: 20,
                                                width: "100%",
                                                height: "100%",
                                                border: "2px solid",
                                                borderColor: "primary.main",
                                                borderRadius: 2,
                                                zIndex: -1,
                                            },
                                        }}
                                    >
                                        <Avatar
                                            src={"/jerlib.jpeg"}
                                            sx={{
                                                width: 300,
                                                height: 300,
                                                borderRadius: 2,
                                                filter: "grayscale(100%)",
                                                transition: "filter 0.3s ease",
                                                "&:hover": {
                                                    filter: "grayscale(0%)",
                                                },
                                                border: "2px solid transparent",
                                            }}
                                        />
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Fade>
            </Container>
        </Box>
    )
}

export default About
