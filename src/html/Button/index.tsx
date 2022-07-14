import React from 'react';

type CustomButtonProps = {
   children: string
   variant: 'primary' | 'secondary' | 'danger' | 'yellow';
} & Omit<React.ComponentProps<'button'>, 'children'>;

function CustomButton({ variant, children, ...rest }: CustomButtonProps) {
   return (
      <button className={`btn btn-${variant}`} { ...rest }>{children}</button>
   )
}

export default CustomButton;