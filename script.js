var nascimento = document.querySelector('input#text') 

    function verificar(){
        var data = new Date()// Aqui vou pegar a data atual
        var ano = data.getFullYear()// Aqui vou  pegar o ano atual,getFullYear irá pegar 4 digitos  ex:2023
        var res = document.querySelector('div#res')
        var fano = Number(nascimento.value)//aqui eu converti a  variavel NASCIMENTO que era texto  para numero 
       //res.innerHTML = `Detectamos uma jovem com ${idade}anos
       var resultado = ano - fano
       var fsex = document.getElementsByName ('radsex')// Aqui eu peguei o nome 'radsex' no html e passei para a variavel fsex
       var genero = ''// aqui eu criei uma variavel para receber os caracteres ''
       var cria = ''
       var jove = ''
       var img = document.createElement ('img')
       img.setAttribute ('id', 'foto')

         if(fano == 0  || fano > ano ){// aqui eu verifico uma MICRO-VALIDAÇÃO, verica se a caixa está fazia e se o valor é igual a zero ou se  o valor é acima de  ano
            window.alert('[erro] Verifique os dados e tente novamente')
            
         }  else{
            if (fsex[0].checked){
                genero = 'Homem'
                if(resultado >=1 && resultado <=10){
                    res.innerHTML += `<p> Detectamos uma <strong> Criança</strong> de <strong> ${resultado}</strong> anos </p>`
                    img.setAttribute('src','img/Criança menino.jpg')
                }else if (resultado > 15 && resultado <= 31){
                    res.innerHTML += `<p>Detectamos um <strong> Jovem </strong> de <strong>${resultado}</strong> anos</p>`
                    img.setAttribute('src','img/foto jovem 2.jpeg')
                }else if ( resultado >= 32 && resultado <= 50){
                    res.innerHTML += `<p>Detectamos um <strong> Homem </strong> de <strong>${resultado}</strong> <p>`
                    img.setAttribute('src','img/Homem de 40 anos.jpg')
                }else if( resultado >= 60 && resultado <= 150){
                    res.innerHTML += `<p> Detectamos um <strong> Senhor</storng> de <strong> ${resultado}<strong> <p>`
                    img.setAttribute('src', 'img/Homem de 60 anos.jpg')
                }
            }else if(fsex[1].checked){
                genero = 'Mulher'
                if( resultado >=1 && resultado <=10){
                    res.innerHTML += `<p> Detectamos uma <strong> Criança </strong> de <strong>${resultado}</strong> anos</p>.`
                    img.setAttribute('src','img/Criança menina.jpg')
            }else if(resultado > 15 && resultado <= 31){
                res.innerHTML +=`<p> Detectamos uma <strong> Jovem </strong> de <strong> ${resultado}</strong> anos</p>`
                img.setAttribute('src', 'img/Mulher Jovem.jpg')
            }else if(resultado >= 32 && resultado <= 50){
                res.innerHTML +=`<p> Detectamos uma <strong> Mulher </strong> de <strong> ${resultado}</strong> anos</p>`
                img.setAttribute('src','img/Mulher de 40 anos.jpg')
            }else{
                res.innerHTML += `<p> Detectamos uma <strong> Senhora </strong> de <strong> ${resultado}</strong> anos</p>`
                img.setAttribute('src', 'img/foto senhoraas.jpeg')
            }
         }
       res.appendChild(img)   

        }
}
var a = document.getElementById('class-table')
function removeLinha1(){
document.getElementById('Masculino').value = ""
document.getElementById('Femenino').value = ""
a.style.background = 'red'

}
      
