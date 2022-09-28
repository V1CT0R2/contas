
class Calculadora{
    somar(n1, n2){
        return(n1 + n2)
    }
    subtrair(n1, n2){
        return(n1 - n2)
    }
    multiplicar(n1, n2){
        return(n1 * n2)
    }
    dividir(n1, n2){
        return(n1 / n2)
    }
}
let mcalculadora = new Calculadora();

    function somar() {
        
        var num1 = document.querySelector("input#num1")
        var num2 = document.querySelector("input#num2")
        var n1 = Number(num1.value)
        var n2 = Number(num2.value)
        var result_calculo = document.querySelector("div#result_calculo")
        let resultado = mcalculadora.somar(n1,n2)
        result_calculo.innerHTML = `${n1} + ${n2} = ${resultado}`
   
    }

    function subtrair() {

        var num1 = document.querySelector('input#num1')
        var num2 = document.querySelector('input#num2')
        var n1 = Number(num1.value)
        var n2 = Number(num2.value)
        var result_calculo = document.querySelector('div#result_calculo')
        let resultado = mcalculadora.subtrair(n1,n2)
        result_calculo.innerHTML = `${n1} - ${n2} = ${resultado}`
    }

    function multiplicar() {

        var num1 = document.querySelector('input#num1')
        var num2 = document.querySelector('input#num2')
        var n1 = Number(num1.value)
        var n2 = Number(num2.value)
        var result_calculo = document.querySelector('div#result_calculo')
        let resultado = mcalculadora.multiplicar(n1,n2)
        result_calculo.innerHTML = `${n1} * ${n2} = ${resultado}`
    }

    function dividir() {

        var num1 = document.querySelector('input#num1')
        var num2 = document.querySelector('input#num2')
        var n1 = Number(num1.value)
        var n2 = Number(num2.value)
        var result_calculo = document.querySelector('div#result_calculo')
        let resultado = mcalculadora.dividir(n1,n2)
        result_calculo.innerHTML = `${n1} / ${n2} = ${resultado}`
    }
     
    




    
    
