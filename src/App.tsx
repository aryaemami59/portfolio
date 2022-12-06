import type { FC } from "react";
import { memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import ProjectsSection from "./components/ProjectsSection";
import ResumeSection from "./components/ResumeSection";
import TopSection from "./components/TopSection";

const HomeRoute = (
  <>
    <ProjectsSection />
    <ResumeSection />
  </>
);

const ContactRoute = <ContactSection />;

const AboutRoute = <AboutSection />;

const NotFoundRoute = <NotFound />;

const App: FC = () => (
  <div className="App">
    <Header />
    <div id="container">
      <BrowserRouter basename="/portfolio/">
        <TopSection />
        <Routes>
          <Route path="/">
            <Route
              index
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
            <Route
              path="*"
              element={NotFoundRoute}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    <Footer />
  </div>
);

export default memo(App);
