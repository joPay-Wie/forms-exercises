const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// ejercicio 1

// const $km = $("#km")
// const $miles = $("#miles")


// $km.addEventListener ( "change", () => {
//     $miles.value = $km.value * 0.62
// })

// $miles.addEventListener ( "change", () => {
//     $km.value = $miles.value * 1.61
// })


// ejercicio 2

// let $inputNumberR = $("#numberR");
// let $inputNumberG = $("#numberG");
// let $inputNumberB = $("#numberB");
// let valueR = $inputNumberR.value;
// let valueG = $inputNumberG.value;
// let valueB = $inputNumberB.value;

    // $inputNumberR.addEventListener("change", () => {
    //     $("body").style.backgroundColor = `rgb(${$inputNumberR.value}, ${$inputNumberG.value}, ${$inputNumberB.value})`
    // })

    // $inputNumberG.addEventListener("change", () => {
    //     $("body").style.backgroundColor = `rgb(${$inputNumberR.value}, ${$inputNumberG.value}, ${$inputNumberB.value})`
    // })

    // $inputNumberB.addEventListener("change", () => {
    //     $("body").style.backgroundColor = `rgb(${$inputNumberR.value}, ${$inputNumberG.value}, ${$inputNumberB.value})`
    // })

// ejercicio 3

// const $btn = $("#btn");
// const $item = $("#item");
// const $lista = $("#lista");

// $btn.addEventListener("click", (event) => {
//     if ($item.value !== '') {
//             event.preventDefault()
//            const item = $item.value
//            $lista.innerHTML += `<li> ${item} </li>`
//            $("form").reset()
//        }
// })


// ejercicio 4

// const $button = $("#button")
// const $insertImg = $("#insert-img")
// const $imgContainer = $(".flex")

// $button.addEventListener("click", (e) => {
//     if ($insertImg.value !== '') {
//         e.preventDefault()
//         let url = $insertImg.value
//         $imgContainer.innerHTML += `<img src=${url} class="addedImg" style="max-width: 200px">`
//         $("form").reset()
//         const $$image = $$(".addedImg")
//             for (let i = 0; i < $$image.length; i++) {
//                 $$image[i].addEventListener("click", (e) => {
//                 e.srcElement.remove()
//             })}
//     }
// })


// ejercicio 5

// const $textarea = $("textarea")
// const $btn = $("#submit")
// const charLeft = $("#charLeft")

// $textarea.addEventListener("keyup", (e) =>{
//     charLeft.innerHTML = `${$textarea.value.length}/240 caracteres` 
// })

// $btn.addEventListener("click", (e) => {
//     e.preventDefault()
//     if ($textarea.value.length <= 240 && $textarea.value.length > 0) {
//         $("form").reset()
//         charLeft.innerHTML = "Comentario enviado"
//         $textarea.style.border = "solid 2px green"
//     }
//     else if ($textarea.value.length > 240) {
//         $textarea.style.border = "solid 2px red"
//     }
// })

// ejercicio 6

/* const $inputValor = $("#valor")
let $unidadValor = $("#unidadValor")
let $unidadConvertir = $("#unidadConvertir")
const $btn = $("#btn")
let $resultado = $("#resultado")

const convertir = () => {
    let cuenta = (Number($inputValor.value) * Number($unidadValor.value)) / Number($unidadConvertir.value)
    return cuenta
}

$inputValor.addEventListener("change", () => {
    $resultado.innerHTML = `El resultado es: ${convertir()}`
})

$unidadValor.addEventListener("change", () => {
    $resultado.innerHTML = `El resultado es: ${convertir()}`
})

$unidadConvertir.addEventListener("change", () => {
    $resultado.innerHTML = `El resultado es: ${convertir()}`
})

$btn.addEventListener("click", (e) => {
    e.preventDefault()
    let valor1 = $unidadValor.value
    let valor2 = $unidadConvertir.value
    $unidadValor.value = valor2
    $unidadConvertir.value = valor1
    $resultado.innerHTML = `El resultado es: ${convertir()}`
}) */


// ejercicio 7

// const $url = $("#url")
// const $title = $("#title")
// const $description = $("#description")
// const $externUrl = $("#externUrl")
// const $checkbox = $("#checkbox")

// const arrInputs = [$url, $title, $description, $externUrl, $checkbox]

// const carding = () => {
//     if ($url.value != '') {
//         $("img").src = $url.value
//     }
//     if ($title.value != '') {
//         $("h3").innerText = $title.value
//     }
//     if ($description != '') {
//         $("p").innerText = $description.value
//     }
//     if ($checkbox.checked) {
//         $("#externUrl").removeAttribute("disabled")
//         $("a").classList.remove("displayNone")
//         if ($externUrl != '') {
//             $("a").href = $externUrl.value
//         }
//     }

