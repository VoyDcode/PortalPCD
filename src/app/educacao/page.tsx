export default function EducacaoPage() {
    return (
      <main className="container mx-auto px-4 py-8">
        <section className="my-12">
          <h1 className="text-4xl font-bold text-center mb-8">
            Educação Inclusiva
          </h1>
          <p className="text-xl text-center mb-8">
            Recursos e informações sobre educação inclusiva para PCDs
          </p>
        </section>
  
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Níveis de Ensino</h2>
            <ul className="space-y-2">
              <li>Educação Infantil</li>
              <li>Ensino Fundamental</li>
              <li>Ensino Médio</li>
              <li>Ensino Superior</li>
              <li>Educação Profissional</li>
            </ul>
          </article>
  
          <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Recursos de Apoio</h2>
            <ul className="space-y-2">
              <li>Atendimento Educacional Especializado</li>
              <li>Salas de Recursos Multifuncionais</li>
              <li>Professores de Apoio</li>
              <li>Material Didático Adaptado</li>
            </ul>
          </article>
        </section>
  
        <section className="bg-blue-50 p-8 rounded-lg mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">
            Direitos Educacionais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Matrícula</h3>
              <p>Direito à matrícula em escolas regulares</p>
              <p>Adaptações necessárias garantidas</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Avaliação</h3>
              <p>Avaliações adaptadas</p>
              <p>Provas com tempo adicional</p>
            </div>
          </div>
        </section>
  
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">
            Instituições de Ensino
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Escolas Públicas</h3>
              <p>Rede de ensino inclusivo</p>
              <p>Núcleos de Apoio</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Universidades</h3>
              <p>Programas de Acessibilidade</p>
              <p>Núcleos de Inclusão</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Cursos Técnicos</h3>
              <p>Formação Profissional</p>
              <p>Qualificação Inclusiva</p>
            </div>
          </div>
        </section>
  
        <section className="bg-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-6">
            Recursos Digitais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Plataformas de Ensino</h3>
              <ul className="space-y-2">
                <li>Moodle</li>
                <li>Google Classroom</li>
                <li>Plataformas Adaptadas</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Ferramentas de Apoio</h3>
              <ul className="space-y-2">
                <li>Leitores de Tela</li>
                <li>Amplificadores de Tela</li>
                <li>Softwares de Apoio</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    )
  } 