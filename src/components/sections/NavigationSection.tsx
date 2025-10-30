import React from 'react';
import { motion } from 'motion/react';
import { Bell, LogIn, LogOut, User as UserIcon, UserPlus } from 'lucide-react';
import { navLinks, NavLink } from '../../layout/Header';

interface NavigationSectionProps {
    setIsMenuOpen: (value: boolean) => void;
    isLoggedIn: boolean;
    notificationCount: number;
    userName?: string;
    handleLogin: () => void;
    handleSignUp: () => void;
    handleProfile: () => void;
    handleLogout: () => void;
    handleNotifications: () => void;
}

const NavigationSection: React.FC<NavigationSectionProps> = ({
    setIsMenuOpen,
    isLoggedIn,
    notificationCount,
    userName = 'John Doe',
    handleLogin,
    handleSignUp,
    handleProfile,
    handleLogout,
    handleNotifications,
}) => {
    return (
        <>
            <div className="mb-6">
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.15,
                        duration: 0.3,
                    }}
                    className="text-xs font-semibold text-white/60 uppercase tracking-wide mb-3 px-3"
                >
                    Navigation
                </motion.div>
                <ul className="flex flex-col gap-1">
                    {navLinks.map(({ id, name, href, icon }: NavLink) => (
                        <motion.li
                            key={id}
                            initial={{
                                x: 50,
                                opacity: 0,
                            }}
                            animate={{
                                x: 0,
                                opacity: 1,
                            }}
                            transition={{
                                delay: 0.15 + id * 0.05,
                                duration: 0.3,
                            }}
                        >
                            <a
                                href={href}
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center gap-3 px-3 py-3 rounded-lg text-white hover:bg-secondary hover:text-black transition-colors duration-150 group"
                            >
                                <span className="text-secondary group-hover:text-black transition-colors">
                                    {icon}
                                </span>
                                <span className="text-sm font-medium">
                                    {name}
                                </span>
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </div>

            {/* Divider */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.35, duration: 0.3 }}
                className="w-full h-px bg-secondary/20 my-4"
            />

            {/* Account Section */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="flex flex-col gap-3"
            >
                <div className="text-xs font-semibold text-white/60 uppercase tracking-wide px-3">
                    Account
                </div>

                {!isLoggedIn ? (
                    <div className="flex flex-col gap-2">
                        <motion.button
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 0.45,
                                duration: 0.3,
                            }}
                            onClick={() => {
                                handleLogin();
                                setIsMenuOpen(false);
                            }}
                            className="flex items-center gap-3 px-3 py-3 rounded-lg text-white hover:bg-secondary hover:text-black transition-colors duration-150 group"
                        >
                            <LogIn
                                size={18}
                                className="text-secondary group-hover:text-black transition-colors"
                            />
                            <span className="text-sm font-medium">Login</span>
                        </motion.button>
                        <motion.button
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 0.5,
                                duration: 0.2,
                            }}
                            onClick={() => {
                                handleSignUp();
                                setIsMenuOpen(false);
                            }}
                            className="flex items-center gap-3 px-3 py-3 bg-secondary text-black rounded-lg hover:brightness-110 transition-all duration-150 glow-secondary"
                        >
                            <UserPlus size={18} />
                            <span className="text-sm font-bold">Sign Up</span>
                        </motion.button>
                    </div>
                ) : (
                    <div className="flex flex-col gap-2">
                        {/* User Info */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 0.45,
                                duration: 0.3,
                            }}
                            className="flex items-center gap-3 px-3 py-3 bg-secondary/10 rounded-lg border border-secondary/30"
                        >
                            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                                <UserIcon size={16} className="text-black" />
                            </div>
                            <span className="text-sm font-medium">
                                {userName}
                            </span>
                        </motion.div>

                        <motion.button
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 0.5,
                                duration: 0.3,
                            }}
                            onClick={() => {
                                handleProfile();
                                setIsMenuOpen(false);
                            }}
                            className="flex items-center gap-3 px-3 py-3 rounded-lg text-white hover:bg-secondary hover:text-black transition-colors duration-150 group"
                        >
                            <UserIcon
                                size={18}
                                className="text-secondary group-hover:text-black transition-colors"
                            />
                            <span className="text-sm font-medium">
                                My Profile
                            </span>
                        </motion.button>

                        <motion.button
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 0.55,
                                duration: 0.3,
                            }}
                            onClick={() => {
                                handleNotifications();
                                setIsMenuOpen(false);
                            }}
                            className="flex items-center gap-3 px-3 py-3 rounded-lg text-white hover:bg-secondary hover:text-black transition-colors duration-150 group"
                        >
                            <Bell
                                size={18}
                                className="text-secondary group-hover:text-black transition-colors"
                            />
                            <span className="text-sm font-medium flex-1 text-left">
                                Notifications
                            </span>
                            {notificationCount > 0 && (
                                <span className="px-2 py-0.5 text-xs bg-secondary text-black rounded-full font-bold">
                                    {notificationCount}
                                </span>
                            )}
                        </motion.button>

                        {/* Divider */}
                        <div className="h-px bg-secondary/20 my-1" />

                        <motion.button
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                delay: 0.6,
                                duration: 0.3,
                            }}
                            onClick={() => {
                                handleLogout();
                                setIsMenuOpen(false);
                            }}
                            className="flex items-center gap-3 px-3 py-3 rounded-lg text-red-400 hover:bg-red-500/20 hover:text-red-300 transition-colors duration-150 group"
                        >
                            <LogOut
                                size={18}
                                className="text-red-400 group-hover:text-red-300 transition-colors"
                            />
                            <span className="text-sm font-medium">Logout</span>
                        </motion.button>
                    </div>
                )}
            </motion.div>
        </>
    );
};

export default NavigationSection;
