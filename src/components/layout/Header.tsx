import { motion } from 'motion/react';
import { useState } from 'react';
import { Bell } from 'lucide-react';
import {
    container,
    sectionSlideFromTop,
    linkItem,
    headerSlide,
} from '../../animations/motionVariants';
import { IconButton } from '../elements/buttons';
import { AccountMenu, SettingsMenu } from '../elements/dropdowns';

interface NavLink {
    id: number;
    name: string;
    href: string;
}

const navLinks = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'About Us', href: '/about' },
    { id: 3, name: 'Our team', href: '/team' },
    { id: 4, name: 'Services', href: '/services' },
];

const Header = () => {
    // Demo state - in real app this would come from auth context
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [notificationCount, setNotificationCount] = useState(3);
    const [currentTheme, setCurrentTheme] = useState<
        'light' | 'dark' | 'system'
    >('system');

    // Demo handlers
    const handleLogin = () => {
        console.log('Login clicked');
        setIsLoggedIn(true);
    };

    const handleSignUp = () => {
        console.log('Sign Up clicked');
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
            className="fixed will-change-transform top-4 w-10/12 mx-auto left-0 right-0 z-1000"
        >
            {/* Desktop Navbar */}
            <motion.nav
                variants={container}
                initial="hidden"
                animate="show"
                className="hidden sm:block w-full h-16 will-change-transform bg-primary max-w-[1500px]
                 mx-auto border border-secondary rounded-2xl glow-secondary"
            >
                <div className="flex px-4 lg:px-6 xl:px-12 h-full w-full items-center font-light justify-between">
                    {/* Left: Logo & Brand */}
                    <motion.div
                        variants={sectionSlideFromTop}
                        transition={{
                            duration: 0.8,
                            ease: 'easeOut',
                        }}
                        className="flex gap-2 xl:gap-8 text-sm lg:text-xl items-center"
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
                        <a
                            href="/"
                            className="font-black text-sm md:text-base xl:text-lg whitespace-nowrap"
                        >
                            EasyToDo
                        </a>
                    </motion.div>

                    {/* Center: Navigation Links */}
                    <motion.ul className="flex gap-2 lg:gap-4 md:gap-8 text-sm xl:text-lg items-center">
                        {navLinks.map(({ id, name, href }: NavLink) => (
                            <motion.li
                                variants={linkItem}
                                transition={{ duration: 0.4, ease: 'easeOut' }}
                                key={id}
                            >
                                <a
                                    href={href}
                                    className="link font-normal whitespace-nowrap"
                                >
                                    {name}
                                </a>
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
                        className="flex gap-2 items-center"
                    >
                        {/* Notifications - visible on lg+ */}
                        <div className="hidden lg:block">
                            <IconButton
                                icon={<Bell size={20} />}
                                badge={notificationCount}
                                ariaLabel="Notifications"
                                onClick={handleNotifications}
                                variant="ghost"
                                size="md"
                            />
                        </div>

                        {/* Settings - visible on lg+ */}
                        <div className="hidden sm:block">
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
                        </div>

                        {/* Account Menu - always visible */}
                        <AccountMenu
                            isLoggedIn={isLoggedIn}
                            userName="John Doe"
                            onLogin={handleLogin}
                            onSignUp={handleSignUp}
                            onProfile={handleProfile}
                            onLogout={handleLogout}
                        />
                    </motion.div>
                </div>
            </motion.nav>
        </motion.header>
    );
};

export default Header;
