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


const personLinks = {
	"Ashwath" : {"linkedin": "", "gmail": "", "instagram": ""},
	"Devang" : {"linkedin": "", "gmail": "", "instagram": ""},
	"Nirupa" : {"linkedin": "", "gmail": "", "instagram": ""},
	"Taha" : {"linkedin": "", "gmail": "", "instagram": ""},
	"Arush" : {"linkedin": "", "gmail": "", "instagram": ""},
	"Sohun" : {"linkedin": "", "gmail": "", "instagram": ""},
	"Sohum" : {"linkedin": "", "gmail": "", "instagram": ""},
	"Aryan" : {"linkedin": "", "gmail": "", "instagram": ""},
	"Praney" : {"linkedin": "", "gmail": "", "instagram": ""},
	"Salma" : {"linkedin": "", "gmail": "", "instagram": ""},
	"Sonali" : {"linkedin": "", "gmail": "", "instagram": ""},
	"Akshitha" : {"linkedin": "", "gmail": "", "instagram": ""},
	"Adam" : {"linkedin": "", "gmail": "", "instagram": ""},
	"Arjun" : {"linkedin": "", "gmail": "", "instagram": ""},
	"Jerry" : {"linkedin": "", "gmail": "", "instagram": ""},
	"Mahad" : {"linkedin": "", "gmail": "", "instagram": ""},
	"Chris" : {"linkedin": "", "gmail": "", "instagram": ""},
	"Mustafa" : {"linkedin": "", "gmail": "", "instagram": ""},
	"Ryan" : {"linkedin": "", "gmail": "", "instagram": ""},
	"Anuhya" : {"linkedin": "", "gmail": "", "instagram": ""}
};

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 800,
	height: 400,
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
		return (
			<div className="fixed md:bottom-20 md:left-20 lg:bottom-20 lg:left-20 xl:bottom-20 xl:left-20 sm:top-20 sm:left-20 m-4 h-[55px] w-[1255px]">
				<div className="text-center p-5 bg-dark-purple w-1/3 xs:w-1/4 xs:text-[0.85em] rounded-lg text-white relative">
					<p></p>
				</div>
			</div>
		)
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
				<Fade in={open}>
					<Box sx={style} className="bg-dark-purple border-4 border-mid-purple rounded-md text-white">
						<button className="absolute left-[740px]"
							onClick={handleClose}
						>
							<IoMdClose size={30} className="hover:bg-light-purple/75 rounded-md" />
						</button>

						<h2 id="transition-modal-title" className="text-white mb-4 flex">
							<Typewriter options={{strings: [`Hi, I'm ${name}`], autoStart: true, deleteSpeed: 1000000000000, delay: 50}}/>
						</h2>
						
							<p id="transition-modal-description" className="text-white text-justify text-wrap w-[55%] absolute">
								<Reveal yOffset={25}>
									{bio}
								</Reveal>
							</p>
						

						<Avatar
							src={`/team-pfp/${name}.jpg`}
							sx={{ width: 250, height: 250 }}
							className="absolute left-[480px] bottom-[40px]" 
						/>
						<div className="absolute left-[180px] bottom-[35px]">
							<div className="flex flex-wrap gap-8 items-center justify-center">
								<a href={`${links.linkedin}`} target="_blank" rel="noopener noreferrer">
									<div className={`text-md font-bold ${links.linkedin == "" ? "hidden": ""}`}>
										<FaLinkedin className="inline" size={28} />
									</div>
								</a>
								<a onClick={() => {handleEmailClick(links.gmail)}} className="hover:cursor-pointer">
									<div className={`text-md font-bold ${links.gmail == "" ? "hidden": ""}`}>
										<IoMdMail className="inline" size={28} />
									</div>
								</a>
								<a href={`https://www.instagram.com/${links.instagram}`}target="_blank">
									<div className={`text-md font-bold ${links.instagram == "" ? "hidden": ""}`}>
										<FaInstagram className="inline" size={28} />
									</div>
								</a>
							</div>
						</div>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
}