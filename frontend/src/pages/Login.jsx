import Button from "../components/Button";


function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <h1 className="text-3xl font-bold text-white">BarberFlow</h1>
      <p className="text-lg text-white">Seja Bem-vindo</p><br />

      <div className="w-[450px] h-[500px] bg-white rounded-xl shadow-lg p-8">
        <p className="font-bold flex flex-rol justify-start mb-2">Email</p>
        <input type="email" placeholder="Seu e-mail" />

        <p className="font-bold flex flex-rol justify-start mb-2">Senha</p>
        <input type="password" placeholder="Sua senha" />
        
        <div className="flex justify-between items-center w-full">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
                <span>Lembrar senha</span>
            </label>
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Esqueceu a senha?
          </a>
        </div>

        <Button />

        <div>
          <a href="#">Cadastrar-se</a>
        </div>
        
      </div>

    </div>
  );
}

export default Login;