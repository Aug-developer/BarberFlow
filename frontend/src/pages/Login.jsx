import Button from "../components/Button"

function Login() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 p-4">
      {/* Cabeçalho de Boas-vindas */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold tracking-wide text-white">
          BarberFlow
        </h1>
        <p className="mt-1 text-sm text-slate-400">Seja bem-vindo de volta!</p>
      </div>

      {/* Card de Login */}
      <div className="h-auto w-112.5 rounded-xl bg-white p-8 shadow-lg">
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

        {/* Lembrar e Esqueci Senha */}
        <div className="mt-1 flex items-center justify-between text-sm">
          <label className="flex cursor-pointer items-center gap-2 text-slate-600">
            <input
              type="checkbox"
              className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            Lembrar senha
          </label>
          <a href="#" className="font-medium text-blue-600 hover:underline">
            Esqueceu a senha?
          </a>
        </div>

        {/* Botão Entrar */}
        <Button type="submit">Entrar</Button>

        {/* Link para Cadastro */}
        <p className="mt-6 text-center text-sm text-slate-600">
          Ainda não tem conta?{" "}
          <a
            href="/cadastro"
            className="font-semibold text-blue-600 hover:underline"
          >
            Cadastrar-se
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login
