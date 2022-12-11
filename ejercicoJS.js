
/**MAYOR O MENOR EJE.1 */
const fucEdad=()=>{
  const pedirEdad = parseFloat(prompt("Ingrese su edad"))
  const edad =(pedirEdad >= 18)? alert("Eres mayor de edad"):
  alert("Eres menor de edad")
}

/*fucEdad()*/


/**SUMA,RESTA,DIVISION,MULTIPLICACION EJE.2*/
const Calculo1=()=>{
  const n1 = parseFloat(prompt("Ingrese primer numero"))
  const n2 = parseFloat(prompt("Ingrese segundo numero"))

  let sum = n1 + n2
  return "tu suma es: " + sum

}
const Calculo2=()=>{
  const n1 = parseFloat(prompt("Ingrese primer numero"))
  const n2 = parseFloat(prompt("Ingrese segundo numero"))

  let rest = n1 - n2
  return "tu resta es: " + rest

}
const Calculo3=()=>{
  const n1 = parseFloat(prompt("Ingrese primer numero"))
  const n2 = parseFloat(prompt("Ingrese segundo numero"))

  let multi = n1 * n2
  let divi = n1 / n2
  return "tu multiplicacion es: "+ multi + " y tu division es: " + divi

}

/*alert(Calculo1())
alert(Calculo2())
alert(Calculo3())*/





/**NOTA FINAL EJE.3 */
const NotaFinal=(Nombre,carnet)=>{
  let info =Nombre+carnet
  const nota1 = parseFloat(prompt("Ingresar porcetaje de examen"))
  const nota2 = parseFloat(prompt("Ingresar porcetaje de tareas"))
  const nota3 = parseFloat(prompt("Ingresar porcetaje de asistencias"))
  const nota4 = parseFloat(prompt("Ingresar porcetaje de investigacion"))
  
  let suma2=nota1*0.20+nota2*0.40+nota3*0.10+nota4*0.30
  
  return "Nombre de estudiante y numero de carnet: " + info + " su nota final es de: " + suma2
}

/*alert(NotaFinal("Duvan Catellanos", 15551))*/


/**AUMENTO SALARIAL EJE.4 */

const Aumento=(Nombre)=>{
  let info = Nombre
  const sueldo =parseFloat(prompt("ingrese sueldo de empleado"))
  const categoria = prompt("ingresar tipo de categoria de empleado")

  let calculo =(categoria == "A")? sueldo+(0.15*sueldo):
  (categoria == "B") ? sueldo+(0.30*sueldo):
  (categoria == "C") ? sueldo+(0.10*sueldo):
  (categoria == "D") ? sueldo+(0.20*sueldo):
  alert("ingresa 8una categoria correcta (A,B,C,D)");

  return "El nombre del empleado: " +  info  + "tiene un sueldo total de: " + calculo

}

/*alert(Aumento(" Duvan Gonzalez "))*/

/**NUMERO MAYO EJE.5 */

const Numero=()=>{
  const num1 = parseFloat(prompt("ingrese el primer numero"))
  const num2 = parseFloat(prompt("ingrese el segundo numero"))

  let calculo = (num1 > num2)? "el mayor es el " + num1 + ". PRIMER NUMERO":
  "el mayor es " + num2 + ". SEGUNDO NUMERO";

  return calculo
}

/*alert(Numero())*/

/*FUNCION PARA COMPRA DE AUTO EJE.6 */

const Auto=()=>{
  const carro = parseFloat(prompt("Ingrese numero de vehiculo a elegir(1.FORD FIESTA,2.FORD FOCUS,3.FORD ESCAPE)"))
  const precio = parseFloat(prompt("Ingrese precio de vehiculo"))

  let descuento = (carro == 1) ? precio-(0.05*precio):
  (carro == 2) ? precio-(0.10*precio):
  (carro == 3) ? precio-(0.20*precio):
  alert("No ingreso nigun dato")
  
  let tipoc = (carro == 1)?alert("El carro es un FORD FIESTA y tiene un 5%"):
  (carro == 2)?alert("El carro es un FORD FOCUS y tiene un 10%"):
  (carro == 3)?alert("El carro es un FORD ESCAPE y tiene un 20%"):
  alert("ingrese un numero")

  return "su total a pagar es $" + descuento
  
}

/*alert(Auto())*/

/*FUNCION EDAD DE NACIMIENTO EJE.7 */
/**ingresar primero año,mes y por ultimo dia */

const Edad=()=>{
  const Pedir = new Date(  prompt("Ingrese su fecha de nacimiento"))
  const aniohoy = new Date()
  const hoy = aniohoy.getFullYear() - Pedir.getFullYear()

  return "su edad es " + hoy
}

/*alert(Edad())*/

/**DESCUENTO DE VIAJES EJE.8 */

const Viaje=()=>{
  const cOrigen = prompt("ingrese destino de origen")
  const cDestino = prompt("ingresa tu ciuedad de destino")
  const precio = 55
  

  let descuentoViaje = ( cOrigen == "Palma" && cDestino == "La costa del sol" ) ? precio-(0.05*precio):
  ( cOrigen == "Palma" && cDestino == "Panchimalco" ) ? precio-(0.10*precio):
  ( cOrigen == "Palma" && cDestino == "Puerto el triunfo" ) ? precio-(0.15*precio):
  alert("ingrese un destino de la lista")

  return "costo original de viaje: $ " + precio + " viaje ya con  descuento: $ " + descuentoViaje + " con destino a " + cDestino
}


/*alert(Viaje())*/

