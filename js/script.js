const elementos = {
    resultado: document.getElementById('resultado')
}

const insert = (novoNumero) => {
    const numero = elementos.resultado.innerHTML;
    elementos.resultado.innerHTML = numero + novoNumero;
}

const clean = () => {
    elementos.resultado.innerHTML = "";
}

const back = () => {
    const resultado = elementos.resultado.innerHTML;
    elementos.resultado.innerHTML = resultado.substring(0, resultado.length - 1);
}

const calcular = () => {
    const resultado = elementos.resultado.innerHTML;
    if (resultado) {
        elementos.resultado.innerHTML = eval(resultado);
    } else {
        elementos.resultado.innerHTML = "Nada";
    }
}