// }

// for (const input of arrInputs) {
//     input.addEventListener("change", () => {
//         carding()
//     })
// }


// ejercicio 8

// const $select = $("select")

// $select.addEventListener("change", () => {
//     if ($select.value == 0) {
//         for (const div of $$("div")) {
//             div.classList.remove("displayNone")
//         }
//     }
    
//     if ($select.value == 1) {
//         $(".gatitos").classList.remove("displayNone")
//         if (!$(".perritos").classList.contains("displayNone")) {
//             $(".perritos").classList.add("displayNone")
//         }
//         if (!$(".morfi").classList.contains("displayNone")) {
//             $(".morfi").classList.add("displayNone")
//         }
//     }
    
//     if ($select.value == 2) {
//         $(".perritos").classList.remove("displayNone")
//         if (!$(".gatitos").classList.contains("displayNone")) {
//             $(".gatitos").classList.add("displayNone")
//         }
//         if (!$(".morfi").classList.contains("displayNone")) {
//             $(".morfi").classList.add("displayNone")
//         }
//     }
    
//     if ($select.value == 3) {
//         $(".morfi").classList.remove("displayNone")
//         if (!$(".perritos").classList.contains("displayNone")) {
//             $(".perritos").classList.add("displayNone")
//         }
//         if (!$(".gatitos").classList.contains("displayNone")) {
//             $(".gatitos").classList.add("displayNone")
//         }
//     }
// })

// ejercicio 9

// variables generales
// const $word = $("#word") // id del input
// const $$images = $$(".image") // array de imágenes
// const resultados = $("#resultados") // para calcular cantidad de resultados

// let arrayOfAltSplitted = []


// función para romper el string del alt y retornar los arrays necesarios
// const surfingAlt = () => { 
//     for (const image of $$images) {
//     let altSplitted = (image.alt.toLowerCase()).split(' ')
//     arrayOfAltSplitted.push(altSplitted)
//     }
//     return arrayOfAltSplitted
// }


// función para sumar las imágenes encontradas
// const addImages = () => {
//     let addition = 0
//     for (let image of $$images) {
//         if (image.classList.contains("displayFlex")) {
//             addition = addition + 1
//         }
//     }
//     return resultados.innerHTML = `${addition} imágenes obtenidas`
// }

// ejecución de la función para tener el array armado en base a imágenes
// surfingAlt()

// eventos

// $word.addEventListener("input", () => {

//     if ($word.value === '') {
//         $$images.forEach((image) => {
//             image.classList.add("displayFlex")
//             image.classList.remove("displayNone")
//         })
//     }
            
//     if ($word.value !== '') {
//         $$images.forEach((image) => {
//             image.classList.remove("displayFlex")
//             image.classList.add("displayNone")
//         })
//     }    
    
//     for (let h = 0; h < arrayOfAltSplitted.length; h++) { 
//         let splittedString = arrayOfAltSplitted[h]

//         for ( let i = 0; i < splittedString.length; i++ ) {
//             let eachWord = splittedString[i]

//                 for ( let j = 0; j < eachWord.length; j++ ) {

//                     if (eachWord.includes($word.value.toLowerCase())) {
//                         // console.log(`${arrayOfAltSplitted[h]} incluye ${word.value}`)
//                         $$images[h].classList.add("displayFlex")
//                         $$images[h].classList.remove("displayNone")
//                         addImages()
//                     }
//                 }
            
//         }
//     }

// })


// ejercicio 10

// const $$images = $$(".image")

// const $input = $$("input")

// for (const input of $input) {
//     input.addEventListener("click", () => {
//         if ($("#animales").checked) {
//             for (const animal of $$(".animales")) {
//                 animal.style.display = "block"
//             }
//         }
//         else {
//             for (const animal of $$(".animales")) {
//                 animal.style.display = "none"
//             }
//         }
//         if ($("#comida").checked) {
//             for (const comidita of $$(".comida")) {
//                 comidita.style.display = "block"
//             }
//         }
//         else {
//             for (const comidita of $$(".comida")) {
//                 comidita.style.display = "none"
//             }
//         }
//         if ($("#paisajes").checked) {
//             for (const paisajito of $$(".paisajes")) {
//                 paisajito.style.display = "block"
//             }
//         }
//         else {
//             for (const paisajito of $$(".paisajes")) {
//                 paisajito.style.display = "none"
//             }
//         }
//     })
// }

// segunda opción, no funciona

// const $comida = $("#comida")
// const $paisajes = $("#paisajes")
// const $animales = $("#animales")
// const $perrito = $("#perrito")


