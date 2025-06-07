'use client'

export default function Skills() {

    const skillsList = {
        'Frontend': [
            { 'skill': 'React', 'years': 2, 'layer': 'Frontend' }
            , { 'skill': 'JavaScript', 'years': 7, 'layer': 'Frontend' }
            , { 'skill': 'TypeScript', 'years': 2, 'layer': 'Frontend' }
            , { 'skill': 'NextJS', 'years': ' <1', 'layer': 'Frontend' }
            , { 'skill': 'HTML', 'years': 7, 'layer': 'Frontend' }
            , { 'skill': 'CSS', 'years': 7, 'layer': 'Frontend' }
            , { 'skill': 'LESS', 'years': 2, 'layer': 'Frontend' }
            , { 'skill': 'Angular', 'years': 3, 'layer': 'Frontend' }
            , { 'skill': 'GraphQL', 'years': ' <1', 'layer': 'Frontend' }
            , { 'skill': 'Apollo Client', 'years': ' <1', 'layer': 'Frontend' }
        ],
        'Backend': [
            { 'skill': 'C#', 'years': 3, 'layer': 'Backend' }
            , { 'skill': 'SQL / PostgreSQL', 'years': 3, 'layer': 'Backend' }
            , { 'skill': 'Java', 'years': ' <1', 'layer': 'Backend' }
            , { 'skill': 'GraphQL', 'years': ' <1', 'layer': 'Backend' }
            , { 'skill': 'Apollo Server', 'years': ' <1', 'layer': 'Backend' }
        ],
        'Cloud': [
            { 'skill': 'Cloudwatch', 'years': 1, 'layer': 'Cloud Services' }
            , { 'skill': 'Lambda', 'years': 1, 'layer': 'Cloud Services' }
            , { 'skill': 'API Gateway', 'years': 1, 'layer': 'Cloud Services' }
            , { 'skill': 'Amplify', 'years': 1, 'layer': 'Cloud Services' }
            , { 'skill': 'S3', 'years': 1, 'layer': 'Cloud Services' }
        ],
        'Versioning': [
            { 'skill': 'Jira', 'years': 9, 'layer': 'Versioning' }
            , { 'skill': 'GitLab', 'years': 2, 'layer': 'Versioning' }
            , { 'skill': 'GitHub', 'years': 4, 'layer': 'Versioning' }
            , { 'skill': 'Git', 'years': 7, 'layer': 'Versioning' }
        ]
    }

    return (
        <div>
            <h2 className="text-4xl">Skills</h2>
            <div className="flex flex-col md:flex-row">
            {
                Object.entries(skillsList).map((category, index) => {
                    return (<div className="basis-1/2" key={index}>
                        <span className="text-2xl">
                            {category[0]}
                        </span>
                        <ul>
                            {
                                category[1].map((el, ndx) => {
                                    return (
                                        <li key={ndx}>
                                            <span>{el.skill} - </span>
                                            <span>{el.years} Years</span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <br />
                    </div>
                    )
                })
            }
            </div>
        </div>
    )
}