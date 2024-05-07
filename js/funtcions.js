// FORMAS DE IMPRIMIR EN PANTALLA
// alert("hola soy un alert");
// console.log("Hola soy un mensaje de consola");
// document.write("Hola soy la interfaz principal");
// Swal.fire("Star Rail >>>> Genshin Impact!");
// Swal.fire({
//     title: "The Internet?",
//     text: "That thing is still around?",
//     icon: "question"
//   });

//VARIABLES Y TIPO DE DATOS

const pi = 3.14; //decimal 
// var name = "Brian Matheo"; //string
let edad = 19; //entero
let edad_String = "19"; //string
var bool = true; // false booleanos

//Operadores básicos + - / * %
var suma = 5-2;
console.log(suma);
console.log(edad_String);
var one = 10;
var two = 20;
console.log(one+two);
console.log(one-two);
console.log(one*two);
console.log(one/two);
console.log(one%two);

//OPERADORES DE COMPARACION
// < > >= <= <>
// = ASIGNACION
// == COMPARACION 5=="5"
// === COMPARACION 5===5
// OPERADORES LÓGICOS
// AND && OR ||

console.log("Mi nombre es: " + name + " tiene como edad: " + edad);

function load_page(){
    Swal.fire({
        imageUrl: https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg,
        imageAlt: "A tall image",
        showConfirmButton: false,
        timer: 1200
      });
}

function send_info(){
    let name = document.getElementById("name").value;
    let last_name = document.getElementById("last_name").value;
    if(name.length == 0 || last_name.length == 0){
    Swal.fire({
        title: "Campos Vacíos",
        text: "Algunos de los campos se encuentra vacíos",
        icon: "error"
    });
      if(name.length == 0){
        document.getElementById("name").style.border = "2px solid red"
      }
      if(last_name.length == 0){
        document.getElementById("last_name").style.border = "2px solid red"
      }
    }else{
        const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Nombre y Apellidos ingresados correctamente"
      });
        document.getElementById("name").style.border = "2px solid black"
        document.getElementById("last_name").style.border = "2px solid black"
        document.getElementById("print").innerHTML = "<br>" + "<strong>" + name + " " + last_name + "</strong>";
    }
    console.log(name);
}


function send_infopassword(){
    let password = document.getElementById("password").value;
    let confirm_password = document.getElementById("confirm_password").value;
    if(password.length == 0 || confirm_password.length == 0){
    Swal.fire({
        title: "Campos Vacíos",
        text: "Algunos de los campos se encuentra vacío",
        icon: "error"
    });
      if(password.length == 0){
        document.getElementById("password").style.border = "2px solid red"
      }
      if(confirm_password.length == 0){
        document.getElementById("confirm_password").style.border = "2px solid red"
      }
    }else{
        document.getElementById("password").style.border = "2px solid black"
        document.getElementById("confirm_password").style.border = "2px solid black"
        if(password == confirm_password){
            Swal.fire({
                title: "Contraseñas adecuadas",
                text: "Contraseñas ingresadas correctamente",
                icon: "success"
              });
        }else{
            Swal.fire({
                title: "Confirmación de la contraseña Incorrecta",
                text: "Favor ingrese la confirmación adecuada",
                icon: "warning"
              });
        }
    }
    console.log(password);
}

