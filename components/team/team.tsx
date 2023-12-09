import TeamMember from "./team-member";

const people = [
    {
        name: "Ashwath",
        role: "President",
    },
    {
        name: "Devang",
        role: "President",
    },
    {
        name: "Nirupa",
        role: "Vice President",
    },
    {
        name: "Taha",
        role: "Vice President",
    },
    {
        name: "Sohum",
        role: "Tech Officer",
    },
    {
        name: "Praney",
        role: "Design Officer",
    },
    {
        name: "Aryan",
        role: "Technical Lead ",
    },
    {
        name: "Rohan",
        role: "Technical Lead",
    },
    {
        name: "Advay",
        role: "Technical Staff",
    },
    
];
export default function Team() {
    return (
        <div className='my-5 grid sm:grid-cols-1 sm:mx-12 md:grid-cols-2 md:mx-20 lg:grid-cols-3 lg:mx-28 xl:grid-cols-4 xl:mx-28 gap-4 place-content-center'>
            {people.map(({ name, role}) => 
                <TeamMember name={name} key={name} role={role}/>
            )}
        </div>
    )
}