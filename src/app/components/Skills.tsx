"use client"
import { Box, Typography, Container, Grid, Paper, LinearProgress, Fade } from "@mui/material"
import { useInView } from "react-intersection-observer"
import { Code, Web, Storage, CloudQueue, DeviceHub, BrushOutlined, BugReportOutlined } from "@mui/icons-material"
import { useEffect, useState } from "react"
import { useLanguage } from "../contexts/LanguageContext"

const Skills = () => {
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



    const skillCategories = [
        {
            title: t("frontend"),
            icon: <Web sx={{ fontSize: 40, color: "primary.main" }} />,
            skills: [
                { name: "JavaScript Vanilla", level: 95 },
                { name: "React", level: 95 },
                { name: "TypeScript", level: 90 },
                { name: "Angular", level: 80 },
                { name: "Next.js", level: 90 },

            ],
        },
        {
            title: t("backend"),
            icon: <Code sx={{ fontSize: 40, color: "primary.main" }} />,
            skills: [
                { name: "Node.js", level: 95 },
                { name: "Express.js", level: 95 },
                { name: "Nest.js", level: 90 },


            ],
        },
        {
            title: t("database"),
            icon: <Storage sx={{ fontSize: 40, color: "primary.main" }} />,
            skills: [
                { name: "MongoDB", level: 80 },
                { name: "PostgreSQL", level: 75 },
                { name: "Firebase", level: 80 },
                { name: "MySQL", level: 70 },
                { name: "Supabase", level: 80 },
            ],
        },
        {
            title: t("cloudDevops"),
            icon: <CloudQueue sx={{ fontSize: 40, color: "primary.main" }} />,
            skills: [
                { name: "Neon", level: 70 },
                { name: "Docker", level: 70 },
                { name: "Vercel", level: 90 },
                { name: "Render", level: 90 },
            ],
        },
        {
            title: t("tools"),
            icon: <DeviceHub sx={{ fontSize: 40, color: "primary.main" }} />,
            skills: [
                { name: "Sequelize", level: 90 },
                { name: "Prisma", level: 90 },
                { name: "Mongoose", level: 90 },
                { name: "TypeORM", level: 80 },
            ],
        },
        {
            title: t("design"),
            icon: <BrushOutlined sx={{ fontSize: 40, color: "primary.main" }} />,
            skills: [
                { name: "CSS Vanilla", level: 90 },
                { name: "Ant Design", level: 90 },
                { name: "Material-UI", level: 90 },
                { name: "Tailwind CSS", level: 90 },
            ],
        },
        {
            title: t("testing"),
            icon: <BugReportOutlined sx={{ fontSize: 40, color: "primary.main" }} />,
            skills: [
                { name: "JMeter", level: 85 },
                { name: "SonarQube", level: 80 },
                { name: "Postman", level: 90 },
                { name: "Selenium", level: 75 },
            ],
        }

    ]

    return (
        <Box
            id="skills"
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
                            {t("skillsTitle")}
                        </Typography>

                        <Grid container spacing={4}>
                            {skillCategories.map((category, index) => (
                                <Grid item xs={12} md={6} lg={4} key={category.title}>
                                    <Fade in={inView} timeout={1000 + index * 200}>
                                        <Paper
                                            elevation={3}
                                            sx={{
                                                p: 3,
                                                height: "100%",
                                                bgcolor: "background.default",
                                                border: "1px solid rgba(100, 255, 218, 0.1)",
                                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                                "&:hover": {
                                                    transform: "translateY(-5px)",
                                                    boxShadow: "0 10px 30px rgba(100, 255, 218, 0.1)",
                                                },
                                            }}
                                        >
                                            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                                                {category.icon}
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        ml: 2,
                                                        color: "text.primary",
                                                        fontWeight: "bold",
                                                    }}
                                                >
                                                    {category.title}
                                                </Typography>
                                            </Box>

                                            {category.skills.map((skill) => (
                                                <Box key={skill.name} sx={{ mb: 2 }}>
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            mb: 1,
                                                        }}
                                                    >
                                                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                                            {skill.name}
                                                        </Typography>
                                                        <Typography variant="body2" sx={{ color: "primary.main" }}>
                                                            {skill.level}%
                                                        </Typography>
                                                    </Box>
                                                    <LinearProgress
                                                        variant="determinate"
                                                        value={inView ? skill.level : 0}
                                                        sx={{
                                                            height: 6,
                                                            borderRadius: 3,
                                                            bgcolor: "rgba(100, 255, 218, 0.1)",
                                                            "& .MuiLinearProgress-bar": {
                                                                bgcolor: "primary.main",
                                                                borderRadius: 3,
                                                                transition: "transform 1.5s ease-in-out",
                                                            },
                                                        }}
                                                    />
                                                </Box>
                                            ))}
                                        </Paper>
                                    </Fade>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Fade>
            </Container>
        </Box>
    )
}

export default Skills
