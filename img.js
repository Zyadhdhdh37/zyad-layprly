let saturate =document.getElementById("saturate")
let contrast =document.getElementById("contrast")
let brightness =document.getElementById("brightness")
let sepia =document.getElementById("sepia")
let grayscale =document.getElementById("grayscale")
let blur =document.getElementById("blur")
let hue = document.getElementById("saturate")
let ubload =document.getElementById("ubload")
let download=document.getElementById("download")
let img=document.getElementById("img")
let reset =document.querySelector(" span")
let imgbox= document.querySelector("img-box")

function resevalue(){

img.style.filter=`none`
saturate.value =`100`

}

window.onload = function(){
download.style.display = `none`;
reset.style.display = 'none';
}
ubload.onchange =function(){

    download.style.display = `block`;
    reset.style.display = 'block';

 let file = new FileReader();
file.readAsDataURL(ubload.file[0]) 
file.onload =function(){
    img.src=file.result;   
       


} 

}
// استدعا كلاس  ال المدهلات 
let filters =document.querySelectorAll("ul li input")
filters.forEach( filter => {  

filter.addEventListener(`input`,function(){

// تشغيل الفلاتر
img.style.filter =`
saturate(${saturate.value}%)
contrast(${contrast.value}%)
brightness(${brightness.value}%)
sepia(${sepia.value}%)
grayscale(${grayscale.value})
`
} )
} )


// download.style.display= `block`;
//     reset.style.display=`block`;
//     imgbox.style.display= `block`;
// let file = new FileReader();

// file.readAsDataURL(ubload.files[0])

// file.onload=function(){
//     img.src =file.result;
 
// }