// for (const input of $input) {
//     input.addEventListener("click", () => {
//         for (const imagen of $$images) {
//             if ($animales.value === imagen.getAttribute("data-categoria") &&
//             $animales.checked) {
//                 imagen.style.display = "block"
//             }
//             else {
//                 imagen.style.display = "none"
//             }
//             if ($comida.value === imagen.getAttribute("data-categoria") &&
//             $comida.checked) {
//                 imagen.style.display = "block"
//             }
//             else {
//                 imagen.style.display = "none"
//             }
//             if ($paisajes.value === imagen.getAttribute("data-categoria") &&
//             $paisajes.checked) {
//                 imagen.style.display = "block"
//             }
//             else {
//                 imagen.style.display = "none"
//             }
//         }
        
//     })
// }




// ejercicio de tabla en clase

// // data
// const players = [
//     ["Rojo", "Faker", "Mid", 21, "Korea"],
//     ["Azul", "Doublelift", "ADC", 23, "Korea"],
//     ["Azul", "Smeb", "Top", 22, "Korea"],
//     ["Rojo", "Deft", "ADC", 21, "Korea"],
//     ["Rojo", "Perkz", "Top", 25, "Europa"],
//     ["Rojo", "Armani", "Support", 21, "Korea"],
//     ["Azul", "Mata", "Support", 18, "Korea"],
//     ["Rojo", "Quintero", "Mid", 21, "Korea"],
//     ["Azul", "Mantarraya", "Top", 25, "LAS"],
//     ["Azul", "xPeke", "Mid", 27, "Europa"]
// ]

// // variables
// const $table = $("#table")
// const $btn = $("#btn")
// const $select = $("#select")

// // funciones

// const cleanTable = () => {
//     $table.innerHTML = ""
// }

// const filterTeams = (selection) => {
//     let selectedTeam = []

//     if (selection === "Todos") {
//         selectedTeam = players 
//     }

//     for (const player of players) {

//         if (player[0] === selection) {
//             selectedTeam.push(player)
//         }

//     }
//     return selectedTeam
// }

// const generateTable = () => {
//     const team = filterTeams($select.value)
//     // antes de generarse la tabla, que se limpie
//     cleanTable()
//     for (const player of team) {
//         const tr = document.createElement("tr") // CREA EL ELEMENTO EN EL DOCUMENTO (NO INDICA AÚN DONDE)
//         for (const element of player) {
//             tr.innerHTML += `<td> ${element} </td>`
//         }
//         $table.appendChild(tr) // INDICA DÓNDE SE AGREGA EL ELEMENTO
//     }
    
// }

// generateTable()

// // events

// $btn.addEventListener("click", generateTable)





// ejercicio encuesta satisfacción

// const $solucion = $$(".solucion")
// const $recepcion = $$(".recepcion")
// const $asesoramiento = $$(".asesoramiento")
// const $recomendacion = $$(".recomendacion")
// const $btn = $("#btn")

// const guardarInfo = (array) =>{
//     for(const respuesta of array){
//         if(respuesta.checked){
//             return Number(respuesta.value)
//         }
//     }
// }

// $btn.addEventListener("click", (e) => {
//     e.preventDefault()
//     let suma = guardarInfo($solucion) + guardarInfo($recepcion) + guardarInfo($asesoramiento) + guardarInfo($recomendacion)
//     if(suma <= 4){
//         alert (`Sumamente insatisfecho`)
//     } 
//     if(suma >= 5 && suma <= 6 ){
//         alert (`Insatisfecho`)
//     }
//     if(suma > 6 && suma <= 8 ){
//         alert (`Conforme`)
//     }
//     if(suma > 8 && suma <= 10 ){
//         alert (`Satisfecho`)
//     }
//     if(suma >= 11 && suma === 12  ){
//         alert (`Muy satisfecho`)
//     }
//     })




// ejercicio tarjeta

// variables

// const $numero = $("#numero")
// const $tarjeta = $("#tarjeta")
// const $nombre = $("#nombre")
// const $ccv = $("#ccv")
// const $errorI = $(".errorI")
// const $errorII = $(".errorII")
// const $form = $("form")

// let numeroTarjeta

// // regex patterns

// const namePattern = new RegExp("^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$")
// const numberPatternVisa = new RegExp('^[0-9]{3}$')
// const numberPatternMasterCard = new RegExp('^[0-9]{4}$')

// let validateName, validateNumber
// const validateFields = () => {
//     validateName = namePattern.test($nombre.value)
//     if ($tarjeta.value === "2") validateNumber = numberPatternMasterCard.test($ccv.value)
//     if ($tarjeta.value === "1") validateNumber = numberPatternVisa.test($ccv.value)
// }


// // events

