

const calcular = document.getElementById('calcular')

function imc() {

    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    if(nome !== '' && altura !== '' && peso !== ''){
        
        const valorImc = (peso /(altura * altura)).toFixed(1)

          let classificacao = '';

          if(valorImc < 18.5){

            classificacao = 'abaixo do peso'
          }else if(valorImc <25){
              classificacao = 'Peso normal parabens !!!'

          }else if( valorImc <30){
              classificacao = 'sobrepeso !!!'
          }else if( valorImc <35){
              classificacao = 'Obesidade grau I '
          }else if(valorImc <40){
              classificacao = 'Obeso grau II !!! '
          }else{
                classificacao=' obesidade grau III sua saúde esta gravemente em risco'
          }
            resultado.innerHTML= `${nome} seu imc é ${valorImc} e voce esta com  ${classificacao}`    
    }else{

        resultado.innerHTML= 'Prencha os Campos vazios'
    }


}
calcular.addEventListener('click', imc)

