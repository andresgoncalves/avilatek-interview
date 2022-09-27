import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string,
  icon?: React.ReactNode,
  className?: string
}

export default function Input({ label, icon, className = '', ...rest }: InputProps) {
  return (
    <label className={`flex flex-col gap-1 ${className}`}>
      <div className="text-xs">{label}</div>
      <div className="flex items-center border-b-primary-gray-500 border-b p-2 focus-within:border-b-primary-green-500">
        {icon}
        <input className="border-0 focus:ring-0 focus:ring-offset-0" {...rest} />
      </div>
    </label>
  )
}
