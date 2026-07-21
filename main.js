
// Les differents elements a utiliser depuis la DOM
//  Leur selection

let aff = document.querySelector(".affichage")
let resulta = document.querySelector("#resulta")
let uti = document.querySelector(".rep-a-uti")
let input = document.querySelector("input")
let btn = document.querySelector(".btn")
let kv = document.querySelector(".kantite-vie")
let butn = document.querySelector(".butn")
let reg = document.querySelector(".aff-reg")
let règles = document.querySelector(".les-règles")
let peze = document.querySelector(".peze")
let temp = document.querySelector(".temps")
let tempsE = document.querySelector(".temps span")
let gainK = document.querySelector(".gain-kan")
let corpDuSite = document.querySelector("main")


//  La création du page d'acceuil
// Création de la message de salutation

let preAff = document.createElement("div")
corpDuSite.appendChild(preAff)
let div = document.createElement("div")
let h2 = document.createElement("h2")
h2.textContent = "Byenvini"
div.appendChild(h2)
  
// Création du petit texte d'indication

preAff.appendChild(div)
div.style.display = "flex";
div.style.alignItems = "center";
div.style.flexDirection = "column";
let h3 = document.createElement("h3")
h3.textContent = "Pou komanse chwazi nivo ou vle a:"
div.appendChild(h3)
h3.style.marginBottom = "10px"

//  Création des differentes buttons

let buttonF = document.createElement("button")
let buttonM = document.createElement("button")
let buttonD = document.createElement("button")

// L'ecriture à l'intérieure des bouttons

divNivo = document.createElement("div")
preAff.appendChild(divNivo)
divNivo.appendChild(buttonF)
divNivo.appendChild(buttonM)
divNivo.appendChild(buttonD)
divNivo.style.display = "flex"
divNivo.style.justifyContent = "center"
divNivo.style.gap = "10px"
let pFasil = document.createElement("h3") 
let pMoyen = document.createElement("h3")
let PDifisil = document.createElement("h3")
pFasil.textContent = "Fasil"
pMoyen.textContent = "Nòmal"
PDifisil.textContent = "Difisil"
buttonF.appendChild(pFasil)
buttonM.appendChild(pMoyen)
buttonD.appendChild(PDifisil)


// Le design des bouttons

buttonF.classList.add("buttonF")
buttonM.classList.add("buttonM")
buttonD.classList.add("buttonD")
preAff.style.display = "flex"
preAff.style.flexDirection = "column";
preAff.style.alignItems = "center";
retour = document.querySelector(".jeux")
ret = document.querySelector(".retour")
div = document.createElement("div")
retour.append(div)
div.append(butn)
div.append(btn)
div.append(ret)
div.style.display = "flex"
div.style.alignItems = "center"
div.style.justifyContent = "center"

let buttonT = document.querySelectorAll(".buttonD,.buttonF,.buttonM")
buttonT.forEach((Element) => {
        Element.style.borderRadius = "5px"
        Element.style.width = "90px"
        Element.style.height = "40px"
        Element.style.border = "2px solid brown"



})



// La création des différentes éléments à utiliser


let tAff = 0
let f = 0
let d = 0
let m = 0
let ancienIndex = 0
let index = 0
let tempsInitial = 0
let gain = 0
let n = 5
let i = 0
let interval = ""
let listeQuestion = [];
let Question = [];
let Reponse = [];

//  Création des cliques des bouttons

buttonF.addEventListener("click",facile)

buttonM.addEventListener("click", moyen)

buttonD.addEventListener("click", Difisil)

btn.addEventListener("click",question)

butn.addEventListener("click",verifyer)

ret.addEventListener("click",retourMenu)

       
//  La fonction de la prémière niveau
 
