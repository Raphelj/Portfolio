"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";

export default function ScrollyCanvas() {
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const { scrollYProgress } = useScroll();

    const frameCount = 160;
    const lerpFactor = 0.05;

    useEffect(() => {
        const loadImages = async () => {
            const loadedImages = [];
            const promises = [];

            for (let i = 0; i < frameCount; i++) {
                const promise = new Promise((resolve) => {
                    const img = new Image();
                    const formattedIndex = String(i).padStart(3, "0");
                    img.src = `/Image_Sequence/frame_${formattedIndex}_delay-0.05s.png`;
                    img.onload = () => {
                        loadedImages[i] = img;
                        resolve();
                    };
                    img.onerror = (e) => {
                        console.error(`Failed to load frame ${i}`, e);
                        resolve();
                    };
                });
                promises.push(promise);
            }

            await Promise.all(promises);
            setImages(loadedImages);
            setIsLoaded(true);
        };

        loadImages();
    }, []);

    useEffect(() => {
        if (!isLoaded || !canvasRef.current || images.length === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d", { alpha: true });

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        let animationFrameId;
        const state = { currentProgress: 0 };

        const render = () => {
            const target = scrollYProgress.get();
            state.currentProgress += (target - state.currentProgress) * lerpFactor;

            let frameIndex = Math.round(state.currentProgress * (frameCount - 1));
            if (frameIndex < 0) frameIndex = 0;
            if (frameIndex > frameCount - 1) frameIndex = frameCount - 1;

            const img = images[frameIndex];
            if (img) {
                const hRatio = canvas.width / img.width;
                const vRatio = canvas.height / img.height;
                const ratio = Math.max(hRatio, vRatio);

                const centerShift_x = (canvas.width - img.width * ratio) / 2;
                const centerShift_y = (canvas.height - img.height * ratio) / 2;

                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(
                    img,
                    0, 0, img.width, img.height,
                    centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
                );
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isLoaded, images, scrollYProgress]);

    return (
        <div className="fixed inset-0 z-0 h-screen w-screen bg-black overflow-hidden pointer-events-none">
            <canvas
                ref={canvasRef}
                className="block w-full h-full object-cover"
            />
        </div>
    );
}
