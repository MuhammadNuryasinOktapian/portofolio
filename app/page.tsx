import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import HeaderSection from "./section/headerSection";
import AboutSection from "./section/aboutSection";
import EducationSection from "./section/educationSection";
import SkillsSection from "./section/skillsSection";
import ExperiencesSection from "./section/experiencesSection";
import FooterSection from "./section/footerSection";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <section>
        <HeaderSection />
      </section>
      <section id="About">
        <AboutSection />
      </section>
      <div className="max-w-7xl p-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
        <section id="Education">
          <EducationSection />
        </section>
        <section id="Experiences">
          <ExperiencesSection />
        </section>
      </div>
      <div className="max-w-7xl p-4 mx-auto flex justify-center lg:items-center mb-36">
        <section id="Skills" className="w-full">
          <SkillsSection />
        </section>
      </div>
      <section>
        <FooterSection />
      </section>
    </>
  );
}
