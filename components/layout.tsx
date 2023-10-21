import { ReactNode } from "react";
import { m } from "framer-motion";



export default function Layout ({ children }: { children: ReactNode }) {
    return (
        <m.div>
            {children}
        </m.div>
    )
}