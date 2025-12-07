import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./Components/NavBar";
import AboutMe from "./Components/About/[id]/AboutMe";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-black py-10 px-5 flex flex-col  ">
        <NavBar/>
        {children}
        <section id="about">
    <AboutMe />
  </section>

  <section id="education">
    <Education />
  </section>

  <section id="projects">
    <Projects />
  </section>

  <section id="skills">
    <Skills />
  </section>

  <section id="contact">
    <Contact />
  </section>

         <Footer/>
      </body>
      
    </html>
  );
}
