import Button from "../components/Button";

function Cadastro() {
    return (

    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4">

        {/* Cabeçalho de Cadastro */}
        <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-white tracking-wide">BarberFlow</h1>
            <p className="text-slate-400 text-sm mt-1">Crie sua conta!</p>
        </div>

        {/* Card de Cadastro */}
        <div className="w-[450px] h-auto bg-white rounded-xl shadow-lg p-8 space-y-4">

            {/* Campo Nome */}
            <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Nome</label>
                <input type="text" 
                    placeholder="Seu nome" 
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
                />
            </div>

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
                <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Senha</label>
                    <input type="password" 
                        placeholder="Sua senha" 
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
                    />
            </div>

            {/* Campo Confirmar Senha */}
            <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Confirmar Senha</label>
                    <input type="password" 
                        placeholder="Confirme sua senha" 
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
                    />
            </div>

            {/* Numero de Telefone */}
            <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider">Telefone</label>
                    <input type="tel" 
                        placeholder="(XX) XXXXX-XXXX" 
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
                    />
            </div>
            {/* Botão Cadastrar */}
            <Button type="submit">Cadastrar</Button>
        </div>

        {/* Link para Login */}
        <p className="text-center text-sm text-slate-600 mt-6">
            Já tem uma conta?{' '}
            <a href="/login" className="text-blue-600 font-semibold hover:underline">
                Entrar
            </a>
        </p>
    </div>

    );
}

export default Cadastro;