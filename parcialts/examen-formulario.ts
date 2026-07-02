
interface FormularioContacto {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  edad: number;
  mensaje: string;
}

const formulariosDePrueba: FormularioContacto[] = [
  {
    id: 1,
    nombre: "María García",
    email: "maria.garcia@empresa.com",
    telefono: "011-1234-5678",
    edad: 28,
    mensaje: "Me gustaría recibir información sobre sus productos y servicios disponibles."
  },
  {
    id: 2,
    nombre: "A",
    email: "email invalido",
    telefono: "123",
    edad: 10,
    mensaje: "Hola"
  },
  {
    id: 3,
    nombre: "",
    email: "",
    telefono: "",
    edad: 0,
    mensaje: ""
  }
];


function validarFormulario(form: FormularioContacto): void {
  console.log("-----------------------------------------");
  console.log("Evaluando formulario ID: " + form.id);

  
  let errores: string[] = [];

  
  let nombreTrim = form.nombre.trim();
  if (nombreTrim !== "" && form.nombre.length >= 2 && form.nombre.length <= 50) {
    console.log(" Campo nombre válido");
  } else {
    let errorNombre = "El nombre no puede estar vacio y debe tener entre 2 y 50 caracteres.";
    console.log("X Error en nombre: " + errorNombre);
    errores.push(errorNombre);
  }

  
  let emailTrim = form.email.trim();
  let contadorArrobas = 0;
  for (let i = 0; i < form.email.length; i++) {
    if (form.email[i] === '@') {
      contadorArrobas++;
    }
  }

  if (emailTrim !== "" && contadorArrobas === 1) {
    console.log(" Campo email válido");
  } else {
    let errorEmail = "El email no puede estar vacio y debe contener una sola arroba (@).";
    console.log("X Error en email: " + errorEmail);
    errores.push(errorEmail);
  }


  let telefonoLimpio = "";
  for (let i = 0; i < form.telefono.length; i++) {
    let caracter = form.telefono[i];
    if (caracter !== " " && caracter !== "-") {
      telefonoLimpio += caracter;
    }
  }

  
  let esValidoTelef = true;
  if (telefonoLimpio.length === 0) {
    esValidoTelef = false;
  }
  for (let i = 0; i < telefonoLimpio.length; i++) {
    
    if (telefonoLimpio[i] < '0' || telefonoLimpio[i] > '9') {
      esValidoTelef = false;
    }
  }

  if (telefonoLimpio.length >= 8 && telefonoLimpio.length <= 15 && esValidoTelef) {
    console.log(" Campo telefono válido");
  } else {
    let errorTelef = "El telefono debe tener entre 8 y 15 digitos netos.";
    console.log("X Error en telefono: " + errorTelef);
    errores.push(errorTelef);
  }

  
  if (Number.isInteger(form.edad) && form.edad >= 16 && form.edad <= 99) {
    console.log(" Campo edad válido");
  } else {
    let errorEdad = "La edad debe ser un numero entero entre 16 y 99.";
    console.log("X Error en edad: " + errorEdad);
    errores.push(errorEdad);
  }


  let mensajeTrim = form.mensaje.trim();
  if (mensajeTrim !== "" && form.mensaje.length >= 10) {
    console.log(" Campo mensaje válido");
  } else {
    let errorMensaje = "El mensaje no puede estar vacio y debe tener al menos 10 caracteres.";
    console.log("X Error en mensaje: " + errorMensaje);
    errores.push(errorMensaje);
  }

  
  console.log("");
  if (errores.length === 0) {
    console.log("¡FORMULARIO VÁLIDO! Todos los campos son correctos.");
  } else {
    console.log("FORMULARIO INCOMPLETO. Corrija los siguientes errores:");
    for (let i = 0; i < errores.length; i++) {
      console.log(" - " + errores[i]);
    }
  }
}

console.log("=== INICIANDO EVALUACIÓN DE FORMULARIOS ===");

for (let i = 0; i < formulariosDePrueba.length; i++) {
  validarFormulario(formulariosDePrueba[i]);
}