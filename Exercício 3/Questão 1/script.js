function validarToken(token, tempoSegundos) {

    if (!token) { 
        return "TOKEN_AUSENTE";
    }

    if (tempoSegundos <= 0) {
        return "SESSAO_EXPIRADA";
    }

    return "SESSAO_ATIVA";
}

console.log("Teste 1 (Sem token):", validarToken(null, 100));
console.log("Teste 2 (Expirado):", validarToken("abc123", 0));
console.log("Teste 3 (Ativo):", validarToken("abc123", 3600));