function verificarAcesso(usuario, rota) {

    if (!usuario || usuario.ativo === false) {
        return "ACESSO_NEGADO";
    }

    if (rota === "/painel-admin") {
        if (usuario.perfil === "ADMIN") {
            return "ACESSO_PERMITIDO";
        }
    } else if (rota === "/relatorios") {
        if (usuario.perfil === "ADMIN" || usuario.perfil === "GERENTE") {
            return "ACESSO_PERMITIDO";
        }
    }

    
    if (rota === "/painel-admin" || rota === "/relatorios") {
        return "ACESSO_NEGADO"; 
    }

    return "ACESSO_PERMITIDO";
}

const admin = { nome: "Ana", ativo: true, perfil: "ADMIN" };
const gerente = { nome: "Beto", ativo: true, perfil: "GERENTE" };
const comum = { nome: "Caio", ativo: true, perfil: "COMUM" };
const inativo = { nome: "Duda", ativo: false, perfil: "ADMIN" };

console.log("Teste 1 (Inativo):", verificarAcesso(inativo, "/home"));
console.log("Teste 2 (Admin em painel):", verificarAcesso(admin, "/painel-admin"));
console.log("Teste 3 (Gerente em painel):", verificarAcesso(gerente, "/painel-admin"));
console.log("Teste 4 (Gerente em relatorios):", verificarAcesso(gerente, "/relatorios"));
console.log("Teste 5 (Comum em relatorios):", verificarAcesso(comum, "/relatorios")); 
console.log("Teste 6 (Rota pública):", verificarAcesso(comum, "/home"));