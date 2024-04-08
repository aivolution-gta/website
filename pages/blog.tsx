import React from 'react';
import Image from 'next/image';
import { Reveal } from "@/components/reveal";
import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typewriter from "typewriter-effect";
import { IoMdClose } from 'react-icons/io';

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	boxShadow: 24,
	p: 4,
};

interface BlogProps {
	author: string,
    previewText: string,
	text: string,
	title: string,
    image: string,
    caption: string,
    date: string,
}

function BlogItem({author, text, title, date, image, caption, previewText}: BlogProps) {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<button className="w-full h-full py-4" onClick={handleOpen}>
                <div className="relative flex flex-col bg-mid-purple p-4 rounded-xl border-2 border-black hover:scale-[103%] transition-all duration-300">
                    <div className="order-1 sm:ml-6 xl:ml-0">
                        <p className="mb-1 text-slate-900 font-semibold">
                            <span className="mb-1 block leading-6 text-indigo-500">{title}</span>
                        </p>
                        <h3 className="mb-1 text-slate-900 font-semibold">
                            <span className="text-sm">Aryan Vasudevan - {date}</span>
                        </h3>
                        <div className="prose prose-slate prose-sm text-slate-600">
                            <p>{previewText}</p>
                        </div>
                    </div>
                    <Image src={image} alt="" width="1000" height="100" className="mb-6 shadow-md rounded-xl bg-slate-50 border-2 border-black"/>
                </div>
            </button>
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
                    <div className="block xs:hidden sm:hidden md:hidden w-full">
                    <Fade in={open}>
                        <Box sx={style} className="bg-dark-purple border-4 border-mid-purple rounded-md text-white block w-3/4">
                            <div className="flex w-full justify-right">
                                <button className="absolute right-8"
                                    onClick={handleClose}
                                >
                                    <IoMdClose size={30} className="hover:bg-light-purple/75 rounded-md" />
                                </button>
                            </div>
                            <div className="">
                                <h2 id="transition-modal-title" className="text-white mb-4 flex text-center">
                                    <Typewriter options={{strings: [`${title}`], autoStart: true, deleteSpeed: 1000000000000, delay: 50}}/>
                                </h2>
                                <p className="text-white text-sm my-4">
                                    {date}{` - ${author}`}
                                </p>
                                <div className="flex">
                                    <div className="text-white w-1/2 text-wrap">
                                        <Reveal yOffset={0}>
                                            {text}
                                        </Reveal>
                                    </div>
                                    <div className="ml-8">
                                        <Image src={image} alt="" width="600" height="10" className="mb-6 shadow-md rounded-xl bg-slate-50 border-2 border-black"/>
                                        <p className="text-sm">
                                            {caption}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Box>
				    </Fade>
                    </div>
                </div>
			</Modal>
		</div>
	);
}

export default function Blog() {
    return (
        <div className="w-screen flex flex-col min-h-screen">
            <Reveal>
                <h1 className="flex justify-center place-center my-2 xs:text-[3em] sm:text-[3em]">Blog Posts</h1>
                <h2 className="flex justify-center place-center my-8 xs:text-[3em] sm:text-[3em]">Latest Posts</h2>
            </Reveal>
            <Reveal>
                <div className="grid grid-cols-3 gap-y-10 gap-x-6 place-items-center rounded-full m-8">
                    <BlogItem
                        author="Aryan Vasudevan"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sollicitudin felis vitae ligula suscipit luctus. Fusce aliquet, ante nec accumsan consequat, quam tellus faucibus est, ut aliquam nisi dui sed turpis. Morbi nec lacinia purus. Integer aliquet vitae massa et sagittis. In lobortis ut tortor feugiat rhoncus. Duis lectus augue, pulvinar non dictum sit amet, commodo non mauris. Ut eget arcu leo.

                        Vestibulum pulvinar erat et rhoncus egestas. Nullam sed ex justo. Sed laoreet scelerisque tincidunt. Vestibulum varius diam tristique, volutpat eros feugiat, iaculis elit. In dictum, nibh eget semper luctus, nunc risus vestibulum velit, placerat rhoncus neque nisi non ligula. Fusce scelerisque enim id turpis venenatis, vitae efficitur ante accumsan. Mauris finibus varius ultricies. Sed tincidunt ultricies lectus, vel tempus lectus. Maecenas vitae sodales ex, sit amet tempus purus. Aenean tempus nunc ac lorem luctus dictum.
                        
                        Ut libero arcu, aliquet posuere condimentum sit amet, finibus a urna. Morbi euismod sagittis ante, in pharetra lorem fringilla a. Curabitur porttitor efficitur quam ac sollicitudin. Integer luctus arcu eros. Morbi eu placerat sapien, in blandit nisi. In efficitur diam nec urna fermentum, eget auctor risus laoreet. Aenean at quam ut nisi rutrum venenatis. Pellentesque in dolor ac nibh tincidunt molestie facilisis sit amet tellus. Suspendisse vulputate molestie egestas. Sed dignissim metus nisi, porta tincidunt felis consectetur vel.
                        
                        Ut non metus pharetra, feugiat odio nec, fringilla dui. Quisque condimentum, nunc vitae fringilla commodo, libero justo faucibus nunc, at laoreet orci ipsum in purus. Nam sit amet vestibulum lacus. Phasellus aliquet, magna ac suscipit."
                        title="Test Blog Post"
                        date="10/10/2021"
                        image="/blog-images/test.jpg"
                        caption="This is a test caption"
                        previewText="This is a test blog post"
                    >
                    </BlogItem>
                </div>
            </Reveal>
        </div>
    );
}
