import React, {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useMemo,
    useState,
} from 'react';
import { AuthModalMode, AuthContextProps } from '../types/auth';

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [authModalMode, setAuthModalMode] = useState<AuthModalMode>(null);

    const openAuthModal = useCallback((mode: AuthModalMode) => {
        setAuthModalMode(mode);
        setIsAuthModalOpen(true);
    }, []);

    const closeAuthModal = useCallback(() => {
        setIsAuthModalOpen(false);
        setAuthModalMode(null);
    }, []);

    const switchAuthMode = useCallback((mode: AuthModalMode) => {
        setAuthModalMode(mode);
    }, []);

    const value = useMemo(
        () => ({
            isAuthModalOpen,
            authModalMode,
            openAuthModal,
            closeAuthModal,
            switchAuthMode,
        }),
        [
            isAuthModalOpen,
            authModalMode,
            openAuthModal,
            closeAuthModal,
            switchAuthMode,
        ],
    );

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
};
