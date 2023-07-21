import React from 'react';
import {Button, CircularProgress} from '@mui/material';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  loading?: boolean;
}

const GradientButton: React.FC<ButtonProps> = ({children, onClick, disabled, className, loading = false}) => {
  return (
    <Button
      variant="contained"
      disabled={disabled}
      onClick={onClick}
      endIcon={loading ? <CircularProgress size={16} color="inherit" /> : null}
      className={`gradient-button${className ? ` ${className}` : ''}`}
      sx={{
        background: `linear-gradient(90deg, #58B9FF, #5655F9)`,
        borderRadius: '20px',
        boxShadow: 'none',
        color: '#fff',
        fontWeight: 700,
        textTransform: 'none',
        height: '48px',
        width: '100%',
        '&.Mui-disabled': {
          background: 'var(--surface-container-higher)',
          color: 'var(--gradient-btn-disabled-fc)',
        },
        '.MuiButton-endIcon': {
          position: 'absolute',
          right: '24px'
        }
      }}
    >
      {children}
    </Button>
  );
};

export default GradientButton;
