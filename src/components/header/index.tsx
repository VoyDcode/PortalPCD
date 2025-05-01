'use client'

import Link from 'next/link'
import Image from 'next/image'

/**
 * Componente Header
 * Responsável pela barra superior do portal que contém:
 * - Logo e nome do portal
 * - Nome do usuário logado
 * - Botão de sair
 */
export default function Header() {
  return (
    <header className="bg-primary text-white py-2" role="banner">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo e nome do portal */}
          <Link 
            href="/" 
            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
            aria-label="Ir para página inicial"
          >
            <Image 
              src="/accessibility-icon.svg" 
              alt="Ícone de acessibilidade"
              width={20} 
              height={20}
              className="text-white brightness-0 invert"
            />
            <span className="font-medium text-base text-white">Portal PCD</span>
          </Link>
          
          {/* Área do usuário e botão sair */}

          <div className="flex items-center gap-3">
            <Link href='/login'className="bg-white/10 px-4 py-1.5 rounded hover:bg-white/20 transition-all focus:ring-2 focus:ring-white/50 focus:outline-none 
            text-sm font-medium text-decoration:none">
            Login</Link>
            <span className="text-sm" role="status">
              Olá, Victor Rodrigues de Lima Lourenço
            </span>
            <button 
              className="bg-white/10 px-4 py-1.5 rounded hover:bg-white/20 transition-all focus:ring-2 focus:ring-white/50 focus:outline-none text-sm font-medium"
              aria-label="Sair do sistema"
              onClick={() => {}}
            >
              SAIR
            </button>
          </div>
        </div>
      </div>
    </header>
  )
} 