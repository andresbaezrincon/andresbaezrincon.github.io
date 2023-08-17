let links = document.querySelectorAll(".links a");
let bodyId = document.querySelectorAll("body").id;

for(let link of links){
    if(link.dataset.active==bodyId){
        link.classList.add("active")
    }
}