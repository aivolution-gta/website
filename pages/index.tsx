import { Reveal } from "@/components/reveal";
import Accordion from "@/components/accordion";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import Image from "next/image";
import MuiModal from "@/components/modal";
import { GoKebabHorizontal } from "react-icons/go";

import SteamIc from "../public/partners/steam-ic.png";

export default function Home () {

    const teamData = [
        {
            role: "Presidents",
            members: [{name: "Ashwath", bio: "Hello, I'm Ashwath Jagadeesh, and I proudly serve as the President of AiVolution, steering the company through the dynamic realm of artificial intelligence with a visionary approach. Off-duty, I find my joy in the fast-paced worlds of badminton, volleyball, and basketball, relishing the spirit of teamwork and competition. I also harbor a deep passion for becoming an anesthesiologist.", links: {"linkedin": "", "gmail": "", "instagram": "ashwath_j8"}}, {name: "Devang", bio: "Hey, my name is Devang, and I am one of the presidents and founders of AiVolution. I am an inquisitive person who is always interested in learning more, which I believe is reflected in my hobbies and passions. In the future, I hope to become an astrophysicist and pursue a research career. Some of my hobbies are playing music, playing video games with my friends, and reading manhwa.", links: {"linkedin": "https://www.linkedin.com/in/devang-kapahi", "gmail": "", "instagram": "_bronbo"}}]
        },
        {
            role: "Vice-Presidents",
            members: [{name: "Nirupa", bio: "Welcome to AiVolution’s website! My name is Nirupa and I am a vice-president at AiVolution. As VP, I help lead and manage the organization, constantly fostering growth and excellence. In the future, I plan on pursuing the medical field, specifically pharmaceutical chem., with hopes of becoming a pharmaceutical chemist. I am also passionate about volleyball, and enjoy playing competitively.", links: {"linkedin": "", "gmail": "", "instagram": ""}}, {name: "Taha", bio: "A passionate 'chef', an avid traveller, a soccer fan, and a  'tech-savvy guy' is what I'd call myself. I enjoy seeking knowledge and using technology to my advantage. Speaking of technology, I have countless hours to my name in photo and video editing; so I could call myself a Photoshop king. My latest products have been a satirical horror short film and a Q&A for Eid 2023.", links: {"linkedin": "", "gmail": "tahagh905@gmail.com", "instagram": "talisman._.tg"}}]
        },
        {
            role: "Developers",
            members: [{name: "Sohum", bio: "As the tech head of AiVolution, I have always been interested in creating and developing applications. Recently, I've gained a passion for web development, and creating websites is one of my favourite pastimes. I have been programming for over 5 years now, and I don't plan to give it up because of how rewarding it is. Aside from that, my interests include mathematics, playing volleyball, and playing chess.", links: {"linkedin": "https://www.linkedin.com/in/sohum-padhye/", "gmail": "sohum.padhye@gmail.com", "instagram": "sohum.padhye"}}, {name: "Aryan", bio: "Eager to embark on a journey of professional growth, I'm a high school student with a desire to gain knowledge in Programming and Computer Science. Through a combination of academic excellence, extracurricular involvement, and a thirst for knowledge, I am dedicated to improving my skills and gaining valuable experiences.", links: {"linkedin": "https://www.linkedin.com/in/aryan-vasudevan", "gmail": "vasudevan.aryan@gmail.com", "instagram": "aryaan_v"}}, {name: "Toby", bio: "Hey, I'm Toby, a Grade 10 student and a Tech Team member at AiVolution. I am passionate about coding and making projects such as websites + Minecraft plugins and I also enjoy robotics. I am dedicated to using my skills and knowledge to improve and benefit AiVolution to the best of my ability.", links: {"linkedin": "", "gmail": "", "instagram": "tobyz0629"}}]
        },
        {
            role: "Design",
            members: [{name: "Praney", bio: "Hi, my name is Praney. I'm a Grade 10 High School student and I'm the Head of Design at AiVolution. I enjoy most things art and technology related for as long as I remember. My goal at AiVolution is to help the organization and its own goals with what I can offer.", links: {"linkedin": "", "gmail": "praneyshivam@gmail.com", "instagram": "praney0"}}, {name: "Salma", bio: "Sophomore with a passion for art, showcasing creativity in every project. Adaptable and diligent, I approach my work with enthusiasm and dedication.", links: {"linkedin": "", "gmail": "", "instagram": ""}}, {name: "Asmetha", bio: "I'm Asmetha Thanarajh, a member of the Graphic Design team at Aivolution. My professional journey centers on graphic design, where I bring creativity to the forefront. Outside work, I enjoy Bharatanatyam and painting.", links: {"linkedin": "", "gmail": "", "instagram": "thaamaraii_"}}]
        },
        {
            role: "Marketing and Outreach",
            members: [{name: "Farhan", bio: "My name is Farhan Farhat and I am a executive of the outreach and marketing team for Aivolution. I'm a IB Grade 10 student attending Glenforest Secondary School. I'm an outgoing and extroverted person. I love learning more and more about the world around us and hope to become a neurosurgeon and persue a positive life. My hobbies including playing soccer, paying video games and cooking.", links: {"linkedin": "https://www.linkedin.com/in/farhan-farhat-7490662b8/", "gmail": "", "instagram": "farhan_ferret"}}, {name: "Arjun", bio: "Hello, I am Arjun Garg. I am a general member at Aivolution and I love working in promotion. I love business and am intrigued by AI. I can’t wait to see where we can take Aivolution!", links: {"linkedin": "", "gmail": "", "instagram": ""}}, {name: "Jerry", bio: "Hey, I'm Jerry Huang, a Grade 10 pre-IB student at STFX and a proud marketing member at AIVolution. Passionate about creating change and educating others on AI's future, I bring coding skills in Python and Java to the table. Outside AIVolution, you'll find me enjoying basketball and badminton.", links: {"linkedin": "", "gmail": "", "instagram": "xxjxrry_"}}, {name: "Chris", bio: "My name is Chris, I'm currently a student at GlenForest Secondary School and I work as an outreach general member for Aivolution. I enjoy playing sports and I am passionate about artificial intelligence and how it can improve our lives.", links: {"linkedin": "", "gmail": "", "instagram": "yk_chris.08"}}, {name: "Mustfa", bio: "Hi! I am a high school student who is passionate about AI and other areas of STEM, such as engineering. I have participated in several coding and math competitions and achieved high placements in a few. When I grow up, I want to pursue a career in IT. Besides academics, I enjoy playing basketball and video games. My goal in AiVolution is to help the youth with open opportunities regarding STEM. ", links: {"linkedin": "", "gmail": "mustfa204695@gmail.com", "instagram": "mustfaaa_._._"}}, {name: "Ryan", bio: "Hi, my name is Ryan. I am currently in high school and find the evolution of AI exciting and fascinating. An interest of mine is computer science and anything related to it. However, some other interests of mine that are not in the realm of computer science are movies and basketball. Overall, I find all of these topics very unique and compelling.", links: {"linkedin": "https://www.linkedin.com/in/ryan-huo-37222a2a1/", "gmail": "", "instagram": ""}}, {name: "Angela", bio: "Hello!  My name is Angela, a student at St. Francis Xavier Secondary School and an outreach general member for Aivolution. I enjoy art, music and dance. I am intrigued by the medical field but would also like to explore different ways for AI to make a positive impact on the world.", links: {"linkedin": "", "gmail": "", "instagram": ""}}]
        },
    ]

    const partners = [
        {
            name: "Steam Innovation Challenge", 
            link: "https://steaminnovationchallenge.org/", 
            bio: "The STEAM Innovation Challenge is an Ontario-wide competition that allows youth the opportunity to innovate and solve real-world problems in the fields of astronomy,  engineering, or life sciences. Participants present their innovation at STEAM ICAC (held in Toronto) where they can network with industry professionals. Those who rank at STEAM ICAC earn the STEAM IC Trophy, a cash prize, and university recognition.", 
            img: SteamIc
        }
    ];

    return (
        <div className="w-screen">
            {/* Hero Section */}
            <div className="w-full">
                <Reveal>
                    <h1 
                        className="
                            block text-left my-20 ml-40 mr-32 text-[6em]
                            xs:my-10 xs:mx-10 xs:text-[2.5em]
                        "
                    >
                        A <span className="inline-block text-mid-purple"><Typewriter options={{strings: ['passionate', 'student-led', 'driven'], autoStart: true, loop: true}}/></span> <br />organization focused around informing youth about our technology driven future.
                    </h1>
                </Reveal>
            </div>

            <div className="w-full my-20">
                <Reveal>
                    <div className="w-full flex flex-row justify-center place-items center text-white">
                        <div className="w-1/2 bg-dark-purple text-center rounded-lg py-8 flex flex-col h-56 justify-evenly gap-4 xs:hidden sm:hidden">
                            <h3 className="">Register to claim a spot in our next event!</h3>
                            <div className="w-full flex justify-center">
                                <Link href="/register" className="w-1/2"><button className="w-full bg-light-purple leading-loose rounded-md text-white transition-all duration-1000 ease-in-out hover:bg-mid-purple hover:tracking-widest text-2xl">REGISTER NOW</button></Link>
                            </div>
                        </div>
                        <div className="md:hidden lg:hidden xl:hidden 2xl:hidden w-5/6 bg-dark-purple text-center rounded-lg py-8 px-4 flex flex-col justify-evenly gap-4">
                            <h3 className="">Register to claim a spot in our next event!</h3>
                            <div className="w-full flex justify-center">
                                <Link href="/register" className="w-5/6"><button className="w-full bg-light-purple leading-loose rounded-md text-white transition-all duration-1000 ease-in-out hover:bg-mid-purple hover:tracking-widest text-2xl">REGISTER NOW</button></Link>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>

            <div>
                <Reveal>
                    <div className="flex text-justify justify-center place-center leading-loose">
                        <h3 className="w-2/3 xs:text-[1em] xs:w-3/4">
                            At AiVolution, we are passionate about the infinite possibilities that technology offers and are dedicated to fostering a community that shares this enthusiasm. We are an organization whose mission is to be at the forefront of the ever-evolving world of technology by bringing people together through a series of exceptional events and conferences.
                        </h3>
                    </div>
                </Reveal>
            </div>
            

            {/* Team */}
            <div className="mt-20">
                <div className="w-full">
                    <Reveal>
                        <div className="flex justify-center place-center my-8">
                            <h1 className="xs:text-[2.5em]">Meet Our Team</h1>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div className="grid grid-cols-2 gap-4 mx-10 sm:hidden xs:hidden">
                            <div className="col-span-1">
                                {teamData.map((data, index) => 
                                    index % 2 === 0 ? <Accordion key={index} title={data.role} description={(<div className={`grid grid-cols-2 text-center gap-4`}>{data.members.map((person, i) => (<div className="col-span-1 border-2 border-dark-purple rounded-md select-none transition-all ease-in-out hover:bg-dark-purple duration-300 hover:cursor-pointer hover:scale-105" key={i}><MuiModal name={person.name} bio={person.bio} links={person.links} /></div>))}</div>)} /> : ""
                                )}
                            </div>
                            <div className="col-span-1">
                                {teamData.map((data, index) => 
                                    index % 2 === 1 ? <Accordion key={index} title={data.role} description={(<div className={`grid grid-cols-2 text-center gap-4`}>{data.members.map((person, i) => (<div className="col-span-1 border-2 border-dark-purple rounded-md select-none transition-all ease-in-out hover:bg-dark-purple duration-300 hover:cursor-pointer hover:scale-105" key={i}><MuiModal name={person.name} bio={person.bio} links={person.links} /></div>))}</div>)} /> : ""
                                )}
                            </div>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div className="grid grid-cols-1 gap-4 mx-4 hidden sm:block xs:block">
                            <div className="col-span-1">
                                {teamData.map((data, index) => 
                                    <Accordion key={index} title={data.role} description={(<div className={`grid grid-cols-1 text-center gap-4`}>{data.members.map((person, i) => (<div className="col-span-1 border-2 border-dark-purple rounded-md py-4 select-none transition-all ease-in-out hover:bg-dark-purple duration-300 hover:cursor-pointer hover:scale-105" key={i}><MuiModal name={person.name} bio={person.bio} links={person.links} /></div>))}</div>)} />
                                )}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* Partners and Sponsors */}
            <div className="w-full flex flex-col place-items-center my-16">
                <Reveal><h1 className="xs:text-[2.5em]">Partners</h1></Reveal>
                <div className="w-5/6 rounded-lg grid grid-cols-1 gap-8 p-8 place-items-center sm:hidden xs:hidden">
                    
                    {partners.map((partner, i) => (
                        <Reveal key={i}>
                        <div className="">
                            {
                                i % 2 == 0 ? 
                                <div className="rounded-md p-2 grid grid-cols-3 w-full m-4">
                                    <div className="w-full flex justify-center">
                                        <a href={partner.link} target="_blank"><Image src={partner.img} alt="partner" className=""/></a>
                                    </div>
                                    <div className="col-span-2 flex flex-col justify-evenly">
                                        <h2 className="text-center ">{partner.name}</h2>
                                        <p className="text-justify leading-loose xs:text-[1em]">{partner.bio}</p>
                                    </div>
                                </div>
                                :
                                <div className="rounded-md p-2 grid grid-cols-3 w-full m-4 ">
                                    <div className="col-span-2 flex flex-col justify-evenly">
                                        <h2 className="text-center">{partner.name}</h2>
                                        <p className="text-justify leading-loose xs:text-[1em]">{partner.bio}</p>
                                    </div>
                                    <div className="w-full flex justify-center">
                                        <a href={partner.link} target="_blank"><Image src={partner.img} alt="partner" className=""/></a>
                                    </div>
                                </div>
                            }
                        </div>
                        </Reveal>
                    ))}
                </div>

                <div className="hidden xs:w-7/8 sm:w-7/8 xs:rounded-lg sm:rounded-lg xs:grid sm:grid xs:grid-cols-1 sm:grid-cols-1 xs:gap-8 sm:gap-8 xs:p-8 sm:p-8 xs:place-items-center sm:place-items-center">
                    
                    {partners.map((partner, i) => (
                        <Reveal key={i}>
                        <div className="w-full flex flex-col place-items-center justify-evenly">
                            <a href={partner.link} target="_blank"><Image src={partner.img} alt="partner" className=""/></a>
                            <h2 className="text-center text-[1.75em]">{partner.name}</h2>
                            <p className="text-justify leading-loose">{partner.bio}</p>
                            <hr />
                        </div>
                        </Reveal>
                    ))}
                </div>

                {/* <h1>Sponsors</h1>
                <div className=""></div> */}
            </div>

            {/* Sponsor Message */}
            <div className="flex justify-center">
                <div 
                    className="
                        my-20 xs:my-10 text-center xs:p-4 p-8 bg-dark-purple w-1/3 rounded-lg text-white 
                        xs:w-5/6"
                    >
                    <p>Interested in supporting our mission? Click <Link href="/contact">here</Link>!</p>
                </div>
            </div>
        </div>
    );
}
