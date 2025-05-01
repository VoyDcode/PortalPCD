import Link from 'next/link'

export default function BeneficiosPage() {
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
          Benefícios e Direitos
        </h1>
        <p className="text-gray-600 mb-8">
          Guia sobre benefícios governamentais e direitos legais para PCDs.
        </p>

        {/* Card Principal */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Principais Benefícios
          </h2>
          <p className="text-gray-600 mb-4">
            Conheça os principais benefícios disponíveis para pessoas com deficiência:
          </p>

          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>BPC (Benefício de Prestação Continuada)</li>
            <li>Aposentadoria por invalidez</li>
            <li>Isenção de impostos na compra de veículos</li>
            <li>Passe livre em transportes públicos</li>
            <li>Desconto em tarifas de energia elétrica</li>
          </ul>

          <h3 className="text-lg font-medium text-gray-800 mb-2">
            Lei Brasileira de Inclusão
          </h3>
          <p className="text-gray-600 mb-6">
            A Lei nº 13.146/2015 garante e promove os direitos fundamentais das pessoas com deficiência em diversas áreas como educação, trabalho, saúde e acessibilidade.
          </p>

          {/* Informações de Contato */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-medium text-gray-800 mb-4">
              Canais de Atendimento
            </h3>
            <div className="space-y-2">
              <p className="text-gray-600">
                <strong>Central de Atendimento:</strong> 0800-777-7777
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> atendimento@direitospcd.gov.br
              </p>
              <p className="text-gray-600">
                <strong>Website:</strong>{' '}
                <Link 
                  href="https://www.gov.br/direitospcd" 
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.gov.br/direitospcd
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Recursos Adicionais */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Links Úteis
          </h2>
          <ul className="space-y-2">
            <li>
              <Link 
                href="https://www.inss.gov.br" 
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portal do INSS - Benefícios para PCDs
              </Link>
            </li>
            <li>
              <Link 
                href="https://www.gov.br/mdh/pt-br" 
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ministério dos Direitos Humanos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
} 