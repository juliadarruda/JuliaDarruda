function converter() {
    const horas = parseFloat(document.getElementById("horas").value);
    const resultado = document.getElementById("resultado");
  
    if (isNaN(horas) || horas < 0) {
      resultado.innerText = "Por favor, digite um número válido de horas.";
      return;
    }
  
    const minutos = horas * 60;
    const segundos = horas * 3600;
  
    resultado.innerText = `${horas} horas = ${minutos} minutos = ${segundos} segundos.`;
  }