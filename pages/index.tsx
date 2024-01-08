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
            members: [{name: "Ashwath", bio: "Hello, I'm Ashwath Jagadeesh, and I proudly serve as the President of AiVolution, steering the company through the dynamic realm of artificial intelligence with a visionary approach. Off-duty, I find my joy in the fast-paced worlds of badminton, volleyball, and basketball, relishing the spirit of teamwork and competition. I also harbor a deep passion for becoming an anesthesiologist.", links: {"linkedin": "", "gmail": "", "instagram": "ashwath_j8"}}, {name: "Devang", bio: "Hey, my name is Devang, and I am one of the presidents and founders of AiVolution. I am an inquisitive person who is always interested in learning more, which I believe is reflected in my hobbies and passions. In the future, I hope to become an astrophysicist and pursue a research career. Some of my hobbies are playing music, playing video games with my friends, and reading manhwa.", links: {"linkedin": "https://www.linkedin.com/in/devang-kapahi", "gmail": "", "instagram": "_bronbo"}}]
        },
        {
            role: "Vice-Presidents",
            members: [{name: "Nirupa", bio: "Welcome to AiVolution’s website! My name is Nirupa and I am a vice-president at AiVolution. As VP, I help lead and manage the organization, constantly fostering growth and excellence. In the future, I plan on pursuing the medical field, specifically pharmaceutical chem., with hopes of becoming a pharmaceutical chemist. I am also passionate about volleyball, and enjoy playing competitively.", links: {"linkedin": "", "gmail": "", "instagram": ""}}, {name: "Taha", bio: "A passionate 'chef', an avid traveller, a soccer fan, and a  'tech-savvy guy' is what I'd call myself. I enjoy seeking knowledge and using technology to my advantage. Speaking of technology, I have countless hours to my name in photo and video editing; so I could call myself a Photoshop king. My latest products have been a satirical horror short film and a Q&A for Eid 2023.", links: {"linkedin": "", "gmail": "tahagh905@gmail.com", "instagram": "talisman._.tg"}}]
        },
        {
            role: "Secretaries",
            members: [{name: "Sohun", bio: "", links: {"linkedin": "", "gmail": "", "instagram": ""}}, {name: "Maryam", bio: "Hi! I'm Maryam khan and I'm the secretary for AiVolution, my role as a secretary helps to ensure the attendance of members, hours of completion and much more! I'm a art enthusiast with a newfound passion of tech that i strive to partake in alongside my karate and graphic design journey. I recently got to be apart of this team just this week. I cant wait for AiVolution's upcoming events!", links: {"linkedin": "", "gmail": "", "instagram": ""}}]
        },
        {
            role: "Developers",
            members: [{name: "Sohum", bio: "As the tech head of AiVolution, I have always been interested in creating and developing applications. Recently, I've gained a passion for web development, and creating websites is one of my favourite pastimes. I have been programming for over 5 years now, and I don't plan to give it up because of how rewarding it is. Aside from that, my interests include mathematics, playing volleyball, and playing chess.", links: {"linkedin": "https://www.linkedin.com/in/sohum-padhye/", "gmail": "sohum.padhye@gmail.com", "instagram": "sohum.padhye"}}, {name: "Aryan", bio: "Eager to embark on a journey of professional growth, I'm a high school student with a desire to gain knowledge in Programming and Computer Science. Through a combination of academic excellence, extracurricular involvement, and a thirst for knowledge, I am dedicated to improving my skills and gaining valuable experiences.", links: {"linkedin": "https://www.linkedin.com/in/aryan-vasudevan", "gmail": "vasudevan.aryan@gmail.com", "instagram": "aryaan_v"}}]
        },
        {
            role: "Design",
            members: [{name: "Praney", bio: "Hi, my name is Praney. I'm a Grade 10 High School student and I'm the Head of Design at AiVolution. I enjoy most things art and technology related for as long as I remember. My goal at AiVolution is to help the organization and its own goals with what I can offer.", links: {"linkedin": "", "gmail": "praneyshivam@gmail.com", "instagram": "praney0"}}, {name: "Salma", bio: "Sophomore with a passion for art, showcasing creativity in every project. Adaptable and diligent, I approach my work with enthusiasm and dedication.", links: {"linkedin": "", "gmail": "", "instagram": ""}}, {name: "Sonali", bio: "Hello, I'm Sonali, a design member at AiVolution. I've put together some of our Instagram posts using tools like Canva, Picsart, and Photoshop, focusing on aesthetics and visual texture for both visual appeal and audience enjoyment. Beyond design, my passion for storywriting adds a personal touch to my creations—a unique blend of visual and storytelling elements (:", links: {"linkedin": "", "gmail": "", "instagram": "pastsonali"}}, {name: "Asmetha", bio: "I'm Asmetha Thanarajh, a member of the Graphic Design team at Aivolution. My professional journey centers on graphic design, where I bring creativity to the forefront. Outside work, I enjoy Bharatanatyam and painting.", links: {"linkedin": "", "gmail": "", "instagram": "thaamaraii_"}}]
        },
        {
            role: "Marketing Members",
            members: [{name: "Akshitha", bio: "Hey, I'm Akshitha! I'm the head of marketing at AiVolution! I mainly handle the marketing team and control how the posts get uploaded. I recently joined the team in November and then had to chance to lead my own marketing subunit in December. I thoroughly enjoy being with both teams, and apart from being with AiVolution, I enjoy baking, cooking, and listening to music :)", links: {"linkedin": "https://www.linkedin.com/in/akshitha-ragavan-a882ab282/", "gmail": "", "instagram": "unhakied"}}, {name: "Adam", bio: "Hi! I am currently a high school student who is passionate about AI, computers and anything STEM related. I try to keep an open-mind and to always keep learning and improving. Besides academics, I enjoy playing video games, and table tennis. My goal at AiVolution is to help others and encourage them to learn more about AI.", links: {"linkedin": "", "gmail": "", "instagram": ""}}, {name: "Arjun", bio: "Hello, I am Arjun Garg. I am a general member at Aivolution and I love working in promotion. I love business and am intrigued by AI. I can’t wait to see where we can take Aivolution!", links: {"linkedin": "", "gmail": "", "instagram": ""}}, {name: "Jerry", bio: "Hey, I'm Jerry Huang, a Grade 10 pre-IB student at STFX and a proud marketing member at AIVolution. Passionate about creating change and educating others on AI's future, I bring coding skills in Python and Java to the table. Outside AIVolution, you'll find me enjoying basketball and badminton.", links: {"linkedin": "", "gmail": "", "instagram": "xxjxrry_."}}]
        },
        {
            role: "Outreach Members",
            members: [{name: "Mahad", bio: "I am the Executive of Outreach at AiVolution and a Grade 10 student attending the International Baccalaureate Program at Erindale Secondary School. I am an aspiring student who is passionate about Robotics, Engineering, and Technology. I am pursuing the field of software development and engineering while achieving a dual diploma. Feel free to reach out to me!", links: {"linkedin": "https://linkedin.com/in/mahad-qureshi-580981290", "gmail": "mahadqureshi555@gmail.com", "instagram": "itz.mahad"}}, {name: "Chris", bio: "My name is Chris, I'm currently a student at GlenForest Secondary School and I work as an outreach general member for Aivolution. I enjoy playing sports and I am passionate about artificial intelligence and how it can improve our lives.", links: {"linkedin": "", "gmail": "", "instagram": "yk_chris.08"}}, {name: "Mustfa", bio: "Hi! I am a high school student who is passionate about AI and other areas of STEM, such as engineering. I have participated in several coding and math competitions and achieved high placements in a few. When I grow up, I want to pursue a career in IT. Besides academics, I enjoy playing basketball and video games. My goal in AiVolution is to help the youth with open opportunities regarding STEM. ", links: {"linkedin": "", "gmail": "mustfa204695@gmail.com", "instagram": "mustfaaa_._._"}}, {name: "Ryan", bio: "Hi, my name is Ryan. I am currently in high school and find the evolution of AI exciting and fascinating. An interest of mine is computer science and anything related to it. However, some other interests of mine that are not in the realm of computer science are movies and basketball. Overall, I find all of these topics very unique and compelling.", links: {"linkedin": "https://www.linkedin.com/in/ryan-huo-37222a2a1/", "gmail": "", "instagram": ""}}]
        },
        {
            role: "Finance Members",
            members: [{name: "Anuhya", bio: "As the Head of Finance at Aivolution, a non-profit organization dedicated to educate a bigger community provoking conferences on AI and our future! Here at Aivolution I spearhead financial strategy, management, and leadership. Proudly embracing my passion for mathematics and programming, showcasing proficiency in web development. Its an honor to work with such a greatly coordinated team :)", links: {"linkedin": "https://www.linkedin.com/in/anuhya-krishna-nakka-b65a1b27a/", "gmail": "anuhya.ash@gmail.com", "instagram": "anuhya_krishnas"}}]
        },
    ]

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
                    A <span className="inline-block text-mid-purple"><Typewriter options={{strings: ['passionate', 'student-led', 'driven'], autoStart: true, loop: true}}/></span> <br className="hidden xs:block" />organization focused around informing people about our technology driven future.
                </h1>
                </Reveal>
            </div>
            <div>
                <Reveal>
                    <div className="flex text-justify justify-center place-center leading-loose xs:my-44">
                        <h3 className="w-2/3 xs:text-[1.25em] xs:w-3/4">
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

            {/* Sponsor Message */}
            <div className="flex justify-center">
                <div 
                    className="
                        my-20 text-center p-8 bg-dark-purple w-1/3 rounded-lg text-white 
                        xs:w-5/6"
                    >
                    <p>Interested in supporting our mission? Click <Link href="/contact">here</Link>!</p>
                </div>
            </div>
        </div>
    );
}