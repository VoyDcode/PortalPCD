import Link from 'next/link'
import Image from 'next/image'

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
      <section 
        className="bg-gradient-to-br from-primary via-secondary to-accent text-white py-16 relative"
        aria-labelledby="hero-title"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 id="hero-title" className="text-4xl font-bold mb-4">
              Portal de Informação e Acessibilidade
            </h1>
            <p className="text-lg mb-2">
              Bem-vindo, Victor Rodrigues de Lima Lourenço ao Portal PCD!
            </p>
            <p className="text-base mb-8 opacity-90">
              Aqui você encontra informações, serviços e recursos para
              promover a acessibilidade e inclusão.
            </p>
            <div className="flex gap-3">
              <Link 
                href="/servicos" 
                className="bg-white text-primary px-4 py-2 rounded text-sm font-medium hover:bg-opacity-90 transition-all focus:ring-2 focus:ring-white focus:outline-none"
              >
                Explorar Serviços
              </Link>
              <Link 
                href="/perfil" 
                className="border border-white text-white px-4 py-2 rounded text-sm font-medium hover:bg-white/10 transition-all focus:ring-2 focus:ring-white focus:outline-none"
              >
                Atualizar Perfil
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10" aria-hidden="true">
          <Image
            src="/accessibility-icon.svg"
            alt=""
            width={200}
            height={200}
            className="brightness-0 invert"
          />
        </div>
      </section>

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
              className="text-primary text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
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
                Informações sobre centros de saúde, reabilitação e
                tratamentos para PCDs.
              </p>
              <Link 
                href="/saude"
                className="text-sm text-gray-700 hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
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
                Guia sobre benefícios governamentais e direitos legais
                para PCDs.
              </p>
              <Link 
                href="/beneficios"
                className="text-sm text-gray-700 hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
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
                Oportunidades de trabalho e capacitação profissional
                para PCDs.
              </p>
              <Link 
                href="/emprego"
                className="text-sm text-gray-700 hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
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
                A acessibilidade digital refere-se à prática de tornar os sites e aplicativos acessíveis para
                todas as pessoas, incluindo aquelas com deficiências.
              </p>
              <p className="text-sm text-gray-600">
                Neste portal, implementamos diversas práticas de acessibilidade, como navegação por
                teclado, descrições de imagem, e compatibilidade com leitores de tela.
              </p>
            </div>

            {/* Card de Direitos e Legislação */}
            <div className="bg-white rounded-lg p-6">
              <h2 className="text-lg font-medium mb-3 text-gray-800">Direitos e Legislação</h2>
              <p className="text-sm text-gray-600 mb-2">
                No Brasil, a Lei Brasileira de Inclusão (Lei nº 13.146/2015) garante direitos às pessoas
                com deficiência em diversas áreas como educação, saúde e trabalho.
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
