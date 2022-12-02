import type { FC } from "react";
import { memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProjectsSection from "./components/ProjectsSection";
import ResumeSection from "./components/ResumeSection";
import TopSection from "./components/TopSection";

const HomeRoute = (
  <>
    <TopSection />
    <ProjectsSection />
    <ResumeSection />
  </>
);

const ContactRoute = <ContactSection />;

const AboutRoute = <AboutSection />;

const App: FC = () => (
  <div className="App">
    <Header />
    <div id="container">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={HomeRoute}
          />
          <Route
            path="/contact"
            element={ContactRoute}
          />
          <Route
            path="/about"
            element={AboutRoute}
          />
        </Routes>
      </BrowserRouter>
    </div>
    <Footer />
  </div>
);

export default memo(App);
