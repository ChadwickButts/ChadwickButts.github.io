"use client"

import Intro from "./intro"
import Projects from "./projects"
import Skills from "./skills"

export default function PortfolioHome() {
    return (
        <div className="content">
            <main className="flex flex-row">
                <div className="basis-2/4">
                    <section className="introduction">
                        <Intro />
                    </section>
                    <br />
                    <section className="experience">
                        <Skills />
                    </section>
                </div>
                <div className="basis-2/4">
                    <section className="projects">
                        <Projects />
                    </section>
                </div>
            </main>
        </div>
    )
}