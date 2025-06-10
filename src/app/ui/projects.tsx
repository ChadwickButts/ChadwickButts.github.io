import Image from "next/image"

export default function Projects() {

    const projectInfo = [
        { 'name': 'Fitness Tracker (In Progress)', 'link': 'https://hyperstrength-fitness-tracker-six.vercel.app/', 'img': '/hyperstrength-poster.png' },
    ]

    return (
        <div>
            <h2 className="text-4xl">Projects</h2>
            <div className="flex gap-4 items-center flex-col sm:flex-row">
                {
                    projectInfo.map((project, index) => {
                        return <div key={index}>
                            <div>
                                <a className="font-medium"
                                    href={project.link}
                                    target="_blank" rel="noopener noreferrer" >
                                    <img src={project.img} width={400} height={200} />
                                    {project.name}
                                </a>
                            </div>
                        </div>
                    })
                }
            </div>
            <br />
            <div >
                <h3 className="text-2xl">Interesting Links: </h3>
                <ul>
                    <li>
                        <a className="hover:underline" target="_blank" href="https://github.com/ChadwickButts" >GitHub</a>
                    </li>
                    <li>
                        <a className="hover:underline" target="_blank" href="https://codepen.io/ccbutts529" >Codepen</a>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}