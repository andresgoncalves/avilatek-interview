import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string,
  icon?: React.ReactNode,
  className?: string
}

export default function Input({ label, icon, className, ...rest }: InputProps) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label className="text-xs">{label}</label>
      <div className="flex items-center border-b-primary-gray-500 border-b p-2 focus-within:border-b-primary-green-500">
        {icon}
        <input className="border-0" {...rest} />
      </div>
    </div>
  )
}