function calcularFrete(peso, uf) {
    if (peso <= 0) {
        return -1;
    }

    let taxaBase = 0;
    let valorPorKg = 0;

    if (uf === "BA") {
        taxaBase = 10.00;
        valorPorKg = 2.00;
    } else {
        taxaBase = 25.00;
        valorPorKg = 5.00;
    }

    let total = taxaBase + (peso * valorPorKg);

    if (peso > 20) {
        total += 50.00;
    }

    return total;
}

console.log("Teste 1 (Peso inválido):", calcularFrete(0, "BA"));
console.log("Teste 2 (Bahia, 10kg):", calcularFrete(10, "BA"));
console.log("Teste 3 (SP, 10kg):", calcularFrete(10, "SP"));
console.log("Teste 4 (Bahia, 25kg c/ sobretaxa):", calcularFrete(25, "BA"));