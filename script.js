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


// ejercicio 7

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

// ejercicio 8

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


// ejercicio 9

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
