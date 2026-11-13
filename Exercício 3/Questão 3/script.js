function formatarCPF(cpf) {
    const cpfLimpo = cpf.replace(/[.\-]/g, '');

    if (cpfLimpo.length !== 11 || !/^\d+$/.test(cpfLimpo)) {
        return "CPF_INVALIDO";
    }

    return cpfLimpo;
}

console.log("Teste 1 (Válido):", formatarCPF("123.456.789-00"));
console.log("Teste 2 (Letras):", formatarCPF("123.456.789-AB"));
console.log("Teste 3 (Faltando números):", formatarCPF("123.456.789"));