// $numero.addEventListener("blur", () =>{
//     if($numero.value.length !== 16){
//         $numero.style.background = "red"
//         $errorI.innerHTML = "Error. La tarjeta debe contener 16 caracteres"
//         $form.reset()
//     } else {
//         $numero.style.background = ""
//         $errorI.innerHTML = ""
//         numeroTarjeta = $numero.value
//     }
// });


// $numero.addEventListener("change", () => {
//         $errorII.innerHTML = ""
//         if($numero.value.charAt(0) === "5"){
//             $tarjeta.value = "2"
//             $ccv.removeAttribute("disabled")
//         }
//         else if($numero.value.charAt(0) === "4" || $numero.value.charAt(0) === "3"){
//             $tarjeta.value = "1"
//             $ccv.removeAttribute("disabled")
//         } else {
//             $errorII.innerHTML = "el número ingresado es erróneo"
//         }
// })

// $nombre.addEventListener("change", () => {
//     validateFields()
//     if (!validateName) {
//         $nombre.style.background = "red"

//     } else {
//         $nombre.style.background = ""
//     }
// })

// $ccv.addEventListener("change", () => {
//     validateFields()
//     if (!validateNumber) {
//         $ccv.style.background = "red"
//     } else {
//         $ccv.style.background = ""
//     }
// })



// ejercicio registro

// variables
const $nombre = $("#nombre")
const $apellido = $("#apellido") 
const $dni = $("#dni")
const $email = $("#email")
const $password = $("#password")
const $repeatPassword = $("#repeatPassword")
const $terms = $("#terms")
const $btn = $("#btn")
let $errorNombre = $("#errorNombre")
let $errorApellido = $("#errorApellido")
let $errorDni = $("#errorDni")
let $errorEmail = $("#errorEmail")
let $errorPassword = $("#errorPassword")
let $errorRepeatPassword = $("#errorRepeatPassword")
let $errorTerms = $("#errorTerms")


// funciones de validación (regex patterns)
const esNombreValido = (nombre) => {
    const regex = /\b([a-zA-ZÀ-ÿ][-,a-z.']*)/
    let booleanoNombre = regex.test(nombre)
    if (booleanoNombre) {
        $errorNombre.innerHTML = ""
        return true
    }
    else {
        $errorNombre.innerHTML = "El campo nombre solo puede contener texto"
        return false
    }
}


const esApellidoValido = (apellido) => {
    const regex = /\b([a-zA-ZÀ-ÿ][-,a-z.']*)/
    let booleanoApellido = regex.test(apellido)
    if (booleanoApellido) {
        $errorApellido.innerHTML = ""
        return true
    }
    else {
        $errorApellido.innerHTML = "El campo apellido solo puede contener texto"
        return false
    }
}

const esDniValido = (dni) => {
    const regex = /^[0-9]{1,8}$/
    if (regex.test(dni)){
        $errorDni.innerHTML = ""
        return true
    }
    else {
        $errorDni.innerHTML = "El DNI está mal, idiota"
        return false
    }}

const esEmailValido = (email) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (regex.test(email.toLowerCase())) {
        $errorEmail.innerHTML = ""
        return true
    }
    else {
        $errorEmail.innerHTML = "El EMAIL está mal, idiota"
        return false
    }}



const esPasswordValida = (password) => {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
    if (regex.test(password)) {
        $errorPassword.innerHTML = ""
        return true
    }
    else {
        $errorPassword.innerHTML = "Poné una password buena"
        return false
    }
}

const repeatPasswordOk = () => {
    if ($repeatPassword.value === $password.value) {
        $errorRepeatPassword.innerHTML = ''
        return true
    }
    else {
        $errorRepeatPassword.innerHTML = 'Las password no coinciden, gilipollas'
        return false
    }
}

const aceptaTerminos = () => {
    if ($terms.checked) {
        $errorTerms.innerHTML = ''
        return true
    }
    else {
        $errorTerms.innerHTML = 'ACEPTÁ LOS TÉRMINOS, LOKOH'
        return false
    }
}


// eventos

$btn.addEventListener("click", (e) => {
    e.preventDefault()
    esNombreValido($nombre.value)
    esApellidoValido($apellido.value) 
    esDniValido($dni.value) 
    esEmailValido($email.value) 
    esPasswordValida($password.value) 
    repeatPasswordOk($repeatPassword.value) 
    aceptaTerminos()
    if (esNombreValido($nombre.value) && esApellidoValido($apellido.value) && esDniValido($dni.value) && esEmailValido($email.value) && esPasswordValida($password.value) && repeatPasswordOk($repeatPassword.value) && aceptaTerminos()) {
        alert('Te registraste bien. Costó, eh, salame')
        $("form").reset()}
    else {
        alert('Cualquier cosa, chicas. Siga participando')
    }
})






