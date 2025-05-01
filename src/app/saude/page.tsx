import Link from 'next/link'

export default function SaudePage() {
  return (
    <main className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Botão Voltar */}
        <Link 
          href="/servicos" 
          className="text-primary hover:underline mb-6 inline-flex items-center gap-2"
        >
          <span aria-hidden="true">←</span> Voltar para listagem de serviços
        </Link>

        {/* Título e Descrição */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Serviços de Saúde e Reabilitação
        </h1>
        <p className="text-gray-600 mb-8">
          Informações sobre centros de saúde, reabilitação e tratamentos para PCDs.
        </p>

        {/* Card Principal */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Centros de Reabilitação
          </h2>
          <p className="text-gray-600 mb-4">
            Lista de centros especializados em reabilitação para PCDs
          </p>

          <h3 className="text-lg font-medium text-gray-800 mb-2">
            Centros de Reabilitação para PCDs
          </h3>
          <p className="text-gray-600 mb-4">
            Os centros de reabilitação especializados oferecem diversos serviços essenciais para pessoas com deficiência, incluindo:
          </p>

          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Fisioterapia especializada</li>
            <li>Terapia ocupacional</li>
            <li>Fonoaudiologia</li>
            <li>Atendimento psicológico</li>
            <li>Orientação para familiares e cuidadores</li>
          </ul>

          <p className="text-gray-600 mb-6">
            É importante buscar um centro que esteja adequado às suas necessidades específicas, considerando a localização, infraestrutura e especialidades disponíveis.
          </p>

          {/* Informações de Contato */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Informações de Contato
            </h3>
            <div className="space-y-2">
              <p className="text-gray-600">
                <strong>Telefone:</strong> (11) 3333-4444
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> info@reabilitacao.org
              </p>
              <p className="text-gray-600">
                <strong>Website:</strong>{' '}
                <Link 
                  href="https://www.reabilitacao.org" 
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.reabilitacao.org
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Recursos Adicionais */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Recursos Adicionais
          </h2>
          <ul className="space-y-2">
            <li>
              <Link 
                href="https://www.redelucy.org" 
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rede LUCY de Reabilitação
              </Link>
            </li>
            <li>
              <Link 
                href="https://www.aacd.org.br" 
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                AACD - Associação de Assistência à Criança Deficiente
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
} 