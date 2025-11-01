import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../../context/AuthContext';
import { CircleX } from 'lucide-react';
import { Button } from '../elements/buttons';
import { Input } from '../elements/inputs';
import { fadeOverlay, modalPopup } from '../../animations/motionVariants';

const AuthModal = () => {
    const { isAuthModalOpen, authModalMode, closeAuthModal, switchAuthMode } =
        useAuth();

    // Form state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false);

    // UI state
    const [isLoading, setIsLoading] = useState(false);
    const [generalError, setGeneralError] = useState('');

    // Refs
    const overlayRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLElement>(null);

    // Clear only general error when switching modes (preserve input values for better UX)
    useEffect(() => {
        setGeneralError('');
    }, [authModalMode]);

    // Email validation
    const validateEmail = (value: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
            return { isValid: false, message: 'Email is required' };
        }
        if (!emailRegex.test(value)) {
            return { isValid: false, message: 'Please enter a valid email' };
        }
        return { isValid: true, message: 'Looks good!' };
    };

    // Password validation
    const validatePassword = (value: string) => {
        if (!value) {
            return { isValid: false, message: 'Password is required' };
        }
        if (value.length < 6) {
            return {
                isValid: false,
                message: 'Password must be at least 6 characters',
            };
        }
        return { isValid: true, message: 'Strong password!' };
    };

    // Confirm password validation
    const validateConfirmPassword = (value: string) => {
        if (!value) {
            return { isValid: false, message: 'Please confirm your password' };
        }
        if (value !== password) {
            return { isValid: false, message: 'Passwords do not match' };
        }
        return { isValid: true, message: 'Passwords match!' };
    };

    // Name validation
    const validateName = (value: string) => {
        if (!value) {
            return { isValid: false, message: 'Name is required' };
        }
        if (value.length < 2) {
            return {
                isValid: false,
                message: 'Name must be at least 2 characters',
            };
        }
        return { isValid: true, message: 'Looking good!' };
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setGeneralError('');

        if (authModalMode === 'login') {
            // Validate login
            const emailValidation = validateEmail(email);
            const passwordValidation = validatePassword(password);

            if (!emailValidation.isValid || !passwordValidation.isValid) {
                setGeneralError('Please fix the errors above');
                return;
            }

            setIsLoading(true);

            // TODO: Replace with actual login logic
            setTimeout(() => {
                console.log('Login:', { email, password, rememberMe });
                setIsLoading(false);
                closeAuthModal();
            }, 1500);
        } else {
            // Validate registration
            const nameValidation = validateName(name);
            const emailValidation = validateEmail(email);
            const passwordValidation = validatePassword(password);
            const confirmValidation = validateConfirmPassword(confirmPassword);

            if (
                !nameValidation.isValid ||
                !emailValidation.isValid ||
                !passwordValidation.isValid ||
                !confirmValidation.isValid
            ) {
                setGeneralError('Please fix the errors above');
                return;
            }

            if (!acceptTerms) {
                setGeneralError('You must accept the Terms & Conditions');
                return;
            }

            setIsLoading(true);

            // TODO: Replace with actual registration logic
            setTimeout(() => {
                console.log('Register:', {
                    name,
                    email,
                    password,
                    acceptTerms,
                });
                setIsLoading(false);
                closeAuthModal();
            }, 1500);
        }
    };

    // Handle social login
    const handleSocialLogin = (provider: 'google' | 'github') => {
        console.log(`${provider} login clicked`);
        // TODO: Implement OAuth
    };

    // Close modal (AnimatePresence handles exit animation)
    const handleClose = useCallback(() => {
        closeAuthModal();
    }, [closeAuthModal]);

    // Handle overlay click
    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === overlayRef.current) {
            handleClose();
        }
    };

    // Handle ESC key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isAuthModalOpen) {
                handleClose();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isAuthModalOpen]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isAuthModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isAuthModalOpen]);

    return (
        <AnimatePresence>
            {isAuthModalOpen && (
                <motion.div
                    ref={overlayRef}
                    onClick={handleOverlayClick}
                    variants={fadeOverlay}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md z-1003"
                >
                    <motion.section
                        ref={modalRef}
                        variants={modalPopup}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        className="flex flex-col max-w-2xl w-5/6 max-h-[90vh] bg-primary/90 backdrop-blur-sm border border-secondary glow-secondary-on-hover rounded-2xl p-4"
                    >
                {/* Modal Header */}
                <div className="flex relative flex-col w-full lg:gap-4">
                    <div className="flex relative flex-row w-full justify-center items-center">
                        <h2 className="text-xl lg:text-2xl w-fit font-black section-title-underline text-white text-center glow-icon-secondary transition duration-200">
                            Authentication
                        </h2>
                        <CircleX
                            onClick={handleClose}
                            color="red"
                            className="absolute right-0 glow-red-on-hover cursor-pointer transition-transform hover:scale-110 duration-200"
                        />
                    </div>

                    {/* Header Tabs with Morphing Background */}
                    <div className="relative bg-background border border-primary hover:border-secondary rounded-2xl my-2 font-light text-lg text-gray-300 flex flex-row justify-evenly items-center transition-all duration-300 overflow-hidden">
                        {/* Morphing background indicator */}
                        <div
                            className={`
                                absolute top-2 bottom-2 w-[calc(50%-1rem)]
                                bg-primary rounded-xl
                                transition-all duration-300 ease-out
                                ${authModalMode === 'login' ? 'left-2' : 'left-[calc(50%+0.5rem)]'}
                            `}
                        />

                        {/* Login Tab */}
                        <Button
                            variant="transparent"
                            autoShrink={true}
                            className="relative z-10 w-1/2 max-w-md h-8 text-base font-normal rounded-2xl m-2"
                            onClick={() => switchAuthMode('login')}
                        >
                            Login
                        </Button>

                        {/* Register Tab */}
                        <Button
                            variant="transparent"
                            autoShrink={true}
                            onClick={() => switchAuthMode('register')}
                            className="relative z-10 w-1/2 max-w-md h-8 text-base font-normal rounded-2xl m-2"
                        >
                            Register
                        </Button>
                    </div>
                </div>

                {/* Form Container */}
                <article className="flex flex-col w-full flex-1 overflow-hidden bg-background/60 border border-secondary rounded-2xl">
                    {/* Form Header */}
                    <div className="w-full bg-primary border-b border-secondary text-center p-2">
                        <h3 className="text-md tracking-wide font-bold text-white">
                            {authModalMode === 'login' ? 'Login' : 'Register'}
                        </h3>
                    </div>

                    {/* Form Content - Scrollable */}
                    <div className="w-full flex-1 overflow-y-auto py-4 px-4">
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col w-full gap-4"
                        >
                            {/* General Error */}
                            {generalError && (
                                <div className="bg-red/10 border border-red/50 rounded-lg p-3 text-red text-sm animate-[shake_0.3s_ease-in-out]">
                                    {generalError}
                                </div>
                            )}

                            {/* Register-only fields */}
                            {authModalMode === 'register' && (
                                <Input
                                    type="text"
                                    label="Name"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    onValidate={validateName}
                                    isRequired
                                    hideIcon
                                />
                            )}

                            {/* Email Input */}
                            <Input
                                type="email"
                                label="Email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onValidate={validateEmail}
                                isRequired
                            />

                            {/* Password Input */}
                            <Input
                                type="password"
                                label="Password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onValidate={validatePassword}
                                isRequired
                            />

                            {/* Register-only: Confirm Password */}
                            {authModalMode === 'register' && (
                                <Input
                                    type="password"
                                    label="Confirm Password"
                                    placeholder="Re-enter your password"
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                    onValidate={validateConfirmPassword}
                                    isRequired
                                />
                            )}

                            {/* Login-only: Remember Me + Forgot Password */}
                            {authModalMode === 'login' && (
                                <div className="flex justify-between items-center text-sm">
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            checked={rememberMe}
                                            onChange={(e) =>
                                                setRememberMe(e.target.checked)
                                            }
                                            className="w-4 h-4 rounded border-2 border-secondary/50 bg-primary/40
                                                     checked:bg-secondary checked:border-secondary
                                                     focus:ring-2 focus:ring-secondary/30 focus:outline-none
                                                     transition-all duration-200 cursor-pointer"
                                        />
                                        <span className="text-gray-300 group-hover:text-secondary transition-colors duration-200">
                                            Remember me
                                        </span>
                                    </label>

                                    <button
                                        type="button"
                                        className="text-secondary hover:text-white hover:underline transition-all duration-200"
                                        onClick={() =>
                                            console.log('Forgot password')
                                        }
                                    >
                                        Forgot Password?
                                    </button>
                                </div>
                            )}

                            {/* Register-only: Terms & Conditions */}
                            {authModalMode === 'register' && (
                                <label className="flex items-start gap-2 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        checked={acceptTerms}
                                        onChange={(e) =>
                                            setAcceptTerms(e.target.checked)
                                        }
                                        className="w-4 h-4 mt-1 rounded border-2 border-secondary/50 bg-primary/40
                                                 checked:bg-secondary checked:border-secondary
                                                 focus:ring-2 focus:ring-secondary/30 focus:outline-none
                                                 transition-all duration-200 cursor-pointer"
                                    />
                                    <span className="text-gray-300 text-sm group-hover:text-secondary transition-colors duration-200">
                                        I agree to the{' '}
                                        <button
                                            type="button"
                                            className="text-secondary hover:underline"
                                            onClick={() =>
                                                console.log('Terms clicked')
                                            }
                                        >
                                            Terms & Conditions
                                        </button>
                                    </span>
                                </label>
                            )}

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                variant="cta"
                                fullWidth
                                className="mt-2"
                                isLoading={isLoading}
                                isDisabled={isLoading}
                            >
                                {authModalMode === 'login'
                                    ? 'Login'
                                    : 'Register'}
                            </Button>

                            {/* Divider */}
                            <div className="relative flex items-center my-2">
                                <div className="flex-1 border-t border-secondary/30"></div>
                                <span className="px-4 text-sm text-gray-400">
                                    or continue with
                                </span>
                                <div className="flex-1 border-t border-secondary/30"></div>
                            </div>

                            {/* Social Login Buttons */}
                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    onClick={() => handleSocialLogin('google')}
                                    className="
                                        flex-1 flex items-center justify-center gap-2
                                        py-3 px-4 rounded-xl
                                        bg-primary/40 backdrop-blur-md
                                        border-2 border-secondary/30
                                        text-white font-medium
                                        hover:border-secondary hover:bg-primary/60
                                        focus:outline-none focus:ring-2 focus:ring-secondary/50
                                        transition-all duration-300
                                        group
                                    "
                                >
                                    <svg
                                        className="w-5 h-5 transition-transform group-hover:scale-110 duration-200"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            fill="#EA4335"
                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        />
                                        <path
                                            fill="#34A853"
                                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        />
                                        <path
                                            fill="#FBBC05"
                                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                        />
                                        <path
                                            fill="#4285F4"
                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                        />
                                    </svg>
                                    Google
                                </button>

                                <button
                                    type="button"
                                    onClick={() => handleSocialLogin('github')}
                                    className="
                                        flex-1 flex items-center justify-center gap-2
                                        py-3 px-4 rounded-xl
                                        bg-primary/40 backdrop-blur-md
                                        border-2 border-secondary/30
                                        text-white font-medium
                                        hover:border-secondary hover:bg-primary/60
                                        focus:outline-none focus:ring-2 focus:ring-secondary/50
                                        transition-all duration-300
                                        group
                                    "
                                >
                                    <svg
                                        className="w-5 h-5 transition-transform group-hover:scale-110 duration-200"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    GitHub
                                </button>
                            </div>

                            {/* Toggle Link */}
                            <div className="text-center text-sm text-gray-400 mt-2">
                                {authModalMode === 'login' ? (
                                    <>
                                        Don't have an account?{' '}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                switchAuthMode('register')
                                            }
                                            className="text-secondary hover:text-white hover:underline font-medium transition-colors duration-200"
                                        >
                                            Sign up
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        Already have an account?{' '}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                switchAuthMode('login')
                                            }
                                            className="text-secondary hover:text-white hover:underline font-medium transition-colors duration-200"
                                        >
                                            Login
                                        </button>
                                    </>
                                )}
                            </div>
                        </form>
                    </div>
                </article>
                    </motion.section>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AuthModal;
