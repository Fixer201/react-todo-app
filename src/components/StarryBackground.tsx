import { useRef, useEffect } from 'react';

// Interface describing a single star
interface Star {
    x: number;
    y: number;
    radius: number;
}

// Interface describing a group of stars
interface StarGroup {
    stars: Star[];
    phase: number;
    speed: number;
}

const StarryBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationId: number;
        let resizeHandler: (() => void) | null = null;

        const NUM_STARS = 200;
        const NUM_GROUPS = 4;

        // Array holding all star groups
        const groups: StarGroup[] = [];

        const createStars = () => {
            // Set canvas size to match the window dimensions
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Clear existing groups on resize
            groups.length = 0;

            // Create star groups with independent animation phases
            for (let g = 0; g < NUM_GROUPS; g++) {
                const stars: Star[] = Array.from(
                    { length: NUM_STARS / NUM_GROUPS },
                    () => ({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        radius: Math.random() * 0.9 + 1,
                    }),
                );

                // Each group has its own phase and animation speed
                groups.push({
                    stars,
                    phase: Math.random() * Math.PI * 2,
                    speed: 0.002 + Math.random() * 0.0015,
                });
            }
        };

        createStars();

        const draw = (time: number) => {
            // Clear the entire canvas each frame
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw each group of stars
            for (const group of groups) {
                // Calculate brightness using a sine wave for smooth pulsation
                const brightness =
                    (Math.sin(time * group.speed + group.phase) + 1) / 2; // range: 0–1

                // Compute alpha value based on brightness
                const alpha = 0.1 + brightness * 0.8;

                ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;

                // Draw all stars in the group in one path
                ctx.beginPath();
                for (const star of group.stars) {
                    ctx.moveTo(star.x, star.y);
                    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                }
                ctx.fill();
            }

            // Request the next animation frame
            animationId = requestAnimationFrame(draw);
        };

        // Start the animation loop
        animationId = requestAnimationFrame(draw);

        // Recreate stars when the window is resized
        resizeHandler = () => createStars();
        window.addEventListener('resize', resizeHandler);

        // Cleanup on component unmount
        return () => {
            cancelAnimationFrame(animationId);
            if (resizeHandler)
                window.removeEventListener('resize', resizeHandler);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 0,
                pointerEvents: 'none',
            }}
        />
    );
};

export default StarryBackground;
