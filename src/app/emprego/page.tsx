export default function EmpregoPage() {
    return (
      <main className="container mx-auto px-4 py-8">
        <section className="my-12">
          <h1 className="text-4xl font-bold text-center mb-8">
            Emprego e Profissionalização
          </h1>
          <p className="text-xl text-center mb-8">
            Oportunidades de trabalho e capacitação profissional para PCDs
          </p>
        </section>
  
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Oportunidades de Emprego</h2>
            <ul className="space-y-2">
              <li>Vagas Exclusivas para PCDs</li>
              <li>Programas de Inclusão</li>
              <li>Empresas Parceiras</li>
              <li>Banco de Talentos</li>
            </ul>
          </article>
  
          <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Capacitação Profissional</h2>
            <ul className="space-y-2">
              <li>Cursos Gratuitos</li>
              <li>Programas de Aprendizagem</li>
              <li>Qualificação Profissional</li>
              <li>Mentoria e Coaching</li>
            </ul>
          </article>
        </section>
  
        <section className="bg-blue-50 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">
            Lei de Cotas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Empresas com 100 ou mais funcionários</h3>
              <p>Devem reservar de 2% a 5% das vagas para pessoas com deficiência</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Empresas Públicas</h3>
              <p>Devem reservar 20% das vagas em concursos públicos para PCDs</p>
            </div>
          </div>
        </section>
  
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">
            Recursos e Apoio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">SINE</h3>
              <p>Sistema Nacional de Emprego</p>
              <p>www.sine.com.br</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">SENAI</h3>
              <p>Cursos Profissionalizantes</p>
              <p>www.senai.br</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">SEBRAE</h3>
              <p>Empreendedorismo</p>
              <p>www.sebrae.com.br</p>
            </div>
          </div>
        </section>
  
        <section className="bg-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-6">
            Dicas para Entrevistas
          </h2>
          <ul className="space-y-4 max-w-2xl mx-auto">
            <li>Prepare-se com antecedência</li>
            <li>Conheça seus direitos</li>
            <li>Destaque suas habilidades</li>
            <li>Seja transparente sobre suas necessidades</li>
            <li>Pesquise sobre a empresa</li>
          </ul>
        </section>
      </main>
    )
  } 