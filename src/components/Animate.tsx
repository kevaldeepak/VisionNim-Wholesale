import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
    children: JSX.Element;
    delay?: number;
    x?: number;
    y?: number;
}

function Animate({ children, delay, x, y }: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            const delayValue = delay !== undefined ? delay : 0.2; // Use provided delay or default 0.1
            mainControls.start("visible", { delay: delayValue });
        }
    }, [isInView, delay]);

    return (
        <div ref={ref} style={{ overflow: "hidden" }}>
            <motion.div
                style={{ overflow: "hidden" }} // Hide any potential overflow from animations
                variants={{
                    hidden: { opacity: 0, y: y !== undefined ? y : 75, x: x !== undefined ? x : 0 },
                    visible: { opacity: 1, y: 0, x: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.4, delay: 0.2 }}
            >
                {children}
            </motion.div>
        </div>
    );
}

export default Animate;
