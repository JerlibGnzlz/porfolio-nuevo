"use client"
import type React from "react"
import { createContext, useContext, useState, useEffect, useMemo } from "react"

type Language = "es" | "en"

interface LanguageContextType {
    language: Language
    toggleLanguage: () => void
    t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}

// Traducciones
const translations = {
    es: {
        // Navbar
        home: "Inicio",
        about: "Acerca",
        skills: "Habilidades",
        projects: "Proyectos",
        contact: "Contacto",
        downloadCV: "Descargar CV",

        // Hero
        hello: "Hola, mi nombre es",
        name: "Jerlib Gonzalez",
        role: "Desarrollador Full Stack & Quality Engineer",
        heroDescription:
            "👋 Apasionado por crear experiencias digitales accesibles, modernas y centradas en el usuario. Con un enfoque en la innovación, desarrollo soluciones escalables y de calidad que aportan valor real a cada proyecto. 🚀 React · Next.js · Node.js · TypeScript · MongoDB · JMeter · Cypress · Playwright",
        viewWork: "Ver mi trabajo",

        // About
        aboutTitle: "Acerca de mí",
        aboutText1:
            "Soy Desarrollador Full Stack y Quality Engineer (QE) con una sólida base técnica y un enfoque constante en la innovación. Tengo experiencia en el relevamiento y análisis de requerimientos, así como en la validación y aseguramiento de la calidad de software, traduciendo necesidades del negocio en soluciones efectivas, sostenibles y de alta calidad. Integra tecnologías emergentes para optimizar procesos, mejorar la experiencia del usuario y aportar valor funcional desde una perspectiva tanto técnica como, combinando desarrollo y prácticas de testing orientadas a la excelencia.",
        aboutText2:
            "Me destaco por mi proactividad, sociabilidad, colaboración y curiosidad constante, lo que me impulsa a mantenerme en aprendizaje continuo y a aportar valor tanto en el desarrollo como en la calidad de los proyectos.",
        aboutText3: "Aquí hay algunas tecnologías con las que he estado trabajando recientemente:",

        expandText: "...Expandir",
        collapseText: "...Contraer",

        // Skills
        skillsTitle: "Habilidades",
        frontend: "Frontend",
        backend: "Backend",
        database: "Base de Datos",
        cloudDevops: "Nube e implementación",
        tools: "Herramientas",
        design: "Diseño",

        // Projects
        projectsTitle: "Proyectos Destacados",
        ecommerceTitle: "E-Commerce",
        ecommerceDesc:
            "Ecommerce de ropa con categorías para todos. Permite registro (incluyendo Google), gestión de cuenta, carrito según stock y pagos con Mercado Pago.",
        taskAppTitle: "Videos-app",
        taskAppDesc: "Base de datos con PostgreSQL y Sequelize. API externa para mostrar datos. Backend con NodeJS/Express y frontend con React-Redux. UX/UI con CSS puro. Funciones: filtrado, búsqueda, formulario y creación de juegos.",
        weatherTitle: "Gimnasios",
        weatherDesc:
            "Sistema para que administradores de gimnasios controlen clientes, ingresos y egresos fácilmente.",
        socialTitle: "Connecta",
        socialDesc:
            "Es una aplicación web que permite la comunicación y colaboración en línea, a travésde herramientas para la mensajería instantánea y la creación de espacios detrabajo y canales para una comunicacion eficiente.",
        viewCode: "Código",
        viewDemo: "Ver Demo",

        sanJoseTitle: "Cooperativa San José",
        sanJoseDesc: "Aplicación de gestión de tareas con funcionalidades de arrastrar y soltar, colaboración en tiempo real y notificaciones push. Construida con Next.js y Firebase.",

        stackTecnologicoTitle: "Stack Tecnológico",

        // Contact
        contactTitle: "Contacto",
        contactSubtitle: "¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad!",
        contactInfo: "Información de Contacto",
        sendMessage: "Envíame un mensaje",
        nombre: "Ingresa tu nombre",
        email: " Ingresa tu Email",
        subject: " Ingresa el Asunto",
        message: " Ingresa el Mensaje",
        send: "Enviar Mensaje",
        sending: "Enviando...",
        successMessage: "¡Mensaje enviado exitosamente! Te responderé pronto.",
        errorMessage: "Error al enviar el mensaje. Por favor, intenta de nuevo.",
        phone: "Teléfono",
        location: "Ubicación",
        followSocial: "Sígueme en redes sociales",

        // Footer
        allRights: "Todos los derechos reservados",


        // Theme toggle
        switchToLight: "Cambiar a modo claro",
        switchToDark: "Cambiar a modo oscuro",
    },
    en: {
        // Navbar
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact",
        downloadCV: "Download CV",

        // Hero
        hello: "Hi, my name is",
        name: "Jerlib Gonzalez",
        role: "Full Stack Developer & Quality Engineer",
        heroDescription:
            "👋 Passionate about creating accessible, modern, and user-centric digital experiences. With a focus on innovation, I develop scalable, high-quality solutions that bring real value to each project. 🚀 React · Next.js · Node.js · TypeScript · MongoDB · JMeter · Cypress · Playwright",
        viewWork: "View my work",

        // About
        aboutTitle: "About me",
        aboutText1:
            "I am a Full Stack Developer and Quality Engineer (QE) with a solid technical foundation and a constant focus on innovation. I have experience in requirements collection and analysis, as well as software validation and quality assurance, translating business needs into effective, sustainable, and high-quality solutions. I integrate emerging technologies to optimize processes, improve user experience, and provide functional value from both a technical and avant-garde perspective, combining development and testing practices oriented towards excellence.",
        aboutText2:
            "I stand out for my proactivity, sociability, collaboration, and constant curiosity, which drives me to continuously learn and add value to both the development and quality of projects.",
        aboutText3: "Here are a few technologies I've been working with recently:",

        expandText: "...Expand",
        collapseText: "...Collapse",

        // Skills
        skillsTitle: "Skills",
        frontend: "Frontend",
        backend: "Backend",
        database: "Database",
        cloudDevops: "Cloud & Deployment",
        tools: "Tools",
        design: "Design",

        // Projects
        projectsTitle: "Featured Projects",
        ecommerceTitle: "E-Commerce",
        ecommerceDesc:
            "Clothing ecommerce with categories for everyone. Supports Google login, account management, stock-aware cart, and Mercado Pago payments.",
        taskAppTitle: "Videos-app",
        taskAppDesc:
            "PostgreSQL & Sequelize database. External API for data display. Backend with NodeJS/Express and frontend with React-Redux. Pure CSS UX/UI. Features: filtering, search, controlled form, and game creation.",
        weatherTitle: "Fitness Center",
        weatherDesc:
            "System for gym admins to easily manage clients, income, and expenses.",
        socialTitle: "Connecta",
        socialDesc:
            "It is a web application that enables online communication and collaboration through instant messaging tools and the creation of workspaces and channels for efficient communication.",
        viewCode: "Code",
        viewDemo: "View Demo",


        sanJoseTitle: "San José Cooperative",
        sanJoseDesc: "Task management app with drag-and-drop functionality, real-time collaboration, and push notifications. Built with Next.js and Firebase.",


        stackTecnologicoTitle: "Technology Stack",

        // Contact
        contactTitle: "Contact",
        contactSubtitle: "Have a project in mind? Let's talk and make it happen!",
        contactInfo: "Contact Information",
        sendMessage: "Send me a message",
        nombre: "Enter your name",
        email: "Enter your email",
        subject: "Enter the subject",
        message: "Enter the message",
        send: "Send Message",
        sending: "Sending...",
        successMessage: "Message sent successfully! I'll get back to you soon.",
        errorMessage: "Error sending message. Please try again.",
        phone: "Phone",
        location: "Location",
        followSocial: "Follow me on social media",

        // Footer
        allRights: "All rights reserved",


        // Theme toggle
        switchToLight: "Switch to light mode",
        switchToDark: "Switch to dark mode",
    },
}

interface LanguageProviderProps {
    children: React.ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<Language>("es");

    useEffect(() => {
        // Cargar idioma guardado del localStorage
        const savedLanguage = localStorage.getItem("language") as Language;
        if (savedLanguage) {
            setLanguage(savedLanguage);
        } else {
            // Detectar idioma del navegador
            const browserLanguage = navigator.language.startsWith("es") ? "es" : "en";
            setLanguage(browserLanguage);
        }
    }, []);

    const toggleLanguage = () => {
        const newLanguage = language === "es" ? "en" : "es";
        setLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
    };

    const t = (key: string): string => {
        return translations[language][key as keyof (typeof translations)[typeof language]] || key;
    };

    const contextValue = useMemo(
        () => ({ language, toggleLanguage, t }),
        [language]
    );

    return (
        <LanguageContext.Provider value={contextValue}>
            {children}
        </LanguageContext.Provider>
    );
};
