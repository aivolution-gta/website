import { useState } from "react";

import { Reveal } from "@/components/reveal";
import Accordion from "@/components/accordion";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import Image from "next/image";
import MuiModal from "@/components/modal";

import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

export default function Home() {
    const teamData = [
        {
            name: "Ashwath",
            bio: "Hello, I'm Ashwath Jagadeesh, and I proudly serve as the President of AiVolution, steering the company through the dynamic realm of artificial intelligence with a visionary approach. Off-duty, I find my joy in the fast-paced worlds of badminton, volleyball, and basketball, relishing the spirit of teamwork and competition. I also harbor a deep passion for becoming an anesthesiologist.",
            links: { linkedin: "", gmail: "", instagram: "ashwath_j8" },
        },
        {
            name: "Devang",
            bio: "Hey, my name is Devang, and I am one of the presidents and founders of AiVolution. I am an inquisitive person who is always interested in learning more, which I believe is reflected in my hobbies and passions. In the future, I hope to become an astrophysicist and pursue a research career. Some of my hobbies are playing music, playing video games with my friends, and reading manhwa.",
            links: {
                linkedin: "https://www.linkedin.com/in/devang-kapahi",
                gmail: "",
                instagram: "_bronbo",
            },
        },
        {
            name: "Nirupa",
            bio: "Welcome to AiVolution’s website! My name is Nirupa and I am a vice-president at AiVolution. As VP, I help lead and manage the organization, constantly fostering growth and excellence. In the future, I plan on pursuing the medical field, specifically pharmaceutical chem., with hopes of becoming a pharmaceutical chemist. I am also passionate about volleyball, and enjoy playing competitively.",
            links: { linkedin: "", gmail: "", instagram: "" },
        },
        {
            name: "Taha",
            bio: "A passionate 'chef', an avid traveller, a soccer fan, and a  'tech-savvy guy' is what I'd call myself. I enjoy seeking knowledge and using technology to my advantage. Speaking of technology, I have countless hours to my name in photo and video editing; so I could call myself a Photoshop king. My latest products have been a satirical horror short film and a Q&A for Eid 2023.",
            links: {
                linkedin: "",
                gmail: "tahagh905@gmail.com",
                instagram: "talisman._.tg",
            },
        },
        {
            name: "Sohum",
            bio: "As the tech head of AiVolution, I have always been interested in creating and developing applications. Recently, I've gained a passion for web development, and creating websites is one of my favourite pastimes. I have been programming for over 5 years now, and I don't plan to give it up because of how rewarding it is. Aside from that, my interests include mathematics, playing volleyball, and playing chess.",
            links: {
                linkedin: "https://www.linkedin.com/in/sohum-padhye/",
                gmail: "sohum.padhye@gmail.com",
                instagram: "sohum.padhye",
            },
        },
        {
            name: "Aryan",
            bio: "Eager to embark on a journey of professional growth, I'm a high school student with a desire to gain knowledge in Programming and Computer Science. Through a combination of academic excellence, extracurricular involvement, and a thirst for knowledge, I am dedicated to improving my skills and gaining valuable experiences.",
            links: {
                linkedin: "https://www.linkedin.com/in/aryan-vasudevan",
                gmail: "vasudevan.aryan@gmail.com",
                instagram: "aryaan_v",
            },
        },
        {
            name: "Praney",
            bio: "Hi, my name is Praney. I'm a Grade 10 High School student and I'm the Head of Design at AiVolution. I enjoy most things art and technology related for as long as I remember. My goal at AiVolution is to help the organization and its own goals with what I can offer.",
            links: {
                linkedin: "",
                gmail: "praneyshivam@gmail.com",
                instagram: "praney0",
            },
        },
        {
            name: "Farhan",
            bio: "My name is Farhan Farhat and I am a executive of the marketing team for Aivolution. I'm a IB Grade 10 student attending Glenforest Secondary School. I'm an outgoing and extroverted person. I love learning more and more about the world around us and hope to become a neurosurgeon and persue a positive life. My hobbies including playing soccer, paying video games and cooking.",
            links: {
                linkedin:
                    "https://www.linkedin.com/in/farhan-farhat-7490662b8/",
                gmail: "",
                instagram: "farhan_ferret",
            },
        },
    ];

    const partners = [
        {
            name: "name",
            link: "link",
            bio: "bio",
            img: "img",
        },
    ];

    const faq = [
        {
            question: "aaaaaaaaaaaaaaaaaa",
            answer: "a1",
        },
        {
            question: "q2",
            answer: "a2",
        },
        {
            question: "q3",
            answer: "a3",
        },
        {
            question: "q4",
            answer: "a4",
        },
        {
            question: "q5",
            answer: "a5",
        },
        {
            question: "q6",
            answer: "a6",
        },
    ];

    return (
        <div className="w-screen">
            {/* Hero Section */}
            <div className="w-full">
                <Reveal>
                    <h1
                        className="
                            block text-left my-20 ml-40 mr-32 text-[6em]
                            xs:my-10 xs:mx-10 xs:text-[2em]
                        "
                    >
                        A{" "}
                        <span className="inline-block text-mid-purple">
                            <Typewriter
                                options={{
                                    strings: [
                                        "passionate",
                                        "student-led",
                                        "driven",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>{" "}
                        <br />
                        organization focused around informing youth about our
                        technology driven future.
                    </h1>
                </Reveal>
            </div>

            <div className="w-full my-20 xs:my-10">
                <Reveal>
                    <div className="w-full flex flex-row justify-center place-items center text-white">
                        <div className="w-1/2 bg-dark-purple text-center rounded-lg py-8 flex flex-col h-56 justify-evenly gap-4 xs:hidden sm:hidden">
                            <h3 className="">
                                Register to claim a spot in our next event!
                            </h3>
                            <div className="w-full flex justify-center">
                                <Link
                                    href="https://fm.addxt.com/form/?vf=1FAIpQLScSKD0YIgnXS-_FB12nXEOKRw0Cw7C9wKWDkUJB75rrlELpIA"
                                    target="_blank"
                                    className="w-1/2"
                                >
                                    <button className="w-full bg-light-purple leading-loose rounded-md text-white transition-all duration-1000 ease-in-out hover:bg-mid-purple hover:tracking-widest text-2xl">
                                        REGISTER NOW
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="md:hidden lg:hidden xl:hidden 2xl:hidden w-5/6 bg-dark-purple text-center rounded-lg py-8 px-4 flex flex-col justify-evenly gap-4">
                            <h3 className="text-[1.2em]">
                                Register to claim a spot in our next event!
                            </h3>
                            <div className="w-full flex justify-center">
                                <Link
                                    href="https://fm.addxt.com/form/?vf=1FAIpQLScSKD0YIgnXS-_FB12nXEOKRw0Cw7C9wKWDkUJB75rrlELpIA"
                                    target="_blank"
                                    className="w-5/6"
                                >
                                    <button className="w-full xs:text-[1em] bg-light-purple leading-loose rounded-md text-white transition-all duration-1000 ease-in-out hover:bg-mid-purple hover:tracking-widest text-2xl">
                                        REGISTER NOW
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>

            <div>
                <Reveal>
                    <div className="flex text-justify justify-center place-center leading-loose">
                        <h3 className="w-2/3 xs:text-[0.9em] xs:w-5/6">
                            At AiVolution, we are passionate about the infinite
                            possibilities that technology offers and are
                            dedicated to fostering a community that shares this
                            enthusiasm. We are an organization whose mission is
                            to be at the forefront of the ever-evolving world of
                            technology by bringing people together through a
                            series of exceptional events and conferences.
                        </h3>
                    </div>
                </Reveal>
            </div>

            {/* Team */}
            <div className="mt-20">
                <div className="w-full ">
                    <Reveal>
                        <div className="flex justify-center place-center my-8">
                            <h1 className="xs:text-[2.5em]">Meet Our Team</h1>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div className="grid mx-auto w-2/3  grid-cols-2 gap-8">
                            {teamData.map((person, i) => (
                                <div
                                    className="col-span-1 border-2 border-dark-purple rounded-md select-none transition-all ease-in-out hover:bg-dark-purple duration-300 hover:cursor-pointer hover:scale-105"
                                    key={i}
                                >
                                    <MuiModal
                                        name={person.name}
                                        bio={person.bio}
                                        links={person.links}
                                    />
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* <h1>Sponsors</h1>
                <div className=""></div> */}
            {/* </div> */}

            {/* Sponsor Message */}
            <div className="flex justify-center">
                <div
                    className="
                        my-20 xs:my-10 text-center xs:p-4 p-8 bg-dark-purple w-1/3 rounded-lg text-white 
                        xs:w-5/6"
                >
                    <p className="xs:text-[1.2em]">
                        Interested in supporting our mission? Click{" "}
                        <Link href="/contact">here</Link>!
                    </p>
                </div>
            </div>

            {/* FAQ */}
            {/* <div className="flex flex-col place-items-center">
                <h1>FAQ</h1>
                <div className="grid grid-cols-2 gap-4">
                    {faq.map((item, key) =>
                        <div className="w-full" key={key}><FAQItem question={item["question"]} answer={item["answer"]} /></div>
                    )}
                </div>
            </div> */}
        </div>
    );
}

interface FAQProps {
    question: string;
    answer: string;
}

function FAQItem({ question, answer }: FAQProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full">
            <div
                className="border-b-2 flex justify-between gap-4 hover:cursor-pointer"
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                <h3>{question}</h3>
                <h3 className="flex flex-col justify-center">
                    {isOpen ? <CiCircleMinus /> : <CiCirclePlus />}
                </h3>
            </div>
            <div className={`${!isOpen ? "hidden" : "block"}`}>
                <p>{answer}</p>
            </div>
        </div>
    );
}
