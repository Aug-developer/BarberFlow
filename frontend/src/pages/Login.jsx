import Button from "../components/Button";


function Login() {
  return (

    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4">
      
      {/* Cabeçalho de Boas-vindas */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-white tracking-wide">BarberFlow</h1>
        <p className="text-slate-400 text-sm mt-1">Seja bem-vindo de volta!</p>
      </div>

    {/* Card de Login */}
    <div className="w-[450px] h-auto bg-white rounded-xl shadow-lg p-8">

        {/* Campo Email */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Email</label>
            <input type="email" 
            placeholder="Seu e-mail" 
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
          />
        </div>

       {/* Campo Senha */}
        <div className="flex flex-col gap-1">
          <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Senha</label >
            <input type="password" 
            placeholder="Sua senha" 
            className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
          />
        </div>

        {/* Lembrar e Esqueci Senha */}
        <div className="flex items-center justify-between text-sm mt-1">
            <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
              <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
              Lembrar senha
            </label>
            <a href="#" className="text-blue-600 hover:underline font-medium">
              Esqueceu a senha?
            </a>
          </div>

        {/* Botão Entrar */}
        <Button type="submit">Entrar</Button>

        {/* Link para Cadastro */}
        <p className="text-center text-sm text-slate-600 mt-6">
          Ainda não tem conta?{' '}
          <a href="/cadastro" className="text-blue-600 font-semibold hover:underline">
            Cadastrar-se
          </a>
        </p>
        
    </div>

    </div>
  );
}

export default Login;