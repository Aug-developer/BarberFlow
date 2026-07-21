import Button from "../components/Button";


function Login() {
  return (
    <div>
      <h1>BarberFlow</h1>
      <p>Entrar na plataforma</p>

      <div>
        <p>Email</p>
        <input type="email" placeholder="Seu melhor e-mail" /><br />

        <p>Senha</p>
        <input type="password" placeholder="Sua senha" /><br />
        <input type="checkbox" /> Lembrar senha<br />

        <Button />
      </div>

      <div>
        <a href="#">Esqueceu a senha?</a><br />
        <a href="#">Cadastrar</a>
      </div>
      
    </div>
  );
}

export default Login;