import { useState } from "react";

export default function Cadastro() {
    const [usuario, setUsuario] = useState<{
      id: number;
      nome: string;
      email: string;
      senha: string;
    }>({
      id: 0,
      nome: "",
      email: "",
      senha: ""
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setUsuario({ ...usuario, [name]: value });
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        const listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios") || "[]");
        const novoUsuario = {
          id: listaUsuarios.length + 1,
          nome: usuario.nome,
          email: usuario.email,
          senha: usuario.senha
        };
    
        listaUsuarios.push(novoUsuario);
        localStorage.setItem("listaUsuarios", JSON.stringify(listaUsuarios));
        alert("Usuário cadastrado com sucesso!");
    
        setUsuario({
          id: 0,
          nome: "",
          email: "",
          senha: ""
        });
      };
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 space-y-6"
          >
            <fieldset>
              <legend className="text-2xl font-bold text-center mb-6">Cadastro</legend>
    
              <div className="mb-4">
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                  Nome
                </label>
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  required
                  placeholder="Digite seu nome"
                  value={usuario.nome}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
    
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Digite seu email"
                  value={usuario.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
    
              <div className="mb-6">
                <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
                  Senha
                </label>
                <input
                  type="password"
                  name="senha"
                  id="senha"
                  required
                  placeholder="Digite sua senha"
                  value={usuario.senha}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
    
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
              >
                Cadastrar
              </button>
            </fieldset>
          </form>
        </div>
      );
    
}