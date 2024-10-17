let menulist = document.getElementsByClassName("menu")[0];
let close = document.getElementById("close");
let btn = document.getElementById('tglbtn');
menulist.style.maxHeight = "0px";


btn.addEventListener('click',() => {
    if(menulist.style.maxHeight == "0px"){
        menulist.style.maxHeight = "300px";
        
    }else{
        menulist.style.maxHeight = "0px"
    }

})