import React, { useState } from 'react';
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { Collapse } from 'react-collapse';

interface AccordionProps {
    title: string,
    description: JSX.Element,
}

export default function Accordion({title, description}: AccordionProps) {

    const [open, setOpen] = useState(false);

    return (
        <div className="text-white my-4">
            <div className={`border-dark-purple border-2 bg-mid-purple py-[25px] px-[50px] flex justify-between items-center cursor-pointer ${open ? "rounded-t-md" : "rounded-md"}`}
                onClick={() => {setOpen(!open)}}
            >
                <h3 className="">{title}</h3>
                <p className="text-[1.5em]">
                    {open ? <MdExpandLess /> : <MdExpandMore />}
                </p>
            </div>

            <Collapse isOpened={open}>
                <div className="border-dark-purple border-x-2 border-b-2 border--2 bg-light-purple/95 px-[50px] py-[20px] rounded-b-md text-[1.25em]">{description}</div>
            </Collapse>
        </div>
    )
}