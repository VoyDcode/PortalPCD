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
  
}