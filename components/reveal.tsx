import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from  "framer-motion";

interface revealProps {
    children: any,
    width?: "fit-content" | "100%",
    yOffset?: number,
}

Reveal.defaultProps = {
    yOffset: 75,
}

export function Reveal ({ children, width = "fit-content", yOffset}: revealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref)

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView])

    return (
        <div ref={ref}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: yOffset },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
            >
                {children}
            </motion.div>
        </div>
    )
}