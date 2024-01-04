import { Reveal } from "@/components/reveal";
import Accordion from "@/components/accordion";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import Image from "next/image";
import MuiModal from "@/components/modal";

export default function Home () {

    const teamData = [
        {
            role: "Presidents",
            members: [{name: "Ashwath", bio: ""}, {name: "Devang", bio: "Hey, my name is Devang, and I am one of the presidents and founders of AiVolution. I am an inquisitive person who is always interested in learning more, which I believe is reflected in my hobbies and passions. In the future, I hope to become an astrophysicist and pursue a research career. Some of my hobbies are playing music, playing video games with my friends, and reading manhwa."}]
        },
        {
            role: "Vice-Presidents",
            members: [{name: "Nirupa", bio: ""}, {name: "Taha", bio: ""}]
        },
        {
            role: "Secretaries",
            members: [{name: "Arush", bio: ""}, {name: "Sohun", bio: ""}]
        },
        {
            role: "Developers",
            members: [{name: "Sohum", bio: "As the tech head of AiVolution, I have always been interested in creating and developing applications. Recently, I've gained a passion for web development, and creating websites is one of my favourite pastimes. I have been programming for over 5 years now, and I don't plan to give it up because of how rewarding it is. Aside from that, my interests include mathematics, playing volleyball, and playing chess."}, {name: "Aryan", bio: "Eager to embark on a journey of professional growth, I'm a high school student with a desire to gain knowledge in Programming and Computer Science. Through a combination of academic excellence, extracurricular involvement, and a thirst for knowledge, I am dedicated to improving my skills and gaining valuable experiences."}]
        },
        {
            role: "Design",
            members: [{name: "Praney", bio: ""}, {name: "Salma", bio: ""}, {name: "Sonali", bio: "Hello, I'm Sonali, a design member at AiVolution. I've put together some of our Instagram posts using tools like Canva, Picsart, and Photoshop, focusing on aesthetics and visual texture for both visual appeal and audience enjoyment. Beyond design, my passion for storywriting adds a personal touch to my creations—a unique blend of visual and storytelling elements (:"}]
        },
        {
            role: "Marketing Members",
            members: [{name: "Akshitha", bio: ""}, {name: "Adam", bio: ""}, {name: "Arjun", bio: ""}, {name: "Jerry", bio: ""}]
        },
        {
            role: "Outreach Members",
            members: [{name: "Mahad", bio: "I am the Executive of Outreach at AiVolution and a Grade 10 student attending the International Baccalaureate Program at Erindale Secondary School. I am an aspiring student who is passionate about Robotics, Engineering, and Technology. I am pursuing the field of software development and engineering while achieving a dual diploma. Feel free to reach out to me!"}, {name: "Chris", bio: ""}, {name: "Mustafa", bio: ""}, {name: "Ryan", bio: "Hi, my name is Ryan. I am currently in high school and find the evolution of AI exciting and fascinating. An interest of mine is computer science and anything related to it. However, some other interests of mine that are not in the realm of computer science are movies and basketball. Overall, I find all of these topics very unique and compelling."}]
        },
        {
            role: "Finance Members",
            members: [{name: "Anuhya", bio: ""}]
        },
    ]

    return (
        <div className="w-full">
            {/* Hero Section */}
            <div className="w-full mt-60 mb-40">
                <Reveal>
                <h1 className="block text-left my-20 ml-40 mr-32 text-[6em]">
                    A <span className="inline-block text-mid-purple"><Typewriter options={{strings: ['passionate', 'student-led', 'driven'], autoStart: true, loop: true, delay: 65}}/></span> organization<br /> focused around informing people about our AI-driven future.
                </h1>
                </Reveal>
            </div>
            <div className="mt-60 mb-40">
                <Reveal>
                <h3 className="flex text-center justify-center place-center mx-80 leading-loose">
                    At AiVolution, we are passionate about the infinite possibilities that technology offers and are dedicated to fostering a community that shares this enthusiasm. We are an organization whose mission is to be at the forefront of the ever-evolving world of technology by bringing people together through a series of exceptional events and conferences.
                </h3>
                </Reveal>
            </div>
            

            {/* Team */}
            <div className="mt-20">
                <div className="w-full">
                    <Reveal>
                        <h1 className="flex justify-center place-center opacity-100 my-8">Meet Our Team</h1>
                    </Reveal>

                    <Reveal>
                        <div className="grid grid-cols-2 gap-4 mx-10">
                            {teamData.map((data, index) => {
                                return <Accordion key={index} title={data.role} description={(<div className={`grid grid-cols-2 text-center gap-4`}>{data.members.map((person, i) => (<div className="col-span-1 border-2 border-dark-purple rounded-md select-none transition-all ease-in-out hover:bg-dark-purple duration-300 hover:cursor-pointer hover:scale-105" key={i}><MuiModal name={person.name} bio={person.bio} pfp={`/team-pfp/${person.name}.jpg`} /></div>))}</div>)}/>;
                            })}
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* Sponsor Message */}
            <div className="flex justify-center">
                <div className="mt-20 text-center p-8 bg-dark-purple w-1/3 rounded-lg text-white">
                    <p>Want to sponsor us? Click <Link href="/contact">here</Link>!</p>
                </div>
            </div>
        </div>
    );
}