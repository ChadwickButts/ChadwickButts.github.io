"use client"

import Intro from "./intro"
import Projects from "./projects"
import Skills from "./skills"

export default function PortfolioHome() {
    return (
        <div className="content">
            <main className="flex flex-col">
                <div>
                    <section className="introduction">
                        <Intro />
                    </section>
                    <br />
                    <section className="max-w-5xl experience">
                        <Skills />
                    </section>
                </div>
                <div>
                    <section className="projects">
                        <Projects />
                    </section>
                </div>
            </main>
        </div>
    )
}