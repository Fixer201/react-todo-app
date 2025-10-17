import { useRef, useEffect } from 'react';

const StarryBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        let animationId: number;
        let resizeHandler: (() => void) | null = null;

        const timeoutId = setTimeout(() => {
            const ctx = canvas.getContext('2d');
            if (!ctx) return;

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const stars = Array.from({ length: 50 }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 0.5 + 1,
                alpha: Math.random(),
                delta: Math.random() * 0.02,
            }));

            const animate = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                stars.forEach((star) => {
                    star.alpha += star.delta;
                    if (star.alpha <= 0 || star.alpha >= 1) star.delta *= -1;

                    ctx.beginPath();
                    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
                    ctx.fill();
                });

                animationId = requestAnimationFrame(animate);
            };

            animate();

            resizeHandler = () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                stars.forEach((star) => {
                    star.x = Math.random() * canvas.width;
                    star.y = Math.random() * canvas.height;
                });
            };

            window.addEventListener('resize', resizeHandler);
        }, 100); // Задержка 100 мс перед запуском анимации

        return () => {
            clearTimeout(timeoutId);
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
            if (resizeHandler) {
                window.removeEventListener('resize', resizeHandler);
            }
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
