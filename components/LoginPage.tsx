import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Button from './Button'
import Input from './Input'

import Lock from './icons/Lock'
import Phone from './icons/Phone'

import Background from '../lib/assets/background.png'
import Logo from '../lib/assets/logo.png'

export default function LoginPage() {
  /* Input state */
  const [phoneNumber, setPhoneNumber] = useState('+52 000000000')
  const [password, setPassword] = useState('abcdefgh')
  /* Render */
  return (
    <div className="flex h-screen text-primary-gray-500">
      {/* Form container */}
      <main className="flex-1 flex justify-center items-center">
        <div className="flex flex-col gap-16 w-3/4" style={{ maxWidth: '440px' }}>
          {/* Title */}
          <header className="text-center">
            <h1 className="text-4xl font-title">Entra a tu cuenta</h1>
          </header>
          {/* Form */}
          <div className="flex flex-col gap-3">
            <Input label="Número telefónico" icon={<Phone />} type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
            <Input label="Contraseña" icon={<Lock />} type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <Link href="#">
              <a className="text-right">¿Olvidaste tu contraseña? Haz click aquí</a>
            </Link>
          </div>
          {/* Buttons */}
          <div className="flex flex-col gap-5">
            <Button>ENTRAR</Button>
            <Link href="#">
              <a className="text-center">¿No tienes una cuenta? ¡Crea una!</a>
            </Link>
          </div>
        </div>
      </main>
      {/* Banner */}
      <aside className="flex-1 flex justify-center items-center relative">
        {/* Background image */}
        <div className="absolute top-0 left-0 w-full h-full" >
          <Image src={Background} layout="fill" />
        </div>
        {/* Filter */}
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundColor: 'rgba(77, 77, 77, 0.4)' }}></div>
        {/* Logo */}
        <Image src={Logo} />
      </aside>
    </div>
  )
}
