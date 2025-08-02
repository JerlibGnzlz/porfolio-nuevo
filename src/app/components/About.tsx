import {
    Avatar,
    Box,
    Container,
    Fade,
    Typography,
    Collapse,
    Button,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import {
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiRedux,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiMui,
    SiAntdesign,
    SiSequelize,
    SiPrisma,
    SiPostgresql,
    SiMysql,
    SiSwagger,
    SiJira,
    SiLinux,
    SiKotlin,
    SiReactquery,
    SiScrumalliance,
    SiAngular,
} from "react-icons/si";
import { ReactNode, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useLanguage } from "../contexts/LanguageContext";

const techIconMap: { [key: string]: ReactNode } = {
    "JavaScript (ES6+)": <SiJavascript />,
    HTML: <SiHtml5 />,
    CSS: <SiCss3 />,
    TypeScript: <SiTypescript />,
    React: <SiReact />,
    Angular: <SiAngular />,
    "Next.js": <SiNextdotjs />,
    "Redux Toolkit": <SiRedux />,
    "React Context": <SiReact />,
    "Node.js": <SiNodedotjs />,
    Express: <SiExpress />,
    MongoDB: <SiMongodb />,
    MUI: <SiMui />,
    "Ant Design": <SiAntdesign />,
    Sequelize: <SiSequelize />,
    Prisma: <SiPrisma />,
    PostgreSQL: <SiPostgresql />,
    MySQL: <SiMysql />,
    Scrum: <SiScrumalliance />,
    Swagger: <SiSwagger />,
    Jira: <SiJira />,
    Kotlin: <SiKotlin />,
    "React Query": <SiReactquery />,
    Linux: <SiLinux />,
};

const About = () => {
    const [mounted, setMounted] = useState(false);
    const [showFullText, setShowFullText] = useState(false);

    const { ref, inView } = useInView({
        threshold: 0.3,
        triggerOnce: true,
        skip: !mounted,
    });

    const { t } = useLanguage();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div>Loading...</div>;
    }

    const truncateText = (text: string, maxLength: number) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + "…";
    };

    const toggleText = () => setShowFullText((prev) => !prev);

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
                                mb: 20,
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
                                {/* Truncated/Expanded text */}
                                <Collapse in={showFullText} timeout={600}>
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
                                </Collapse>

                                {!showFullText && (
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: "text.secondary",
                                            fontSize: "1.1rem",
                                            lineHeight: 1.8,
                                            mb: 3,
                                        }}
                                    >
                                        {truncateText(t("aboutText1"), 220)}
                                    </Typography>
                                )}

                                {!showFullText && (
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: "text.secondary",
                                            fontSize: "1.1rem",
                                            lineHeight: 1.8,
                                            mb: 3,
                                        }}
                                    >
                                        {truncateText(t("aboutText2"), 200)}
                                    </Typography>
                                )}

                                <Button
                                    onClick={toggleText}
                                    variant="text"
                                    sx={{
                                        color: "primary.main",
                                        fontWeight: "bold",
                                        textTransform: "none",
                                        mb: 3,
                                    }}
                                >
                                    {showFullText ? t("collapseText") : t("expandText")}
                                </Button>

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
                                    {Object.keys(techIconMap).map((tech) => (
                                        <Grid
                                            item
                                            xs={6}
                                            sm={4}
                                            md={3}
                                            key={tech}
                                            sx={{ display: "flex", alignItems: "center" }}
                                        >
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: "text.secondary",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 1,
                                                }}
                                            >
                                                {techIconMap[tech]} {tech}
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
    );
};

export default About;
