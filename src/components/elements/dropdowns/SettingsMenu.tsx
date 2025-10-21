import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import {
    Settings,
    Sun,
    Moon,
    Monitor,
    Globe,
    Volume2,
    Palette,
    HelpCircle,
} from 'lucide-react';
import IconButton from '../buttons/IconButton';

export interface SettingsMenuProps {
    // Current theme - in real app this would come from theme context
    currentTheme?: 'light' | 'dark' | 'system';
    onThemeChange?: (theme: 'light' | 'dark' | 'system') => void;
    onLanguageChange?: () => void;
    onSoundToggle?: () => void;
    onAccessibility?: () => void;
    onHelp?: () => void;
}

/**
 * SettingsMenu - Dropdown menu for app settings
 * Contains theme selector and other settings placeholders
 */
const SettingsMenu: React.FC<SettingsMenuProps> = ({
    currentTheme = 'system',
    onThemeChange,
    onLanguageChange,
    onSoundToggle,
    onAccessibility,
    onHelp,
}) => {
    const themeIcons = {
        light: Sun,
        dark: Moon,
        system: Monitor,
    };

    return (
        <Menu as="div" className="relative overflow-hidden">
            {/* Menu Button - Icon only */}
            <MenuButton as="div">
                <IconButton
                    icon={<Settings size={20} />}
                    ariaLabel="Settings"
                    variant="ghost"
                    size="md"
                />
            </MenuButton>

            {/* Dropdown Menu */}
            <MenuItems
                transition
                anchor="bottom end"
                className="w-64 origin-top-right mt-6 rounded-xl border border-secondary/20
                           bg-primary shadow-lg ring-1 ring-black/5
                           transition duration-200 ease-out
                           data-[closed]:scale-95 data-[closed]:opacity-0
                           z-50"
            >
                <div className="p-1">
                    {/* Settings Header */}
                    <div className="px-3 py-2 text-xs font-semibold text-white/60 uppercase tracking-wide">
                        Settings
                    </div>

                    {/* Theme Selection */}
                    <div className="px-3 py-2 mb-1">
                        <div className="text-xs font-medium text-white/80 mb-2">
                            Theme
                        </div>
                        <div className="flex gap-2">
                            {(['light', 'dark', 'system'] as const).map(
                                (theme) => {
                                    const Icon = themeIcons[theme];
                                    const isActive = currentTheme === theme;
                                    return (
                                        <button
                                            key={theme}
                                            onClick={() =>
                                                onThemeChange?.(theme)
                                            }
                                            className={`flex-1 flex flex-col items-center gap-1 p-2 rounded-lg
                                                   transition-colors duration-150
                                                   ${
                                                       isActive
                                                           ? 'bg-secondary text-black'
                                                           : 'bg-primary hover:bg-secondary/20 text-white'
                                                   }`}
                                            aria-label={`Set ${theme} theme`}
                                        >
                                            <Icon
                                                size={18}
                                                className={
                                                    isActive
                                                        ? 'text-black'
                                                        : 'text-secondary'
                                                }
                                            />
                                            <span className="text-xs capitalize">
                                                {theme}
                                            </span>
                                        </button>
                                    );
                                },
                            )}
                        </div>
                    </div>

                    <div className="my-1 h-px bg-secondary/20" />

                    {/* Other Settings (Placeholders) */}
                    <MenuItem>
                        {({ focus }) => (
                            <button
                                onClick={onLanguageChange}
                                className={`${
                                    focus
                                        ? 'bg-secondary text-black'
                                        : 'text-white'
                                } group flex w-full items-center gap-3 rounded-lg px-3 py-2
                                  text-sm font-medium transition-colors duration-150`}
                            >
                                <Globe
                                    size={18}
                                    className={
                                        focus ? 'text-black' : 'text-secondary'
                                    }
                                />
                                Language
                            </button>
                        )}
                    </MenuItem>

                    <MenuItem>
                        {({ focus }) => (
                            <button
                                onClick={onSoundToggle}
                                className={`${
                                    focus
                                        ? 'bg-secondary text-black'
                                        : 'text-white'
                                } group flex w-full items-center gap-3 rounded-lg px-3 py-2
                                  text-sm font-medium transition-colors duration-150`}
                            >
                                <Volume2
                                    size={18}
                                    className={
                                        focus ? 'text-black' : 'text-secondary'
                                    }
                                />
                                Sound
                            </button>
                        )}
                    </MenuItem>

                    <MenuItem>
                        {({ focus }) => (
                            <button
                                onClick={onAccessibility}
                                className={`${
                                    focus
                                        ? 'bg-secondary text-black'
                                        : 'text-white'
                                } group flex w-full items-center gap-3 rounded-lg px-3 py-2
                                  text-sm font-medium transition-colors duration-150`}
                            >
                                <Palette
                                    size={18}
                                    className={
                                        focus ? 'text-black' : 'text-secondary'
                                    }
                                />
                                Accessibility
                            </button>
                        )}
                    </MenuItem>

                    <div className="my-1 h-px bg-secondary/20" />

                    <MenuItem>
                        {({ focus }) => (
                            <button
                                onClick={onHelp}
                                className={`${
                                    focus
                                        ? 'bg-secondary text-black'
                                        : 'text-white'
                                } group flex w-full items-center gap-3 rounded-lg px-3 py-2
                                  text-sm font-medium transition-colors duration-150`}
                            >
                                <HelpCircle
                                    size={18}
                                    className={
                                        focus ? 'text-black' : 'text-secondary'
                                    }
                                />
                                Help & Support
                            </button>
                        )}
                    </MenuItem>
                </div>
            </MenuItems>
        </Menu>
    );
};

export default SettingsMenu;
