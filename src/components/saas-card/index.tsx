import { Card, CardBody, CardFooter, CardHeader, Divider, Link } from '@nextui-org/react'
import { TProject } from '../../types/projects'

export default function SaasCard({ data }: { data: TProject }) {
    return (
        <Card className="w-full h-fit max-h-[300px]">
            <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                    <p className="text-md">{data.project_name}</p>
                    <a className="text-small text-default-500" href={'https://' + data.project_demo_link}>{data.project_demo_link ?? 'no link available'}</a>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <p>{data.project_description}</p>
            </CardBody>
            {
                data.project_on_github &&
                <>
                    <Divider />
                    <CardFooter>
                        <Link
                            isExternal
                            showAnchorIcon
                            href={data.project_on_github}
                        >
                            Visit source code on GitHub.
                        </Link>
                    </CardFooter>
                </>
            }
        </Card>
    )
}
