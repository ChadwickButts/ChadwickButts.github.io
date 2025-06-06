"use client"

import Intro from "./intro"
import Skills from "./skills"

export default function PortfolioHome() {
    return (
        <div className="content">
            <main>
                <section className="introduction">
                    <Intro/>
                </section>
                <br/>
                <section className="experience">
                    <Skills/>
                </section>
                <section className="projects">
                    
                </section>
            </main>
        </div>
    )
}