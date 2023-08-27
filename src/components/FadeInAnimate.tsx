import React, { useEffect, useRef } from "react";
import "./FadeInAnimate.css";

interface Props {
    children: React.ReactNode;
}

function IntersectionAnimate({ children }: Props) {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
                        entry.target.classList.add("animated");
                    } else {
                        entry.target.classList.remove("animated");
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]);

    return (
        <div ref={ref} className="intersection-animate">
            {children}
        </div>
    );
}

export default IntersectionAnimate;