function facile (){
                    preAff.style.display = "none"
                let jeux = document.querySelector(".jeux")
                jeux.style.display = "block"
                jeux.style.display = "flex"
                jeux.style.flexDirection = "column"
                peze.style.display = "block"
                reg.style.display = "block"
                  listeQuestion = [];
                 Question = [];
                 Reponse = [];
                for (let i = 1; i <= 10; i++) {


                for (let n = 0; n <= 10; n++) {
               listeQuestion.push(`${i}x${n}= ${n * i}`)
                Question.push(`${i}X${n}`)
                Reponse.push(`${n * i}`)
                tempsInitial = 20
                 
                
        }
        }
}

// La fonction de la deuxième niveau

function moyen (){
            preAff.style.display = "none"
                let jeux = document.querySelector(".jeux")
                jeux.style.display = "block"
                jeux.style.display = "flex"
                jeux.style.flexDirection = "column"
                peze.style.display = "block"
                reg.style.display = "block"
                 listeQuestion = [];
                 Question = [];
                 Reponse = [];
                for (let i = 1; i <= 30; i++) {

                for (let n = 0; n <= 10; n++) {
                        for (let s = 0; s<= 10; s++){
               listeQuestion.push(`${i}+${n}x${s}= ${i+n*s}`)
               listeQuestion.push(`${s}+${i}x${n}= ${s+i*n}`)
                Question.push(`${i}+${n}x${s}`)
                Question.push(`${s}+${i}x${n}`)
                Reponse.push(`${i+n*s}`)
                Reponse.push(`${s+i*n}`)
                tempsInitial = 20
               
                 
        }      
        }
        }
}

//  La fonction de la troisième niveau

function Difisil (){

        listeQuestion = [];
                 Question = [];
                 Reponse = [];
                for (let i = 1; i <= 10; i++) {
                        for(let q = 1; q <= 10; q++){
                        for (let t = 1; t <= 10; t++){
                for (let n = 0; n <= 10; n++) {
                        for (let s = 0; s<= 30; s++){
               listeQuestion.push(`${i}x${n}+${s}-${t}/${q}= ${Math.floor(i*n+s-t/q)}`)
                Question.push(`${i}x${n}+${s}-${t}/${q}`)
                Reponse.push(`${Math.floor(i*n+s-t/q)}`)
                tempsInitial = 30
                tempsE.innerHTML = `${tempsInitial}s`
                 
        }      
        }
        }
        }
        }
                     preAff.style.display = "none"
               let jeux = document.querySelector(".jeux")
                jeux.style.display = "block"
                jeux.style.display = "flex"
                jeux.style.flexDirection = "column"
                peze.style.display = "block"
                reg.style.display = "block"
                 
}

// La fonction des questions

function question (){
        kv.innerHTML = n
        gainK.innerHTML = `${gain} fwa`
               
                i++
                
                reg.style.display = "block"
                règles.style.display = "none";
                peze.style.display = "block"
                btn.style.display = "none"
                butn.style.display = "block"

                
                let temps = tempsInitial
                
                let termine = false
                interval = setInterval(() => {
                tempsE.innerHTML =  `${temps--}s`
                
                if (temps <= -1){
                                clearInterval(interval)                                       
                                termine = true
                                tempsE.innerHTML = `tan an fini`
                                aff.innerHTML = Reponse[index]
                                temp.style.width = "170px";
                                tempsE.style.color = "black"
                                btn.style.display = "block"
                                butn.style.display = "none"
                                verifye()
                                
                        }
                       
                        
                }, 1000);

                let tan = 0
                tan = setInterval(()=>
                {
                        tAff++
                        if(tAff === 1){
                                clearInterval(tan)
                                temp.style.width = "120px"
                                tAff = 0

                        }
                        
                },1000)
                if (i >= 1 & n > 0){
                      btn.innerHTML = "Kontinye"
                        
                }

                function verifye (){
                        console.log(n)
                if(termine === true & n >1){
                                        uti.innerHTML = `tan an fini, repons la se: ${listeQuestion[index]}`
                                        input.value = ""
                                        n--
                                        kv.innerHTML = n
                                        
                }else if(termine === true & n === 1){
                        uti.innerHTML = `tan an fini, e ou pedi tout vi ou yo, repons la se: ${listeQuestion[index]}`
                                        input.value = ""
                                        n--
                                        btn.innerHTML = "Rekomanse"
                                        btn.style.display = "block"
                                        butn.style.display = "none"
                                        kv.innerHTML = n
                                        n = 5
                                        

                }
                }

        index = Math.floor(Math.random() * listeQuestion.length)
                              aff.innerHTML = Question[index]
}

