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
}