"use client";
import React from 'react';
import { useEffect} from 'react';
import { useState } from "react";
import { ContaType } from '@/types/ContaType';
import { useRouter } from "next/navigation";
import { listaDeContas } from '@/data/listaDeContas';

export default function index() {

  const navigate = useRouter();

  const [ListaDecontas, setListaDeContas] = useState<ContaType[]>([])
  
  useEffect(() => {

    if(!localStorage.getItem("ListaContas")){
      localStorage.setItem("ListaContas", JSON.stringify(listaDeContas));
    }
    setListaDeContas(JSON.parse(localStorage.getItem("ListaContas") || "[]"))
  }, []);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handleChangeSenha = (e: React.ChangeEvent<HTMLInputElement>) => setSenha(e.target.value);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const ContaValida = ListaDecontas?.find(
      (u) => u.email === email && u.senha === senha
    );
  
    if (ContaValida) {
      alert("login realizado com sucesso");
      navigate.push("/");
    } else {
      alert("Usuário ou senha inválidos!");
    }
  };



  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
        <h1 className="text-2xl font-semibold mb-2 text-center">Login</h1>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Entre na sua conta para acessar o Portal PCD
        </p>
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="seu@email.com"
              required
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
              <a href="#" className="text-xs text-blue-600 hover:underline">Esqueceu a senha?</a>
            </div>
            <input
              onChange={(e) => setSenha(e.target.value)}
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white font-semibold py-2 rounded hover:bg-blue-800 transition-colors"
          >
            Entrar
          </button>
        </form>
        <div className="mt-4 text-sm text-center">
          Não tem uma conta? <a href="#" className="text-blue-600 hover:underline">Cadastre-se</a>
        </div>
        <p className="mt-4 text-xs text-gray-400 text-center">
          Para fins de demonstração:<br />
          Crie uma conta e faça login com seu email e senha.
        </p>
      </div>
    </section>
  )
}
