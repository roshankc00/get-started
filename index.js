
let bottomContainerEl=document.querySelector('.bottom-container')
l

menuEl.addEventListener('click',()=>{

    navbarEl.classList.toggle('toggle')
})



let textwalaEl=document.querySelector('.textwala')

let list=['web-developer']
let listIndex=0
let charIndex=0
text()
function text(){
    if(charIndex==(list[listIndex].length+1)){
        charIndex=0
        listIndex++
       
    }
    if(listIndex==list.length){
        listIndex=0
        
    }


    setTimeout((e)=>{
        // e.preventdefault()

        textwalaEl.innerText=`${list[listIndex].slice(0,charIndex)}`
        textwalaEl.style.borderRight='3px solid black'
        charIndex++
        text()
    },200)
}
let aboutContent1EL=document.querySelector('.about-content1')
let aboutContent2EL=document.querySelector('.about-content2')
let aboutbtn1=document.querySelector('.edu')
let aboutbtn2=document.querySelector('.job')

// let aboutbtn2=document.querySelector('.2about-btn')
aboutbtn1.addEventListener("click",()=>{
    aboutContent2EL.classList.remove('about-active')
    aboutContent1EL.classList.add('about-active')
    aboutbtn2.classList.remove('btn-danger')
    aboutbtn1.classList.add('btn-danger')
    aboutbtn2.classList.add('btn-primary')

    
})
aboutbtn2.addEventListener("click",()=>{
    aboutContent1EL.classList.remove('about-active')
    aboutContent2EL.classList.add('about-active')
    aboutbtn1.classList.remove('btn-danger')
    aboutbtn1.classList.add('btn-primary')
    aboutbtn2.classList.add('btn-danger')
})

// here is the skills protion 
