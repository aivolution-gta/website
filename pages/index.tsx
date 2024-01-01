import { Reveal } from "@/components/reveal";
import Accordion from "@/components/accordion";
import Typewriter from "typewriter-effect";

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
            members: ["Arush", "Sohun"]
        },
        {
            role: "Developers",
            members: ["Sohum", "Advay", "Aryan", "Rohan"]
        },
        {
            role: "Design",
            members: ["Praney", "Mujtaba", "Salma", "Sonali"]
        },
        {
            role: "Marketing Members",
            members: ["Akshitha", "Adam", "Arjun", "Jerry"]
        },
        {
            role: "Outreach Members",
            members: ["Mahad", "Chris", "Mustafa", "Ryan"]
        },
        {
            role: "Finance Members",
            members: ["Anuhya"]
        },
    ]

    return (
        <div className="w-full">
            {/* Hero Section */}
            <div className="w-full">
                <Reveal>
                <h1 className="block text-left my-20 ml-40 mr-32 text-[6em]">
                    A <span className="inline-block text-mid-purple"><Typewriter options={{strings: ['passionate', 'student-led', 'driven'], autoStart: true, loop: true}}/></span> organization<br /> focused around informing people about our AI-driven future.
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
                    <h1 className="flex justify-center place-center opacity-100 my-8">Meet our Team</h1>
                    </Reveal>

                    <Reveal>
                        <div className="grid grid-cols-2 gap-4 mx-10">
                            {teamData.map((data, index) => {
                                return <Accordion key={index} title={data.role} description={data.members.join(', ')} />;
                            })}
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}
