// Všechny odkazyk a body
let links = document.querySelectorAll ("nav ul li a")
let bodyId = document.querySelector("body")


for (let link of links){

    
// Porovná jednolitvý link a jeho data-active s id body stránky na které se nachází a přidá clasu
    if(link.dataset.active == bodyId.id){
        link.classList.add("active-link")
    }

}
