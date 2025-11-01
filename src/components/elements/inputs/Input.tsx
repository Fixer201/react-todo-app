import React, { useState, forwardRef } from 'react';
import {
    Eye,
    EyeOff,
    Mail,
    Lock,
    AlertCircle,
    CheckCircle2,
} from 'lucide-react';

export interface InputProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    // Content
    label?: string;
    placeholder?: string;

    // Styling
    className?: string;

    // Input type
    type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';

    // Icons
    icon?: React.ReactNode;
    hideIcon?: boolean; // Hide default icon based on type

    // Validation
    error?: string;
    success?: string;
    isValid?: boolean;
    isInvalid?: boolean;

    // States
    isDisabled?: boolean;
    isRequired?: boolean;

    // Callbacks
    onValidate?: (value: string) => { isValid: boolean; message?: string };
}

/**
 * Modern glassmorphism input with glow effects and icon integration
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            label,
            placeholder,
            className = '',
            type = 'text',
            icon,
            hideIcon = false,
            error,
            success,
            isValid,
            isInvalid,
            isDisabled = false,
            isRequired = false,
            onValidate,
            onChange,
            ...rest
        },
        ref,
    ) => {
        const [showPassword, setShowPassword] = useState(false);
        const [isFocused, setIsFocused] = useState(false);
        const [localValue, setLocalValue] = useState('');
        const [validationState, setValidationState] = useState<{
            isValid: boolean;
            message?: string;
        } | null>(null);

        // Determine actual input type (handle password toggle)
        const actualType = type === 'password' && showPassword ? 'text' : type;

        // Get default icon based on type
        const getDefaultIcon = () => {
            if (hideIcon) return null;
            if (icon) return icon;

            switch (type) {
                case 'email':
                    return <Mail className="w-5 h-5" />;
                case 'password':
                    return <Lock className="w-5 h-5" />;
                default:
                    return null;
            }
        };

        const defaultIcon = getDefaultIcon();

        // Determine validation state
        const hasError =
            isInvalid ||
            !!error ||
            (validationState && !validationState.isValid);
        const hasSuccess =
            isValid ||
            !!success ||
            (validationState?.isValid && localValue.length > 0);

        const validationMessage = error || success || validationState?.message;

        // Handle change with validation
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            setLocalValue(value);

            // Run validation if provided
            if (onValidate && value) {
                const result = onValidate(value);
                setValidationState(result);
            } else {
                setValidationState(null);
            }

            // Call parent onChange
            if (onChange) {
                onChange(e);
            }
        };

        // Build dynamic classes
        const containerClasses = 'relative w-full flex flex-col gap-1';

        const inputWrapperClasses = `
            relative flex items-center
            bg-primary/40 backdrop-blur-md
            border-2 rounded-xl
            transition-all duration-300 ease-in-out
            ${hasError ? 'border-red/70 glow-input-error' : hasSuccess ? 'border-green-500/70 glow-input-success' : 'border-secondary/30'}
            ${isFocused && !hasError ? 'border-secondary glow-input-focus' : ''}
            ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}
        `.trim();

        const inputClasses = `
            w-full px-4 py-3
            ${defaultIcon ? 'pl-12' : ''}
            ${type === 'password' ? 'pr-12' : ''}
            bg-transparent
            text-white placeholder:text-gray-400
            outline-none border-none
            font-light text-base
            transition-all duration-200
            disabled:cursor-not-allowed
            ${className}
        `.trim();

        const iconClasses = `
            absolute left-4
            text-gray-400 transition-colors duration-200
            ${isFocused ? 'text-secondary' : ''}
            ${hasError ? 'text-red' : ''}
            ${hasSuccess ? 'text-green-500' : ''}
        `.trim();

        const labelClasses = `
            text-sm font-medium text-gray-300
            transition-colors duration-200
            ${isFocused ? 'text-secondary' : ''}
            ${hasError ? 'text-red' : ''}
        `.trim();

        return (
            <div className={containerClasses}>
                {/* Label */}
                {label && (
                    <label className={labelClasses}>
                        {label}
                        {isRequired && <span className="text-red ml-1">*</span>}
                    </label>
                )}

                {/* Input wrapper with glassmorphism */}
                <div className={inputWrapperClasses}>
                    {/* Left icon */}
                    {defaultIcon && (
                        <div className={iconClasses}>{defaultIcon}</div>
                    )}

                    {/* Input field */}
                    <input
                        ref={ref}
                        type={actualType}
                        placeholder={placeholder}
                        className={inputClasses}
                        disabled={isDisabled}
                        required={isRequired}
                        onChange={handleChange}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        {...rest}
                    />

                    {/* Password toggle */}
                    {type === 'password' && (
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 text-gray-400 hover:text-secondary transition-colors duration-200 focus:outline-none"
                            tabIndex={-1}
                            disabled={isDisabled}
                        >
                            {showPassword ? (
                                <EyeOff className="w-5 h-5" />
                            ) : (
                                <Eye className="w-5 h-5" />
                            )}
                        </button>
                    )}

                    {/* Validation icons (right side for non-password) */}
                    {type !== 'password' && (hasError || hasSuccess) && (
                        <div className="absolute right-4">
                            {hasError && (
                                <AlertCircle className="w-5 h-5 text-red animate-[shake_0.3s_ease-in-out]" />
                            )}
                            {hasSuccess && !hasError && (
                                <CheckCircle2 className="w-5 h-5 text-green-500 animate-[scale_0.3s_ease-in-out]" />
                            )}
                        </div>
                    )}
                </div>

                {/* Validation message */}
                {validationMessage && (
                    <div
                        className={`
                            text-sm font-light px-1
                            transition-all duration-300 ease-in-out
                            animate-[slideDown_0.3s_ease-out]
                            ${hasError ? 'text-red' : 'text-green-500'}
                        `}
                    >
                        {validationMessage}
                    </div>
                )}
            </div>
        );
    },
);

Input.displayName = 'Input';

export default Input;
