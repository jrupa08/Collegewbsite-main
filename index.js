var btns=document.getElementsByClassName("button");
var menu=document.getElementById("menu-btn");

for(let i=0;i<btns.length;i++){
    var curr=document.getElementsByClassName("active");
    btns[i].addEventListener("click",function(){
       curr[0].className=curr[0].className.replace("active","");
       this.className+=" active";
    })
}

menu.addEventListener("click", function(){
    var menubar=document.querySelector(".btn");
    menubar.classList.toggle('display');
});
