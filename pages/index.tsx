import { Reveal } from "@/components/reveal";
import Accordion from "@/components/accordion";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import MuiModal from "@/components/modal";

export default function Home () {

    const teamData = [
        {
            role: "Presidents",
            members: [{name: "Ashwath", bio: ""}, {name: "Devang", bio: ""}]
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
            members: [{name: "Sohum", bio: ""}, {name: "Advay", bio: ""}, {name: "Aryan", bio: ""}, {name: "Rohan", bio: ""}]
        },
        {
            role: "Design",
            members: [{name: "Praney", bio: ""}, {name: "Mujtaba", bio: ""}, {name: "Salma", bio: ""}, {name: "Sonali", bio: ""}]
        },
        {
            role: "Marketing Members",
            members: [{name: "Akshitha", bio: ""}, {name: "Adam", bio: ""}, {name: "Arjun", bio: ""}, {name: "Jerry", bio: ""}]
        },
        {
            role: "Outreach Members",
            members: [{name: "Mahad", bio: ""}, {name: "Chris", bio: ""}, {name: "Mustafa", bio: ""}, {name: "Ryan", bio: ""}]
        },
        {
            role: "Finance Members",
            members: [{name: "Anuhya", bio: ""}]
        },
    ]

    return (
        <div className="w-full">
            {/* Hero Section */}
            <div className="w-full">
                <Reveal>
                <h1 className="block text-left my-20 ml-40 mr-32 text-[6em]">
                    A <span className="inline-block text-mid-purple"><Typewriter options={{strings: ['passionate', 'student-led', 'driven'], autoStart: true, loop: true,}}/></span> organization<br /> focused around informing people about our AI-driven future.
                </h1>
                </Reveal>
            </div>
            <div>
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
                                return <Accordion key={index} title={data.role} description={(<div className={`grid grid-cols-2 text-center gap-4`}>{data.members.map((person, i) => (<div className="col-span-1 border-2 border-dark-purple rounded-md py-4 select-none transition-all ease-in-out hover:bg-dark-purple duration-300 hover:cursor-pointer hover:scale-105" key={i}><MuiModal name={person.name} bio={person.bio}/></div>))}</div>)} />;
                            })}
                        </div>
                    </Reveal>
                </div>
            </div>

            {/* Sponsor Message */}
            <div className="flex justify-center">
                <div className="my-20 text-center p-8 bg-dark-purple w-1/3 rounded-lg text-white">
                    <p>Want to sponsor us? Click <Link href="/contact">here</Link>!</p>
                </div>
            </div>
        </div>
    );
}
