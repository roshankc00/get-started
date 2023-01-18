const imageContainerEl =document.querySelector('.image-container')
prevEl=document.querySelector('#prev')
nextEl=document.querySelector('#next')
let x=0
prevEl.addEventListener('click',()=>{
    x=x+45
    updateGallery();
})
nextEl.addEventListener('click',()=>{
    x=x-45
    updateGallery();
})

function updateGallery(){
 imageContainerEl.style.transform=`perspective(1000px) rotateY(${x}deg)`
}
setInterval(()=>{
    x=x-45
    updateGallery();

},3000)


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

// sssssssss

// here is the skills protion 
