import Link from 'next/link'
import Image from 'next/image'
import Boasvindas from '@/components/Boasvindas/boasvindas'

/**
 * Página Inicial do Portal PCD
 * Contém as seguintes seções:
 * - Hero section com mensagem de boas-vindas
 * - Serviços em destaque
 * - Informações sobre acessibilidade e direitos
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Seção principal com mensagem de boas-vindas */}
     
          <Boasvindas/>
    

      {/* Seção de Serviços em Destaque */}
      <section 
        className="py-8"
        aria-labelledby="services-title"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 id="services-title" className="text-xl font-semibold text-gray-800">
              Serviços em Destaque
            </h2>
            <Link 
              href="/servicos" 
              className="text-blue-700 text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 rounded"
            >
              Ver todos →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card de Saúde */}
            <div className="bg-rose-50 rounded-lg p-6">
              <div className="w-8 h-8 mb-4" aria-hidden="true">
                <Image
                  src="/health-icon.svg"
                  alt=""
                  width={32}
                  height={32}
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">
                Serviços de Saúde e Reabilitação
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Informações sobre centros de saúde, reabilitação e tratamentos para PCDs.
              </p>
              <Link 
                href="/saude"
                className="text-sm text-gray-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 rounded"
              >
                Saiba mais sobre serviços de saúde
              </Link>
            </div>

            {/* Card de Benefícios */}
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="w-8 h-8 mb-4" aria-hidden="true">
                <Image
                  src="/benefits-icon.svg"
                  alt=""
                  width={32}
                  height={32}
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">
                Benefícios e Direitos
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Guia sobre benefícios governamentais e direitos legais para PCDs.
              </p>
              <Link 
                href="/beneficios"
                className="text-sm text-gray-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 rounded"
              >
                Saiba mais sobre benefícios e direitos
              </Link>
            </div>

            {/* Card de Emprego */}
            <div className="bg-green-50 rounded-lg p-6">
              <div className="w-8 h-8 mb-4" aria-hidden="true">
                <Image
                  src="/job-icon.svg"
                  alt=""
                  width={32}
                  height={32}
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-lg font-medium mb-2 text-gray-800">
                Emprego e Profissionalização
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Oportunidades de trabalho e capacitação profissional para PCDs.
              </p>
              <Link 
                href="/emprego"
                className="text-sm text-gray-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 rounded"
              >
                Saiba mais sobre emprego e profissionalização
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Informações Adicionais */}
      <section 
        className="py-8 bg-gray-50"
        aria-label="Informações adicionais"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card de Acessibilidade Digital */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-lg font-medium mb-3 text-gray-800">Acessibilidade Digital</h2>
              <p className="text-sm text-gray-600 mb-2">
                A acessibilidade digital refere-se à prática de tornar os sites e aplicativos acessíveis para todas as pessoas, incluindo aquelas com deficiências.
              </p>
              <p className="text-sm text-gray-600">
                Neste portal, implementamos diversas práticas de acessibilidade, como navegação por teclado, descrições de imagem, e compatibilidade com leitores de tela.
              </p>
            </div>

            {/* Card de Direitos e Legislação */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-lg font-medium mb-3 text-gray-800">Direitos e Legislação</h2>
              <p className="text-sm text-gray-600 mb-2">
                No Brasil, a Lei Brasileira de Inclusão (Lei nº 13.146/2015) garante direitos às pessoas com deficiência em diversas áreas como educação, saúde e trabalho.
              </p>
              <p className="text-sm text-gray-600">
                Conheça mais sobre seus direitos na seção de Benefícios e Direitos do nosso portal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}