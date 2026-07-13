let aff = document.querySelector(".affichage")
let resulta = document.querySelector("#resulta")
let table = [];
let Question = [];
let Reponse = [];
for(let i = 1; i<=10; i++){
        
        
        for(let n = 0; n<=10; n++){
                table.push (`${i}x${n}= ${n*i}`)
                Question.push(`${i}X${n}`)
                Reponse.push(`${n*i}`)
        }
}
let uti = document.querySelector(".rep-a-uti")
let input = document.querySelector("input")
let index = 0
let ancienIndex = 0
console.log(table[1])
let btn = document.querySelector(".btn")
let kv = document.querySelector(".kantite-vie")
let butn = document.querySelector(".butn")
let reg = document.querySelector(".aff-reg")
let règles = document.querySelector(".les-règles")
let peze = document.querySelector(".peze")
let gain = 0
let i = 0
let n = 5
btn.addEventListener("click",
        ()=>{
                i++
                
                règles.style.display = "none";
                peze.style.display = "block"
                reg.style.display = "block";
                kv.innerHTML = n
                if(n === 0){
         uti.innerHTML = `repons la pa bon, repons la se: ${table[ancienIndex]} Ou pedi tout vi ou te genyen yo`      
        aff.innerHTML = "X"
        btn.style.display = "none";
        butn.style.display = "block";             
        }
        console.log(gain)
        if(gain === 5 ){
                
        }
        
                ancienIndex= index
                
                if(n > 0 ){
                btn.innerHTML = "Voyel"
                index = Math.floor(Math.random()*table.length)
                aff.innerHTML = Question[index]
        }
        
        
                if(i !=1 & n > 0){
                        if(gain ===  10){
                             uti.innerHTML = "Ou genyen"
                aff.innerHTML = "Bravo"
                btn.style.display = "none";
                butn.style.display = "block"; 
                input.value = ""  
                                
                        }else if(resulta.value===Reponse[ancienIndex]){
            uti.innerHTML = "repons la bon"
            gain++
            input.value = ""
        }
        // else if(typeof(input.value) === "string"){
        //         uti.innerHTML = "Antre chif selman"
        // }
        else{
                uti.innerHTML = `repons la pa bon, repons la se: ${table[ancienIndex]}`
                 --n
                 input.value = ""
     
                        
        }
        }
        
        
        
        

        
}) 
console.log(n)
 
butn.addEventListener("click",
        ()=>{
                butn.style.display = "none";
                kv.innerHTML = 5
                uti.innerHTML = ""
                n = 5
                i = 1
                aff.innerHTML = Question[index]
                btn.style.display = "block";
                reg.style.display = "block"
                règles.style.display = "none";
                peze.style.display = "block"
        }
)

reg.addEventListener("click", 
        ()=>{
                règles.style.display = "block";
                peze.style.display = "none"
                reg.style.display = "none"
        }
)
