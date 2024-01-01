import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typewriter from "typewriter-effect";

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 760,
	height: 380,
	boxShadow: 24,
	p: 4,
};

interface MuiModalProps {
	name: string,
	bio: string,
}

export default function MuiModal({name, bio}: MuiModalProps) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<button className="w-full h-full" onClick={handleOpen}>{name}</button>
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
					<Box sx={style} className="bg-light-purple rounded-md text-black">
						<h2 id="transition-modal-title" className="mb-4">
							<Typewriter options={{strings: [`Hi, I'm ${name}`], autoStart: true, deleteSpeed: 1000000000000, delay: 50}}/>
						</h2>
						<p id="transition-modal-description" className="text-justify text-wrap">
							{bio}
							Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum
						</p> 
					</Box>
				</Fade>
			</Modal>
		</div>
	);
}