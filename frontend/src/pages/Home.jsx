function Home() {
  return (
    <div>
      {/* Pagina Principal */}

      {/* Cabeçalho */}
      <header>
        <div>
          <img src="logo.png" alt="LogoBarberFlow" />
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Sobre</li>
            <li>Serviços</li>
            <li>Contato</li>
          </ul>
        </nav>
      </header>

      {/* Conteúdo */}
      <main>
        {/* Conteúdo principal */}
        <section>
          <h1>Bem-vindo ao BarberFlow</h1>
          <p>Agende seu horário de forma rápida e prática!</p>
          <a href="/login">Entrar</a>
          <a href="/cadastro">Cadastrar-se</a>
          <a href="#">Agendar sem login.</a>
        </section>

        {/* Card de Serviços */}
        <div>
          <h1>Serviços</h1>
          <ul>
            <li>Serviço 1</li>
            <li>Serviço 2</li>
            <li>Serviços 3</li>
            <li>Serviços 4</li>
          </ul>
        </div>

        {/* Fotos dos cortes */}
        <div>
          <img src="" alt="imagens dos cortes" />
        </div>

        {/* Social e Agendamentos */}
        <div>
          <h1>Social e Agendamentos</h1>
          <img src="" alt="Instagram" />

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-md transition-colors shadow-sm cursor-pointer"
            onClick={() => {
              window.location.href = "https://wa.me/5543999861294";
            }}
          >
            Faça seu agendamento por Whatsapp
          </button>
        </div>
      </main>

      {/* Rodapé */}
      <footer></footer>
    </div>
  );
}

export default Home;
