// Autenticação simulada (projeto acadêmico, sem back-end).
// Os usuários de teste estão aqui e também no README.md.
// Em um produto real, essa validação seria feita por um servidor.

export const USUARIOS_TESTE = [
  { id: 1, nome: "João Silva", perfil: "Estudante", email: "aluno@lensy.com", senha: "lensy123" },
  { id: 2, nome: "Professor FIAP", perfil: "Professor", email: "professor@fiap.com.br", senha: "fiap2026" },
];

const ATRASO_MS = 600; // simula o tempo de resposta de um servidor

export function autenticar(email, senha) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const encontrado = USUARIOS_TESTE.find(
        (usuario) => usuario.email === email.trim().toLowerCase() && usuario.senha === senha
      );

      if (!encontrado) {
        reject(new Error("E-mail ou senha incorretos."));
        return;
      }

      // A senha nunca é devolvida nem guardada na sessão.
      const { senha: _senha, ...usuario } = encontrado;
      resolve(usuario);
    }, ATRASO_MS);
  });
}
