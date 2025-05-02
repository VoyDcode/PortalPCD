"use client";
import { ContaType } from "@/types/ContaType";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function index() {
  const navigate = useRouter();
  const [ListaDeContas, setListaDeContas] = useState<ContaType[]>([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  useEffect(() => {
    const user = localStorage.getItem("usuarioLogado");
    if (user) {
      navigate.push("/");
    }
    const contasExistentes = localStorage.getItem("ListaContas");
    if (contasExistentes) {
      setListaDeContas(JSON.parse(contasExistentes));
    }
  }, []);
  const handleChangeNome = (e: React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value);
  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handleChangeSenha = (e: React.ChangeEvent<HTMLInputElement>) => setSenha(e.target.value);
  const handleChangeConfirmarSenha = (e: React.ChangeEvent<HTMLInputElement>) => setConfirmarSenha(e.target.value);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    const emailJaCadastrado = ListaDeContas.some(conta => conta.email === email);
    if (emailJaCadastrado) {
      alert("Este email já está cadastrado!");
      return;
    }
    const novaConta: ContaType = {
      id: ListaDeContas.length + 1,
      nome,
      email,
      senha,
    };
    const novaListaDeContas = [...ListaDeContas, novaConta];
    localStorage.setItem("ListaContas", JSON.stringify(novaListaDeContas));
    localStorage.setItem("usuarioLogado", JSON.stringify(novaConta));
    alert("Cadastro realizado com sucesso!");
    navigate.push("/"); 
  };
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 flex flex-col items-center">
        <h1 className="text-2xl font-semibold mb-2 text-center">Cadastro</h1>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Crie sua conta para acessar o Portal PCD
        </p>
        <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={handleChangeNome}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Seu nome completo"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleChangeEmail}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="seu@email.com"
              required
            />
          </div>
          <div>
            <label htmlFor="senha" className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={handleChangeSenha}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Mínimo 6 caracteres"
              minLength={6}
              required
            />
          </div>
          <div>
            <label htmlFor="confirmar-senha" className="block text-sm font-medium text-gray-700 mb-1">Confirmar Senha</label>
            <input
              type="password"
              id="confirmar-senha"
              value={confirmarSenha}
              onChange={handleChangeConfirmarSenha}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirme sua senha"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-700 text-white font-semibold py-2 rounded hover:bg-blue-800 transition-colors"
          >
            Cadastrar
          </button>
        </form>
        <div className="mt-4 text-sm text-center">
          Já tem uma conta? <a href="/login" className="text-blue-600 hover:underline">Faça login</a>
        </div>
      </div>
    </section>
  );
}