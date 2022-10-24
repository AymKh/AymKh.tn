import React from 'react'
import HomeLayout from './HomeStyles'

// ICONS
import { FiGithub } from 'react-icons/fi'
import { CiLinkedin } from 'react-icons/ci'
import { HiOutlineMail } from 'react-icons/hi'

export default function Home() {
    return (
        <HomeLayout>
            <section>
                <header>
                    <h2>Yo 👋</h2>
                    <h1>I'm Aymen Khedhriya</h1>
                </header>
                <section id="links">
                    <a href="https://github.com/aymkh">
                        <FiGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/aymkh/">
                        <CiLinkedin />
                    </a>
                    <a href="mailto:aymen.khedhriya@gmail.com">
                        <HiOutlineMail />
                    </a>
                </section>
                <main>
                    <p>I am a Full Stack web developer who’s interested in DevOps.</p>
                    <p>I Love contributing to open source projects and I do maintain few ones myself.</p>
                    <p>I run a  YouTube channel, where I teach the basics of programming and DevOps in my native dialect.</p>
                </main>
            </section>
        </HomeLayout>
    )
}
