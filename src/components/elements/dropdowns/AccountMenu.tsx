import React, { useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { User, LogIn, UserPlus, LogOut } from 'lucide-react';

export interface AccountMenuProps {
    // User state - in real app this would come from auth context
    isLoggedIn?: boolean;
    userName?: string;

    // Callbacks
    onLogin?: () => void;
    onSignUp?: () => void;
    onProfile?: () => void;
    onLogout?: () => void;
}

/**
 * AccountMenu - Dropdown menu for account actions
 * Shows Login/SignUp when logged out, Profile/Logout when logged in
 */
const AccountMenu: React.FC<AccountMenuProps> = ({
    isLoggedIn = false,
    userName = 'User',
    onLogin,
    onSignUp,
    onProfile,
    onLogout,
}) => {
    return (
        <Menu as="div" className="relative">
            {/* Menu Button */}
            <MenuButton
                className="flex items-center gap-2 px-3 py-2 rounded-lg
                           bg-primary text-white hover:bg-secondary hover:text-black
                           transition-colors duration-200 font-medium
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary
                           focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
            >
                <User size={18} />
                <span className="text-sm lg:text-base whitespace-nowrap">
                    Account
                </span>
            </MenuButton>

            {/* Dropdown Menu */}
            <MenuItems
                transition
                anchor="bottom end"
                className="w-56 origin-top-right mt-6 rounded-xl border border-secondary/20
                           bg-primary shadow-lg ring-1 ring-black/5
                           transition duration-200 ease-out
                           data-[closed]:scale-95 data-[closed]:opacity-0
                           z-50"
            >
                <div className="p-1">
                    {!isLoggedIn ? (
                        <>
                            {/* Not logged in - show Login & Sign Up */}
                            <MenuItem>
                                {({ focus }) => (
                                    <button
                                        onClick={onLogin}
                                        className={`${
                                            focus
                                                ? 'bg-secondary text-black'
                                                : 'text-white'
                                        } group flex w-full items-center gap-3 rounded-lg px-3 py-2
                                          text-sm font-medium transition-colors duration-150`}
                                    >
                                        <LogIn
                                            size={18}
                                            className={
                                                focus
                                                    ? 'text-black'
                                                    : 'text-secondary'
                                            }
                                        />
                                        Login
                                    </button>
                                )}
                            </MenuItem>
                            <MenuItem>
                                {({ focus }) => (
                                    <button
                                        onClick={onSignUp}
                                        className={`${
                                            focus
                                                ? 'bg-secondary text-black'
                                                : 'text-white'
                                        } group flex w-full items-center gap-3 rounded-lg px-3 py-2
                                          text-sm font-medium transition-colors duration-150`}
                                    >
                                        <UserPlus
                                            size={18}
                                            className={
                                                focus
                                                    ? 'text-black'
                                                    : 'text-secondary'
                                            }
                                        />
                                        Sign Up
                                    </button>
                                )}
                            </MenuItem>
                        </>
                    ) : (
                        <>
                            {/* Logged in - show Profile & Logout */}
                            <div className="px-3 py-2 text-sm text-white/60 border-b border-secondary/20 mb-1">
                                {userName}
                            </div>
                            <MenuItem>
                                {({ focus }) => (
                                    <button
                                        onClick={onProfile}
                                        className={`${
                                            focus
                                                ? 'bg-secondary text-black'
                                                : 'text-white'
                                        } group flex w-full items-center gap-3 rounded-lg px-3 py-2
                                          text-sm font-medium transition-colors duration-150`}
                                    >
                                        <User
                                            size={18}
                                            className={
                                                focus
                                                    ? 'text-black'
                                                    : 'text-secondary'
                                            }
                                        />
                                        My Profile
                                    </button>
                                )}
                            </MenuItem>
                            <div className="my-1 h-px bg-secondary/20" />
                            <MenuItem>
                                {({ focus }) => (
                                    <button
                                        onClick={onLogout}
                                        className={`${
                                            focus
                                                ? 'bg-red-500 text-white'
                                                : 'text-white'
                                        } group flex w-full items-center gap-3 rounded-lg px-3 py-2
                                          text-sm font-medium transition-colors duration-150`}
                                    >
                                        <LogOut
                                            size={18}
                                            className={
                                                focus
                                                    ? 'text-white'
                                                    : 'text-red-400'
                                            }
                                        />
                                        Logout
                                    </button>
                                )}
                            </MenuItem>
                        </>
                    )}
                </div>
            </MenuItems>
        </Menu>
    );
};

export default AccountMenu;
