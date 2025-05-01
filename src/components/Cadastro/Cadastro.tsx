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
    
}