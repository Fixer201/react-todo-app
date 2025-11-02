import React from 'react';

export interface ButtonProps {
    // Content
    children?: React.ReactNode;

    // Styling
    variant?: 'primary' | 'secondary' | 'cta' | 'transparent';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    fullWidth?: boolean;
    className?: string;

    // Icons
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;

    // States
    isLoading?: boolean;
    isDisabled?: boolean;
    isActive?: boolean;

    // Link mode
    href?: string;

    // Accessibility
    ariaLabel?: string;

    // Button attributes
    type?: 'button' | 'submit' | 'reset';
    onClick?: (
        e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
    ) => void;

    // Adaptive behavior
    allowWrap?: boolean; // Allow text to wrap to multiple lines
    autoShrink?: boolean; // Automatically shrink text size when overflowing
}

/**
 * Checks if a URL is external (starts with http:// or https://)
 */
const isExternalLink = (href?: string): boolean => {
    if (!href) return false;
    return href.startsWith('http://') || href.startsWith('https://');
};

/**
 * Generates variant-specific CSS classes
 */
const getVariantClasses = (variant: ButtonProps['variant']): string => {
    const variants = {
        primary: 'bg-primary text-white hover:bg-secondary hover:text-black',
        secondary: 'bg-white text-black hover:bg-primary hover:text-white',
        cta: 'bg-secondary text-white hover:bg-white hover:text-black hover:font-bold',
        transparent: 'bg-transparent text-white',
    };

    return variants[variant || 'primary'];
};

/**
 * Generates size-specific CSS classes
 */
const getSizeClasses = (size: ButtonProps['size']): string => {
    const sizes = {
        xs: 'text-xs py-1 px-2 rounded-md min-w-16',
        sm: 'text-sm py-1.5 px-3 rounded-lg min-w-20',
        md: 'text-base py-2 px-4 rounded-lg min-w-24',
        lg: 'text-lg py-3 px-6 rounded-xl min-w-32',
        xl: 'text-xl py-4 px-8 rounded-xl min-w-40',
    };

    return sizes[size || 'md'];
};

/**
 * Generates state-specific CSS classes
 */
const getStateClasses = (
    isLoading?: boolean,
    isDisabled?: boolean,
    isActive?: boolean,
): string => {
    const classes: string[] = [];

    if (isLoading || isDisabled) {
        classes.push('opacity-60 cursor-not-allowed pointer-events-none');
    }

    if (isActive) {
        classes.push('ring-2 ring-secondary ring-offset-2');
    }

    return classes.join(' ');
};

// Spinner Component
const Spinner: React.FC<{ size: ButtonProps['size'] }> = ({ size }) => {
    const sizeMap = {
        xs: 'w-3 h-3',
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6',
        xl: 'w-7 h-7',
    };

    return (
        <svg
            className={`animate-spin ${sizeMap[size || 'md']}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
            ></circle>
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
        </svg>
    );
};

// Main Button Component
const Button = React.memo<ButtonProps>(
    ({
        children,
        variant = 'primary',
        size = 'md',
        fullWidth = false,
        className = '',
        leftIcon,
        rightIcon,
        isLoading = false,
        isDisabled = false,
        isActive = false,
        href,
        ariaLabel,
        type = 'button',
        onClick,
        allowWrap = false,
        autoShrink = false,
    }) => {
        // Determine if this is an icon-only button
        const isIconOnly = !children && (leftIcon || rightIcon);

        // Build CSS classes
        const baseClasses =
            'flex items-center justify-center font-bold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2';

        const variantClasses = getVariantClasses(variant);
        const sizeClasses = getSizeClasses(size);
        const stateClasses = getStateClasses(isLoading, isDisabled, isActive);

        // Text overflow handling based on props
        let textClasses = 'max-w-full';
        if (allowWrap) {
            // Allow text to wrap to multiple lines
            textClasses += ' whitespace-normal break-words text-center';
        } else {
            // Default: single line with ellipsis
            textClasses += ' whitespace-nowrap overflow-hidden text-ellipsis';
        }

        // Auto-shrink: reduce text size when needed
        const shrinkClasses = autoShrink
            ? 'text-xs sm:text-sm lg:text-base'
            : '';

        const widthClasses = fullWidth ? 'w-full' : '';

        const combinedClasses =
            `${baseClasses} ${variantClasses} ${sizeClasses} ${stateClasses} ${widthClasses} ${className}`.trim();

        // Icon spacing
        const iconGap = isIconOnly ? '' : 'gap-2';

        // Accessibility attributes
        const ariaAttrs = {
            'aria-label': ariaLabel || (isIconOnly ? 'Button' : undefined),
            'aria-disabled': isDisabled || isLoading ? true : undefined,
            'aria-busy': isLoading ? true : undefined,
        };

        // Content rendering
        const renderContent = () => (
            <>
                {isLoading && <Spinner size={size} />}
                {!isLoading && leftIcon && (
                    <span aria-hidden="true">{leftIcon}</span>
                )}
                {children && (
                    <span className={`${textClasses} ${shrinkClasses}`}>
                        {children}
                    </span>
                )}
                {!isLoading && rightIcon && (
                    <span aria-hidden="true">{rightIcon}</span>
                )}
                {/* Screen reader only text for icon-only buttons */}
                {isIconOnly && ariaLabel && (
                    <span className="sr-only">{ariaLabel}</span>
                )}
            </>
        );

        // Render as link if href is provided
        if (href) {
            const isExternal = isExternalLink(href);
            const externalProps = isExternal
                ? {
                      target: '_blank',
                      rel: 'noopener noreferrer',
                  }
                : {};

            return (
                <a
                    href={href}
                    className={`${combinedClasses} ${iconGap}`}
                    onClick={onClick}
                    {...ariaAttrs}
                    {...externalProps}
                >
                    {renderContent()}
                </a>
            );
        }

        // Render as button
        return (
            <button
                type={type}
                className={`${combinedClasses} ${iconGap}`}
                onClick={onClick}
                disabled={isDisabled || isLoading}
                {...ariaAttrs}
            >
                {renderContent()}
            </button>
        );
    },
);

Button.displayName = 'Button';

export default Button;
