<<<<<<< HEAD
const inputbox= document.getElementById("inputbox")
const image= document.getElementById("image")
const imagebox=document.getElementById("imagebox")



function generate(){


 if(inputbox.value.length > 0){
    image.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputbox.value;
  
 }
 else{
    inputbox.classList.add("error")
    setTimeout(() => {
        inputbox.classList.remove("error")
    }, 1000);
 }
}



=======
const inputbox= document.getElementById("inputbox")
const image= document.getElementById("image")
const imagebox=document.getElementById("imagebox")



function generate(){


 if(inputbox.value.length > 0){
    image.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputbox.value;
  
 }
 else{
    inputbox.classList.add("error")
    setTimeout(() => {
        inputbox.classList.remove("error")
    }, 1000);
 }
}



>>>>>>> 239d300493abc996ebeeb76ac070eb5c0dd64ed8
