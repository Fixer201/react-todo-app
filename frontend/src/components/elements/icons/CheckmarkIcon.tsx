interface CheckmarkIconProps {
  variant?: 'simple' | 'gradient';
  className?: string;
}

const CheckmarkIcon = ({
  variant = 'simple',
  className = '',
}: CheckmarkIconProps) => {
  if (variant === 'simple') {
    return <span className={`text-secondary text-xl ${className}`}>✓</span>;
  }

  return (
    <>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient
            id="checkmark-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: '#0466c8', stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: '#8b5cf6', stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>

      <svg className={`w-5 h-5 flex-shrink-0 ${className}`} viewBox="0 0 20 20">
        <path
          fill="url(#checkmark-gradient)"
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </>
  );
};

export default CheckmarkIcon;
