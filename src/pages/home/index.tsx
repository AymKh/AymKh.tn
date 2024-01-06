import { Image, Link, Tooltip } from '@nextui-org/react'

export default function HomePage() {
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center gap-4'>
            <Tooltip content="@me 👋">
                <Image
                    width={200}
                    src="https://avatars.githubusercontent.com/u/49798649?v=4"
                    fallbackSrc="https://via.placeholder.com/200"
                    alt="Aymen Khedhriya avatar"
                />
            </Tooltip>
            <h1 className='text-3xl font-bold uppercase'>Aymen Khedhriya</h1>
            <ul className='text-center'>
                <li>I create and maintain <a href="saas.html">SAAS projects</a> of different scopes.</li>
                <li>I lead projects from planning to deployment.</li>
                <li>I provide consultancy services.</li>
            </ul>
            <div>
                <Link isBlock showAnchorIcon isExternal href="https://github.com/aymkh" color="foreground">
                    GitHub
                </Link>
                <Link isBlock showAnchorIcon isExternal href="https://www.linkedin.com/in/aymkh/" color="secondary">
                    LinkedIn
                </Link>
                <Link isBlock href="/contact" color="success">
                    Hire me!
                </Link>
            </div>
        </div>
    )
}
