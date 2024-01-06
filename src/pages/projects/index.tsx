import { Helmet } from "react-helmet-async"
import SaasCard from "../../components/saas-card"
import { TProject } from "../../types/projects"

export default function ProjectsPage() {
    const projectsArray: TProject[] = [
        {
            project_name: "Teachica",
            project_description: "EdTech related platform to facilitate the parent-student-teacher relationship.",
            project_demo_link: "teachica.com"
        },
        {
            project_name: "Planifi",
            project_description: "A comprehensive SAAS solution designed to streamline and revolutionize the construction industry's workflow.",
            project_on_github: "https://github.com/planify-tn"
        },
        {
            project_name: "CMSY",
            project_description: "A simple and easy-to-use website builder",
            project_demo_link: "cmsy.tn",
            project_on_github: "https://github.com/cmsy-tn/"
        },
    ]
    return (
        <div className='w-full h-screen p-8 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4'>
            <Helmet>
                <title>Lead projects</title>
            </Helmet>
            {
                projectsArray.map((saas: TProject) => {
                    return <SaasCard data={saas} />
                })
            }
        </div>
    )
}
