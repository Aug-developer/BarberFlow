import Button from "../components/Button";

function Home() {
  return (
    <div className="min-h-screen bg-[#161412] p-4">
      {/* Pagina Principal */}

      {/* Cabeçalho */}
      <header className="flex bg-[#161412] justify-between items-center p-4 border-b border-[#3A342C]">
        <div>
          <img src="logo.png" alt="LogoBarberFlow" />
        </div>
        <nav className="text-[#9B9187]">
          <ul className="flex list-none gap-5 m-0 p-0">
            <li>Home</li>
            <li>Sobre</li>
            <li>Serviços</li>
            <li>Social</li>
          </ul>
        </nav>
      </header>

      {/* Conteúdo */}
      <main className="max-w-5xl mx-auto">
        {/* Home */}
        <section className="py-10">
          <div>
            <h1 className="text-[#F2EDE4] text-3xl md:text-4xl font-bold flex justify-center">
              Bem-vindo ao BarberFlow
            </h1>
            <p className="text-[#9B9187] flex justify-center mt-2">
              Agende seu horário de forma rápida e prática!
            </p>
          </div>

          <div className="flex gap-4 m-2 justify-center">
            <Button
              href="/login"
              className="bg-[#C08552] hover:bg-[#A8703F] text-[#161412] font-semibold px-6 py-2.5 rounded-md transition-colors"
            >
              Entrar
            </Button>

            <Button
              href="/cadastro"
              className="border border-[#6B5F4F] text-[#F2EDE4] font-semibold px-6 py-2.5 rounded-md hover:bg-[#211E1A] transition-colors"
            >
              Cadastrar-se
            </Button>
          </div>

          <a href="#" className="flex justify-center text-gray-400">
            Agendar sem login.
          </a>
        </section>

        {/* Card de Serviços */}
        <div className="py-10">
          <h2 className="flex justify-center text-white font-bold mb-4">
            Serviços
          </h2>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-[#0f0e0d] list-none">
            <li className="flex flex-col items-center justify-center h-28 bg-[#1e1c1a] rounded-xl text-white cursor-pointer hover:bg-[#272421] transition">
              Corte
            </li>
            <li className="flex flex-col items-center justify-center h-28 bg-[#1e1c1a] rounded-xl text-white cursor-pointer hover:bg-[#272421] transition">
              Barba
            </li>
            <li className="flex flex-col items-center justify-center h-28 bg-[#1e1c1a] rounded-xl text-white cursor-pointer hover:bg-[#272421] transition">
              Sobrancelha
            </li>
            <li className="flex flex-col items-center justify-center h-28 bg-[#1e1c1a] rounded-xl text-white cursor-pointer hover:bg-[#272421] transition">
              Combo
            </li>
          </ul>
        </div>

        {/* Fotos dos cortes */}
        <div className="w-full h-48 bg-[#1e1c1a] rounded-md flex items-center justify-center text-[#6B5F4F] text-sm my-10">
          Fotos em breve
        </div>

        {/* Social e Agendamentos */}
        <div className="py-10">
          <h2 className="flex justify-center text-white font-bold mb-4">
            Social e Agendamentos
          </h2>
          <div className="w-16 h-16 bg-[#1e1c1a] rounded-md mx-auto mb-4 flex items-center justify-center text-[#6B5F4F] text-xs">
            IG
          </div>

          <button
            className="w-full bg-[#25D366] hover:bg-[#1FB855] text-[#04331A] font-medium py-2.5 rounded-md transition-colors shadow-sm cursor-pointer"
            onClick={() => {
              window.location.href = "https://wa.me/5543999861294";
            }}
          >
            Faça seu agendamento por Whatsapp
          </button>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="flex justify-between items-center px-6 py-4 text-xs text-[#6B5F4F] border-t border-[#3A342C]">
        <span>BarberFlow</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}

export default Home;
