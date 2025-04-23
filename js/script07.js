function mostrarPrimos () {
    const inicio = parseFloat (document.getElementById ('inicio').value);
    const fim = parseFloat (document.getElementById ('fim').value);
    const resultado = document.getElementById("resultado");
    let resposta = "";
    
    for (let num = inicio; num <= fim; num++) {
        let primo = true;
    
        if (num < 2) {
          primo = false;
        }
    
        for (let i = 2; i < num; i++) {
          if (num % i === 0) {
            primo = false;
            break;
          }
        }
    
        if (primo) {
          resposta += num + " ";
        }
      }
    
      if (resposta === "") {
        resultado.innerText = "Nenhum número primo encontrado.";
      } else {
        resultado.innerText = "Primos encontrados: " + resposta;
      }
    }
