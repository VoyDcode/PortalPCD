export default function TecnologiaPage() {
    return (
      <main className="container mx-auto px-4 py-8">
        <section className="my-12">
          <h1 className="text-4xl font-bold text-center mb-8">
            Produtos e Tecnologia Assistiva
          </h1>
          <p className="text-xl text-center mb-8">
            Tecnologias e produtos que facilitam o dia a dia das PCDs
          </p>
        </section>
  
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Tecnologias Digitais</h2>
            <ul className="space-y-2">
              <li>Leitores de Tela</li>
              <li>Amplificadores de Tela</li>
              <li>Softwares de Apoio</li>
              <li>Aplicativos Acessíveis</li>
            </ul>
          </article>
  
          <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Produtos de Apoio</h2>
            <ul className="space-y-2">
              <li>Cadeiras de Rodas</li>
              <li>Andadores</li>
              <li>Órteses e Próteses</li>
              <li>Equipamentos Adaptados</li>
            </ul>
          </article>
        </section>
  
        <section className="bg-blue-50 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">
            Financiamento
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">SUS</h3>
              <p>Distribuição de Tecnologias Assistivas</p>
              <p>Processo de Solicitação</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Isenções</h3>
              <p>Isenção de Impostos</p>
              <p>Financiamento Especial</p>
            </div>
          </div>
        </section>
  
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">
            Recursos e Aplicativos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Acessibilidade</h3>
              <p>NVDA</p>
              <p>DosVox</p>
              <p>Virtual Vision</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Comunicação</h3>
              <p>Hand Talk</p>
              <p>VLibras</p>
              <p>ProDeaf</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Mobilidade</h3>
              <p>Guia de Rodas</p>
              <p>Waze Acessível</p>
              <p>Google Maps</p>
            </div>
          </div>
        </section>
  
        <section className="bg-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-6">
            Onde Encontrar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Lojas Especializadas</h3>
              <ul className="space-y-2">
                <li>Lojas Físicas</li>
                <li>E-commerces</li>
                <li>Distribuidores</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Centros de Reabilitação</h3>
              <ul className="space-y-2">
                <li>Hospitais</li>
                <li>Clínicas</li>
                <li>Centros de Apoio</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    )
  } 