import React from 'react';
import {Button} from '@mui/material';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string
}

const OutlinedButton: React.FC<ButtonProps> = ({children, onClick, disabled,className, ...rest}) => {
  return (
    <Button
      variant="outlined"
      disabled={disabled}
      onClick={onClick}
      className={`outlined-button${className ?` ${className}`: ''}`}
      sx={{
        borderRadius: '20px',
        // boxSizing: 'content-box',
        fontWeight: 700,
        textTransform: 'none',
        background: 'var(--surface-container-high)',
        color: 'var(--on-surface)',
        border: '1.5px solid var(--on-surface-20)',
        height: '48px',
        width: '100%',
        '&:hover':{
          background: 'var(--surface-container-higher)',
          border: '1.5px solid var(--on-surface-20)',
        },
      }}
    >
      {children}
    </Button>

  );
};

export default OutlinedButton
