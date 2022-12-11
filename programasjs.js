
/*PROMEDIO DE DOS NOTAS EJE.10 */
const Nota=()=>{
    const num1 =document.getElementById("num1").value
    const num2 =document.getElementById("num2").value
     
  let pro = num1*0.30 + num2*0.70


  document.getElementById("res").innerHTML = pro

}

/*PESO PROMEDIO EJE.11 */

const PromedioPeso=()=>{
    const altura = document.getElementById("altura").value
    const edad = document.getElementById("edad").value
    const sexo = document.getElementById("sexo").value
    const pesoA = document.getElementById("pesoA").value

    let calpe = (sexo == "H")? (50 + ((altura-150)/4)*3+((edad-20)/4)):
    (sexo == "M")? 50 + ((altura-150)/4)*3+((edad-20)/4)*0.9:
    alert("ingrese datos correctos")
    

    document.getElementById("caluPeso").innerHTML = calpe

}

/*NUMERO MAYOR EJE.12 */

const Mayor=()=>{
    const n1 =parseFloat( document.getElementById("n1").value)
    const n2 =parseFloat (document.getElementById("n2").value)
    const n3 =parseFloat (document.getElementById("n3").value)
   

    let numMayor = (n1 > n2 && n1 > n3)? "El numero mayor es: " + n1 :
    (n2 > n1 && n2 > n3)?"El numero mayor es: " + n2 :
    (n3 > n1 && n3 > n2)?"El numero mayor es: " + n3:
    alert("ingrese datos correctos")
 
   document.getElementById("numMay").innerHTML = numMayor
}



/* CALCULADORA EJE.12*/

const CalculadoraS=()=>{
    const nc1 = parseFloat(document.getElementById("nc1").value)
    const nc2 =parseFloat(document.getElementById("nc2").value)

    const sumCal = nc1 + nc2

    document.getElementById("resulCalculadora").innerHTML = sumCal
}

const CalculadoraR=()=>{
    const nc1 = parseFloat(document.getElementById("nc1").value)
    const nc2 =parseFloat(document.getElementById("nc2").value)

    const sumCal = nc1 - nc2

    document.getElementById("resulCalculadora").innerHTML = sumCal
}

const CalculadoraM=()=>{
    const nc1 = parseFloat(document.getElementById("nc1").value)
    const nc2 =parseFloat(document.getElementById("nc2").value)

    const sumCal = nc1 * nc2

    document.getElementById("resulCalculadora").innerHTML = sumCal
}

const CalculadoraD=()=>{
    const nc1 = parseFloat(document.getElementById("nc1").value)
    const nc2 =parseFloat(document.getElementById("nc2").value)

    const sumCal = nc1 / nc2

    document.getElementById("resulCalculadora").innerHTML = sumCal
}


/*CELCIUS A Fahremheit EJE.13*/

const TemperaturaC=()=>{
    const celcius = parseFloat(document.getElementById("celcius").value)

    const calfare = (celcius * 1.8)+32

    document.getElementById("rCel").innerHTML =  celcius+ "°C" + " en Fahremheit son: " + calfare+ "°F"

 
}

const TemperaturaF=()=>{
    const faren = parseFloat(document.getElementById("fahrenheit").value)  
    const calcel = (faren - 1.8)/1.8


    const Fare = (faren >= 14 && faren <= 32)?document.getElementById("rCel").innerHTML = "Temperatura baja "+ calcel +" °C":
    (faren >= 32 && faren <= 68)?document.getElementById("rCel").innerHTML = "Temperatura adecuada " + calcel +" °C":
    (faren >= 68 && faren <= 96)?document.getElementById("rCel").innerHTML = "Temperatura alta " + calcel +" °C":
    document.getElementById("rCel").innerHTML = "Temperatura desconocida " + calcel +" °C"

}


/*CARGAR 10 VALORES EJE.14 */

const Contar=()=>{
    let numNegativo = 0
    let numPositivo = 0
    let numMultiplo15 = 0
    let numPares = 0
   

    for (let i = 1 ; i <= 10; i++) {
        let contarNumero = parseFloat(prompt("Ingres el numero " + i ))
        const conNumero = (contarNumero < 0 )? numNegativo++:
        (contarNumero > 0 )? numPositivo++:
        (contarNumero % 15 == 0 && contarNumero != 0)?numMultiplo15++:
        (contarNumero % 2 == 0)? numPares=numPares + contarNumero: 
        alert("ingrese algun numero")

     

    }
    
document.getElementById("dato1").innerHTML = "los numeros negativos son: " + numNegativo 
document.getElementById("dato2").innerHTML = "los numeros positivos son: " + numPositivo 
document.getElementById("dato3").innerHTML = "los numeros multiplos de 15 son: " + numMultiplo15 
document.getElementById("dato4").innerHTML = "los numeros pares son: " + numPares 


}


/*Contar()*/




/*CALCULO PROMEDIOS DE EDAD EJE.15 */
/**lo realize con prompt porque me confundi un poco al quere hacerlo con input ,, perdon */

const PromedioEdad=()=>{
    let sumar1 = 0
    for (let i = 1; i <= 5; i++) {
        let edadP1 = parseFloat(prompt("ingrese la edad numero " + i + " del turno de la mañana"))
        sumar1 = sumar1 + edadP1
    }

    let sumar2 = 0
    for (let i = 1; i <= 6; i++) {
        let edadP2 = parseFloat(prompt("ingrese la edad numero " + i + " del turno de la tarde"))
        sumar2 = sumar2 + edadP2
    }

    let sumar3 = 0
    for (let i = 1; i <= 11; i++) {
        let edadP3 = parseFloat(prompt("ingrese la edad numero " + i + " del turno de la noche"))
        sumar3 = sumar3 + edadP3
    }

    let promedio1 = sumar1 / 5
    let promedio2 = sumar2 / 6
    let promedio3 = sumar3 / 11
     
    document.getElementById("valor1").innerHTML = "El promedio de edad de la mañana es : " + promedio1
    document.getElementById("valor2").innerHTML = "El promedio de edad de la tarde es : " + promedio2
    document.getElementById("valor3").innerHTML = "El promedio de edad de la noche es : " + promedio3
    


    const PromedioEdad  = (promedio1 > promedio2 && promedio1 > promedio3)?Math.ceil(document.getElementById("valor4").innerHTML = "El turno de la mañana posee los mayores edades : ") :
    (promedio2 > promedio1 && promedio2 > promedio3)?document.Math.ceil(getElementById("valor4").innerHTML = "El turno de la tarde posee los mayores edades : ") :
    (promedio3 > promedio1 && promedio3 > promedio2)?Math.ceil(document.getElementById("valor4").innerHTML = "El turno de la noche posee los mayores edades  " ):
    alert("ingrese numeros correctos")

    

}
PromedioEdad()


