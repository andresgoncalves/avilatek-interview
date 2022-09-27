import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
  className?: string,
}

export default function Button({ children, className = '', ...rest }: ButtonProps) {
  return (
    <button className={`w-full p-3 text-base rounded-lg bg-primary-green-500 ${className}`} {...rest}>
      {children}
    </button>
  )
}
