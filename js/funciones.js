function sumar(){
    //alert('programando...');
    console.log("programando...")
    //window.alert('Hola!!!');
    var num1 = window.prompt("Dame un numero?")
    console.log("El numero es: "+num1)
    let num2;

    num2 = parseInt(prompt("Dame elsegundo numero?"))
    
    num1 = parseInt(num1)
    let res = num1+num2
    alert("El resultado es:"+res)
}