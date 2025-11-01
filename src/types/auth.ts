export type AuthModalMode = 'login' | 'register' | null;

export interface AuthContextProps {
    isAuthModalOpen: boolean;
    authModalMode: AuthModalMode;
    openAuthModal: (mode: AuthModalMode) => void;
    closeAuthModal: () => void;
    switchAuthMode: (mode: AuthModalMode) => void;
}
