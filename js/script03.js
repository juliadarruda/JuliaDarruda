function calcularIdade () {
    const idade = parseInt (document.getElementById ('idade').value);
    const resultado = document.getElementById ('resultado');
    resultado.innerHTML = '';

    let faixa = "";
    if (idade <= 12) {
        faixa = "Criança";
    } else if (idade <= 19) {
        faixa = "Adolescente";
    } else if (idade <=59) {
        faixa = "Adulto";
    } else {
        faixa = "Idoso";
    }
 
    resultado.innerHTML = faixa;
}