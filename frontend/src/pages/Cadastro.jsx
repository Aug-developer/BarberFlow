import Button from "../components/Button"

function Cadastro() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 p-4">
      {/* Cabeçalho de Cadastro */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold tracking-wide text-white">
          BarberFlow
        </h1>
        <p className="mt-1 text-sm text-slate-400">Crie sua conta!</p>
      </div>

      {/* Card de Cadastro */}
      <div className="h-auto w-112.5 space-y-4 rounded-xl bg-white p-8 shadow-lg">
        {/* Campo Nome */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold tracking-wider text-slate-700 uppercase">
            Nome
          </label>
          <input
            type="text"
            placeholder="Seu nome"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Campo Email */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold tracking-wider text-slate-700 uppercase">
            Email
          </label>
          <input
            type="email"
            placeholder="Seu e-mail"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Campo Senha */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold tracking-wider text-slate-700 uppercase">
            Senha
          </label>
          <input
            type="password"
            placeholder="Sua senha"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Campo Confirmar Senha */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold tracking-wider text-slate-700 uppercase">
            Confirmar Senha
          </label>
          <input
            type="password"
            placeholder="Confirme sua senha"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Numero de Telefone */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold tracking-wider text-slate-700 uppercase">
            Telefone
          </label>
          <input
            type="tel"
            placeholder="(XX) XXXXX-XXXX"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        {/* Botão Cadastrar */}
        <Button type="submit">Cadastrar</Button>
      </div>

      {/* Link para Login */}
      <p className="mt-6 text-center text-sm text-slate-600">
        Já tem uma conta?{" "}
        <a
          href="/login"
          className="font-semibold text-blue-600 hover:underline"
        >
          Entrar
        </a>
      </p>
    </div>
  )
}

export default Cadastro
