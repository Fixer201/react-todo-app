import React from 'react';

export interface IconButtonProps {
    // Content
    icon: React.ReactNode;
    badge?: number | string; // Badge for notifications

    // Styling
    variant?: 'ghost' | 'solid';
    size?: 'sm' | 'md' | 'lg';
    className?: string;

    // Accessibility
    ariaLabel: string;

    // Button attributes
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    isDisabled?: boolean;
}

/**
 * IconButton - Compact button component for icons in header/navbar
 */
const IconButton = React.memo<IconButtonProps>(
    ({
        icon,
        badge,
        variant = 'ghost',
        size = 'md',
        className = '',
        ariaLabel,
        onClick,
        isDisabled = false,
    }) => {
        // Size classes
        const sizeClasses = {
            sm: 'w-8 h-8 text-sm',
            md: 'w-10 h-10 text-base',
            lg: 'w-12 h-12 text-lg',
        };

        // Variant classes
        const variantClasses = {
            ghost: 'hover:bg-secondary/10 text-white',
            solid: 'bg-secondary text-white hover:bg-secondary/80',
        };

        const baseClasses =
            'relative flex items-center justify-center rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-primary';

        const disabledClasses = isDisabled
            ? 'opacity-50 cursor-not-allowed pointer-events-none'
            : '';

        const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${className}`.trim();

        return (
            <button
                type="button"
                className={combinedClasses}
                onClick={onClick}
                disabled={isDisabled}
                aria-label={ariaLabel}
            >
                {icon}

                {/* Badge for notifications */}
                {badge !== undefined && badge !== 0 && (
                    <span
                        className="absolute -top-1 -right-1 min-w-5 h-5 px-1 flex items-center justify-center
                                   text-xs font-bold bg-red-500 text-white rounded-full border-2 border-primary"
                        aria-label={`${badge} notifications`}
                    >
                        {typeof badge === 'number' && badge > 99 ? '99+' : badge}
                    </span>
                )}
            </button>
        );
    }
);

IconButton.displayName = 'IconButton';

export default IconButton;
