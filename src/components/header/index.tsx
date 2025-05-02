'use client'
import { useEffect} from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { useState } from "react";
import { ContaType } from '@/types/ContaType';

/**
 * Componente Header
 * Responsável pela barra superior do portal que contém:
 * - Logo e nome do portal
 * - Nome do usuário logado
 * - Botão de sair
 */
export default function Header() {

  const [Logado, setLogado] = useState<ContaType | null>(null);

  useEffect(() => {
    const usuario = localStorage.getItem("usuarioLogado");
    if (usuario) {
      setLogado(JSON.parse(usuario));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("usuarioLogado");
    setLogado(null);
  };

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
  {Logado ? (
    <>
      <span className="text-sm" role="status">
        Olá, {Logado.nome}
      </span>
      <button 
        className="bg-white/10 px-4 py-1.5 rounded hover:bg-white/20 transition-all focus:ring-2 focus:ring-white/50 focus:outline-none text-sm font-medium"
        aria-label="Sair do sistema"
        onClick={handleLogout}
      >
        SAIR
      </button>
    </>
  ) : (
    <>
      <Link
        href="/login"
        className="text-white bg-white/10 px-4 py-1.5 rounded hover:bg-white/20 transition-all focus:ring-2 focus:ring-white/50 focus:outline-none text-sm font-medium"
      >
        Login
      </Link>
      <Link
        href="/cadastro"
        className="text-white bg-white/10 px-4 py-1.5 rounded hover:bg-white/20 transition-all focus:ring-2 focus:ring-white/50 focus:outline-none text-sm font-medium"
      >
        Cadastro
      </Link>
    </>
  )}
</div>
        </div>
      </div>
    </header>
  )
} 