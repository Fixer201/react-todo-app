import { motion } from 'motion/react';
import {
    container,
    section,
    linkItem,
    headerSlide,
} from '../../animations/motionVariants';

interface NavLink {
    id: number;
    name: string;
    href: string;
}

const navLinks = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'About', href: '/about' },
    { id: 3, name: 'Our team', href: '/team' },
    { id: 4, name: 'Services', href: '/services' },
];

const Header = () => {
    return (
        <motion.header
            variants={headerSlide}
            initial="hidden"
            animate="show"
            transition={{
                duration: 0.6,
                ease: 'easeOut',
            }}
            className="fixed will-change-transform top-4 w-10/12 mx-auto left-0 right-0 z-1000"
        >
            {/* Desktop Navbar */}
            <motion.nav
                variants={container}
                initial="hidden"
                animate="show"
                className="hidden sm:block h-16 will-change-transform bg-primary max-w-[1500px] mx-auto border border-secondary rounded-2xl glow-secondary"
            >
                <div className="flex px-8 lg:px-12 h-full w-full items-center font-light">
                    <motion.div
                        variants={section}
                        transition={{
                            duration: 0.8,
                            ease: 'easeOut',
                        }}
                        className="flex gap-8 text-sm lg:text-xl items-center"
                    >
                        <a href="/" className="hidden lg:block">
                            <img
                                src="/logo.svg"
                                width="50"
                                height="50"
                                alt="Logo"
                                loading="lazy"
                                className="glow-icon-secondary hover:scale-110 transition-transform"
                            />
                        </a>
                        <a href="/" className="font-black">
                            EasyToDo
                        </a>
                    </motion.div>

                    <motion.ul className="flex gap-4 md:gap-8 text-sm md:text-lg xl:text-xl items-center mx-auto">
                        {navLinks.map(({ id, name, href }: NavLink) => (
                            <motion.li
                                variants={linkItem}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                                key={id}
                            >
                                <a href={href} className="link">
                                    {name}
                                </a>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.div
                        variants={section}
                        transition={{
                            duration: 0.8,
                            ease: 'easeOut',
                        }}
                        className="flex gap-2 md:gap-8 items-center"
                    >
                        <button className="primary-button font-normal text-sm xl:text-lg xl:w-28 h-12">
                            Login
                        </button>
                        <button className="primary-button font-normal text-sm xl:text-lg xl:w-28 h-12">
                            Sign Up
                        </button>
                    </motion.div>
                </div>
            </motion.nav>
        </motion.header>
    );
};

export default Header;
