function calcularFatorial() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");

  let fatorial = 1;

  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }

  resultado.textContent = `O fatorial de ${numero} é ${fatorial}.`;
}