//  La fonction de vérification

function verifyer (){
        gainK.innerHTML = `${gain} fwa`
        kv.innerHTML = n
                
        
                reg.style.display = "block"
                règles.style.display = "none";
                peze.style.display = "block"
                btn.style.display = "block"
                butn.style.display = "none"
        
                
                                console.log(n)        
                
                        
                        

                        
                        clearInterval(interval)
                        if (gain === 10) {
                                        uti.innerHTML = "Ou genyen"
                                        aff.innerHTML = "Bravo"
                                        input.value = ""
                                        clearInterval(interval)
                        }
                       

                
                
                if (n > 0){
                        if (input.value === Reponse[index]) {
                        
                                        console.log(`valer de index dedans ${input.value}=${Reponse[index]}`)
                                           uti.innerHTML = "repons la bon"
                                           gain++
                                           input.value = ""
                                           console.log(i)


                                           aff.innerHTML = Reponse[index]
                                        
                                //    }
                                //     else if(typeof(input.value) === "string"){
                                //       uti.innerHTML = "Antre chif selman"
                                    }
                                   else if (input.value != Reponse[index]) {
                                        console.log(`valer de index dedans ${input.value}=${Reponse[index]}`)
                                           uti.innerHTML = `repons la pa bon, repons la se: ${listeQuestion[index]}`
                                           --n
                                        input.value = ""
                                           aff.innerHTML = Reponse[index]

                                        
                                   }}
                                   gainK.innerHTML = `${gain} fwa`

                                   if (gain === 10) {
                                        uti.innerHTML = "Ou genyen"
                                        aff.innerHTML = "Bravo"
                                        input.value = ""
                                        clearInterval(interval)
                                         btn.style.display = "block"
                                        butn.style.display = "none"
                                        btn.innerHTML = "Rekomanse"
                                        kv.innerHTML = n
                                        n = 5
                                        gain = 0
                                }


                                
                                   if (n === 0) {
                                        uti.innerHTML = `repons la pa bon, repons la se: ${listeQuestion[index]} Ou pedi tout vi ou te genyen yo`
                                        aff.innerHTML = "X"
                                        clearInterval(interval)
                                        btn.style.display = "block"
                                        butn.style.display = "none"
                                        btn.innerHTML = "Rekomanse"
                                        kv.innerHTML = n
                                        n = 5

                }
                                    
                      
                                
}

//  La fonction de retour au menu

function retourMenu (){
                if (i >= 1){
                        btn.innerHTML = "Rekomanse"
                }
                if(n === 0){
                gain = 0
                n = 5
                i = 0
                index = 0
                kv.innerHTML = n
                uti.innerHTML = ""
                }
                if(gain === 10){
                gain = 0
                n = 5
                i = 0
                kv.innerHTML = n
                uti.innerHTML = ""
                index = 0
                }
                gain = 0
                n = 5
                i = 0
                clearInterval(interval)
                tempsE.innerHTML = `${20}s`
                preAff.style.display = "block"
                let jeux = document.querySelector(".jeux")
                jeux.style.display = "none"
                peze.style.display = "none"
                reg.style.display = "none"
                butn.style.display = "none"
                btn.style.display = "block"
                aff.innerHTML = "X"
                uti.innerHTML = ""
                kv.innerHTML = n
                listeQuestion = []
                Reponse = []
                Question = []

}

// La fonction des règles

reg.addEventListener("click",
        () => {
                règles.style.display = "block";
                peze.style.display = "none"
                reg.style.display = "none"
        })
