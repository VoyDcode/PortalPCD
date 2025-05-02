export default function DenunciasPage() {
    return (
      <main className="container mx-auto px-4 py-8">
        <section className="my-12">
          <h1 className="text-4xl font-bold text-center mb-8">
            Denúncias e Reclamações
          </h1>
          <p className="text-xl text-center mb-8">
            Canais para denúncias e reclamações sobre acessibilidade e direitos
          </p>
        </section>
  
  
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Canais de Denúncia</h2>
            <ul className="space-y-2">
              <li>Disque 100</li>
              <li>Ouvidoria Pública</li>
              <li>Ministério Público</li>
              <li>Defensoria Pública</li>
            </ul>
          </article>
  
          <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Tipos de Denúncia</h2>
            <ul className="space-y-2">
              <li>Discriminação</li>
              <li>Inacessibilidade</li>
              <li>Negativa de Direitos</li>
              <li>Maus Tratos</li>
            </ul>
          </article>
        </section>
  
        <section className="bg-blue-50 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">
            Como Denunciar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Presencial</h3>
              <p>Órgãos Públicos</p>
              <p>Delegacias Especializadas</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Online</h3>
              <p>Formulários Eletrônicos</p>
              <p>Redes Sociais</p>
            </div>
          </div>
        </section>
  
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">
            Órgãos de Defesa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Federal</h3>
              <p>Ministério Público Federal</p>
              <p>Defensoria Pública da União</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Estadual</h3>
              <p>Ministério Público Estadual</p>
              <p>Defensoria Pública Estadual</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Municipal</h3>
              <p>Conselhos Municipais</p>
              <p>Ouvidorias</p>
            </div>
          </div>
        </section>
  
        <section className="bg-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-6">
            Direitos e Garantias
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Proteção</h3>
              <ul className="space-y-2">
                <li>Sigilo do Denunciante</li>
                <li>Proteção contra Retaliação</li>
                <li>Processo Sigiloso</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Acompanhamento</h3>
              <ul className="space-y-2">
                <li>Número do Protocolo</li>
                <li>Status da Denúncia</li>
                <li>Prazos de Resposta</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    )
  } 