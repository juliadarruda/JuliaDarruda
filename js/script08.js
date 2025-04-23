function validarCPF() {
    const cpf = document.getElementById("cpf").value;
    const resultado = document.getElementById("resultado");

    if (cpf.length !== 11 || isNaN(cpf)) {
        resultado.innerText = "CPF inválido. Digite exatamente 11 números.";
        return;
      }
    
      let todosIguais = true;
      for (let i = 1; i < cpf.length; i++) {
        if (cpf[i] !== cpf[0]) {
          todosIguais = false;
          break;
        }
      }
    
      if (todosIguais) {
        resultado.innerText = "CPF inválido. Todos os números são iguais.";
        return;
      }
    
      resultado.innerText = "CPF parece válido!";
    }