import Link from 'next/link'
import Image from 'next/image'

export default function ServicosPage() {
  return (
    <main className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Serviços e Informações
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Explore nossa lista completa de serviços e informações para pessoas com deficiência,
          cuidadores e profissionais.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card Saúde */}
          <div className="group">
            <div className="bg-rose-50 rounded-t-lg p-6">
              <Image
                src="/health-icon.svg"
                alt=""
                width={32}
                height={32}
                className="mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Serviços de Saúde e Reabilitação
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Informações sobre centros de saúde, reabilitação e tratamentos para PCDs.
              </p>
              <Link
                href="/saude"
                className="text-primary text-sm hover:underline"
              >
                Clique para mais informações →
              </Link>
            </div>
          </div>

          {/* Card Benefícios */}
          <div className="group">
            <div className="bg-blue-50 rounded-t-lg p-6">
              <Image
                src="/benefits-icon.svg"
                alt=""
                width={32}
                height={32}
                className="mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Benefícios e Direitos
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Guia sobre benefícios governamentais e direitos legais para PCDs.
              </p>
              <Link
                href="/beneficios"
                className="text-primary text-sm hover:underline"
              >
                Clique para mais informações →
              </Link>
            </div>
          </div>

          {/* Card Emprego */}
          <div className="group">
            <div className="bg-green-50 rounded-t-lg p-6">
              <Image
                src="/job-icon.svg"
                alt=""
                width={32}
                height={32}
                className="mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Emprego e Profissionalização
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Oportunidades de trabalho e capacitação profissional para PCDs.
              </p>
              <Link
                href="/emprego"
                className="text-primary text-sm hover:underline"
              >
                Clique para mais informações →
              </Link>
            </div>
          </div>

          {/* Card Educação */}
          <div className="group">
            <div className="bg-yellow-50 rounded-t-lg p-6">
              <Image
                src="/education-icon.svg"
                alt=""
                width={32}
                height={32}
                className="mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Educação Inclusiva
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Recursos e instituições educacionais adaptadas para PCDs.
              </p>
              <Link
                href="/educacao"
                className="text-primary text-sm hover:underline"
              >
                Clique para mais informações →
              </Link>
            </div>
          </div>

          {/* Card Acessibilidade */}
          <div className="group">
            <div className="bg-purple-50 rounded-t-lg p-6">
              <Image
                src="/accessibility-icon.svg"
                alt=""
                width={32}
                height={32}
                className="mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Acessibilidade Urbana e Mobilidade
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Informações sobre transporte e espaços urbanos acessíveis.
              </p>
              <Link
                href="/acessibilidade"
                className="text-primary text-sm hover:underline"
              >
                Clique para mais informações →
              </Link>
            </div>
          </div>

          {/* Card Comunidades */}
          <div className="group">
            <div className="bg-pink-50 rounded-t-lg p-6">
              <Image
                src="/community-icon.svg"
                alt=""
                width={32}
                height={32}
                className="mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Comunidades e Apoio Psicológico
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Grupos de apoio e recursos para saúde mental e bem-estar.
              </p>
              <Link
                href="/comunidades"
                className="text-primary text-sm hover:underline"
              >
                Clique para mais informações →
              </Link>
            </div>
          </div>

          {/* Card Tecnologia */}
          <div className="group">
            <div className="bg-indigo-50 rounded-t-lg p-6">
              <Image
                src="/tech-icon.svg"
                alt=""
                width={32}
                height={32}
                className="mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Produtos e Tecnologia Assistiva
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Soluções tecnológicas e produtos adaptados para PCDs.
              </p>
              <Link
                href="/tecnologia"
                className="text-primary text-sm hover:underline"
              >
                Clique para mais informações →
              </Link>
            </div>
          </div>

          {/* Card Denúncias */}
          <div className="group">
            <div className="bg-orange-50 rounded-t-lg p-6">
              <Image
                src="/report-icon.svg"
                alt=""
                width={32}
                height={32}
                className="mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Denúncias e Reclamações
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Canais para denúncias de discriminação e violação de direitos.
              </p>
              <Link
                href="/denuncias"
                className="text-primary text-sm hover:underline"
              >
                Clique para mais informações →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 