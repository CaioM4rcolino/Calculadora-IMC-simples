const calcular = document.getElementById('btnCalc');

function imc(){

  const nome = document.getElementById('nome').value;

  const altura = document.getElementById('altura').value;

  const peso = document.getElementById('peso').value;

  const resultado = document.getElementById('IMC');

  if(nome != "" && altura != "" && peso != ""){

    const valorIMC = (peso / (altura * altura)).toFixed(2);

    let classificacao = ' ';

      if(valorIMC < 18.5){

        classificacao = "abaixo do peso";
      }
      else if(valorIMC < 25){

        classificao = "com peso ideal. Parabéns!";
      }
      else if(valorIMC < 30){

        classificacao = "levemente acima do peso.";
      }
      else if(valorIMC < 35){

          classificacao = "com obesidade grau I.";
      }
      else if(valorIMC < 40){

          classificacao = "com obesidade grau II";
      }
      else {

          classificacao = "com obesidade mórbida. Cuidado!";
      }

    resultado.textContent = `${nome}, seu IMC é ${valorIMC}, você está ${classificacao}`;
  }
  else {

    alert('Preencha todas as caixas!');
  }
}

calcular.addEventListener('click', imc);
