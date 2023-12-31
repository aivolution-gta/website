import { Reveal } from "@/components/reveal";
import Accordion from "@/components/accordion";

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
            <Reveal>
                <h1 className="flex justify-center place-center my-20 opacity-100">AiVolution</h1>
            </Reveal>

            {/* About */}
            
            <div className="py-20 mt-[30em]">
                <div className="w-full">
                    <Reveal>
                        <h1 className="flex justify-center place-center opacity-100">About Us</h1>
                    </Reveal>
                </div>
                <div className="w-full">
                    <Reveal>
                    <h3 className="flex text-center justify-center place-center my-20 opacity-75 text-3xl mx-36 ">
                        A non-profit organization focused around informing people about our AI driven future.
                    </h3>
                    </Reveal>
                </div>
                <div>
                    <Reveal>
                    <p className="flex text-center justify-center place-center opacity-75 mx-96">
                        At AiVolution, we are passionate about the infinite possibilities that technology offers and are dedicated to fostering a community that shares this enthusiasm. We are a non-profit organization, and our mission is clear: to be at the forefront of the ever-evolving world of technology by bringing people together through a series of exceptional events and conferences.
                    </p>
                    </Reveal>
                </div>
            </div>
            

            {/* Team */}
            <div className="py-20">
                <div className="w-full">
                    <Reveal>
                    <h1 className="flex justify-center place-center opacity-100 my-0">Meet our Team</h1>
                    </Reveal>

                    <Reveal>
                        <div className="grid grid-cols-2 gap-4 m-10">
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
