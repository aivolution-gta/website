import { AiOutlineInstagram } from 'react-icons/ai';

interface TeamMemberInfo {
    name: string;
    role: string;
}

export default function TeamMember ({name, role}: TeamMemberInfo) {
    return (
        <div 
            className="min-width-200 align-center m-2 p-5 rounded-lg
            border-4 border-opacity-50 hover:border-opacity-100 hover:scale-105
            border-dark-purple transition duration-500 ease-in-out select-none
            bg-light-purple drop-shadow-none hover:drop-shadow-lg "
        >

            <p className="font-bold text-3xl mb-1">{name}</p>
            <p className="text-bright-yellow">{role}</p>
        </div>
    );
}
