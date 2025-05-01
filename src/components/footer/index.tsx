import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Portal PCD</h3>
            <p className="text-gray-300">
              Informações e recursos para pessoas com deficiência
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/beneficios" className="text-gray-300 hover:text-white transition-colors">
                  Benefícios
                </Link>
              </li>
              <li>
                <Link href="/direitos" className="text-gray-300 hover:text-white transition-colors">
                  Direitos
                </Link>
              </li>
              <li>
                <Link href="/acessibilidade" className="text-gray-300 hover:text-white transition-colors">
                  Acessibilidade
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: contato@portalpcd.com.br</li>
              <li>Telefone: (11) 1234-5678</li>
              <li>Endereço: São Paulo, SP</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Portal PCD. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
} 