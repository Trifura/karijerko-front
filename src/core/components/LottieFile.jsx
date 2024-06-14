import {useEffect, useRef} from "react";
import lottie from "lottie-web";

export default function LottieFile({ src, className }) {

    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: src
        })
    }, [])

    return (
        <div className={className} ref={container}></div>
    );
}