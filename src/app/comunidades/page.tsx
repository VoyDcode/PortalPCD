export default function ComunidadesPage() {
    return (
      <main className="container mx-auto px-4 py-8">
        <section className="my-12">
          <h1 className="text-4xl font-bold text-center mb-8">
            Comunidades e Apoio Psicológico
          </h1>
          <p className="text-xl text-center mb-8">
            Suporte emocional e comunidades de apoio para PCDs
          </p>
        </section>
  
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Apoio Psicológico</h2>
            <ul className="space-y-2">
              <li>Atendimento Individual</li>
              <li>Terapia em Grupo</li>
              <li>Orientacao Familiar</li>
              <li>Suporte Online</li>
            </ul>
          </article>
  
          <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Comunidades</h2>
            <ul className="space-y-2">
              <li>Grupos de Apoio</li>
              <li>Associações</li>
              <li>Redes Sociais</li>
              <li>Eventos e Encontros</li>
            </ul>
          </article>
        </section>
  
        <section className="bg-blue-50 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">
            Serviços de Apoio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Atendimento Gratuito</h3>
              <p>CAPS - Centros de Atenção Psicossocial</p>
              <p>Clínicas Escola</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Atendimento Particular</h3>
              <p>Psicólogos Especializados</p>
              <p>Terapeutas</p>
            </div>
          </div>
        </section>
  
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">
            Recursos Online
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Aplicativos</h3>
              <p>Meditação</p>
              <p>Terapia Online</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
              <p>Grupos de Apoio</p>
              <p>Comunidades</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Sites</h3>
              <p>Blogs e Fóruns</p>
              <p>Recursos Educativos</p>
            </div>
          </div>
        </section>
  
        <section className="bg-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-6">
            Eventos e Atividades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Presenciais</h3>
              <ul className="space-y-2">
                <li>Workshops</li>
                <li>Palestras</li>
                <li>Encontros</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Online</h3>
              <ul className="space-y-2">
                <li>Webinars</li>
                <li>Grupos de Discussão</li>
                <li>Fóruns</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    )
  } 