'use client'

export default function Skills() {

    const skillsList = {
        'Frontend': [
            { 'skill': 'React', 'years': 2, 'layer': 'Frontend' }
            , { 'skill': 'JavaScript', 'years': 7, 'layer': 'Frontend' }
            , { 'skill': 'TypeScript', 'years': 2, 'layer': 'Frontend' }
            , { 'skill': 'NextJS', 'years': 0, 'layer': 'Frontend' }
            , { 'skill': 'HTML', 'years': 7, 'layer': 'Frontend' }
            , { 'skill': 'CSS', 'years': 7, 'layer': 'Frontend' }
            , { 'skill': 'LESS', 'years': 2, 'layer': 'Frontend' }
            , { 'skill': 'Angular', 'years': 3, 'layer': 'Frontend' }
            , { 'skill': 'GraphQL', 'years': 0, 'layer': 'Frontend' }
            , { 'skill': 'Apollo Client', 'years': 0, 'layer': 'Frontend' }
        ],
        'Backend': [
            { 'skill': 'C#', 'years': 3, 'layer': 'Backend' }
            , { 'skill': 'SQL / PostgreSQL', 'years': 3, 'layer': 'Backend' }
            , { 'skill': 'Java', 'years': 0, 'layer': 'Backend' }
            , { 'skill': 'GraphQL', 'years': 0, 'layer': 'Backend' }
            , { 'skill': 'Apollo Server', 'years': 0, 'layer': 'Backend' }
        ],
        'Cloud': [
            { 'skill': 'Amazon Cloudwatch', 'years': 1, 'layer': 'Cloud Services' }
            , { 'skill': 'AWS Lambda', 'years': 1, 'layer': 'Cloud Services' }
            , { 'skill': 'Amazon API Gateway', 'years': 1, 'layer': 'Cloud Services' }
            , { 'skill': 'AWS Amplify', 'years': 1, 'layer': 'Cloud Services' }
            , { 'skill': 'Amazon S3', 'years': 1, 'layer': 'Cloud Services' }
        ],
        'Versioning': [
            { 'skill': 'Jira', 'years': 9, 'layer': 'Versioning' }
            , { 'skill': 'GitLab', 'years': 2, 'layer': 'Versioning' }
            , { 'skill': 'GitHub', 'years': 4, 'layer': 'Versioning' }
            , { 'skill': 'Git', 'years': 7, 'layer': 'Versioning' }
        ]
    }

    function showYears(years: number) {
        if (years > 1) {
            return years + " Years"
        } else if (years === 1) {
            return years + " Year"
        } else {
            return " <1 Year"
        }
    }

    return (
        <div>
            <h2 className="text-4xl">Skills</h2>
            <div className="flex flex-col md:flex-row">
                {
                    Object.entries(skillsList).map((category, index) => {
                        return (<div className="basis-1/2" key={index}>
                            <span className="text-2xl">
                                {category[0] === "Cloud" ? 'Cloud Services' : category[0]}
                            </span>
                            <ul>
                                {
                                    category[1].map((el, ndx) => {
                                        return (
                                            <li key={ndx}>
                                                <span>{el.skill} - </span>
                                                <span>
                                                    { showYears(el.years) }
                                                </span>
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