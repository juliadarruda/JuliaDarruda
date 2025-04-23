const numeroAleatorio = Math.floor(Math.random() * 10) + 1;

function verificarPalpite() {
    const palpite = parseInt(document.getElementById("palpite").value);
    const dica = document.getElementById("dica");

    if (palpite === numeroAleatorio) {
        dica.textContent = `Você acertou :)`;
      } else if (palpite < numeroAleatorio) {
        dica.textContent = "Tente um número maior!";
      } else if (palpite > numeroAleatorio) {
        dica.textContent = "Tente um número menor!";
      }
    }
