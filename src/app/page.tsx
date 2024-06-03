"use client";

import { navItems } from "@/data";


import Grid from "@/components/about";
import Footer from "@/components/footer";

import Approach from "@/components/approach";
import Experience from "@/components/experience";
import RecentProjects from "@/components/projects";
import { FloatingNav } from "@/components/ui/floatingnav";
import { HeroHighlightDemo } from "@/components/hero";

const Home = () => {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 ">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <HeroHighlightDemo />
        <Grid />
        <RecentProjects />
        {/* <Clients /> */}
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
