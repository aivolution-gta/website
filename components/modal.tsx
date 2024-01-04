import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typewriter from "typewriter-effect";
import Image from 'next/image';

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 760,
	height: 380,
	boxShadow: 24,
	pt: 4,
	pl:4
};

interface MuiModalProps {
	name: string,
	bio: string,
	pfp: any
}

export default function MuiModal({name, bio, pfp}: MuiModalProps) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

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
					<Box sx={style} className="bg-mid-purple rounded-md text-white">
						<h2 id="transition-modal-title" className="text-white mb-4">
							<Typewriter options={{strings: [`Hi, I'm ${name}`], autoStart: true, deleteSpeed: 1000000000000, delay: 50}}/>
						</h2>
						<div className="flex">
							<p id="transition-modal-description" className="text-white text-justify text-wrap w-[60%]">
								{bio}
							</p>
						</div>
						<div className="relative ml-12">
							<Image 
								src={pfp}
								alt=""
								height={200}
								width={200}
								className="rounded-full"
							/> 
						</div>
					</Box>
				</Fade>
			</Modal>
		</div>
	);
}