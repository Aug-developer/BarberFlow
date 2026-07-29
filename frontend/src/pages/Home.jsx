function Home() {
  return (
    <div className="bg-[#111111]">
      {/* Pagina Principal */}

      {/* Cabeçalho */}
      <header className="flex items-center justify-between border-b border-gray-500 bg-[#1a1a1a] p-5">
        <div>
          <img src="logo.png" alt="LogoBarberFlow" />
        </div>
        <nav>
          <ul className="mr-4 flex gap-6 text-[#aaaaaa]">
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
          <div className="flex flex-col gap-1 py-11 text-center">
            <h1 className="text-xl text-[#c9a84c]">Bem-vindo ao BarberFlow</h1>
            <p className="py-3 text-5xl text-[#f0ebe0]">
              A arte do corte <span className="text-[#c9a84c]">perfeito.</span>
            </p>
            <p className="text-9xs py-2 text-[#888888]">
              Agende seu horário de forma rápida e prática.
            </p>
          </div>

          <div className="flex justify-center gap-5">
            <a
              href="/login"
              className="text-2xs rounded border bg-[#c9a84c] px-7 py-3 text-center text-black"
            >
              Entrar
            </a>
            <a
              href="/cadastro"
              className="text-2xs rounded border border-[#f0ebe074] bg-[#111111] px-7 py-3 text-center text-[#f0ebe0]"
            >
              Cadastrar-se
            </a>
          </div>

          <a href="#" className="text-4xs flex justify-center text-[#888888]">
            Agendar sem login
          </a>
        </section>

        {/* Card de Serviços */}
        <div className="flex flex-col items-center border-b border-[#c9a84c] pb-15">
          <h2 className="pt-11 pb-8 text-3xl text-[#f0ebe0]">Serviços</h2>
          <ul className="flex gap-5">
            <li className="rounded-xl border bg-[#1a1a1a] p-5 text-[#f0ebe0]">
              Corte
              <span className="flex pt-2 text-[#888888]">
                Corte clássico ou moderno.
              </span>
            </li>
            <li className="rounded-xl border bg-[#1a1a1a] p-5 text-[#f0ebe0]">
              Barba
              <span className="flex pt-2 text-[#888888]">
                Modelagem e hidratação.
              </span>
            </li>
            <li className="rounded-xl border bg-[#1a1a1a] p-5 text-[#f0ebe0]">
              Sobrancelha
              <span className="flex pt-2 text-[#888888]">
                Design e alinhamento.
              </span>
            </li>
            <li className="rounded-xl border bg-[#1a1a1a] p-5 text-[#f0ebe0]">
              Combo
              <span className="flex pt-2 text-[#888888]">
                Corte + barba + sobrancelha.
              </span>
            </li>
          </ul>
        </div>

        {/* Fotos dos cortes */}
        <div className="flex justify-center border-b border-[#c9a84c] p-5 text-3xl text-[#f0ebe0]">
          Fotos em breve
        </div>

        {/* Social e Agendamentos */}
        <div className="flex flex-col items-center p-15">
          <h2 className="text-3xl text-[#f0ebe0]">Social e Agendamentos</h2>
          <p className="text-9xs pt-2 pb-5 text-[#888888]">
            Nos siga e agende pelo canal que preferir.
          </p>

          <div className="flex flex-row gap-5">
            <button className="rounded border p-3 text-[#f0ebe0]">
              @barberflow
            </button>

            <button
              className="rounded border bg-[#25D366] px-5 pr-3 pl-7 text-[#f0ebe0]"
              onClick={() => {
                window.location.href = "https://wa.me/5543999861294"
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
  )
}

export default Home
