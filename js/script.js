const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown-menu')

toggleBtn.onclick = function(){
	dropDownMenu.classList.toggle('open')
	const isOpen = dropDownMenu.classList.contains('open')

	toggleBtnIcon.classList = isOpen
	? 'fa-solid fa-xmark'
	: 'fa-solid fa-bars'
	}
var check=document.querySelector(".check");
check.addEventListener('click',idioma1);
function idioma1(){
    let id=check.checked;
    if(id==true){
        location.href="es/index.html";
    }
    else{
        location.href="../index.html";
    }
}
var check2=document.querySelector(".check2");
check2.addEventListener('click',idioma2);
function idioma2(){
    let id2=check2.checked;
    if(id2==true){
        location.href="es/index.html";
    }
    else{
        location.href="../index.html";
    }   
}