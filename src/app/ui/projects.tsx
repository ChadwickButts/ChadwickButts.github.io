export default function Projects() {

    const projectInfo = [
        { 'name': 'Fitness Tracker', 'link': '', 'img': '' },
        { 'name': 'Weather App', 'link': '', 'img': '' }
    ]

    return (
        <div>
            <h2 className="text-4xl">Projects</h2>
            {
                projectInfo.map((project, index) => {
                    return <>
                        <article key={index}>
                            <div>
                                <img src="https://placehold.co/400x200" />
                                <span>
                                    {project.name}
                                </span>
                            </div>
                            <div>
                                <a href="#">Image Link</a>
                            </div>
                        </article>
                    </>
                })
            }
        </div>
    )
}