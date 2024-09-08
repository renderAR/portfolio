import "./index.css";
import React, { useRef, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { PaletteMode, createTheme, Container } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import AnimatedSection from "../animations/AnimatedSection";
import Header from "./Header";
import Home from "./Home";
import Education from "./Education";
import ResumeDownloadButton from "../components/ResumeDownloadButton";
import NavigateHomeButton from "../components/NavigateHomeButton";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showNavUpBtn, setShowNavUpBtn] = useState(false);
  const darkTheme: PaletteMode = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: darkTheme,
    },
    typography: {
      fontFamily: "monospace",
    },
    breakpoints: {
      values: {
        xs: 400,
        sm: 700,
        md: 960,
        lg: 99999999,
        xl: 99999999,
      },
    },
  });
  const handleChange = () => {
    setDarkMode((prevState) => !prevState);
  };
  const scrollToSectionById = (id: string) => {
    const section = sections.find(section => section.id === id);
    if (!section) return;

    sections.find(section => section.id === id)?.ref?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const homeRef = useRef<HTMLDivElement>(null);
  const educationRef  = useRef<HTMLDivElement>(null);
  const workExRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const sections = [
    { component: <div ref={homeRef}><Home /> </div>, id: "home", ref: homeRef},
    { component: <div ref={educationRef}><Education /></div>, id: "education", ref: educationRef },
    { component: <div ref={workExRef}><WorkExperience /></div>, id: "workex", ref: workExRef },
    { component: <div ref={projectsRef}><Projects /></div>, id: "projects", ref: projectsRef },
  ];

  window.addEventListener("scroll", () => {
    if (window.scrollY === 0) setShowNavUpBtn(false);
    if (!showNavUpBtn && window.scrollY !== 0) setShowNavUpBtn(true);
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Header dark={darkMode} handleChange={handleChange} scrollToSectionById={scrollToSectionById} />
        <Container disableGutters sx={{maxWidth: "80%",}}>
          {showNavUpBtn ? <NavigateHomeButton /> : null}
          <ResumeDownloadButton  />
          {sections.map((el) => (
            <AnimatedSection key={el.id}>
              <section id={el.id}>{el.component}</section>
            </AnimatedSection>
          ))}
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
