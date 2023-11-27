export default function IconBtn({
    text,
    onclick,
    children,
    disabled,
    outline = false,
    customClasses,
    type,
  }) {
    const buttonStyle = {
      flex: '0 0 auto',
      display: 'flex',
      alignItems: 'center',
      border: outline ? '1px solid #FDE68A' : 'none',
      backgroundColor: outline ? 'transparent' : '#FDE68A',
      cursor: 'pointer',
      borderRadius: '0.375rem',
      padding: '0.5rem 1.25rem',
      fontWeight: '600',
      color: outline ? '#FDE68A' : '#1F2937',
      ...customClasses, // Allow additional custom styles to be passed
    };
  
    const spanStyle = {
      color: outline ? '#FDE68A' : '#1F2937',
    };
  
    return (
      <button
        disabled={disabled}
        onClick={onclick}
        style={buttonStyle}
        type={type}
      >
        {children ? (
          <>
            <span style={spanStyle}>{text}</span>
            {children}
          </>
        ) : (
          text
        )}
      </button>
    );
  }