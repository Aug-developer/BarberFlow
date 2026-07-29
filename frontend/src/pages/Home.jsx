function Home() {
  return (
    <div className="bg-[#111111]">
      {/* Pagina Principal */}

      {/* Cabeçalho */}
      <header className="bg-[#1a1a1a] flex justify-between items-center p-5 border-b border-gray-500">
        <div>
          <img src="logo.png" alt="LogoBarberFlow" />
        </div>
        <nav>
          <ul className="flex gap-6 mr-4 text-[#aaaaaa]">
            <li>Home</li>
            <li>Sobre</li>
            <li>Serviços</li>
            <li>Social</li>
          </ul>
        </nav>
      </header>

      {/* Conteúdo */}
      <main>
        {/* Home */}
        <section className="border-b border-[#c9a84c]">
          <div className="flex flex-col gap-1 text-center py-11">
            <h1 className="text-[#c9a84c] text-xl">Bem-vindo ao BarberFlow</h1>
            <p className="text-[#f0ebe0] text-5xl py-3">
              A arte do corte <span className="text-[#c9a84c]">perfeito.</span>
            </p>
            <p className="text-[#888888] py-2 text-9xs">
              Agende seu horário de forma rápida e prática.
            </p>
          </div>

          <div className="flex justify-center gap-5">
            <a
              href="/login"
              className="border rounded text-2xs bg-[#c9a84c] text-black text-center px-7 py-3"
            >
              Entrar
            </a>
            <a
              href="/cadastro"
              className="border rounded border-[#f0ebe074] text-2xs bg-[#111111] text-[#f0ebe0] text-center px-7 py-3"
            >
              Cadastrar-se
            </a>
          </div>

          <a
            href="#"
            className="text-[#888888] flex justify-center pt-4 pb-9 text-4xs"
          >
            Agendar sem login
          </a>
        </section>

        {/* Card de Serviços */}
        <div className="flex flex-col items-center border-b border-[#c9a84c] pb-15">
          <h2 className="text-3xl text-[#f0ebe0] pt-11 pb-8">Serviços</h2>
          <ul className="flex gap-5">
            <li className="text-[#f0ebe0] bg-[#1a1a1a] border rounded-xl p-5">
              Corte
              <span className="flex text-[#888888] pt-2">
                Corte clássico ou moderno.
              </span>
            </li>
            <li className="text-[#f0ebe0] bg-[#1a1a1a] border rounded-xl p-5">
              Barba
              <span className="flex text-[#888888] pt-2">
                Modelagem e hidratação.
              </span>
            </li>
            <li className="text-[#f0ebe0] bg-[#1a1a1a] border rounded-xl p-5">
              Sobrancelha
              <span className="flex text-[#888888] pt-2">
                Design e alinhamento.
              </span>
            </li>
            <li className="text-[#f0ebe0] bg-[#1a1a1a] border rounded-xl p-5">
              Combo
              <span className="flex text-[#888888] pt-2">
                Corte + barba + sobrancelha.
              </span>
            </li>
          </ul>
        </div>

        {/* Fotos dos cortes */}
        <div className="border-b border-[#c9a84c] p-5 flex justify-center text-[#f0ebe0] text-3xl">
          Fotos em breve
        </div>

        {/* Social e Agendamentos */}
        <div className="flex flex-col items-center p-15">
          <h2 className="text-[#f0ebe0] text-3xl">Social e Agendamentos</h2>
          <p className="text-[#888888] text-9xs pb-5 pt-2">
            Nos siga e agende pelo canal que preferir.
          </p>

          <div className="flex flex-row gap-5">
            <button className="text-[#f0ebe0] border rounded p-3">
              @barberflow
            </button>

            <button
              className="text-[#f0ebe0] border rounded bg-[#25D366] px-5 pr-3 pl-7"
              onClick={() => {
                window.location.href = "https://wa.me/5543999861294";
              }}
            >
              Agendar pelo Whatsapp
            </button>
          </div>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="flex flex-row justify-between bg-[#1a1a1a] p-5">
        <span className="text-[#f0ebe0]">
          Barber<span className="text-[#c9a84c]">Flow</span>
        </span>
        <span className="text-[#888888]">
          ©{new Date().getFullYear()} BarberFlow
        </span>
      </footer>
    </div>
  );
}

export default Home;
