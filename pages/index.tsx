import { Reveal } from "@/components/reveal";
import Accordion from "@/components/accordion";
import Typewriter from "typewriter-effect";
import Link from "next/link";

export default function Home () {

    const teamData = [
        {
            role: "Presidents",
            members: ["Ashwath", "Devang"]
        },
        {
            role: "Vice-Presidents",
            members: ["Nirupa", "Taha"]
        },
        {
            role: "Secretaries",
            members: ["Sohun"]
        },
        {
            role: "Dev Team",
            members: ["Sohum", "Aryan"]
        },
        {
            role: "Design Team",
            members: ["Praney", "Asmetha", "Salma", "Sonali"]
        },
        {
            role: "Marketing Team",
            members: ["Akshitha", "Adam", "Arjun", "Jerry"]
        },
        {
            role: "Outreach Team",
            members: ["Mahad", "Chris", "Mustafa", "Ryan"]
        },
        {
            role: "Finance Team",
            members: ["Anuhya"]
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
                                    index % 2 === 0 ? <Accordion key={index} title={data.role} description={(<div className={`grid grid-cols-2 text-center gap-4`}>{data.members.map((name, i) => (<div className="col-span-1 border-2 border-dark-purple rounded-md py-4 select-none transition-all ease-in-out hover:bg-dark-purple duration-300 hover:cursor-pointer hover:scale-105" key={i}>{name}</div>))}</div>)} /> : ""
                                )}
                            </div>
                            <div className="col-span-1">
                                {teamData.map((data, index) => 
                                    index % 2 === 1 ? <Accordion key={index} title={data.role} description={(<div className={`grid grid-cols-2 text-center gap-4`}>{data.members.map((name, i) => (<div className="col-span-1 border-2 border-dark-purple rounded-md py-4 select-none transition-all ease-in-out hover:bg-dark-purple duration-300 hover:cursor-pointer hover:scale-105" key={i}>{name}</div>))}</div>)} /> : ""
                                )}
                            </div>
                        </div>
                    </Reveal>

                    <Reveal>
                        <div className="grid grid-cols-1 gap-4 mx-4 hidden sm:block xs:block">
                            <div className="col-span-1">
                                {teamData.map((data, index) => 
                                    <Accordion key={index} title={data.role} description={(<div className={`grid grid-cols-1 text-center gap-4`}>{data.members.map((name, i) => (<div className="col-span-1 border-2 border-dark-purple rounded-md py-4 select-none transition-all ease-in-out hover:bg-dark-purple duration-300 hover:cursor-pointer hover:scale-105" key={i}>{name}</div>))}</div>)} />
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
