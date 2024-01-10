import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typewriter from "typewriter-effect";
import { Reveal } from './reveal';
import { Avatar } from '@mui/material';
import { IoMdClose } from 'react-icons/io';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	boxShadow: 24,
	p: 4,
};

interface MuiModalProps {
	name: string,
	bio: string,
	links: any,
}

export default function MuiModal({name, bio, links}: MuiModalProps, ) {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleEmailClick = (email: string) => {
		navigator.clipboard.writeText(email)
		// return (
		// 	<div className="fixed md:bottom-20 md:left-20 lg:bottom-20 lg:left-20 xl:bottom-20 xl:left-20 sm:top-20 sm:left-20 m-4 h-[55px] w-[1255px]">
		// 		<div className="text-center p-5 bg-dark-purple w-1/3 xs:w-1/4 xs:text-[0.85em] rounded-lg text-white relative">
		// 			<p></p>
		// 		</div>
		// 	</div>
		// )
	};

	return (
		<div>
			<button className="w-full h-full py-4" onClick={handleOpen}>{name}</button>
			<Modal
				open={open}
				onClose={handleClose}
				closeAfterTransition
				slots={{ backdrop: Backdrop }}
				slotProps={{
					backdrop: {
						timeout: 500,
					},
				}}
			>
				<div>
                    {/* Larger Screens */}
                    <div className="block xs:hidden sm:hidden md:hidden w-full">
                    <Fade in={open}>
                    <Box sx={style} className="bg-dark-purple border-4 border-mid-purple rounded-md text-white block w-2/3 max-w-[800px]">
                        <div className="flex w-full justify-right">
                            <button className="absolute right-8"
                                onClick={handleClose}
                            >
                                <IoMdClose size={30} className="hover:bg-light-purple/75 rounded-md" />
                            </button>
                        </div>

                        <div className="flex gap-8 justify-evenly">
                            <div>
                                <h2 id="transition-modal-title" className="text-white mb-4 flex">
                                    <Typewriter options={{strings: [`Hi, I'm ${name}`], autoStart: true, deleteSpeed: 1000000000000, delay: 50}}/>
                                </h2>
                                
                                <div id="transition-modal-description" className="text-white text-justify text-wrap">
                                    <Reveal yOffset={25}>
                                        {bio}
                                    </Reveal>
                                </div>
                            </div>
                            <Avatar
                                src={`/team-pfp/${name}.jpg`}
                                sx={{ width: 250, height: 250 }}
                                className="mt-4"
                            />
                        </div>
                        <div className="flex w-full justify-center gap-8 mt-8">
                            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className={`${links.linkedin == "" ? "hidden": ""}`}>
                                <div className={`text-md font-bold`}>
                                    <FaLinkedin className="inline" size={28} />
                                </div>
                            </a>
                            <a onClick={() => {handleEmailClick(links.gmail)}} className={`hover:cursor-pointer ${links.gmail == "" ? "hidden": ""}`} title="Copy Email">
                                <div className={`text-md font-bold`}>
                                    <IoMdMail className="inline" size={28} />
                                </div>
                            </a>
                            <a href={`https://www.instagram.com/${links.instagram}`} rel="noopener noreferrer" target="_blank" className={`${links.instagram == "" ? "hidden": ""}`}>
                                <div className={`text-md font-bold`}>
                                    <FaInstagram className="inline" size={28} />
                                </div>
                            </a>
                        </div>
                    </Box>
				    </Fade>
                    </div>

                    {/* Smaller Screens */}
                    <div className="hidden xs:block sm:block md:block">
                    <Fade in={open}>
                    <Box sx={style} className="bg-dark-purple border-4 border-mid-purple rounded-md text-white block w-full max-h-screen overflow-auto">
                        <div className="flex w-full justify-right">
                            <button className="absolute right-8"
                                onClick={handleClose}
                            >
                                <IoMdClose size={30} className="hover:bg-light-purple/75 rounded-md" />
                            </button>
                        </div>
                        
                        <div className="w-full flex justify-center">
                            <Avatar
                                src={`/team-pfp/${name}.jpg`}
                                sx={{ width: 250, height: 250 }}
                                className="" 
                            />
                        </div>

                        <div className="w-full flex flex-col place-items-center gap-4 my-4">
                            <h2 id="transition-modal-title" className="text-center flex">
                                <Typewriter options={{strings: [`Hi, I'm ${name}`], autoStart: true, deleteSpeed: 1000000000000, delay: 50}}/>
                            </h2>
                            
                            <div id="transition-modal-description" className="text-justify text-wrap w-5/6">
                                <Reveal yOffset={25}>
                                    {bio}
                                </Reveal>
                            </div>
                        </div>

                        
                        <div className="flex w-full justify-center gap-8">
                            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className={`${links.linkedin == "" ? "hidden": ""}`}>
                                <div className={`text-md font-bold`}>
                                    <FaLinkedin className="inline" size={28} />
                                </div>
                            </a>
                            <a onClick={() => {handleEmailClick(links.gmail)}} className={`hover:cursor-pointer ${links.gmail == "" ? "hidden": ""}`}>
                                <div className={`text-md font-bold`}>
                                    <IoMdMail className="inline" size={28} />
                                </div>
                            </a>
                            <a href={`https://www.instagram.com/${links.instagram}`} rel="noopener noreferrer" target="_blank" className={`${links.instagram == "" ? "hidden": ""}`}>
                                <div className={`text-md font-bold`}>
                                    <FaInstagram className="inline" size={28} />
                                </div>
                            </a>
                        </div>
                    </Box>
				    </Fade>
                    </div>
                </div>
			</Modal>
		</div>
	);
}