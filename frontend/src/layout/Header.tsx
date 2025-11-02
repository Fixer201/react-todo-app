import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Bell, Menu, X, Home, Users, Briefcase, Info } from 'lucide-react';
import {
    container,
    sectionSlideFromTop,
    linkItem,
    headerSlide,
    fadeOverlay,
    slideMenuFromRight,
} from '../animations/motionVariants';
import { IconButton } from '../components/elements/buttons';
import { AccountMenu, SettingsMenu } from '../components/elements/dropdowns';
import NavigationSection from '../components/sections/NavigationSection';
import { useAuth } from '../context/AuthContext';

export interface NavLink {
    id: number;
    name: string;
    href: string;
    icon?: React.ReactNode;
}

export const navLinks: NavLink[] = [
    { id: 1, name: 'Home', href: '/', icon: <Home size={18} /> },
    {
        id: 2,
        name: 'For Who',
        href: '/whoOurUsers',
        icon: <Info size={18} />,
    },
    { id: 3, name: 'Our team', href: '/team', icon: <Users size={18} /> },
    {
        id: 4,
        name: 'Services',
        href: '/services',
        icon: <Briefcase size={18} />,
    },
];

const Header = () => {
    // Demo state - in real app this would come from auth context
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [notificationCount, setNotificationCount] = useState(3);
    const [currentTheme, setCurrentTheme] = useState<
        'light' | 'dark' | 'system'
    >('system');
    const { openAuthModal } = useAuth();

    // Demo handlers
    const handleLogin = () => {
        openAuthModal('login');
    };

    const handleSignUp = () => {
        openAuthModal('register');
    };

    const handleProfile = () => {
        console.log('Profile clicked');
    };

    const handleLogout = () => {
        console.log('Logout clicked');
        setIsLoggedIn(false);
    };

    const handleNotifications = () => {
        console.log('Notifications clicked');
        setNotificationCount(0);
    };

    const handleThemeChange = (theme: 'light' | 'dark' | 'system') => {
        console.log('Theme changed to:', theme);
        setCurrentTheme(theme);
    };

    return (
        <motion.header
            variants={headerSlide}
            initial="hidden"
            animate="show"
            transition={{
                duration: 0.6,
                ease: 'easeOut',
            }}
            className="fixed will-change-transform sm:top-4 sm:w-10/12 mx-auto left-0 right-0 z-1000"
        >
            {/* Mobile Navbar */}
            <motion.nav
                variants={container}
                initial="hidden"
                animate="show"
                className="flex sm:hidden justify-between items-center w-full h-16 will-change-transform px-4 bg-primary/80 backdrop-blur-md border-b border-secondary/30"
            >
                {/* Logo with Icon */}
                <motion.a
                    href="/"
                    className="flex items-center gap-2 z-1001 group"
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.div
                        className="relative"
                        animate={{
                            rotate: [0, 5, -5, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatDelay: 5,
                            ease: 'easeInOut',
                        }}
                    >
                        <img
                            src="/logo.svg"
                            width="32"
                            height="32"
                            alt="Logo"
                            className="glow-icon-secondary group-active:scale-90 transition-transform"
                        />
                    </motion.div>
                    <span className="font-black text-base whitespace-nowrap text-gradient">
                        EasyToDo
                    </span>
                </motion.a>

                {/* Menu Button */}
                <motion.button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="relative hover:cursor-pointer p-2 rounded-lg hover:bg-secondary/20 transition-colors z-1001"
                    aria-label="Toggle menu"
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.div
                        animate={{ rotate: isMenuOpen ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {isMenuOpen ? (
                            <X height={28} width={28} />
                        ) : (
                            <Menu height={28} width={28} />
                        )}
                    </motion.div>
                </motion.button>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            variants={fadeOverlay}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/60 h-screen backdrop-blur-sm z-999 sm:hidden"
                            onClick={() => setIsMenuOpen(false)}
                        />

                        {/* Slide-in Menu */}
                        <motion.div
                            variants={slideMenuFromRight}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            transition={{
                                duration: 0.4,
                                ease: [0.4, 0, 0.2, 1], // easeOutCubic
                            }}
                            className="fixed right-0 top-0 h-screen w-3/4 max-w-sm bg-primary/95 backdrop-blur-md border-l border-secondary/50 glow-secondary z-1000 sm:hidden overflow-y-auto"
                        >
                            {/* Header with Logo & Close */}
                            <div className="sticky top-0 bg-primary/95 backdrop-blur-md border-b border-secondary/20 px-6 py-4 flex items-center justify-between">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2, duration: 0.3 }}
                                    className="flex items-center gap-2"
                                >
                                    <img
                                        src="/logo.svg"
                                        width="32"
                                        height="32"
                                        alt="Logo"
                                        className="glow-icon-secondary"
                                    />
                                    <span className="font-black text-base">
                                        EasyToDo
                                    </span>
                                </motion.div>
                                <motion.button
                                    initial={{ opacity: 0, rotate: -90 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    transition={{ delay: 0.2, duration: 0.3 }}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-2 hover:bg-secondary/20 rounded-lg transition-colors"
                                    aria-label="Close menu"
                                >
                                    <X height={20} width={20} />
                                </motion.button>
                            </div>

                            <div className="flex flex-col h-full p-6">
                                <NavigationSection
                                    setIsMenuOpen={setIsMenuOpen}
                                    isLoggedIn={isLoggedIn}
                                    notificationCount={notificationCount}
                                    userName="John Doe"
                                    handleLogin={handleLogin}
                                    handleSignUp={handleSignUp}
                                    handleProfile={handleProfile}
                                    handleLogout={handleLogout}
                                    handleNotifications={handleNotifications}
                                />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Desktop Navbar */}
            <motion.nav
                variants={container}
                initial="hidden"
                animate="show"
                className="hidden sm:block w-full h-16 will-change-transform bg-primary/90 backdrop-blur-lg max-w-[1500px]
                 mx-auto border border-secondary/50 rounded-2xl glow-secondary shadow-2xl shadow-secondary/20"
            >
                <div className="flex px-4 lg:px-6 xl:px-12 h-full w-full items-center font-light justify-between">
                    {/* Left: Logo & Brand */}
                    <motion.div
                        variants={sectionSlideFromTop}
                        transition={{
                            duration: 0.8,
                            ease: 'easeOut',
                        }}
                        className="flex gap-2 xl:gap-4 text-sm lg:text-xl items-center"
                    >
                        <motion.a
                            href="/"
                            className="hidden lg:flex items-center justify-center"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{
                                type: 'spring',
                                stiffness: 400,
                                damping: 17,
                            }}
                        >
                            <img
                                src="/logo.svg"
                                width="50"
                                height="50"
                                alt="Logo"
                                loading="lazy"
                                className="glow-icon-secondary"
                            />
                        </motion.a>
                        <a
                            href="/"
                            className="font-black text-sm md:text-base xl:text-lg whitespace-nowrap hover:text-secondary transition-colors duration-200"
                        >
                            EasyToDo
                        </a>
                    </motion.div>

                    {/* Center: Navigation Links */}
                    <motion.ul className="flex gap-1 lg:gap-2 items-center">
                        {navLinks.map(({ id, name, href, icon }: NavLink) => (
                            <motion.li
                                variants={linkItem}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                                key={id}
                            >
                                <motion.a
                                    href={href}
                                    className="flex items-center gap-2 px-3 xl:px-4 py-2 rounded-lg text-sm xl:text-base font-medium
                                               text-white/90 hover:text-white hover:bg-secondary/20 transition-all duration-200
                                               whitespace-nowrap group relative overflow-hidden"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {/* Hover background effect */}
                                    <motion.span
                                        className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/30 to-secondary/0 -z-10"
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: '100%' }}
                                        transition={{ duration: 0.6 }}
                                    />
                                    <span className="hidden xl:block text-secondary/80 group-hover:text-secondary transition-colors">
                                        {icon}
                                    </span>
                                    <span className="group-hover:text-secondary transition-colors">
                                        {name}
                                    </span>
                                </motion.a>
                            </motion.li>
                        ))}
                    </motion.ul>

                    {/* Right: Actions (Account, Notifications, Settings) */}
                    <motion.div
                        variants={sectionSlideFromTop}
                        transition={{
                            duration: 0.8,
                            ease: 'easeOut',
                        }}
                        className="flex gap-1 lg:gap-2 items-center"
                    >
                        {/* Notifications - visible on lg+ */}
                        <motion.div
                            className="hidden lg:block"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <IconButton
                                icon={<Bell size={20} />}
                                badge={notificationCount}
                                ariaLabel="Notifications"
                                onClick={handleNotifications}
                                variant="ghost"
                                size="md"
                            />
                        </motion.div>

                        {/* Settings - visible on lg+ */}
                        <motion.div
                            className="hidden sm:block"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <SettingsMenu
                                currentTheme={currentTheme}
                                onThemeChange={handleThemeChange}
                                onLanguageChange={() => console.log('Language')}
                                onSoundToggle={() => console.log('Sound')}
                                onAccessibility={() =>
                                    console.log('Accessibility')
                                }
                                onHelp={() => console.log('Help')}
                            />
                        </motion.div>

                        {/* Account Menu - always visible */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <AccountMenu
                                isLoggedIn={isLoggedIn}
                                userName="John Doe"
                                onLogin={handleLogin}
                                onSignUp={handleSignUp}
                                onProfile={handleProfile}
                                onLogout={handleLogout}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </motion.nav>
        </motion.header>
    );
};

export default Header;
